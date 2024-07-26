import * as userRepository from "../repositories/RepositoryUser";

export async function getAllUsers() {
    const users = await userRepository.getAllUsers();

    return users;
}