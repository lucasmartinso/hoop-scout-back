import { Request, Response} from "express";
import { Users } from "../entity/User";
import * as userService from "../service/ServiceUser";
import connection from "../database/postgres";

export class ControllerUser {
    public async getInfo(req: Request, res: Response) {
        const { id }: { id: number } = res.locals.user;
        const user: Users = await userService.getUserInfo(id);

        return res.status(200).json(user);
    }

    public async login(req: Request, res: Response) {
        const user: Omit<Users,'id | createdAt | name'> = req.body;

        const token: string = await userService.login(user);

        return res.status(200).send({token});
    }

    public async signup(req: Request, res: Response) {
        const user: Omit<Users,'id | createdAt'> = req.body;

        await userService.signup(user);

        return res.status(201).send("Usuário criado com sucesso");
    }

    public async editProfile(req: Request, res: Response) {
        const { id }: { id: number } = res.locals.user;
        const user: Omit<Users,'id | createdAt'> = req.body;

        await userService.editProfile(user, id);

        return res.status(200).send("Perfil editado com sucesso");
    }

    public async verifyAuthUser(req: Request, res: Response) {
        return res.status(200).send("Perfil com autorizacao atleta");
    }

    public async verifyAuthAthlete(req: Request, res: Response) {
        await connection.query(`
            CREATE TABLE "User"(
                "id" SERIAL NOT NULL,
                "name" TEXT NOT NULL,
                "email" TEXT NOT NULL,
                "password" TEXT NOT NULL,
                "role" TEXT NOT NULL,
                "createdAt" DATE NOT NULL
            );
            ALTER TABLE
                "User" ADD PRIMARY KEY("id");
            ALTER TABLE
                "User" ADD CONSTRAINT "user_email_unique" UNIQUE("email");
            CREATE TABLE "Athlete"(
                "id" SERIAL NOT NULL,
                "userId" INTEGER NOT NULL,
                "height" TEXT NOT NULL,
                "weight" TEXT NOT NULL,
                "age" INTEGER NOT NULL,
                "freeThrow" TEXT NOT NULL,
                "longShot" TEXT NOT NULL,
                "shortShot" TEXT NOT NULL,
                "assistsGame" INTEGER NOT NULL
            );
            ALTER TABLE
                "Athlete" ADD PRIMARY KEY("id");
            ALTER TABLE
                "Athlete" ADD CONSTRAINT "athlete_userid_unique" UNIQUE("userId");
            ALTER TABLE
                "Athlete" ADD CONSTRAINT "athlete_userid_foreign" FOREIGN KEY("userId") REFERENCES "User"("id");
            ALTER TABLE "Athlete" 
                ADD COLUMN "coachId" INTEGER NOT NULL, 
                ADD COLUMN "createdAt" TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
            ALTER TABLE "Athlete" 
                ADD CONSTRAINT fk_coach FOREIGN KEY ("coachId") REFERENCES "User"(id) ON DELETE SET NULL;
        `)

        return res.status(200).send("Perfil com autorizacao de treinador");
    }

    public async verifyAuthCoach(req: Request, res: Response) {
        return res.status(200).send("Perfil com autorizacao de treinador");
    }
}