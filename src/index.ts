import { createConnection } from "typeorm";
import { Usuario } from "./entity/Usuario";

import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
//import "express-async-errors";
//import routers from "./routers/routers";
//import errorHandler from "./middlewares/errorHandler";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());

//app.use(routers);
//app.use(errorHandler);

export default app;

// async function start() {
//   createConnection().then(async connection => {
//     const userRepository = connection.getRepository(Usuario);
  
//     app.get("/", async (req, res) => {
//       const users = await userRepository.find();
//       res.json(users);
//     });
  
//     app.listen(port, () => {
//       console.log(`Server is running on http://localhost:${port}`);
//     });
//   }).catch(error => console.log(error));
// }

// start();