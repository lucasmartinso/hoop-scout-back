import { Athlete } from "../entity/Athlete";
import { Users } from "../entity/User";
import * as coachRepository from "../repositories/RepositoryCoach";
import * as userRepository from "../repositories/RepositoryUser";
import { ratingType } from "../types/ratingType";

export async function getAllAthletes(): Promise<Athlete[]> {
    const atletas: Athlete[] = await coachRepository.getAllAthletes();

    return atletas;
}

export async function getAthleteById(id: number): Promise<Athlete> {
    const atletas: Athlete[] = await coachRepository.getAthleteById(id);
    if(!atletas.length) throw { type: 'Bad Request', message: 'Usuario-atleta inexistente' };

    return atletas[0];
}

export async function publishAthleteGrade(rating: ratingType, id: number): Promise<void> {
    const athlete: Athlete = await getAthleteById(id); 
    if(!athlete) throw { type: 'Bad Request', message: 'Usuario-atleta inexistente' };

    if(athlete.assistsGame) throw { type: 'Bad Request', message: 'Atleta ja foi avaliado' };
    
    await coachRepository.publishAthleteGrade(rating, id);
}