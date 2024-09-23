import { Hospedagem } from "../entity/Hospedagem";
import { Pet } from "../entity/Pet";
import * as hostRepository from "../repositories/RepositoryHost";
import * as petRepository from "../repositories/RepositoryPet";
import { hostUser, petService } from "../types/petsServiceType";

export async function createSchedule(hostInfo: hostUser, userId: number) {
    for(let i=0; i<hostInfo.petId.length; i++) {
        const existPet: Pet[] = await petRepository.getPetById(hostInfo.petId[i]);

        if(!existPet.length) throw { type: 'Not Found', message: 'Pet fornecido inexistente no sistema'};
    }

    const petIds: number[] = hostInfo.petId;
    delete hostInfo.petId;

    const hosts: Omit<Hospedagem, 'id' | 'status'> = {...hostInfo, 
        price: petIds.length * 49.99, 
        createdAt: new Date()
    }

    await hostRepository.postSchedule(hosts);
    
    const schedule: Hospedagem[] = await hostRepository.getLastSchedule();
    
    for(let i=0; i<petIds.length; i++) {
        const petServices: Omit<petService, 'id'> = {
            petId: petIds[i], 
            serviceId: schedule[0].id 
        }

        await hostRepository.postPetsSchedule(petServices);
    }
}

export async function getHistoric(): Promise<Hospedagem[]> {
    const historic: Hospedagem[] = await hostRepository.getHistoric();

    return historic;
}

export async function updateServiceStatus(id: number, type: string): Promise<void> {
    const existService: Hospedagem[] = await hostRepository.getScheduleById(id);  

    if(!existService.length) throw { type: 'Not Found', message: 'Servico fornecido inexistente no sistema'};

    await hostRepository.updateSchedule(id, type); 
}

export async function getServicePrice(id: number) {
    const existService: Hospedagem[] = await hostRepository.getScheduleById(id);  

    if(!existService.length) throw { type: 'Not Found', message: 'Servico fornecido inexistente no sistema'};

    return existService[0];
}