import { Pet } from '../entity/Pet';
import { QueryResult } from "pg";
import connection from "../database/postgres";

export async function getPetById(id: number): Promise<Pet[]> {
    const { rows: pets }: QueryResult<Pet> = await connection.query(`
        SELECT * FROM "PETS"
        WHERE id = $1
    `,[id]);
    return pets;
}

export async function addNewPet(newPet: Omit <Pet,'id'>): Promise<Pet[]> {
    const { rows: pets }: QueryResult<Pet> = await connection.query(`
        INSERT INTO "PETS" (type, name, breed, sex, "birthDate", "userId", comment, "createdAt")
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
    `,[newPet.name, newPet.type, newPet.breed, newPet.sex, newPet.birthDate, newPet.userId, newPet.comment, newPet.createdAt]
    );
    return pets;     
}