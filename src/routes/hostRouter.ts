import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import { validateTokenAdminAuth } from "../middlewares/authAdminMiddleware";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import { ControllerHost } from "../controller/ControllerHost";
import { hostSchema } from "../schemas/hostSchema";

const hostRouter = Router();
const controllerHost = new ControllerHost();

hostRouter.post('/hospedagem/agendamento', validateTokenAuth, schemaValidator(hostSchema), controllerHost.schedule.bind(controllerHost));
hostRouter.post('/hospedagem/confirmar/:id', validateTokenAdminAuth, controllerHost.confirmSchedule.bind(controllerHost));
hostRouter.post('/hospedagem/finalizar/:id', validateTokenAdminAuth, controllerHost.finishHost.bind(controllerHost));
hostRouter.get('/hospedagem/historico', validateTokenAdminAuth, controllerHost.getHistory.bind(controllerHost));
hostRouter.get('/hospedagem/orcamento/:id', validateTokenAuth, controllerHost.getPrice.bind(controllerHost));
hostRouter.delete('/hospedagem/cancelar/:id', validateTokenAuth, controllerHost.cancellSchedule.bind(controllerHost));
hostRouter.get('/clients', validateTokenAdminAuth, controllerHost.getUsers.bind(controllerHost));
//hostRouter.post('/tables', controllerHost.tabless.bind(controllerHost));

export default hostRouter;