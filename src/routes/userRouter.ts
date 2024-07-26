import { Router } from "express";

const userRouter = Router();

userRouter.get('/user/profile/:id'); 
userRouter.post('/signup');
userRouter.post('/login'); 
userRouter.put('/user/edit/:id'); 
userRouter.delete('/user/delete/:id');

export default userRouter;