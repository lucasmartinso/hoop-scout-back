import { getRepository } from "typeorm";
import { Users } from "../entity/Usuario";
import { QueryResult } from "pg";
import connection from "../database/postgres";

export async function getUserInfo(id): Promise<Users> {
    const { rows: users }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "USERS"
        WHERE id = $1
    `,[id])

    return users;
}

export async function postUser(user) {
    await connection.query(`
        INSERT * FROM "USERS"
    `)

}