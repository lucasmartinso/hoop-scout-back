import { Router } from "express"; 
import userRouter from "./userRouter";

const router = Router(); 

//basta adicionar como a rota abaixo para criar uma nova rota para api consumir
router.use(userRouter);

export default router;