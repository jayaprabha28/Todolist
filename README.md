#ToDo-list

This project is a basic user management system that allows users to create, update, and delete user information using React and Redux for state management.

#Features
--------------------------
* User management (Add, Update, Delete users)
* Frontend built with React and Redux
* RESTful routes using react-router-dom
* Bootstrap for styling
* Backend integration (if needed for further API functionality)

#Technologies
-------------------
* Frontend: React, Redux, Bootstrap, React Router DOM
* State Management: Redux Toolkit
* Package Manager: npm/yarn
* CSS: Custom and Bootstrap CSS

#Prerequisites
--------------------------
Node.js installed (https://nodejs.org/en/)
npm or yarn installed (comes with Node.js)
Basic understanding of React, Redux, and JavaScript

#Installed Applications/Packages
-------------------------------------
* React (create-react-app)
* Redux (@reduxjs/toolkit, react-redux)
* React Router (react-router-dom)
* Bootstrap (bootstrap)

#Commands Installed
-------------------
npm install to install dependencies (e.g., Bootstrap, Redux, React Router)
npm start to start the frontend
npm run build to create a production build


#Backend Setup
---------------------
Create a Node.js Backend:
mkdir backend
cd backend
npm init -y

#Install dependencies:
-------------
npm install express mongoose cors

#Create server.js for API routes:
-----------
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Sample route
app.get('/api/users', (req, res) => {
    res.send([{ name: "Jayaprabha", email: "jayaprabha28@gmail.com", id: 1 }]);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

#Start the backend server:
------------------
node server.js

#Frontend Setup
Clone or Create a React App:
-----------------------
npx create-react-app frontend
cd frontend

#Install Necessary Packages:
----------------
npm install redux react-redux @reduxjs/toolkit react-router-dom bootstrap

#Structure Your Frontend Components:
---------------
src/
├── components/
│   ├── Home.js
│   ├── Create.js
│   ├── Update.js
├── App.js
├── index.js
├── UserReducer.js

#Bootstrap Styling:
----------------
import "bootstrap/dist/css/bootstrap.min.css";

Run Frontend:
--------------------
npm start

#How to Run the Application
#Backend :
------------------
cd backend
node server.js


#Frontend:
-----------------
cd frontend
npm install
npm start


#Access the Application:
-----------------
The React app should be running at http://localhost:3000, and the backend (if running) at http://localhost:5000.

#Screenshort Output

#Home Page (User List)

*Displays a table with the list of users (name, email, ID).
*Users can delete or edit entries.
*A button is provided to navigate to the "Create User" page.
![Screenshot 2024-10-14 190332](https://github.com/user-attachments/assets/eaca3236-fca0-4f58-961c-a9e198571025)


*Allows users to fill in a form to add new users with a name and email.
*Once submitted, the new user is added to the user list and displayed on the Home page.
![Screenshot 2024-10-14 190432](https://github.com/user-attachments/assets/387891f8-0cc8-4a54-b795-d105b3634cd3)


#Create User Page


*Users can update the name and email of an existing user.
*Once updated, the information is reflected on the Home page.
![Screenshot 2024-10-14 190451](https://github.com/user-attachments/assets/e24df225-a61b-4e3b-8eb8-d81b1dcac38c)

#Update User Page
![Screenshot 2024-10-14 190505](https://github.com/user-attachments/assets/a79bd963-6e06-49b1-9df2-436c0076972d)


![Screenshot 2024-10-14 190533](https://github.com/user-attachments/assets/a707761f-45c4-4d49-bc5d-edfeade4102c)
#Delete
![Screenshot 2024-10-14 190649](https://github.com/user-attachments/assets/3e50bf65-8a9f-4dea-934d-82f356e4eeb1)








