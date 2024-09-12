import { Request, Response} from "express";
import { Users } from "../entity/Usuario";
import * as userService from "../service/ServiceUser";

export class ControllerUser {
    public async getInfo(req: Request, res: Response) {
        const { id }: {id:number} = res.locals.user;
        console.log(id);
        const user: Users = await userService.getAllUsers(id);

        return res.status(200).json(user);
    }

    public async login(req: Request, res: Response) {
        const user: Omit<Users,'id | number | createdAt | name'> = req.body;

        const token: string = await userService.login(user);

        return res.status(201).send(token);
    }

    public async signup(req: Request, res: Response) {
        const user: Omit<Users,'id | createdAt'> = req.body;

        await userService.signup(user);

        return res.status(201).send("Created user sucess");
    }
}