import { Router } from "express";
import { ControllerUser } from "../controller/ControllerUser";
import schemaValidator from "../middlewares/schemaValidator";
import { userSchema, loginSchema } from "../schemas/userSchema";
import { validateTokenAuth } from "../middlewares/authMiddleware";
import { validateTokenAdminAuth } from "../middlewares/authAdminMiddleware";

const userRouter = Router();
const controllerUser = new ControllerUser();

//SO SEGUIR A MESMA ESTRUTURA ABAIXO PARA AS DEMAIS ROTAS DESSE CONTROLLER
userRouter.get('/user/profile', validateTokenAuth,controllerUser.getInfo.bind(controllerUser));
userRouter.post('/signup', schemaValidator(userSchema), controllerUser.signup.bind(controllerUser));
userRouter.post('/login', schemaValidator(loginSchema), controllerUser.login.bind(controllerUser));
userRouter.put('/user/edit', validateTokenAuth, controllerUser.editProfile.bind(controllerUser)); 
userRouter.delete('/user/delete', validateTokenAuth, controllerUser.deleteProfile.bind(controllerUser));
userRouter.post('/user/auth',validateTokenAuth, controllerUser.verifyAuthUser.bind(controllerUser));
userRouter.post('/admin/auth',validateTokenAdminAuth, controllerUser.verifyAuthAdmin.bind(controllerUser));

export default userRouter;