import { Router } from "express";
import { ControllerUser } from "../controller/ControllerUser";

const userRouter = Router();
const controllerUser = new ControllerUser();

//SO SEGUIR A MESMA ESTRUTURA ABAIXO PARA AS DEMAIS ROTAS DESSE CONTROLLER
userRouter.get('/users', controllerUser.getAll.bind(controllerUser));
//userRouter.get('/user/profile/:id', controllerUser.getAll.bind(controllerUser)); 
userRouter.post('/signup', controllerUser.postUser.bind(controllerUser));
// userRouter.post('/login'); 
// userRouter.put('/user/edit/:id'); 
// userRouter.delete('/user/delete/:id');

export default userRouter;