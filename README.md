[![CircleCI](https://circleci.com/gh/thijulio/flashcards.svg?style=shield&circle-token=06fe902b3c1027a9f497e4b00631a040b3fe93a7)](https://app.circleci.com/pipelines/github/thijulio)


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)



## General info
This project is simple Lorem ipsum dolor amet.
	
## Technologies
Project is created with:
* [Nx](https://nrwl.io/nx)
* [Angular](https://angular.io/)
* [NestJS](https://docs.nestjs.com/)
* [MongoDb](https://docs.mongodb.com/)
* [@ngx-translate](https://github.com/ngx-translate/core)



## Getting Started

#### Setup
```
git clone https://github.com/thijulio/flashcards.git
yarn install

$ touch .env

JWT_SECRET_KEY="XXXXXXX"
DATABASE_CONNECTION_STRING="mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@cluster0-rfvjp.mongodb.net/${DATABASE_ENV}?retryWrites=true&w=majority"
DATABASE_ENV="DEV"
DATABASE_PASSWORD="password"
DATABASE_USER="database_user"

```

#### Running Web
```
yarn start
```

#### Running Api
```
yarn start api
```