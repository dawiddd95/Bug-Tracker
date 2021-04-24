# Bug tracker

This application is visit Bug tracker. Application may be use to manage projects. Application allow us to creating new projects, new tickets for this projects, creating comments for tickets. Application is based on relational database PostgreSQL, nodeJs on backend side and React on frontend side. 

## Project Status

During development.

## Table of Contents

* [Getting Started]
* [Installing]

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### Prerequisites

1. NodeJS [Download NodeJS](https://nodejs.org/en/download/)
2. PostgreSQL [Download PostgreSQL](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
3. Git [Download Git](https://git-scm.com/downloads)

### Installing

1. Create database in PostgreSQL with name tracker => CREATE DATABASE tracker;
2. Run this command in catalog of your choice: 
```bash
git clone https://github.com/dawiddd95/Bug-Tracker.git
```
3. In terminal go now to new created catalog
```bash
cd Bug-Tracker
```
4. In Bug tracker root folder run command:
```bash
cd server && npm install && cd ../ && cd client && npm install
```
5. Wait until is done
6. Go to Bug-Tracker/server/config/database.json and change development
```bash
"development": {
    "username": "<YOUR POSTGRES USERNAME>",  // for example "username": "postgres",
    "password": "<YOUR POSTGRES PASSWORD>",   // for example "password": "admin",
    "database": "tracker",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
},
```
6. Create database tables. In terminal go to Bug-Tracker/server and run command:
```bash
npx sequelize-cli db:migrate
```
7. Create seed data. In terminal go to Bug-Tracker/server and run command:
```bash
npx sequelize-cli db:seed:all
```
8. Done

### Running

1. In terminal go to Bug-Tracker/server path and run command
```bash
npm start
```
2. Open second terminal. Go to Bug-Tracker/client run command
```bash
npm start
```
3. Store runs on localhost:3000

## Technologies used

### Front-End

1. [React](https://pl.reactjs.org/)
2. [Redux](https://redux.js.org/)
3. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
4. [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
5. [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
6. [Formik](https://jaredpalmer.com/formik/) + [Yup](https://github.com/jquense/yup)
7. [Styled Components](https://styled-components.com/)
8. [Axios](https://github.com/axios/axios)
9. [Immer](https://github.com/immerjs/immer)

### Back-End

1. [NodeJS](https://nodejs.org/en/)
2. [ExpressJS](https://expressjs.com/)
3. REST API
4. [PostgreSQL database](https://www.postgresql.org/)
5. [Sequelize](https://sequelize.org/)

