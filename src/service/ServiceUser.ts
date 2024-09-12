import { Users } from "../entity/Usuario";
import * as userRepository from "../repositories/RepositoryUser";

export async function getAllUsers(id: number) {
    const users = await userRepository.getUserById(id);
    
    //throw { type: 'Bad Request', message: 'Teste' }; //interrompe o co

    return users;
}

export async function login(userInfo) {
    //const users = await userRepository.getAllUsers();

    //return users;
}

export async function signup(userInfo: Users) {
    //const users = await userRepository.getAllUsers();

    //return users;
}