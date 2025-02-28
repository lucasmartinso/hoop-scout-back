"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ControllerCoach_1 = require("../controller/ControllerCoach");
const authCoachMiddleware_1 = require("../middlewares/authCoachMiddleware");
const coachRouter = (0, express_1.Router)();
const controllerCoach = new ControllerCoach_1.ControllerCoach();
coachRouter.get('/all/athletes', authCoachMiddleware_1.validateTokenCoachAuth, controllerCoach.getAllAthlete.bind(controllerCoach));
coachRouter.get('/athlete/:id', authCoachMiddleware_1.validateTokenCoachAuth, controllerCoach.getEspecificAthlete.bind(controllerCoach));
coachRouter.post('/grade/:id', authCoachMiddleware_1.validateTokenCoachAuth, controllerCoach.publishAthleteGrade.bind(controllerCoach));
exports.default = coachRouter;
