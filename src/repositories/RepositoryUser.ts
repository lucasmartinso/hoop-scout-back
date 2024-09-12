import { getRepository } from "typeorm";
import { Users } from "../entity/Usuario";
import { QueryResult } from "pg";
import connection from "../database/postgres";

export async function getUserById(id): Promise<Users> {
    const { rows: users }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "USERS"
        WHERE id = $1
    `,[id]);

    return users;
}

export async function existEmail(email: string) {
    const { rows: users } = await connection.query(`
        SELECT * FROM "USERS"
        WHERE email = $1
    `,[email]); 
    
    return users;
}