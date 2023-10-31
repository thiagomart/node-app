# API Node

API in Node, just for expose a data from Database. 🚀


## Preparation

- Install a [NodeJS](https://nodejs.org/en/download) or [NVM](https://github.com/nvm-sh/nvm) for manage the NodeJS versions, upper than v18.x

- <b> <i>Need a integration with DB, we provide a script inside the code, it's for MySQL. </b> </i>

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

Examples about some contracts from exposed endpoints

## Get list of Cart

### Request

`GET /v1/cart/`

    curl -i -H 'Accept: application/json' http://localhost:3333/v1/cart

### Response

    HTTP/1.1 200 OK
    Date: Mon, 30 Oct 2023 05:07:02 GMT
    Status: 200 OK
    X-Powered-By: Express

    {
	"data": [
		{
			"id": 1,
			"mail_user": "user@mail.com",
			"sub_total": "2.00",
			"discounts": "1.00",
			"taxes": "0.75",
			"total": "2.75",
			"product_id": 3
		},
		{...},
		{...},
		{...}
	]
    }

## Create a new Cart

### Request

`POST /v1/cart/`
    
    curl --request POST \
    --url http://localhost:3333/v1/cart \
    --header 'Content-Type: application/json' \
    --header 'User-Agent: insomnia/8.2.0' \
    --data '{
        "mail_user": "mail@email.com",
        "product_id": 0,
        "sub_total": 0,
        "discounts": 0.20,
        "taxes": 0.75,
        "total": 1
    }'

### Response

    HTTP/1.1 201 Created
    Status: 201 Created
    Content-Type: application/json
    
    {"message":"Success"}
    

## Get a Cart By Id

### Request

`GET /v1/cart/:id`

    curl --request GET \
    --url http://localhost:3333/v1/cart/2 \
    --header 'Content-Type: application/json' \
    --header 'User-Agent: insomnia/8.2.0'

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json
    
    {
	"data": [
		    {
                "id": 2,
                "mail_user": "user@email.com",
                "sub_total": "2.00",
                "discounts": "1.00",
                "taxes": "0.75",
                "total": "2.75",
                "product_id": 3
		    }
	    ]
    }

## Update a Cart

### Request

`PUT /v1/cart/:id`

    curl --request PUT \
    --url http://localhost:3333/v1/cart/2 \
    --header 'Content-Type: application/json' \
    --header 'User-Agent: insomnia/8.2.0' \
    --data '{
        "mail_user": "user@mail.com",
        "product_id": 3,
        "sub_total": 2,
        "discounts": 1,
        "taxes": 0.75,
        "total": 2.75
    }'

### Response

    HTTP/1.1 204 No Content
    Status: 204 No Content
    

## Delete Cart

### Request

`DELETE /v1/cart/:id`

    curl --request DELETE \
    --url http://localhost:3333/v1/cart/3 \
    --header 'Content-Type: application/json' \
    --header 'User-Agent: insomnia/8.2.0'

### Response
 
    HTTP/1.1 204 No Content
    Status: 204 No Content


# Product

## Get List from Product
### Request

`GET /v1/product/`

    curl -i -H 'Accept: application/json' http://localhost:3333/v1/product

### Response

    HTTP/1.1 200 OK
    Status: 200 OK

    {
        "data": [
            {
                "id": 1,
                "description": "Lorem ipsum dolor sit amet, consectetur",
                "short_desc": "Lorem ipsum",
                "name": "Lorem ipsum",
                "price": "2.00"
            },
            {...},
            {...},
            {...},
            {...},
            {...}
        ]
    }

## Create a new Product

### Request

`POST /v1/product/`
    
    curl --request POST \
    --url http://localhost:3333/v1/product \
    --header 'Content-Type: application/json' \
    --header 'User-Agent: insomnia/8.2.0' \
    --data '{
        "description": "Lorem ipsum",
        "short_desc": "ipsum",
        "name": "Lorem",
        "price": 7.50
    }'

### Response

    HTTP/1.1 201 Created
    Status: 201 Created
    Content-Type: application/json
    
    {"message":"Success"}
    

## Get a Product By Id

### Request

`GET /v1/product/:id`

    curl --request GET \
    --url http://localhost:3333/v1/product/2 \
    --header 'Content-Type: application/json' \
    --header 'User-Agent: insomnia/8.2.0'

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Content-Type: application/json
    {
        "data": [
            {
                "id": 1,
                "description": "Lorem ipsum dolor sit amet, consectetur",
                "short_desc": "Lorem ipsum",
                "name": "Lorem",
                "price": "2.00"
            }
        ]
    }

## Update a Product

### Request

`PUT /v1/product/:id`

    curl --request PUT \
    --url http://localhost:3333/v1/product/1 \
    --header 'Content-Type: application/json' \
    --data '{
        "description": "Lorem ipsum",
        "short_desc": "ipsum",
        "name": "Lorem",
        "price": 9.50
    }'

### Response

    HTTP/1.1 204 No Content
    Status: 204 No Content
    

## Delete Product

### Request

`DELETE /v1/product/:id`

    curl --request DELETE \
    --url http://localhost:3333/v1/product/1 \
    --header 'Content-Type: application/json' 

### Response
 
    HTTP/1.1 204 No Content
    Status: 204 No Content