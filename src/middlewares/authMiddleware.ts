import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Users } from "../entity/Usuario";
import * as userRepository from "../repositories/RepositoryUser";
dotenv.config();

export async function validateTokenAuth(req: Request, res: Response, next: NextFunction) {
    const Authorization = req.headers.authorization;
    const token = Authorization?.replace("Bearer ", "");

    if(!token) throw { type: "Unauthorized", message: "Acesso bloqueado, autorização necessária"} 

    try {
        const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
        const { userId } = jwt.verify(token,SECRET) as { userId: number}
        const user: Users | null = await usersRepository.findUser(userId);
        res.locals.user = user;
        next();
    } catch (error) {
        throw { type: "Unauthorized", message: "Acesso bloqueado, autorização necessária"};
    }
}