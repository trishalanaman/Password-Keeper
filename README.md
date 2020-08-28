# Password_keeper/Manager App

***A web application that keeps a record of users' passwords. Users can log into the panel to see the username and passwords of websites they have saved.***

## Features of the project:
### 1. User account registration:
Create a user account. These credentials will be used to log into this panel.

***Path:*** localhost:3000/app/user  [POST]
> Request Data: { 'username': str, 'password': str }

> Response Data: { 'status': 'account created' }

### 2. User account login:
Provide ability to log into the panel using the user credentials.

***Path:*** localhost:3000/app/user/auth [POST]
> Request Data: { 'username': str, 'password': str }

> Response Data: { 'status': 'success', 'userId': int }

### 3.Save a new username & password for website:
Provide ability for user to add new username & password for a website.
List returned should be belong to the userId passed with the request.

***Path:*** localhost:3000/app/sites/:userId [POST]
> Request Data: { 'website': str, 'username': str, 'password': str }

> Response Data: { 'status': 'success' }

### 4.List of saved usernames and passwords for different websites:
Provide ability for user to see list of previously stored website usernames & passwords.

***Path:*** localhost:3000/app/sites/list/:userId [GET]
> Request Data: None

> Response Data: { List of stored website username & passwords }

Clone this repo and extract it's content. Then press Ctrl + Alt + T or open terminal in the same directory. Then enter following commands on the terminal
```bash
npm init
npm install --save express
npm install --save-dev nodemon
npm install bcrypt
npm install body-parser
npm install --save mongoose
```
To run the server, type nodemon server.js or node server.js

## Tech Stack:
***1.*** Web-Server: NodeJS, Express

***2.*** Database: MongoDB
