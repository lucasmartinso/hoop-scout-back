import { Athlete } from "../entity/Athlete";
import { Users } from "../entity/User";
import * as coachRepository from "../repositories/RepositoryCoach";
import * as userRepository from "../repositories/RepositoryUser";

export async function getAllAthletes(): Promise<Athlete[]> {
    const atletas: Athlete[] = await coachRepository.getAllAthletes();

    return atletas;
}

export async function getAthleteById(id: number): Promise<Athlete> {
    const atletas: Athlete[] = await coachRepository.getAthleteById(id);
    if(!atletas.length) throw { type: 'Bad Request', message: 'Usuario-atleta inexistente' };

    return atletas[0];
}

export async function publishAthleteGrade(id: number, rating: any): Promise<void> {
    //const athlete: Athlete = await getAthleteById(id); 
    //if(!athlete) throw { type: 'Bad Request', message: 'Usuario-atleta inexistente' };

    //if(athlete.assistsGame) throw { type: 'Bad Request', message: 'Atleta ja foi avaliado' };
    const currentDate = new Date();
    const currentDateBrazil = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000);
    rating.createdAt = currentDateBrazil;
    console.log(rating);

    //await coachRepository.publishAthleteGrade(rating, id);
}