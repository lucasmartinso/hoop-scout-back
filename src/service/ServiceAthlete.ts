import { Athlete } from "../entity/Athlete";
import * as athleteRepository from "../repositories/RepositoryAthlete";

export async function getProbabilityCalc(id: number): Promise<Athlete[]> {
    const atletas: Athlete[] = await athleteRepository.getProbabilityCalc(id);
    if(!atletas[0].longShot) throw { type: 'Bad Request', message: 'Atleta ainda não avaliado' };

    return atletas;
}

export async function getAthleteById(id: number): Promise<Athlete> {
    const atletas: Athlete[] = await athleteRepository.getAthleteData(id);
    if(!atletas.length) throw { type: 'Bad Request', message: 'Usuario-atleta inexistente' };

    return atletas[0];
}