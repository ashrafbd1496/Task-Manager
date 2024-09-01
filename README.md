# Task Management App

    -Used React Express Mongo

### Steps to test the project

    - git clone https://github.com/ashrafbd1496/Task-Management-App.git
    - cd Task-Management-App
    - For the Backend
        - cd backend
        - npm install
    -For the Frontend
        - cd ../frontend
        - npm install
    - Setup Environment variables
        - create .env.example in the backend
        - MONGO_URI=mongodb://localhost:27017 taskdb PORT=3000
        - create .env file in the backend
        - cd backend
        - cp .env.example .env
    - Run the Backend Server
        - cd backend
        - node index.js
        -If you want to allow the user to start both frontend and backend easily in development mode, you can create a root package.json with scripts to run both servers simultaneously using concurrently.
        - {
            "name": "project-name",
            "version": "1.0.0",
            "scripts": {
                "start": "concurrently \"npm start --prefix backend\" \"npm start --prefix frontend\"",
                "client": "npm start --prefix frontend",
                "server": "npm start --prefix backend"
            },
            "devDependencies": {
                "concurrently": "^7.0.0"
            }
            }
        - npm install
        - npm start
    -Access the Application
        - Now you can browse 'https://localhost:3000'

### Switching Between Development and Production

    -Development:

        Run npm start in the frontend directory to use the development server.
        Run node index.js in the backend directory to start the backend separately.

    -Production:

        Run npm run build in the frontend directory to create the production build.
        Run node index.js in the backend directory, ensuring your backend serves the build files.

    - You have to run mongoDB at first.
        -command to start mongoDB- sudo systemctl start mongod
    -Fronend and Backend running port can conflict, then
        -change the backend port into - 5000,
        -change inside frontend App.js port 3000 to 5000
        -restart node index.js and npm start
# Task-Manager
