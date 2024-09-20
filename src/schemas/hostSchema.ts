import joi, { number } from "joi";

export const hostSchema = joi.object({ 
    beginDate: joi.date().required().label("Fornecer uma data"),
    comment: joi.string().allow(null).label("Comentario não pode conter somente numeros e simbolos, mas letras, palavras"),
});