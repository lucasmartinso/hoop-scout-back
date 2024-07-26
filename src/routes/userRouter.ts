import { Router } from "express";
import { ControllerUser } from "../controller/ControllerUser";

const userRouter = Router();
const controllerUser = new ControllerUser();

userRouter.get('/users', controllerUser.getAll.bind(controllerUser));
//userRouter.get('/user/profile/:id', controllerUser.getAll.bind(controllerUser)); 
// userRouter.post('/signup');
// userRouter.post('/login'); 
// userRouter.put('/user/edit/:id'); 
// userRouter.delete('/user/delete/:id');

export default userRouter;