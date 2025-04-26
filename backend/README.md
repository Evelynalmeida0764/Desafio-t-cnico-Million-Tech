# Client Registration App

This is a TypeScript application that implements a client registration system using a PostgreSQL database. The application allows users to register clients and retrieve a list of all registered clients.

## Features

- Client registration
- List all registered clients

## Technologies Used

- TypeScript
- Express.js
- PostgreSQL
- Node.js

## Project Structure

```
client-registration-app
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── clientController.ts
│   ├── routes
│   │   ├── clientRoutes.ts
│   ├── services
│   │   ├── clientService.ts
│   ├── models
│   │   ├── clientModel.ts
│   ├── database
│   │   ├── index.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd client-registration-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your PostgreSQL database and update the database connection settings in `src/database/index.ts`.

5. Run the application:
   ```
   npm start
   ```

## Usage

- To register a new client, send a POST request to `/clients` with the client details (name, email, phone).
- To list all registered clients, send a GET request to `/clients`.

## License

This project is licensed under the MIT License.