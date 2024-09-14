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
    `,[newPet.type, newPet.name, newPet.breed, newPet.sex, newPet.birthDate, newPet.userId, newPet.comment, newPet.createdAt]
    );
    return pets;     
}

export async function editPet(newPet: Omit <Pet,'userId | createdAt'>): Promise<Pet[]> {
    const { rows: pets }: QueryResult<Pet> = await connection.query(`
        UPDATE "PETS"
        SET type = $1, name = $2, breed = $3, sex = $4, "birthDate" = $5, comment = $6
        WHERE id = $7
        RETURNING *;
    `,[newPet.type, newPet.name,  newPet.breed, newPet.sex, newPet.birthDate, newPet.comment, newPet.id]
    );
    return pets;     
}

export async function getPetListByUser(id: number): Promise<Pet[]> {
    const { rows: pets }: QueryResult<Pet> = await connection.query(`
        SELECT * FROM "PETS"
        WHERE "userId" = $1
    `,[id]);
    return pets;
}