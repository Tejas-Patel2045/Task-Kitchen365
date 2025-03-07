# Product Catalog Application

This is a full-stack Product Catalog application built using Next.js for the frontend, Nest.js for the backend, and PostgreSQL as the database.

## Features

- List all products
- Add new products
- User authentication
- JWT-based API authentication

## Technologies Used

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Nest.js, TypeORM
- **Database**: PostgreSQL

## Getting Started

### Prerequisites

- Node.js
- Docker (for running PostgreSQL)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd product-catalog
   ```

2. Navigate to the frontend directory:
   ```
   cd frontend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Navigate to the backend directory:
   ```
   cd ../backend
   ```

5. Install backend dependencies:
   ```
   npm install
   ```

### Running the Application

1. Start the PostgreSQL database using Docker:
   ```
   docker-compose up -d
   ```

2. Run the backend server:
   ```
   npm run start:dev
   ```

3. In a new terminal, navigate to the frontend directory and run:
   ```
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000` to view the application.

## API Endpoints

- **GET /products**: Fetch all products
- **POST /products**: Create a new product
- **DELETE /products/:id**: Delete a product by ID

## License

This project is licensed under the MIT License.