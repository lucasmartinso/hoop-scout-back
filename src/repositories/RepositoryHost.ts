import { Users } from "../entity/Usuario";
import { QueryResult } from "pg";
import connection from "../database/postgres";
import { Hospedagem } from "../entity/Hospedagem";

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

