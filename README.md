# ToDofy (An application for To-Do list)
Todofy is a MERN-based application that is used to manage the To-Do Lists. It was built under an assignment given by Khan Global Studies Pvt. Ltd..

## Technology Stacks Used
### Frontend
- JavaScript
- ReactJS
- Redux Toolkit
- Tailwind CSS

### Backend
- Express.js
- Node.js
- MongoDB

### Deployed Link
https://todofy-xlln.onrender.com/

### Guide to start the application

NOTE - Make sure you have `Node.js` installed on your machine. 

1. Clone the repository on your local machine.
```
git clone https://github.com/mohdtaha-cpp/todofy.git
```
2. Change the current working directory to the client folder and install the dependencies.
```
cd client && npm install
``` 
3. Change the current working directory from the root folder to the server folder and install the dependencies.
```
cd server && npm install
```
4. Start the frontend application (running on `PORT=3000`).
```
cd client && npm run start
```
5. Create an `.env file` inside the server folder and assign the environment variables with the suitable values.
```
DB_USERNAME=<username>
DB_PASSWORD=<password>
```
6. Start the backend application and connect it with the MongoDB instance.
```
nodemon index.js
```
You should get this as an expected console output -
<img src="https://github.com/mohdtaha-cpp/todofy/assets/81344393/1abd5328-e4b3-4356-80d7-8247d6337d7e" height="350" width="900" />

### Features implemented
- Add tasks (CRUD operations)
- Update/Edit tasks
- Delete Tasks
- Persistence of tasks on refresh
- Mobile Responsive Application

### Future Scope
- Implement sorting and filtering functionality for tasks.
- Implement user authentication and authorization with JWT or OAuth.

### User Interface
#### All To-Dos
![image](https://github.com/mohdtaha-cpp/todofy/assets/81344393/a6065e19-c241-408e-9e0d-e3911062b6b6)

#### Active To-Dos
![image](https://github.com/mohdtaha-cpp/todofy/assets/81344393/7ef4a62f-c9b1-4a5e-a646-7ee9d6b2652b)

#### Done To-Dos
![image](https://github.com/mohdtaha-cpp/todofy/assets/81344393/87c5b15d-374d-49cd-b2d1-ce4656c6f259)



