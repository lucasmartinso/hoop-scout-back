import { Hospedagem } from "../entity/Hospedagem";
import * as hostRepository from "../repositories/RepositoryHost";
import { petService } from "../types/petsServiceType";

export async function createSchedule(hostInfo: Omit<Hospedagem, 'id' | 'value' | 'finishDate'>) {
    const schedule: petService[] = await hostRepository.getScheduleId(hostInfo.beginDate);

    //if(!schedule.length)
}