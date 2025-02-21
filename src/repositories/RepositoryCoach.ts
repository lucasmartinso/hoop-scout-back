import { Athlete } from "../entity/Athlete";
import { Coach } from "../entity/Coach";
import { atletas } from "./RepositoryAthlete";

const coachs: Coach[] = [
    {
        id: 1,
        age: 10,
        userId: 3,
        createdAt: new Date()
    }
];

export async function getAllAthletes(): Promise<Athlete[]> {
    return atletas;
}