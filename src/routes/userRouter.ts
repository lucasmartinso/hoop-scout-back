import { Router } from "express";
import { ControllerUser } from "../controller/ControllerUser";
import schemaValidator from "../middlewares/schemaValidator";
import { userSchema, loginSchema } from "../schemas/userSchema";
import { validateTokenAuth } from "../middlewares/authMiddleware";

const userRouter = Router();
const controllerUser = new ControllerUser();

//SO SEGUIR A MESMA ESTRUTURA ABAIXO PARA AS DEMAIS ROTAS DESSE CONTROLLER
//validateTokenAuth
userRouter.get('/users', validateTokenAuth,controllerUser.getInfo.bind(controllerUser));
userRouter.post('/signup', schemaValidator(userSchema), controllerUser.signup.bind(controllerUser));
userRouter.post('/login', schemaValidator(loginSchema), controllerUser.login.bind(controllerUser));
// userRouter.get('/user/profile/:id', controllerUser.getAll.bind(controllerUser)); 
// userRouter.post('/login'); 
// userRouter.put('/user/edit/:id'); 
// userRouter.delete('/user/delete/:id');

export default userRouter;