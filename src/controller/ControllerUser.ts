import { getRepository } from "typeorm";
import { Request, Response} from "express";
import { Usuario } from "../entity/Usuario";
//import * as UserService from ".."

export class ControllerUser {

    //private usuarioRepository = getRepository(Usuario);

    public async getAll(req: Request, res: Response) {
        try {
            //const userList: Usuario[] = await this.usuarioRepository.find();
            return res.status(200).json("userList");
        } catch (error) {
            console.error(error);
            return res.status(500).json(error);
        }
    }
}