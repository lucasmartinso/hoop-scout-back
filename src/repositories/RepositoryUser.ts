import { getRepository } from "typeorm";
import { Users } from "../entity/Usuario";
import { QueryResult } from "pg";
import connection from "../database/postgres";

export async function getUserById(id: number): Promise<Users[]> {
    const { rows: users }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "USERS"
        WHERE id = $1
    `,[id]);

    return users;
}

export async function existEmail(email: string): Promise<Users[]> {
    const { rows: users }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "USERS"
        WHERE email = $1
    `,[email]); 
    
    return users;
}

export async function existNumber(number: string): Promise<Users[]> {
    const { rows: users }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "USERS"
        WHERE number = $1
    `,[number]); 
    
    return users;
}

export async function createUser(user: Omit<Users,'id'>): Promise<void> {
    await connection.query(`
        INSERT INTO "USERS"
        (email, name, number, password, "createdAt")
        VALUES ($1, $2, $3, $4, $5)
    `,[user.email, user.name, user.number, user.password, user.createdAt]);     
}