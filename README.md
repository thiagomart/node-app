# API Node

API in Node, just for expose a data from Database. 🚀


## Preparation

Install a [NodeJS](https://nodejs.org/en/download) or [NVM](https://github.com/nvm-sh/nvm) for manage the NodeJS versions, upper than v18.x

## Installation

Use the package manager [npm](https://www.npmjs.com/package/download) to install all dependencies.

- Made clone from repo, enter on folder node-app, then run it:

```bash
npm install
```

- Configure the DB setting, on file, src/models/connection.js, then change those properties:

```bash
    host: '',
    port: '',
    user: '',
    password: '',
    database: '',
```

## Usage

- For run the application, execute the command:

```bash
npm run dev
```

## Highlights

![express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MySQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![Nodemon](https://img.shields.io/badge/Nodemon-76D04B.svg?style=for-the-badge&logo=Nodemon&logoColor=white)
![Nodemon](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)

## License

[MIT](https://choosealicense.com/licenses/mit/)
# API example application

The API to the example app is described below.

## Get list of Cart

### Request

`GET /v1/cart/`

    curl -i -H 'Accept: application/json' http://localhost:3333/v1/cart

### Response

    HTTP/1.1 200 OK
    Date: Mon, 30 Oct 2023 05:07:02 GMT
    Status: 200 OK
    X-Powered-By: Express

    []
