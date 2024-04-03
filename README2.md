  

# ARSENAL FANS PAGE 

Welcome to Arsenal fans page. This is an Angular application for managing Arsenal upcoming football matches and see players of interest and short details about them. It provides various functionalities for users to create and view matches, manage players, and perform searches within the system.
This Angular application interacts with the SoftUni practice server, offering a seamless experience for football enthusiasts especially Arsenal fans.

[![Angular](https://img.shields.io/badge/Angular-✓-blue)]() [![Angular-Material](https://img.shields.io/badge/Angular--Material-✓-important)]()  [![SoftUni Practice Server](https://img.shields.io/badge/SoftUni_Practice_Server-✓-orange)]() [![Bootstrap](https://img.shields.io/badge/Bootstrap-✓-red)]() 




## Test User - email: george@abv.bg ,password: 123456

## Admin - email: peter@abv.bg password:123456


## Getting Started
To get started with this project, follow these instructions:

### Server part Setup

Navigate to the Server Directory:

```bash
cd server
```

Install Server Dependencies and Start the Server: 

Execute the following commands in order to start the server.
```bash
npm install
```
```bash
npm run client
```
```bash
npm run build
```
```bash
npm start
```

### Running the Server:
Once the server is started, it will listen for requests on:
http://localhost:3030/

### Client Application Setup:

Clone the Repository: You can clone the repository using the following command or 
download it as a ZIP file and extract it on your computer.
git clone https://github.com/p0p81/Angular-Project

Navigate to the Project Directory:

Use the terminal to navigate to the project directory.
cd ngProject

### Install Dependencies:

Install all the necessary dependencies by running the following command in your terminal:

```bash
npm install
```

Run the Client Part: Start the Angular development server with this command:
```bash
ng serve
``` 
Open the Project: Access the application by opening the following URL in a web 
browser: http://localhost:4200


## Backend Server
For backend functionalities such as user authentication, marathon management, and 
event handling, this project interfaces with a backend server running on 
localhost.




## Features
Our Angular project includes the following features:


- **Guest User View**:
- Register:  New users can create an account by providing necessary information.
- Login: Users can log in using their credentials.
- Home:  Home page shows the next 2 games of our favorite club.
- Players/Catalog: Guests can only see the catalog images, but for more, they are redirected to sign in page.

- **Authenticated User View**:
- Home: Home page shows the next 2 games of our favorite club.
- Players/Catalog: Users can browse through the available players in the catalog and have the option to view more info.
- Player/MoreInfo: Shows details for the selected player.
- Search: Available option to look for a specific player by squad 'position' criteria.
- Logout: Users can securely log out of their accounts.

- **Admin Management - CRUD operations**:
- Create - Add Player: Admin can add/create new players.
- Edit Player: Admin can edit the details of the players.
- Delete Player: Admin can delete players.
- Create -Add Matches:  Admin can add next football matches.





## Usage
To use this application effectively, follow these guidelines:

- **Login/Register**: If you're a new user, register for an account. If you're an 
existing user, log in using your credentials.
- **Browse Players**: Explore the available players in the catalog.
- **Add Player**: If you're the admin, add/create a new player by providing 
necessary details.
- **Add Matches**: If you're the admin, add/create a next matches by providing 
necessary details.
- **View More Info / Details**: Click on a specific player to view detailed information.
- **Edit/Delete Player**: If you're the admin, you can edit player 
details or delete it entirely.


-**Contributing**
If you'd like to contribute to the project, feel free to submit pull requests or open issues. Your feedback and contributions are highly appreciated.

-**License**
This project is licensed under the MIT License.

Enjoy using Arsenal fan page! If you have any questions or encounter issues, please don't hesitate to reach out.

