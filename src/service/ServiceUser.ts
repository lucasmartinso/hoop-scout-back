import * as userRepository from "../repositories/RepositoryUser";

export async function getAllUsers(id) {
    const users = await userRepository.getUserInfo(id);
    
    //throw { type: 'Bad Request', message: 'Teste' }; //interrompe o co

    return users;
}

export async function postUser(id) {
    //const users = await userRepository.getAllUsers();

    //return users;
}