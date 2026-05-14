# Todo List API

A simple and efficient REST API for managing todo items. Built with Node.js, Express, and MongoDB.

## Features

- ✅ Create, read, update, and delete (CRUD) todos
- ✅ RESTful API design
- ✅ MongoDB integration with Mongoose
- ✅ CORS enabled for cross-origin requests
- ✅ Error handling and validation
- ✅ Environment variables support

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)
- **MongoDB** (local or cloud instance)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/davidcasto/Todo-List-API-.git
   cd Todo-List-API-
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add your configuration:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/todo_db
   NODE_ENV=development
   ```

   Replace `mongodb://localhost:27017/todo_db` with your MongoDB connection string.

## Running the Server

### Development Mode (with auto-reload)

```bash
npm run dev
```

### Production Mode

```bash
npm start
```

The server will run on `http://localhost:5000` (or your specified PORT).

## API Endpoints

### Get All Todos

```http
GET /todos
```

**Response:**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "title": "Learn Node.js",
      "description": "Complete Node.js course",
      "completed": false,
      "createdAt": "2026-05-14T10:00:00.000Z"
    }
  ]
}
```

### Get Todo by ID

```http
GET /todos/:id
```

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Learn Node.js",
    "description": "Complete Node.js course",
    "completed": false,
    "createdAt": "2026-05-14T10:00:00.000Z"
  }
}
```

### Create a New Todo

```http
POST /todos
Content-Type: application/json

{
  "title": "Learn Node.js",
  "description": "Complete Node.js course"
}
```

**Response:**

```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Learn Node.js",
    "description": "Complete Node.js course",
    "completed": false,
    "createdAt": "2026-05-14T10:00:00.000Z"
  }
}
```

### Update a Todo

```http
PUT /todos/:id
Content-Type: application/json

{
  "title": "Learn Express.js",
  "description": "Complete Express.js course",
  "completed": true
}
```

### Delete a Todo

```http
DELETE /todos/:id
```

**Response:**

```json
{
  "success": true,
  "message": "Todo deleted successfully"
}
```

## Project Structure

```
todo_api/
├── config/
│   └── db.js              # MongoDB connection configuration
├── controllers/
│   └── todoController.js  # Request handlers for todo operations
├── models/
│   └── todoModel.js       # Mongoose schema and model
├── routes/
│   └── todoRoutes.js      # API route definitions
├── .env                   # Environment variables (create this)
├── .gitignore             # Git ignore file
├── package.json           # Project dependencies
├── server.js              # Express server entry point
└── README.md              # This file
```

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Middleware:** CORS, body-parser
- **Dev Tools:** Nodemon

## Dependencies

- `express` - Web application framework
- `mongoose` - MongoDB object modeling
- `cors` - Enable cross-origin requests
- `dotenv` - Environment variable management

## Dev Dependencies

- `nodemon` - Auto-restart server during development

## Error Handling

The API returns appropriate HTTP status codes:

- `200 OK` - Successful request
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request data
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## Example Usage with cURL

```bash
# Get all todos
curl http://localhost:5000/todos

# Create a new todo
curl -X POST http://localhost:5000/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Learn API design","description":"Master REST API principles"}'

# Get a specific todo
curl http://localhost:5000/todos/507f1f77bcf86cd799439011

# Update a todo
curl -X PUT http://localhost:5000/todos/507f1f77bcf86cd799439011 \
  -H "Content-Type: application/json" \
  -d '{"title":"Advanced Node.js","completed":true}'

# Delete a todo
curl -X DELETE http://localhost:5000/todos/507f1f77bcf86cd799439011
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the ISC License - see the package.json file for details.

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/davidcasto/Todo-List-API-).

---

**Happy coding! 🚀**
