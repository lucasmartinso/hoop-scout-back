import { Router } from "express";
import { ControllerUser } from "../controller/ControllerUser";
import schemaValidator from "../middlewares/schemaValidator";
import { userSchema } from "../schemas/userSchema";

const userRouter = Router();
const controllerUser = new ControllerUser();

//SO SEGUIR A MESMA ESTRUTURA ABAIXO PARA AS DEMAIS ROTAS DESSE CONTROLLER
userRouter.get('/users', controllerUser.getAll.bind(controllerUser));
// userRouter.get('/user/profile/:id', controllerUser.getAll.bind(controllerUser)); 
userRouter.post('/signup', schemaValidator(userSchema), controllerUser.postUser.bind(controllerUser));
// userRouter.post('/login'); 
// userRouter.put('/user/edit/:id'); 
// userRouter.delete('/user/delete/:id');

export default userRouter;