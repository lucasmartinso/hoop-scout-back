import { Users } from "../entity/Usuario";
import { QueryResult } from "pg";
import connection from "../database/postgres";
import { Hospedagem } from "../entity/Hospedagem";
import { petService } from "../types/petsServiceType";

export async function postSchedule(hostInfo: Omit<Hospedagem, 'id' | 'value' | 'finishDate'>): Promise<void> {
   await connection.query(`
        INSERT INTO "SERVICES"
        ("beginDate", status, price, comment, "createdAt")
        VALUES ($1, $2, $3, $4, $5)
    `,[hostInfo.beginDate, false, hostInfo.price, hostInfo.comment, hostInfo.createdAt]);
}

export async function postPetsSchedule(petId: number, serviceId: number): Promise<void> {
    await connection.query(`
        INSERT INTO "PETSSERVICES"
        ("petId", "serviceId")
        VALUES ($1, $2)
    `,[petId, serviceId]);
}

export async function getScheduleId(data: Date): Promise<petService[]> {
    const { rows: schedule }: QueryResult<petService> = await connection.query(`
        SELECT * FROM "SERVICES"
        WHERE "beginDate" = $1
    `,[data]);

    return schedule;
}

