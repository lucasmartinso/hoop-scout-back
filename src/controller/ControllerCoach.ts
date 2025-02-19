import { Request, Response} from "express";
import { Coach } from "../entity/Coach";
//import * as coachService from "../service/ServiceCoach";

export class ControllerCoach {
    public async publishAthleteGrade(req: Request, res: Response) {
        //COMPLETAR
        //CHAMAR O SERVICE
        return res.status(200).json("teste lancado");
    }

    public async getAllAthlete(req: Request, res: Response) {
        //COMPLETAR COM O CALCULO DE PROBABILIDADE 
        //CHAMAR O SERVICE
        return res.status(200).send("json de todos os atletas");
    }

    public async getEspecificAthlete(req: Request, res: Response) {
        //COMPLETAR COM O CALCULO DE PROBABILIDADE 
        //CHAMAR O SERVICE
        return res.status(200).send("json do atleta especifico");
    }
}