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

export async function postPetsSchedule(petId: number, serviceId: number): Promise<void> {
    await connection.query(`
        INSERT INTO "PETSSERVICES"
        ("petId", "serviceId")
        VALUES ($1, $2)
    `,[petId, serviceId]);
}

export async function getScheduleId(): Promise<petService[]> {
    const { rows: schedule }: QueryResult<petService> = await connection.query(`
        SELECT * FROM SERVICES
        ORDER BY id DESC
        LIMIT 1;
    `,);

    return schedule;
}


