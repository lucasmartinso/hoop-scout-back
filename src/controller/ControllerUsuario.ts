import { getRepository } from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Usuario } from "../entity/Usuario";

export class ControllerUsuario {

    private usuarioRepository = getRepository(Usuario);

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const userList: Usuario[] = await this.usuarioRepository.find();
            return res.status(200).json(userList);
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    }
}