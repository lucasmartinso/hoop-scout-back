import { Request, Response} from "express";
import { Users } from "../entity/Usuario";
import * as userService from "../service/ServiceUser";

export class ControllerUser {
    public async getInfo(req: Request, res: Response) {
        const { id }: { id: number } = res.locals.user;
        const user: Users = await userService.getUserInfo(id);

        return res.status(200).json(user);
    }

    public async login(req: Request, res: Response) {
        const user: Omit<Users,'id | number | createdAt | name'> = req.body;

        const token: string = await userService.login(user);

        return res.status(200).send({token});
    }

    public async signup(req: Request, res: Response) {
        const user: Omit<Users,'id | createdAt'> = req.body;

        await userService.signup(user);

        return res.status(201).send("Created user sucess");
    }

    public async editProfile(req: Request, res: Response) {
        const { id }: { id: number } = res.locals.user;
        const user: Omit<Users,'id | createdAt'> = req.body;

        await userService.editProfile(user, id);

        return res.status(200).send("Edited user profile sucess");
    }

    public async deleteProfile(req: Request, res: Response) {
        const { id }: { id: number } = res.locals.user;
        const password: string = req.body.password;

        await userService.deleteProfile(id, password);

        return res.status(200).send("Delete profile sucessfuly");
    }

    public async verifyAuthUser(req: Request, res: Response) {
        return res.status(200).send("Perfil com autorizacao necessaria");
    }

    public async verifyAuthAdmin(req: Request, res: Response) {
        return res.status(200).send("Perfil com autorizacao de administrador");
    }
}