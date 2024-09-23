import { Router } from "express";
import { ControllerPet } from "../controller/ControllerPet";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const petRouter = Router();
const controllerPet = new ControllerPet();

petRouter.get('/pet/:id', controllerPet.getPet.bind(controllerPet));
petRouter.get('/pet/usuario/:id', controllerPet.getPetListByUser.bind(controllerPet));
petRouter.post('/pet', validateTokenAuth, controllerPet.createNewPet.bind(controllerPet));
petRouter.patch('/pet', validateTokenAuth, controllerPet.editPet.bind(controllerPet));
petRouter.delete('/pet/:id', validateTokenAuth, controllerPet.deletePet.bind(controllerPet));

export default petRouter;