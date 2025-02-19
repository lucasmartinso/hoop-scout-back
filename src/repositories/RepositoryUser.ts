import { Users } from "../entity/User";

const users: Users[] = [
    {
        id: 1,
        name: 'Fabricio',
        email: 'fabricio@gmail.com',
        password: 'fabricio',
        createdAt: new Date(),
    },
    {
        id: 2,
        name: 'Jairo',
        email: 'jairo@gmail.com',
        password: 'jairo',
        createdAt: new Date(),
    }
]


export async function getUserById(id: number): Promise<Users | undefined> {
    return users.find(user => user.id === id);
}

export async function existEmail(email: string): Promise<Users | undefined> { 
    return users.find(user => user.email === email);
}

export async function createUser(user: Omit<Users,'id'>): Promise<void> {
    const lastInd: number = users[users.length-1].id;

    users.push({id: lastInd+1, name: user.name, email: user.email, password: user.password, createdAt: new Date()});
}

export async function editProfile(user: Omit<Users,'id | createdAt'>, id: number): Promise<void> {
    const index: number = users.findIndex(us => us.id === id);

    users[index].name = user.name;
    users[index].email = user.email;
    users[index].password = user.password;
}