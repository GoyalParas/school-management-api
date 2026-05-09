# School Management API

A Node.js API for managing school data with proximity-based sorting.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up MySQL database:
   - Create a MySQL database named `school_management`
   - Run the schema.sql file to create the tables

3. Configure environment variables:
   - Update `.env` file with your MySQL credentials

4. Start the server:
   ```
   npm start
   ```

## APIs

### Add School
- **Endpoint:** `POST /api/schools/addSchool`
- **Payload:**
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.3456,
    "longitude": 78.9012
  }
  ```

### List Schools
- **Endpoint:** `GET /api/schools/listSchools?latitude=12.3456&longitude=78.9012`
- **Response:** List of schools sorted by distance

## Deployment

### Local Development
- Ensure MySQL is running locally
- Update `.env` with local database credentials

### Production Deployment
For production deployment, you can use platforms like:
- **Railway**: Free tier available, supports Node.js and MySQL
- **Render**: Free tier for web services and databases
- **Heroku**: With ClearDB add-on for MySQL

#### Railway Deployment Steps:
1. Create a Railway account
2. Connect your GitHub repository
3. Add a MySQL database service
4. Set environment variables in Railway dashboard
5. Deploy

#### Environment Variables for Production:
```
DB_HOST=<your_db_host>
DB_USER=<your_db_user>
DB_PASSWORD=<your_db_password>
DB_NAME=<your_db_name>
PORT=3000
```

## Postman Collection

Import the `SchoolManagementAPI.postman_collection.json` file into Postman for testing.