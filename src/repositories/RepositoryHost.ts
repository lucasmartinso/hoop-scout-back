import { QueryResult } from "pg";
import connection from "../database/postgres";
import { Hospedagem } from "../entity/Hospedagem";
import { petService } from "../types/petsServiceType";
import { Users } from "../entity/Usuario";

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

export async function getLastSchedule(): Promise<Hospedagem[]> {
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

export async function updateSchedule(id: number, type: string): Promise<void> { 
    await connection.query(`
        UPDATE "SERVICES" 
        SET status = $2
        WHERE id = $1
    `,[id,type]);
}

export async function getScheduleById(id: number): Promise<Hospedagem[]> {
    const { rows: schedule } = await connection.query(`
        SELECT * FROM "SERVICES" 
        WHERE id = $1     
    `,[id]);

    return schedule;
}

export async function updateAllSchedule(id: number, hostInfo: Omit<Hospedagem, 'id' | 'status'>): Promise<void> { 
    await connection.query(`
        UPDATE "SERVICES" 
        SET "beginDate" = $2, "finishDate" = $3, price = $4, comment = $5, status = $6
        WHERE id = $1
    `,[id, hostInfo.beginDate, hostInfo.finishDate, hostInfo.price, hostInfo.comment ,null]);
}

export async function getListUsers(): Promise<Users[]> {
    const { rows: users }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "USERS"    
    `)

    return users;
}

