# <p align = "center">​Hoop Scout ​</p>

##  :clipboard: Description

Colocar a descrição
***

## :computer:	 Tecnolgy and Concepts 

- JWTs
- Bcrypt
- Node.js
- TypeScript

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
        "name": "lorem ipsum",
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
        "name": "lorem ipsum",
        "password": "**********"
    }
```


## 🏁 Running the application locally

First, make the clone repository in your machine:

```
git clone https://github.com/lucasmartinso/hoop-scout-back.git
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
