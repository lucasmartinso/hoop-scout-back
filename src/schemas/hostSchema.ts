import joi, { number } from "joi";

export const hostSchema = joi.object({ 
    beginDate: joi.date().required().label("Fornecer uma data"),
    comment: joi.string().label("Nome tem que ter no minimo 2 caracteres, e todos serem do alfabeto").allow(null),
});