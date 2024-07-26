import { getRepository } from "typeorm";
import { Usuario } from "../entity/Usuario";

export async function getAllUsers() {
    const usuarioRepository = getRepository(Usuario);
    const users = await usuarioRepository.find();

    return users;
}