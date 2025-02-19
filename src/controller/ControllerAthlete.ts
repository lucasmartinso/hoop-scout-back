import { Request, Response} from "express";
import { Athlete } from "../entity/Athlete";
//import * as athlteService from "../service/ServiceAthlete";

export class ControllerAthlete {
    public async getInfo(req: Request, res: Response) {
        //COMPLETAR
        //CHAMAR O SERVICE
        return res.status(200).json("athleta json");
    }

    public async probailityCalc(req: Request, res: Response) {
        //COMPLETAR COM O CALCULO DE PROBABILIDADE 
        //CHAMAR O SERVICE
        return res.status(200).send("json do calculo");
    }

    public async modelAthlete(req: Request, res: Response) {
        //COMPLETAR COM O CALCULO DE PROBABILIDADE 
        //CHAMAR O SERVICE
        return res.status(200).send("json atleta modelo");
    }
}