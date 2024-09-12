import { getRepository } from "typeorm";
import { Users } from "../entity/Usuario";
import { QueryResult } from "pg";
import connection from "../database/postgres";

export async function getAllUsers(): Promise<Users[]> {
    const { rows: users }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "USERS"
    `)

    return users;
}

export async function postUser(user) {
    await connection.query(`
        INSERT * FROM "USERS"
    `)

}