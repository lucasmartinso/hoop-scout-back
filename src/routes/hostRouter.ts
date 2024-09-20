import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import { userSchema, loginSchema } from "../schemas/userSchema";
import { validateTokenAdminAuth } from "../middlewares/authAdminMiddleware";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import { ControllerHost } from "../controller/ControllerHost";

const hostRouter = Router();
const controllerHost = new ControllerHost();

hostRouter.post('/hospedagem/agendamento', validateTokenAuth,controllerHost.schedule.bind(controllerHost));
hostRouter.post('/hospedagem/confirmar', validateTokenAdminAuth, controllerHost.confirmSchedule.bind(controllerHost));
hostRouter.post('/hospedagem/finalizada', validateTokenAdminAuth, controllerHost.finishHost.bind(controllerHost));
hostRouter.get('/hospedagem/historico', validateTokenAdminAuth, controllerHost.getHistory.bind(controllerHost));
hostRouter.get('/hospedagem/orcamento', validateTokenAuth, controllerHost.getPrice.bind(controllerHost));
hostRouter.put('/hospedagem/editar', validateTokenAuth, controllerHost.editSchedule.bind(controllerHost));
hostRouter.delete('/hospedagem/cancelar', validateTokenAuth, controllerHost.cancellSchedule.bind(controllerHost));

export default hostRouter;