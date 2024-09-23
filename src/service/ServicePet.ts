import { Pet } from "../entity/Pet";
import { Users } from "../entity/Usuario";
import * as userRepository from "../repositories/RepositoryUser";
import * as petRepository from "../repositories/RepositoryPet";

export async function getPetInfo(petId: number): Promise<Pet>{
    const pets: Pet[] | null = await petRepository.getPetById(petId);
    if (pets.length === 0) {
        throw new Error('Pet inexistente');
    }
    console.log(pets)
    return pets[0];
    
};

export async function createPet(newPet: Pet, userId: number){
    newPet.userId = userId;

    newPet.birthDate = new Date();
    newPet.createdAt = new Date();
    await petRepository.addNewPet(newPet);
};

export async function editPet(newPet: Pet){
    const pets: Pet[] | null = await petRepository.getPetById(newPet.id);
    if (pets.length === 0) {
        throw new Error('Pet inexistente');
    }
    await petRepository.editPet(newPet);
};

export async function deletePet(petId: number){
    const pets: Pet[] | null = await petRepository.getPetById(petId);
    if (pets.length === 0) {
        throw new Error('Pet inexistente');
    }
    await petRepository.deletePet(petId);
};

export async function getPetListByUser(userId: number): Promise<Pet[]>{
    const pets: Pet[] | null = await petRepository.getPetListByUser(userId);
    if (pets.length === 0) {
        throw new Error('Nenhum pet encontrado para o usuario informado.');
    }
    return pets;
};