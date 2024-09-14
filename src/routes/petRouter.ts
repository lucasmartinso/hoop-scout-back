import { Router } from "express";
import { ControllerPet } from "../controller/ControllerPet";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const petRouter = Router();
const controllerPet = new ControllerPet();

petRouter.post('/pet', controllerPet.createNewPet.bind(controllerPet));
petRouter.patch('/pet', controllerPet.editPet.bind(controllerPet));

export default petRouter;