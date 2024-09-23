import { Hospedagem } from "../entity/Hospedagem";
import { Pet } from "../entity/Pet";
import * as hostRepository from "../repositories/RepositoryHost";
import * as petRepository from "../repositories/RepositoryPet";
import { hostUser, petService } from "../types/petsServiceType";

export async function createSchedule(hostInfo: hostUser, userId: number) {
    const existPet: Pet[] = await petRepository.getPetById(hostInfo.petId);

    if(!existPet.length) throw { type: 'Not Found', message: 'Pet inexistente no sistema'};

    const petId: number = hostInfo.petId;
    delete hostInfo.petId;

    const hosts: Omit<Hospedagem, 'id' | 'status'> = {...hostInfo, 
        price: 49.99, 
        createdAt: new Date()
    }

    await hostRepository.postSchedule(hosts);
    
    const schedule: Hospedagem[] = await hostRepository.getScheduleId();
    
    const petServices: Omit<petService, 'id'> = {
        petId, 
        serviceId: schedule[0].id 
    }

    await hostRepository.postPetsSchedule(petServices);
}