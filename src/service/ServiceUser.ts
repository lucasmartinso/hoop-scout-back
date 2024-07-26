import * as userRepository from "../repositories/RepositoryUser";

export async function getAllUsers() {
    const users = await userRepository.getAllUsers();
    
    //throw { type: 'Bad Request', message: 'Teste' }; //interrompe o co

    return users;
}

export async function postUser() {
    const users = await userRepository.getAllUsers();

    return users;
}