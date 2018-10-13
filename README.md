# MIZRAPP

```
A repository for the hackathon project
```

## Setup Restfull service

```
Run this command inside api folder 

Create virtual env

	virtualenv venv

Actviate virtual env

	source venv/bin/activate

Install requirements

	pip3 install -r requirements.txt


```

## Documentation of our restfull API

### #Login
```
[POST] /login

Request

{
    email : String,
    password : String
}

Response

{
    _id : ObjectID,
    email : String,
    name : String,
    token : String
}

```

### #Registeration
```
[POST] /register

Request

{
    email : String,
    password : String,
    name : String
}

Response 

{
    _id : ObjectID,
    email : String,
    name : String,
    token : String
}

```

```
This token will be used on authorizon field of each request header
```

### #User Information
```
This request will be sent after first login.

[POST] /api/user/info

Request

{   
    user : String | {userId}
    age : integer,
    profession : String,
    gender : String | {Male or Female},
    city : String
}

Reponse status code 200
```

### #Initial App Data
```
[GET] /api/user/{userId}

Response 

{
    categories : {
        {
            _id : ObjectID,
            name : String,
            subCategories : [
                {
                    _id : ObjectID,
                    name : String,
                }
            ]
        }
    }

    ...
}
```

### #Get products list with sub category

```
[GET] /api/products/{subCategoryID}

Response

{
    products : [
        {
            _id : ObjectID,
            name : String,
            desc : String,
            price : integer | lira,
            photo : String,
            company : ObjectID,
            subCategory : ObjectID
            ...
        }
    ]
}
```


### #Post product review

```

[POST] /api/product/review

Request

{
    product : String | {productID},
    isUsed : boolean,
    rank : integer | {1 to 5},
    minPrice : integer | {lira},
    maxPrice : integer | {lira},
    user : String | {userID}
}

response status code 200
```


## Datebase Migrations

### User - users

```
{
    _id : ObjectID,
    name : String,
    email : String,
    password : String
}
```

### User Info - user_info

```
{
    _id : ObjectID,
    user : ObjectID,
    age : Integer,
    profession : String,
    gender : String | Male or Female,
    city : String
}
```

### Category - categories

```
{
    _id : ObjectID,
    name : String,
    companies : Array
}
```

### Company - companies

```
{
    _id : ObjectID,
    name : String,
    logo : String,
    subCategories : Array
}
```

### SubCategory - subcategories

```
{
    _id : ObjectID,
    name : String,
}
```

### Product - products

```
{
    _id : ObjectID,
    name : String,
    desc : String,
    price : integer | lira,
    photo : String,
    company : ObjectID,
    subCategory : ObjectID
}
```

### Review - reviews

```
{
    _id : ObjectID,
    product : ObjectID,
    isUsed : boolean,
    rank : integer | 1 to 5,
    minPrice : integer | lira,
    maxPrice : integer | lira,
    user : ObjectID
}
```
