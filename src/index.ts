import cors from "cors";
import dotenv from "dotenv";
import express, { json } from "express";
//import "express-async-errors";
import routers from "./routes/routers";
//import errorHandler from "./middlewares/errorHandler";
import { createConnection } from "typeorm";
dotenv.config();

const app = express();
app.use(json());
app.use(cors());

//app.use(errorHandler);

const startServer = async () => {
    try {
      // Estabeleça a conexão com o banco de dados
      await createConnection();
  
      // Registre as rotas após a conexão ser bem-sucedida
      app.use(routers);
      //app.use(errorHandler);
    } catch (error) {
      console.error("Error connecting to the database", error);
    }
  };
  
  startServer();

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