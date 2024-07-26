import { getRepository } from "typeorm";
import { Usuario } from "../entity/Usuario";

export async function getAllUsers() {
    await this.usuarioRepository.find();
}