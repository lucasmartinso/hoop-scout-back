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

export async function createPet(newPet: Pet){
    const users: Users[] | null = await userRepository.getUserById(newPet.userId);
    if (users.length === 0) {
        throw new Error('Usuário inexistente');
    }

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