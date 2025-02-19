import { Router } from "express";
import { ControllerUser } from "../controller/ControllerUser";
import { validateTokenAthleteAuth } from "../middlewares/authAthleteMiddleware";

const userRouter = Router();
const controllerUser = new ControllerUser();

//SO SEGUIR A MESMA ESTRUTURA ABAIXO PARA AS DEMAIS ROTAS DESSE CONTROLLER
userRouter.get('/athlete', validateTokenAthleteAuth,controllerUser.getInfo.bind(controllerUser));
userRouter.get('/probability', validateTokenAthleteAuth, controllerUser.signup.bind(controllerUser));
userRouter.get('/model', validateTokenAthleteAuth, )

export default userRouter;