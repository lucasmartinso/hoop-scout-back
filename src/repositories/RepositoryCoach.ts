import { Athlete } from "../entity/Athlete";
import { QueryResult } from "pg";
import { Users } from "../entity/User";
import connection from "../database/postgres";

export async function getAllAthletes(): Promise<Users[]> {
    const { rows: athletes }: QueryResult<Users> = await connection.query(`
        SELECT *, COALESCE(a."userId", u.id) AS "userId"
        FROM "User" u    
        LEFT JOIN "Athlete" a ON a."userId" = u.id 
        WHERE role = 'athlete'
    `);
    
    return athletes;
}

export async function getAthleteById(id: number): Promise<Athlete[]> {
    const { rows: athletes }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "User"
        WHERE role = 'athlete' and id = $1
    `,[id]);
    
    return athletes;
}