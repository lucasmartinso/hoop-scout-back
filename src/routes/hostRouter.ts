import { Router } from "express";
import schemaValidator from "../middlewares/schemaValidator";
import { userSchema, loginSchema } from "../schemas/userSchema";
import { validateTokenAdminAuth } from "../middlewares/authAdminMiddleware";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import { ControllerHost } from "../controller/ControllerHost";

const userRouter = Router();
const controllerHost = new ControllerHost();

userRouter.post('/agendamento', validateTokenAuth,controllerHost.getInfo.bind(controllerHost));


export default userRouter;