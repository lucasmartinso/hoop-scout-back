import { Users } from "../entity/Usuario";
import { QueryResult } from "pg";
import connection from "../database/postgres";
import { Hospedagem } from "../entity/Hospedagem";

export async function postAgendamento(hostInfo: Omit<Hospedagem, 'id' | 'value' | 'createdAt'>): Promise<Users[]> {
    const { rows: users }: QueryResult<Users> = await connection.query(`
        SELECT * FROM "USERS"
        WHERE id = $1
    `,['id']);

    return users;
}

