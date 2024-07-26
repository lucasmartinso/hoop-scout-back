import { createConnection } from "typeorm";
import { Usuario } from "./entity/Usuario";

const express = require('express');
const body = require('body-parser');
const port: number = 8080;
const app = express();

async function start() {
  createConnection().then(async connection => {
    const userRepository = connection.getRepository(Usuario);
  
    app.get("/", async (req, res) => {
      const users = await userRepository.find();
      res.json(users);
    });
  
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }).catch(error => console.log(error));
}

start();