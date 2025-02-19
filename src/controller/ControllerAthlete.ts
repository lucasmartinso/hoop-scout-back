import { Request, Response} from "express";
import { Hospedagem } from "../entity/Athlete";
import * as hostService from "../service/ServiceHost";
import { hostUser } from "../types/petsServiceType";
import { Users } from "../entity/User";

export class ControllerHost {
    public async schedule(req: Request, res: Response) {
        const host: hostUser = req.body;
        const { id }: { id: number } = res.locals.user;
        
        await hostService.createSchedule(host, id);

        return res.status(200).send("Agendamento solicitado com sucesso");
    }

    public async getPrice(req: Request, res: Response) {
        const id: number = Number(req.params.id);
         const hospedagem: Hospedagem = await hostService.getServicePrice(id);

        return res.status(200).json(hospedagem);
    }

    public async cancellSchedule(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        await hostService.updateServiceStatus(id, "cancelado");

        return res.status(200).json("Agendamento cancelado");
    }

    public async confirmSchedule(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        await hostService.updateServiceStatus(id, "confirmado");

        return res.status(200).json("Agendamento confirmado");
    }

    public async getHistory(req: Request, res: Response) {
        const historico: Hospedagem[] = await hostService.getHistoric();

        return res.status(200).json(historico);
    }

    public async finishHost(req: Request, res: Response) {
        const id: number = Number(req.params.id);
        await hostService.updateServiceStatus(id, "finalizado");

        return res.status(200).json("Hospedagem concluida");
    }

    public async getUsers(req: Request, res: Response) {
        const users: Users[] = await hostService.getUsers();

        return res.status(200).json(users);
    }

    public async historicClient(req: Request, res: Response) {
        const { id }: { id: number } = res.locals.user;
        const hospedagem: Hospedagem[] = await hostService.getHistoricClient(id);

        return res.status(200).json(hospedagem);
    }
}