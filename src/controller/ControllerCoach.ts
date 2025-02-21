import { Request, Response} from "express";
import { Coach } from "../entity/Coach";
import * as coachService from "../service/ServiceCoach";
import { Athlete } from "../entity/Athlete";

export class ControllerCoach {
    public async getAllAthlete(req: Request, res: Response) {
        const atletas: Athlete[] = await coachService.getAllAthletes();

        return res.status(200).json(atletas);
    }

    public async publishAthleteGrade(req: Request, res: Response) {
        const data: any = req.body;
        const id: number = Number(req.params.id);
        //CHAMAR O SERVICE
        return res.status(200).send("json de todos os atletas");
    }

    public async getEspecificAthlete(req: Request, res: Response) {
        //CHAMAR O SERVICE
        return res.status(200).send("json do atleta especifico");
    }
}