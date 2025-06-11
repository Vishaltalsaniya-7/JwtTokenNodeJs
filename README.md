# JWT Token Authentication API

This is a Node.js-based backend project demonstrating JWT (JSON Web Token) authentication. It uses MongoDB for data storage and Docker for containerization.

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB (via Mongoose)
- Docker & Docker Compose
- JWT for authentication

## 🗂️ Project Structure

jwtToken/
│
├── app.js # Entry point of the application
├── config/ # MongoDB connection config
├── controller/ # Controllers for business logic
├── middelware/ # JWT auth middleware
├── models/ # Mongoose models
├── routes/ # Express routes
├── docker-compose.yml # Docker Compose config
├── package.json
└── README.md



## ⚙️ Setup Instructions

### 🔧 Local Setup (Without Docker)

1. **Install dependencies**
   ```bash
  - npm install

   - node app.js


**2 **Run using Docker Compose**

docker-compose up --build

**3 **🔐 API Authentication**

**Endpoints**
Method	Endpoint	Description
POST	/api/signup	Register new user
POST	/api/login	Login and get token
GET	/api/protected	Protected route (JWT)