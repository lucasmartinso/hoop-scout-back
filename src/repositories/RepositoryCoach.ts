import { Athlete } from "../entity/Athlete";
import { QueryResult } from "pg";
import { Users } from "../entity/User";
import connection from "../database/postgres";

export async function getAllAthletes(): Promise<Athlete[]> {
    const { rows: athletes }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "User"
        WHERE role = 'athlete'
    `);
    
    return athletes;
}