import joi from "joi";

export const userSchema = joi.object({ 
    email: joi.string().email().required().label("Fornecer email valido"),
    name: joi.string().min(2).max(70).required().label("Nome tem que ter no minimo 2 caracteres, e todos serem do alfabeto"),
    number: joi.string().min(1).max(10).required().label("Fornecer telefone valido"),
    password: joi.string().min(8).required().label("Senha tem que ter no mínimo 8 caracteres")
});

export const loginSchema = joi.object({ 
    email: joi.string().email().required().label("Fornecer email valido"),
    password: joi.string().min(8).required().label("Senha tem que ter no mínimo 8 caracteres")
});