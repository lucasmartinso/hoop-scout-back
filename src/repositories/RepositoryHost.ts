import { Users } from "../entity/Usuario";
import { QueryResult } from "pg";
import connection from "../database/postgres";
import { Hospedagem } from "../entity/Hospedagem";
import { petService } from "../types/petsServiceType";

export async function postSchedule(hostInfo: Omit<Hospedagem, 'id' | 'status'>): Promise<void> {
   await connection.query(`
        INSERT INTO "SERVICES"
        ("beginDate", "finishDate", price, comment, "createdAt")
        VALUES ($1, $2, $3, $4, $5)
    `,[hostInfo.beginDate, hostInfo.finishDate, hostInfo.price, hostInfo.comment, hostInfo.createdAt]);
}

export async function postPetsSchedule(petsServices: Omit<petService, 'id'>): Promise<void> {
    await connection.query(`
        INSERT INTO "PETSSERVICE"
        ("petId", "serviceId")
        VALUES ($1, $2)
    `,[petsServices.petId, petsServices.serviceId]);
}

export async function getScheduleId(): Promise<Hospedagem[]> {
    const { rows: schedule }: QueryResult<Hospedagem> = await connection.query(`
        SELECT * FROM "SERVICES"
        ORDER BY id DESC
        LIMIT 1;
    `,);

    return schedule;
}

export async function getHistoric(): Promise<Hospedagem[]> {
    const { rows: schedule }: QueryResult<Hospedagem> = await connection.query(`
        SELECT json_build_object(
            'id', s.id,
            'user', u.name,
            'beginDate', s."beginDate", 
            'finishDate', s."finishDate", 
            'price', s.price, 
            'status', s.status, 
            'comment', s.comment,
            'createdAt', s."createdAt",
            'pets', json_agg(json_build_object(
                'id', p.id, 
                'name', p.name,
                'breed', p.breed,
                'type', p.type,
                'sex', p.sex, 
                'comment', p.comment
            )) 
        )
        FROM "SERVICES" s
        JOIN "PETSSERVICE" ps ON ps."serviceId"=s.id
        JOIN "PETS" p ON p.id = ps."petId"
        JOIN "USERS" u ON u.id = p."userId"
        GROUP BY s.id, u.name
        ORDER BY s.id DESC
    `,);

    return schedule.map(object => object.json_build_object);
}


