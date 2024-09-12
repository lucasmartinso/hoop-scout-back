import { Users } from "../entity/Usuario";
import * as userRepository from "../repositories/RepositoryUser";
import bcrypt from "bcrypt";

export async function getAllUsers(id: number) {
    const users = await userRepository.getUserById(id);
    
    //throw { type: 'Bad Request', message: 'Teste' }; //interrompe o co

    return users;
}

export async function login(userInfo): Promise<string> {
    const existEmail: Users[] = await userRepository.existEmail(userInfo.email); 
    if(existEmail.length) throw { type: 'Conflit', message: 'Email de usuario ja cadastrado' };

    return "users";
}

export async function signup(userInfo: Omit<Users,'id'>): Promise<void> {
    const existEmail: Users[] = await userRepository.existEmail(userInfo.email); 
    if(existEmail.length) throw { type: 'Conflit', message: 'Email de usuario ja cadastrado' };

    const existNumber: Users[] = await userRepository.existNumber(userInfo.number); 
    if(existNumber.length) throw { type: 'Conflit', message: 'Telefone de usuario ja cadastrado' };

    const saltRounds = 10; //maior, mais seguro, porem mais lento
    const encryptPassword: string = bcrypt.hashSync(userInfo.password, saltRounds);
    userInfo.password = encryptPassword;

    const currentDate = new Date();
    const currentDateBrazil = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000);
    userInfo.createdAt = currentDateBrazil;

    await userRepository.createUser(userInfo);
}