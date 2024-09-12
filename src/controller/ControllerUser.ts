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
        try {
            const user = req.body;
            await userService.login(user);
            return res.status(201).send("Created user sucess");
        } catch (error) {
            console.error(error.data);
            return res.status(500).json(error);
        }
    }

    public async signup(req: Request, res: Response) {
        const user: Omit<Users,'id'> = req.body;
        await userService.signup(user);
        return res.status(201).send("Created user sucess");
    }
}