import { Athlete } from "../entity/Athlete";
import { Coach } from "../entity/Coach";
import * as coachRepository from "../repositories/RepositoryCoach";

export async function getAllAthletes(): Promise<Athlete[]> {
    const atletas: Athlete[] = await coachRepository.getAllAthletes();

    return atletas;
}