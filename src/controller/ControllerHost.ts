import { Request, Response} from "express";
import { Hospedagem } from "../entity/Hospedagem";
import * as hostService from "../service/ServiceHost";
import connection from "../database/postgres";
import { hostUser } from "../types/petsServiceType";

export class ControllerHost {
    public async schedule(req: Request, res: Response) {
        const host: hostUser = req.body;
        const { id }: { id: number } = res.locals.user;
        
        await hostService.createSchedule(host, id);

        return res.status(200).send("Agendamento solicitado com sucesso");
    }

    public async getPrice(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async cancellSchedule(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async editSchedule(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async confirmSchedule(req: Request, res: Response) {
        

        return res.status(200).json("user");
    }

    public async getHistory(req: Request, res: Response) {
        const historico: Hospedagem[] = await hostService.getHistoric();

        return res.status(200).json(historico);
    }

    public async finishHost(req: Request, res: Response) {
         

        return res.status(200).json("user");
    }

    public async tabless(req: Request, res: Response) {
         
        try {
            await connection.query(`
                ALTER TABLE "PETSSERVICE"
                    DROP COLUMN status,
                    DROP COLUMN price,
                    DROP COLUMN comment;

                CREATE TYPE status_enum AS ENUM ('confirmado', 'em andamento', 'cancelado', 'finalizado');

                ALTER TABLE "SERVICES"
                    DROP COLUMN status;

                ALTER TABLE "SERVICES"
                    ADD COLUMN status status_enum NULL,
                    ADD COLUMN price FLOAT(53) NOT NULL,
                    ADD COLUMN comment TEXT NULL;

            `);
        } catch (error) {
            console.log(error);
            return res.status(500).send("PQP");
        }
        return res.status(200).json("LEGALLL");
    }
}