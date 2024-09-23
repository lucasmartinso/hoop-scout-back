CREATE TYPE status_enum AS ENUM ('confirmado', 'em andamento', 'cancelado', 'finalizado');
CREATE TABLE "SERVICES"(
    "id" SERIAL NOT NULL,
    "beginDate" DATE NOT NULL,
    "finishDate" DATE NULL,
    "status" status_enum NULL,
    "price" FLOAT(53) NOT NULL,
    "comment" TEXT NULL
    "createdAt" DATE NOT NULL
);
ALTER TABLE
    "SERVICES" ADD PRIMARY KEY("id");
CREATE TABLE "USERS"(
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "number" VARCHAR(30) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" DATE NOT NULL
);
ALTER TABLE
    "USERS" ADD PRIMARY KEY("id");
CREATE TABLE "PETSSERVICE"(
    "id" SERIAL NOT NULL,
    "petId" INTEGER NOT NULL,
    "serviceId" INTEGER NOT NULL
);
ALTER TABLE
    "PETSSERVICE" ADD PRIMARY KEY("id");
CREATE TABLE "PETS"(
    "id" SERIAL NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "breed" VARCHAR(255) NOT NULL,
    "sex" VARCHAR(2) NOT NULL,
    "birthDate" DATE NOT NULL,
    "userId" INTEGER NOT NULL,
    "comment" TEXT NULL,
    "createdAt" DATE NOT NULL
);
ALTER TABLE
    "PETS" ADD PRIMARY KEY("id");
ALTER TABLE
    "PETSSERVICE" ADD CONSTRAINT "petsservice_serviceid_foreign" FOREIGN KEY("serviceId") REFERENCES "SERVICES"("id");
ALTER TABLE
    "PETS" ADD CONSTRAINT "pets_userid_foreign" FOREIGN KEY("userId") REFERENCES "USERS"("id");
ALTER TABLE
    "PETSSERVICE" ADD CONSTRAINT "petsservice_petid_foreign" FOREIGN KEY("petId") REFERENCES "PETS"("id");
