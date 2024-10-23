# Personal Expense Tracker

## Overview
The Personal Expense Tracker is a web application that allows users to manage their financial records by recording income and expenses. Users can retrieve past transactions and obtain summaries by category or time period.

## Technologies Used
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB (with Mongoose)


## Setup and Run Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

1. **Node.js**: 
   - Download and install Node.js from [nodejs.org](https://nodejs.org/). Make sure to install the LTS (Long Term Support) version.
   - Verify the installation by running the following command in your terminal or command prompt:
     ```bash
     node -v
     ```
     This command should display the version of Node.js installed.

2. **MongoDB**:
   - You can choose to use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (cloud solution) or install MongoDB locally.
   - **MongoDB Atlas**: Sign up for a free account and create a new cluster. Follow the setup instructions to connect to your cluster and get your connection string.
   - **Local MongoDB**: If you prefer to install MongoDB locally, download it from [mongodb.com](https://www.mongodb.com/try/download/community). Follow the installation instructions for your operating system.

### Steps to Set Up

1. **Clone the Repository**:
   - Open your terminal or command prompt and run the following command to clone the repository:
     ```bash
     https://github.com/MeeraValsk/folwAi.git
     ```
   - Replace `yourusername` and `repository-name` with your GitHub username and the name of the repository.

2. **Navigate to the Project Directory**:
   - Change into the project directory:
     ```bash
     cd repository-name
     ```

3. **Install Dependencies**:
   - Install the required npm packages by running:
     ```bash
     npm install
     ```
   - This command will read the `package.json` file and install all necessary dependencies listed under `dependencies`.

4. **Set Up Environment Variables**:
   - Create a `.env` file in the root of your project directory. This file will store your sensitive information such as your MongoDB URI and JWT secret.
   - Add the following lines to the `.env` file:
     ```
     MONGODB_URI=mongodb+srv://meeravalisk89:17bq1a0389@cluster0.6gfzurw.mongodb.net/folwAiDb?retryWrites=true&w=majority&appName=Cluster0
     JWT_SECRET=MY_SERECT_KEY_ON_SERVERSIDE
     ```
  

5. **Run the Application**:
   - Start the server using the following command:
     ```bash
     npm start
     ```
   - If everything is set up correctly, you should see a message indicating that the server is running, usually on `http://localhost:3000`.

6. **Test the API**:
   - You can use [Postman](https://www.postman.com/) to test the API endpoints.
   - Open Postman and create requests to the endpoints defined in the API documentation.

7. **Access the API**:
   - Once the server is running, you can access the API at the base URL:
     ```
     http://localhost:3000/api/v1
     ```

### Troubleshooting
- If you encounter any issues starting the server, check for errors in the terminal. Common problems include:
  - Missing environment variables
  - Incorrect MongoDB URI
  - Issues with installed dependencies (run `npm install` again)

### Stopping the Server
- To stop the server, go back to the terminal where it’s running and press `Ctrl + C`.

## Conclusion
With these instructions, you should be able to set up and run the Personal Expense Tracker application smoothly. If you have any questions or run into issues, feel free to reach out for help!



Access the API: The API will be available at http://localhost:3000/api/v1.

API Documentation:

Base URl:  http://localhost:3000/api/v1

Endpoints
1. Add a New Transaction
Endpoint: POST /transactions

description:  here adding new transction providing details
Request Body:{
  "type": "expense",
  "categoryId": "671861c1884f3db704620373",
  "amount": 9000,
  "date": "2024-10-23",
  "description": "travel Fee",
  "userId":"67185fab95c7614751ac5001"
}

Response Body:{
  "type": "expense",
  "categoryId": "671861c1884f3db704620373",
  "amount": 9000,
  "date": "2024-10-23T00:00:00.000Z",
  "description": "travel Fee",
  "userId": "67185fab95c7614751ac5001",
  "_id": "671863e5f1009e758cb14e73",
  "__v": 0
}


screenshort:
![image](https://github.com/user-attachments/assets/5400f1be-0833-4f58-afd0-77ae446cd1fb)




2. Retrieve All Transactions
Endpoint: GET /transactions
Response:


{
  "statusCode": 200,
  "data": [
    {
      "_id": "67186309f1009e758cb14e65",
      "type": "income",
      "categoryId": {
        "_id": "6718616f884f3db704620371"
      },
      "amount": 4000,
      "date": "2024-10-23T00:00:00.000Z",
      "description": "Freelance job",
      "userId": "67185fab95c7614751ac5001",
      "__v": 0
    },
    {
      "_id": "67186318f1009e758cb14e67",
      "type": "income",
      "categoryId": {
        "_id": "6718616f884f3db704620371"
      },
      "amount": 9000,
      "date": "2024-10-23T00:00:00.000Z",
      "description": "Part time job",
      "userId": "67185fab95c7614751ac5001",
      "__v": 0
    },
    {
      "_id": "67186339f1009e758cb14e69",
      "type": "income",
      "categoryId": {
        "_id": "6718616f884f3db704620371"
      },
      "amount": 7000,
      "date": "2024-10-23T00:00:00.000Z",
      "description": "Teaching",
      "userId": "67185fab95c7614751ac5001",
      "__v": 0
    },
    {
      "_id": "67186382f1009e758cb14e6b",
      "type": "expense",
      "categoryId": {
        "_id": "671861c1884f3db704620373"
      },
      "amount": 7000,
      "date": "2024-10-23T00:00:00.000Z",
      "description": "house rent",
      "userId": "67185fab95c7614751ac5001",
      "__v": 0
    },
    {
      "_id": "671863abf1009e758cb14e6d",
      "type": "expense",
      "categoryId": {
        "_id": "671861c1884f3db704620373"
      },
      "amount": 5000,
      "date": "2024-10-23T00:00:00.000Z",
      "description": "Electricity Bill",
      "userId": "67185fab95c7614751ac5001",
      "__v": 0
    }
  ],
  "count": 8,
  "message": "transaction data fetched successfully"
}


screenshort:

![image](https://github.com/user-attachments/assets/e05ad01d-fd9c-4d62-bc03-43882b7a7877)


3. Retrieve a Transaction by ID
Endpoint: GET /transactions/:id
Response:
{
  "data": {
    "_id": "67186309f1009e758cb14e65",
    "type": "income",
    "categoryId": {
      "_id": "6718616f884f3db704620371",
      "name": "Salary",
      "type": "income",
      "__v": 0
    },
    "amount": 4000,
    "date": "2024-10-23T00:00:00.000Z",
    "description": "Freelance job",
    "userId": "67185fab95c7614751ac5001",
    "__v": 0
  },
  "statusCode": 200,
  "message": "transaction Details fetcehed sucessfully"
}


screenshort:
![image](https://github.com/user-attachments/assets/7432e937-4629-48f9-b879-94021a3b87d1)


4. Update a Transaction by ID
Endpoint: PUT /transactions/:id
Request Body:{
  
  "amount": 4000
 
 
}



ResponseBody:

{
  "data": {
    "_id": "67186309f1009e758cb14e65",
    "type": "income",
    "categoryId": "6718616f884f3db704620371",
    "amount": 4000,
    "date": "2024-10-23T00:00:00.000Z",
    "description": "Freelance job",
    "userId": "67185fab95c7614751ac5001",
    "__v": 0
  },
  "statusCode": 200,
  "message": "transaction updated sucessfully"
}


screenshort:



![image](https://github.com/user-attachments/assets/42b231c0-d8b5-414b-ae34-bc6eb6bb656e)


Delete a Transaction by ID
Endpoint: DELETE /transactions/:id
Response:
{
  "data": {
    "_id": "671862eef1009e758cb14e63",
    "type": "income",
    "categoryId": "6718616f884f3db704620371",
    "amount": 4000,
    "date": "2024-10-23T00:00:00.000Z",
    "description": "Freelance job",
    "userId": "67185fab95c7614751ac5001",
    "__v": 0
  },
  "statusCode": 200,
  "message": "transaction Deleted sucessfully"
}


![image](https://github.com/user-attachments/assets/9236fc39-2c40-408a-9793-851d080b0b1e)


6. Retrieve Summary of Transactions
Endpoint: GET /summary
Response:
{
  "data": {
    "income": 20000,
    "expenses": 34000,
    "balance": -14000
  },
  "message": "Retrieve total income and expenses and balance"
}
![image](https://github.com/user-attachments/assets/13d98baf-a23e-4aa8-98b2-b108ed05ce36)
