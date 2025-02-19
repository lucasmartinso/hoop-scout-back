import { Users } from "../entity/User";

const users: Users[] = [
    {
        id: 1,
        name: 'Fabricio',
        email: 'fabricio@gmail.com',
        password: 'fabricio',
        role: 'user',
        createdAt: new Date(),
    },
    {
        id: 2,
        name: 'Jairo',
        email: 'jairo@gmail.com',
        password: 'jairo',
        role: 'user',
        createdAt: new Date(),
    }
]

export async function getUserById(id: number): Promise<Users | undefined> {
    return users.find(user => user.id === id);
}

export async function existEmail(email: string): Promise<Users | undefined> { 
    return users.find(user => user.email === email);
}

export async function createUser(user: Omit<Users,'id' | 'role'>): Promise<void> {
    const lastInd: number = users[users.length-1].id;

    users.push({id: lastInd+1, name: user.name, email: user.email, password: user.password, role: 'user', createdAt: new Date()});
}

export async function editProfile(user: Omit<Users,'id | createdAt'>, id: number): Promise<void> {
    const index: number = users.findIndex(us => us.id === id);

    if(user.name) users[index].name = user.name;
    if(user.email) users[index].email = user.email;
    if(user.password) users[index].password = user.password;
}