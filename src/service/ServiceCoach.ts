import { Athlete } from "../entity/Athlete";
import * as coachRepository from "../repositories/RepositoryCoach";

export async function getAllAthletes(): Promise<Athlete[]> {
    const atletas: Athlete[] = await coachRepository.getAllAthletes();

    return atletas;
}

export async function getAthleteById(id: number): Promise<Athlete> {
    const atletas: Athlete[] = await coachRepository.getAthleteById(id);

    return atletas[0];
}