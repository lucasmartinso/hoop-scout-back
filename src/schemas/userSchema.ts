import joi from "joi";

export const blogSchema = joi.object({ 
    fistname: joi.string().min(2).required().label("Nome tem que ter no mínimo 2 caracteres"),
    lastname: joi.string().min(2).required().label("Sobrenome tem que ter no minimo 2 caracteres"),
    age: joi.number().min(1).max(3).required().label("Idade tem que ser um numero valido")
});