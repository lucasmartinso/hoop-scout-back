import joi, { number } from "joi";

export const userSchema = joi.object({ 
    email: joi.string().min(2).required().label("Nome tem que ter no mínimo 2 caracteres"),
    name: joi.string().min(2).required().label("Sobrenome tem que ter no minimo 2 caracteres"),
    number: joi.number().min(1).max(3).required().label("Idade tem que ser um numero valido"),
    password: joi.string().min(8).required().label("Senha tem que ter no mínimo 8 caracteres")
});