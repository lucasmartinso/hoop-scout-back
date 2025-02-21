import { Request, Response } from "express";
import { Athlete } from "../entity/Athlete";
//import * as athlteService from "../service/ServiceAthlete";

export class ControllerAthlete {


    public async getInfo(req: Request, res: Response): Promise<Response> {

        const { id } = req.query; // Pega o ID do atleta da query string

        if (!id) {
            return res.status(400).json({ error: 'ID do atleta não fornecido' });
        }

        const athleteId = parseInt(id as string, 10);

        if (isNaN(athleteId)) {
            return res.status(400).json({ error: 'ID inválido' });
        }

        // Buscar o atleta no "banco de dados" (array)
        const athlete = athletesDB.find(a => a.id === athleteId);

        if (!athlete) {
            return res.status(404).json({ error: 'Atleta não encontrado' });
        }

        return res.status(200).json(athlete);
    }

    public async modelAthlete(req: Request, res: Response): Promise<Response> {
        const { age } = req.query;

        if (!age) {
            return res.status(400).json({ error: 'Idade não fornecida' });
        }

        const ageNumber = parseInt(age as string, 10);

        if (isNaN(ageNumber)) {
            return res.status(400).json({ error: 'Idade inválida' });
        }
       

        let athleteModel;

        if (ageNumber <= 14) {
            athleteModel = {
                altura: '1,80m',
                peso: '70kg',
                idade: 14,
                arremesso_livre: '85%',
                arremesso_2_pontos: '55%',
                arremesso_3_pontos: '40%',
                assistencias_por_jogo: 6,
            };
        } else if (ageNumber > 14 && ageNumber < 17) {
            athleteModel = {
                altura: '1,90m',
                peso: '80kg',
                idade: 17,
                arremesso_livre: '90%',
                arremesso_2_pontos: '60%',
                arremesso_3_pontos: '45%',
                assistencias_por_jogo: 8,
            };
        } else {
            return res.status(400).json({ error: 'Faixa etária não suportada' });
        }

        return res.status(200).json(athleteModel);
    }


    public async probailityCalc(req: Request, res: Response): Promise<Response> {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ error: 'ID do atleta não fornecido' });
        }

        const athleteId = parseInt(id as string, 10);
        if (isNaN(athleteId)) {
            return res.status(400).json({ error: 'ID inválido' });
        }

        // Buscar o atleta real pelo ID
        const athlete = athletesDB.find(a => a.id === athleteId);
        if (!athlete) {
            return res.status(404).json({ error: 'Atleta não encontrado' });
        }
        
        // Buscar o atleta ouro igual ao da funcao modelAthlete
        let athleteOuro;
        if (athlete.idade <= 14) {
            athleteOuro = {
                altura: '1,80m',
                peso: '70kg',
                idade: 14,
                arremesso_livre: '85%',
                arremesso_2_pontos: '55%',
                arremesso_3_pontos: '40%',
                assistencias_por_jogo: 6,
            };
        } else if (athlete.idade > 14 && athlete.idade <= 17) {
            athleteOuro = {
                altura: '1,90m',
                peso: '80kg',
                idade: 17,
                arremesso_livre: '90%',
                arremesso_2_pontos: '60%',
                arremesso_3_pontos: '45%',
                assistencias_por_jogo: 8,
            };
        }

        // Calcular a probabilidade para cada atributo
        const calculateScore = (realValue: number, goldValue: number): number => {
            return (realValue / goldValue) * 100;
        };

        const probability =
            (calculateScore(parseInt(athlete.altura), parseInt(athleteOuro.altura)) * 0.10) +
            (calculateScore(parseInt(athlete.peso), parseInt(athleteOuro.peso)) * 0.10) +
            (calculateScore(athlete.idade, athleteOuro.idade) * 0.10) +
            (calculateScore(parseInt(athlete.arremesso_livre), parseInt(athleteOuro.arremesso_livre)) * 0.20) +
            (calculateScore(parseInt(athlete.arremesso_2_pontos), parseInt(athleteOuro.arremesso_2_pontos)) * 0.20) +
            (calculateScore(parseInt(athlete.arremesso_3_pontos), parseInt(athleteOuro.arremesso_3_pontos)) * 0.20) +
            (calculateScore(athlete.assistencias_por_jogo, athleteOuro.assistencias_por_jogo) * 0.10);

        // Garantir que a probabilidade tenha apenas duas casas decimais
        const formattedProbability = parseFloat(probability.toFixed(2));

        return res.status(200).json({
            probability : formattedProbability
        });
    }
 
    
}