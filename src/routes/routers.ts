import { Router } from "express"; 
import userRouter from "./userRouter";
import petRouter from "./petRouter";

const router = Router(); 

//basta adicionar como a rota abaixo para criar uma nova rota para api consumir
router.use(userRouter);
router.use(petRouter)

export default router;