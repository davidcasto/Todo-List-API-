# Hello World REST API

A simple and clean REST API built with Node.js and Express.js. This project demonstrates fundamental REST API concepts and best practices for beginners.

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [License](#license)

## ✨ Features

- Simple REST API with Express.js
- MongoDB integration with Mongoose ODM
- Environment configuration with dotenv
- Clean and organized project structure
- Status endpoint for API health checks
- Development mode with hot-reload using Nodemon

## 📁 Project Structure

```
hello-api/
├── config/
│   └── db.js                    # Database connection configuration
├── controllers/
│   └── statusController.js      # API controllers
├── routes/
│   └── statusRoutes.js          # API route definitions
├── .env                         # Environment variables (not tracked)
├── .gitignore                   # Git ignore file
├── package.json                 # Project dependencies
├── package-lock.json            # Locked dependency versions
└── server.js                    # Main application entry point
```

### File Descriptions

| File | Purpose |
|------|---------|
| `server.js` | Main Express application setup and server initialization |
| `config/db.js` | MongoDB database connection setup |
| `routes/statusRoutes.js` | Route definitions for status endpoints |
| `controllers/statusController.js` | Business logic for status requests |
| `.env` | Environment variables (PORT, DB_URI, etc.) |
| `package.json` | Project metadata and dependencies |

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0 or higher) - Comes with Node.js
- **MongoDB** - [Download](https://www.mongodb.com/try/download/community) or use MongoDB Atlas (cloud)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/davidcasto/Hello-World-REST-API.git
   cd Hello-World-REST-API
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory:
   ```bash
   touch .env
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
PORT=5000
DB_URI=mongodb://localhost:27017/hello-api
NODE_ENV=development
```

**Configuration Details:**
- `PORT`: The port on which the server will run (default: 5000)
- `DB_URI`: MongoDB connection string
  - Local: `mongodb://localhost:27017/hello-api`
  - MongoDB Atlas: `mongodb+srv://<username>:<password>@<cluster>.mongodb.net/hello-api`
- `NODE_ENV`: Environment mode (development/production)

## ▶️ Running the Application

### Development Mode (with hot-reload)
```bash
npm run dev
```
The server will start and automatically restart when you make changes to files.

### Production Mode
```bash
npm start
```
The server will run without auto-reload.

**Expected Output:**
```
Server running on port 5000
```

## 🔌 API Endpoints

### Status Check
- **Endpoint:** `GET /api/status`
- **Description:** Returns the health status of the API
- **Response:**
  ```json
  {
    "success": true,
    "message": "API is running"
  }
  ```

### Example Usage

**Using cURL:**
```bash
curl http://localhost:5000/api/status
```

**Using Postman:**
1. Open Postman
2. Create a new GET request
3. Enter URL: `http://localhost:5000/api/status`
4. Click "Send"

**Using JavaScript/Fetch:**
```javascript
fetch('http://localhost:5000/api/status')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## 🛠️ Technologies Used

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | Latest | JavaScript runtime |
| **Express.js** | ^5.2.1 | Web framework |
| **MongoDB** | Latest | NoSQL database |
| **Mongoose** | ^9.6.2 | MongoDB ODM |
| **dotenv** | ^17.4.2 | Environment variable management |
| **Nodemon** | ^3.1.14 | Development auto-reload tool |

## 📜 Scripts

Available npm scripts defined in `package.json`:

```bash
# Run in development mode with nodemon (auto-reload)
npm run dev

# Run in production mode
npm start
```

## 🔧 Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | No | 5000 | Server port |
| `DB_URI` | Yes | - | MongoDB connection string |
| `NODE_ENV` | No | development | Application environment |

## 📝 Example `.env` File

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_URI=mongodb://localhost:27017/hello-api
```

## 🔍 Troubleshooting

### "Cannot find module" error
```bash
# Solution: Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port already in use
```bash
# Change PORT in .env file or kill the process using the port
# On Windows: netstat -ano | findstr :5000
# On Mac/Linux: lsof -i :5000
```

### MongoDB connection failed
- Ensure MongoDB is running locally or MongoDB Atlas credentials are correct
- Check `DB_URI` in `.env` file
- Verify network connection

## 📚 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**David Castro**

---

**Happy Coding!** 🎉

For more information or issues, please visit the [GitHub repository](https://github.com/davidcasto/Hello-World-REST-API).
