import { Hospedagem } from "../entity/Hospedagem";
import { Pet } from "../entity/Pet";
import * as hostRepository from "../repositories/RepositoryHost";
import * as petRepository from "../repositories/RepositoryPet";
import { hostUser, petService } from "../types/petsServiceType";

export async function createSchedule(hostInfo: hostUser) {
    const existPet: Pet[] = await petRepository.getPetById(hostInfo.petId);

    if(!existPet.length) throw { type: 'Not Found', message: 'Pet inexistente no sistema'};

    
    
    const schedule: petService[] = await hostRepository.getScheduleId();
    //if(!schedule.length)
}