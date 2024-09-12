import { Request, Response} from "express";
import { Users } from "../entity/Usuario";
import * as userService from "../service/ServiceUser";

export class ControllerUser {
    public async getInfo(req: Request, res: Response) {
        const user: Users = await userService.getAllUsers(id);

        return res.status(200).json(user);
    }

    public async postUser(req: Request, res: Response) {
        try {
            const user = req.body;
            await userService.postUser();
            return res.status(201).send("Created user sucess");
        } catch (error) {
            console.error(error.data);
            return res.status(500).json(error);
        }
    }
}