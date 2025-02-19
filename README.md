# <p align = "center">​Hoop Scout ​</p>

<p align="center">
   <img src="https://cdn.dribbble.com/users/5720644/screenshots/13912339/media/cfc570f6891e4aef4ae3c5282a767847.gif" width="600" height="400" object-fit="cover"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-lucasmartinso-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/Vitorlealm/familia-inu-service-ts?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

Colocar a descrição
***

## :computer:	 Tecnolgy and Concepts 

- JWTs
- Bcrypt
- Node.js
- TypeScript
- PostgresSQL

***

## :rocket: Routes

### 👥 Users 

```yml
GET /user/profile (autentify)
    - Route to get personal info
    - headers: { "Authorization": `Bearer ${token}` }
    - body:{}
```
    
```yml 
POST /signup
    - Route to create acount on the plataform
    - headers: {}
    - body: {
        "email": "lorem@domain.com",
        "name": "lorem ipsum"
        "number": "123456789",
        "password": "**********"
    }
```

```yml 
POST /login
    - Route to make the login to acess the CRUD
    - headers: {}
    - body: {
        "email": "lorem@domain.com",
        "password": "**********"
    }
```

```yml 
PUT /user/edit (autentify)
    - Route to certify the user is logged to edit and acess sensitive CRUD info 
    - headers: {  "Authorization": `Bearer ${token}` }
    - body: {
        "email": "lorem@domain.com",
        "name": "lorem ipsum"
        "number": "123456789",
        "password": "**********"
    }
```

```yml 
DELETE /user/delete (autentify)
    - Route to certify the user is logged to edit and acess sensitive CRUD info 
    - headers: {  "Authorization": `Bearer ${token}` }
    - body: {}
```

## 🏁 Running the application locally

First, make the clone repository in your machine:

```
git clone https://github.com/Vitorlealm/familia-inu-service-ts.git
```

After, inside the folder, run the comand to install the dependencies.

```
npm install
```
Config the .env, .env.test and .env.development based on .env.example

To finish the process, to init the server
```
npm start or npm run dev
```

:stop_sign: Don't forget to repeat the sequence above with [repository-do-front](https://github.com/) that contains the interface of aplication, to test the project per complet.
