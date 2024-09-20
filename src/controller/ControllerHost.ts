import { Request, Response} from "express";
import { Users } from "../entity/Usuario";
import * as userService from "../service/ServiceUser";

export class ControllerHost {
    public async getInfo(req: Request, res: Response) {
        

        return res.status(200).json("user");
    }
}