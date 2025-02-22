import { Users } from "../entity/User";
import * as coachRepository from "../repositories/RepositoryCoach";

export async function getAllAthletes(): Promise<Users[]> {
    const atletas: Users[] = await coachRepository.getAllAthletes();

    return atletas;
}