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
CREATE TABLE "Coach"(
    "id" SERIAL NOT NULL,
    "age" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATE NOT NULL
);
ALTER TABLE
    "Coach" ADD PRIMARY KEY("id");
ALTER TABLE
    "Coach" ADD CONSTRAINT "coach_userid_unique" UNIQUE("userId");
ALTER TABLE
    "Ratings" ADD PRIMARY KEY("id");
ALTER TABLE
    "Ratings" ADD CONSTRAINT "ratings_coachid_foreign" FOREIGN KEY("coachId") REFERENCES "Coach"("id");
ALTER TABLE
    "Athlete" ADD CONSTRAINT "athlete_userid_foreign" FOREIGN KEY("userId") REFERENCES "User"("id");
ALTER TABLE
    "Ratings" ADD CONSTRAINT "ratings_athleteid_foreign" FOREIGN KEY("athleteId") REFERENCES "Athlete"("id");
ALTER TABLE
    "Coach" ADD CONSTRAINT "coach_userid_foreign" FOREIGN KEY("userId") REFERENCES "User"("id");