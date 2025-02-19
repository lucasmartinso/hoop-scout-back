"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authAthleteMiddleware_1 = require("../middlewares/authAthleteMiddleware");
const ControllerAthlete_1 = require("../controller/ControllerAthlete");
const athleteRouter = (0, express_1.Router)();
const controllerAthlete = new ControllerAthlete_1.ControllerAthlete();
athleteRouter.get('/athlete', authAthleteMiddleware_1.validateTokenAthleteAuth, controllerAthlete.getInfo.bind(controllerAthlete));
athleteRouter.get('/probability', authAthleteMiddleware_1.validateTokenAthleteAuth, controllerAthlete.probailityCalc.bind(controllerAthlete));
athleteRouter.get('/model', authAthleteMiddleware_1.validateTokenAthleteAuth, controllerAthlete.modelAthlete.bind(controllerAthlete));
exports.default = athleteRouter;
