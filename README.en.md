# Welcome to the Trybesmith project repository!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   For this project, I created a medieval items store, in the form of an API, using Typescript.

    I developed all the layers of the application (Models, Services and Controllers) in code and, through this application, it is possible to perform the basic operations that can be done in a given database:
    Create, Read, Update and Delete (CRUD - Create, Read, Update and Delete).

    I created endpoints to read and write to a database using MySQL.

# Requirements

## 1 - Create an endpoint for product registration

-   The endpoint must be accessible via the path (`/products`);

-   The shipped products must be saved in the table`products`from the database;

-   The endpoint must receive the following structure:

```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

> 👉 In case the data is sent correctly
>
> -   **[It will be validated that it is possible to successfully register a product]**
>     -   The result returned to successfully register the product should be as shown below, with a_status http_`201`:
>     ```json
>       {
>         "id": 6,
>         "name": "Espada longa",
>         "amount": "30 peças de ouro",
>       }
>     ```

</details>

* * *

## 2 - Create an endpoint for the product listing

-   The endpoint must be accessible via the path (`/products`);

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

> 👉 In case the data is sent correctly
>
> -   **[It will be validated that it is possible to successfully list all products]**
>         - O resultado retornado para listar produtos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
>         ```json
>         [
>           {
>             "id": 1,
>             "name": "Poção de cura",
>             "amount": "20 gold",
>             "orderId": null
>           },
>           {
>             "id": 2,
>             "name": "Escudo do Herói",
>             "amount": "100 diamond",
>             "orderId": 1
>           }
>         ]
>         ```
>     </details>

* * *

## 3 - Create an endpoint to register users

-   The endpoint must be accessible via the path (`/users`);

-   The information of registered users must be saved in the table`users`from the database;

-   The endpoint must receive the following structure:

```json
{ 
  "username": "MAX",
  "vocation": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

> 👉 In case the data is sent correctly
>
> -   **[It will be validated that it is possible to register the user successfully]**
>     -   If the user is successfully registered, the result should be as shown below, with a_status http_`201`and returning a_token_:
>     ```json
>     {
>       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
>     }
>     ```

</details>

* * *

## 4 - Create an endpoint to list all orders

-   The endpoint must be accessible via the path (`/orders`).
-   This route should return all requests and`id`s of the products associated with them.

✨**Tip:**All products are handmade items, therefore unique. That's why it's the products that contain the`id`s of orders.

✨**Tip:**Search the official documentation of**MySQL**about the aggregation function`JSON_ARRAYAGG`, it can be very useful. 🇧🇷

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

> 👉 For orders

-   **[It will be validated that it is possible to list all orders successfully]**
        - Quando houver mais de um pedido, o resultado retornado para listar pedidos com sucesso deverá ser conforme exibido abaixo, com um _status http_ `200`:
        ```json
          [
            {
              "id": 1,
              "userId": 2,
              "productsIds": [1, 2]
            },
            {
              "id": 2,
              "userId": 1,
              "productsIds": [3, 4]
            }
          ]
        ```
    </details>

* * *

## 5 - Create an endpoint for user login

-   The endpoint must be accessible via the path (`/login`).

-   The route must receive the fields`username`e`password`, and these fields must be validated against the database.

-   a token`JWT`must be generated and returned if there is success in the_login_🇧🇷 in your_payload_must be present_id_e_username_.

-   The endpoint must receive the following structure:

```json
  {
    "username": "string",
    "password": "string"
  }
```

**⚠️ In the configuration of`JWT`do not use environment variables to avoid conflict with the evaluator.**

<details close>
 <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

> 👉 In case there are problems no login
>
> -   **[It will be validated that the "username" field is sent]**
>     -   In o_login_does not have the "username" field, the returned result must be a_status http_`400`e
>     ```json
>       { "message": "\"username\" is required" }
>     ```

-   **[It will be validated that the field "password" is sent]**
    -   In o_login_does not have the "password" field, the returned result must be a_status http_`400`
    ```json
      { "message": "\"password\" is required" }
    ```

-   **[It will validate that it is not possible to login with an invalid username]**
    -   In o_login_has an invalid username, the result returned should be one_status http_`401`e
    ```json
      { "message": "Username or password invalid" }
    ```

-   **[It will validate that it is not possible to login with an invalid password]**

    -   If the login has an invalid password, the result returned should be a_status http_`401`e
        ```json
          { "message": "Username or password invalid" }
        ```

    <br>

    > 👉 In case the data is sent correctly

-   **[It will validate that it is possible to login successfully]**
        - Se o login foi feito com sucesso, o resultado deverá ser um _status http_ `200` e deverá retornar um _token_:
        ```json
        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        }
        ```
    </details>

* * *

## Bonus Requirements

## 6 - Create product validations

-   Are we going to carry out the validations regarding the creation of the endpoint of requirement 1?

-   In this validation requirement, it is not necessary to connect with the database

<details close>

  <summary>As seguintes validações deverão ser realizadas:</summary>

  <br>

> 👉 For name
>
> -   **[It will be validated that the field "name" is mandatory]**
>     -   If the "name" field is not informed, the returned result must be a_status http_`400`e
>     ```json
>       { "message": "\"name\" is required" }
>     ```

-   **[It will be validated that the field "name" has the string type]**
    -   If the field "name" is not of type`string`, the result returned should be a_status http_`422`e
    ```json
      { "message": "\"name\" must be a string" }
    ```

-   **[It will be validated that the field "name" is a string with more than 2 characters]**

    -   If the "name" field is not a string of more than 2 characters, the returned result must be a_status http_`422`e
        ```json
          { "message": "\"name\" length must be at least 3 characters long" }
        ```

    <br>

    > 👉 Para amount

-   **[It will be validated that the field "amount" is mandatory]**
    -   If the "amount" field is not informed, the returned result must be a_status http_`400`e
    ```json
      { "message": "\"amount\" is required" }
    ```

-   **[It will be validated that the field "amount" has the string type]**
    -   If the "amount" field is not of type`string`, the result returned should be a_status http_`422`e
    ```json
      { "message": "\"amount\" must be a string" }
    ```

-   **[It will be validated that the "amount" field is a string with more than 2 characters]**

    -   If the "amount" field is not a string longer than 2 characters, the returned result must be a_status http_`422`e
        ```json
          { "message": "\"amount\" length must be at least 3 characters long" }
        ```

    <br>

</details>

* * *

## 7 - Create the validations for the users

-   Are we going to carry out the validations regarding the creation of the endpoint of requirement 3?

-   In this validation requirement, it is not necessary to connect with the database

<details close>
  <summary>As seguintes validações deverão ser realizadas:</summary>

  <br>

> 👉 Para username
>
> -   **[It will be validated that the field "username" is mandatory]**
>     -   If the request does not have the "username" field, the returned result must be a_status http_`400`e
>     ```json
>       { "message": "\"username\" is required" }
>     ```

-   **[It will be validated that the "username" field has the string type]**
    -   If the "username" field is not of type`string`, the result returned should be a_status http_`422`e
    ```json
      { "message": "\"username\" must be a string" }
    ```

-   **[It will be validated that the "username" field is a string with more than 2 characters]**

    -   If the "username" field is not of type`string`with more than 2 characters, the result returned must be a_status http_`422`e
        ```json
          { "message": "\"username\" length must be at least 3 characters long" }
        ```

    <br>

    > 👉 Para vocation

-   **[It will be validated that the field "vocation" is mandatory]**
    -   If the request does not have the "vocation" field, the returned result must be a_status http_`400`e
    ```json
      { "message": "\"vocation\" is required" }
    ```

-   **[It will be validated that the field "vocation" has the string type]**
    -   If the "vocation" field is not of type`string`, the result returned should be a_status http_`422`e
    ```json
      { "message": "\"vocation\" must be a string" }
    ```

-   **[It will be validated that the "vocation" field is a string with more than 2 characters]**

    -   If the "vocation" field is not of type`string`with more than 2 characters, the result returned must be a_status http_`422`e
        ```json
          { "message": "\"vocation\" length must be at least 3 characters long" }
        ```

    <br>

    > 👉 For level

-   **[It will be validated that the field "level" is mandatory]**
    -   If the user person does not have the "level" field, the returned result must be a_status http_`400`e
    ```json
      { "message": "\"level\" is required" }
    ```

-   **[It will be validated that the field "level" has type number]**
    -   If the "level" field is not of type`number`, the result returned should be a_status http_`422`e
    ```json
      { "message": "\"level\" must be a number" }
    ```

-   **[It will be validated that the "level" field must be a number greater than 0]**

    -   If the "level" field is not of type`number`greater than 0, the result returned must be a_status http_`422`e
        ```json
          { "message": "\"level\" must be greater than or equal to 1" }
        ```

    <br>

    > 👉 Para password

-   **[It will be validated that the field "password" is mandatory]**
    -   If the request does not have the "password" field, the returned result must be a_status http_`400`e
    ```json
      { "message": "\"password\" is required" }
    ```

-   **[It will be validated that the "password" field has the string type]**
    -   If the "password" field is not of type`string`, the result returned should be a_status http_`422`e
    ```json
      { "message": "\"password\" must be a string" }
    ```

-   **[It will be validated that the "password" field is a string with 8 or more characters]**

    -   If the "password" field is not of type`string`with more than 8 characters, the result returned must be a_status http_`422`e
        ```json
          { "message": "\"password\" length must be at least 8 characters long" }
        ```

    <br>

</details>

* * *

## 8 - Create an endpoint to register an order

-   The endpoint must be accessible via the path (`/orders`);

-   An order can only be created if the user is logged in and the token`JWT`validated;

-   Submitted orders must be saved in the table`orders`from the database, saving`id`of the person using the application who made that request.

-   the table`products`must also be changed by updating all products with the`id`included in the key`productsIds`of the requisition, and adding in these products the`orderId`of the newly created order;

-   The endpoint must receive the following structure:

```json
  {
    "productsIds": [1, 2]
  }
```

**⚠️ When registering an order, remember to update the respective products in the database, including the created order number in them.**

<details close>
  <summary>Além disso, as seguintes verificações serão feitas:</summary>

  <br>

> 👉 Para token
>
> -   **[It will be validated that it is not possible to register requests without a token]**
>     -   If the token is not informed, the returned result must be a_status http_`401`e
>     ```json
>       { "message": "Token not found" }
>     ```

-   **[It will be validated that it is not possible to register an order with an invalid token]**

    -   If the informed token is not valid, the returned result must be a_status http_`401`e
        ```json
          { "message": "Invalid token" }
        ```

    <br>

    > 👉 Para products

-   **[It will be validated that the field "productsIds" is mandatory]**
    -   If the request body does not have the "productsIds" field, the returned result must be a_status http_`400`e
    ```json
      { "message": "\"productsIds\" is required" }
    ```

-   **[It will be validated that it is not possible to create an order with the "productsIds" field not being an array]**
    -   If the value of the "productsIds" field is not an array, the returned result must be an_status http_`422`e
    ```json
      { "message": "\"productsIds\" must be an array" }
    ```

-   **[It will be validated that it is not possible to register an order if the "productsIds" field is an empty array]**

    -   If the "productsIds" field has an empty array, the returned result must be a_status http_`422`e
        ```json
          { "message": "\"productsIds\" must include only numbers" }
        ```

    <br>

    > 👉 In case the data is sent correctly

-   **[It will be validated that it is possible to successfully create an order with 1 item]**
    -   The result returned to successfully register an order should be as shown below, with a_status http_`201`:
    ```json
      {
        "userId": 1,
        "productsIds": [1],
      }
    ```

-   **[It will validate that it is possible to successfully create an order with multiple items]**
        - O resultado retornado para cadastrar um pedido com sucesso deverá ser conforme exibido abaixo, com um _status http_ `201`:
        ```json
          {
            "userId": 1,
            "productsIds": [1, 2]
          }
        ```
    </details>

* * *
