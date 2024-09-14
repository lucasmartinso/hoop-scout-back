import { Request, Response} from "express";
import { Pet } from "../entity/Pet";
import * as petService from "../service/ServicePet";

export class ControllerPet {
    public async createNewPet(req: Request, res: Response) {
       try {
        const pet: Omit<Pet,'id | createdAt'> = req.body;
        await petService.createPet(pet);
        return res.status(201).send("Pet criado com sucesso");
       } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
       }
    }

    public async editPet(req: Request, res: Response) {
        try {
         const pet: Omit<Pet,'userId | createdAt'> = req.body;
         await petService.editPet(pet);
         return res.status(201).send("Pet editado com sucesso");
        } catch (error) {
         console.error(error);
         return res.status(500).send(error.message);
        }
     }
}
