# Product Catalog Application

## Overview
This project is a simple **Product Catalog Application** built using **Next.js** for the frontend, **Nest.js** for the backend, and **PostgreSQL** as the database. The application allows users to view, add, and delete products.

## Features
### Backend (Nest.js + PostgreSQL)
- Implements a **Product entity** with the following fields:
  - `id` (UUID, primary key)
  - `name` (string, required)
  - `price` (float, required)
  - `description` (string, optional)
- Provides a **REST API** with the following endpoints:
  - `GET /products` → Fetch all products.
  - `POST /products` → Create a new product (with input validation).
  - `DELETE /products/:id` → Delete a product by ID.
- Uses **TypeORM** for database interactions.
- Database runs locally via **Docker** (PostgreSQL container).

### Frontend (Next.js + React)
- Displays all products retrieved from `GET /products`.
- Contains a form to add new products using `POST /products`.
- Implements **React Hooks** for state management.
- Handles form validation (e.g., price should be a positive number, name should not be empty).
- Basic UI styling using **Tailwind CSS**.

### Bonus Features (Optional but Encouraged)
- API authentication using **JWT** (Login required to add/delete products).
- Search/filter functionality for products.

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (LTS version recommended)
- **Docker** (to run PostgreSQL locally)
- **Git** (to clone the repository)

### Installation
#### 1. Clone the Repository
```sh
git clone [REPOSITORY_URL]
cd [PROJECT_FOLDER]
```

#### 2. Backend Setup (Nest.js)
```sh
cd backend
npm install
```

#### 3. Run PostgreSQL via Docker
```sh
docker-compose up -d
```
This will start a PostgreSQL container.

#### 4. Configure Environment Variables
Create a `.env` file inside the `backend` folder and add:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/product_catalog
JWT_SECRET=your_jwt_secret
```
Modify the credentials as per your setup.

#### 5. Run Migrations & Start Backend Server
```sh
npm run migration:run
npm run start:dev
```

#### 6. Frontend Setup (Next.js)
```sh
cd ../frontend
npm install
npm run dev
```

The frontend will be accessible at `http://localhost:3000`

---

## API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/products` | Fetch all products |
| POST | `/products` | Add a new product |
| DELETE | `/products/:id` | Delete a product by ID |

---

## Usage
1. Open `http://localhost:3000` in your browser.
2. View the product list.
3. Use the form to add a new product.
4. Click the delete button to remove a product.

---

## Notes
- Ensure that the backend is running before starting the frontend.
- If needed, update the `.env` file with your database credentials.

---

## Submission
- This project is submitted as part of the **Full Stack Developer Technical Assessment**.
- A public Git repository link has been provided.
- If you have any questions, feel free to reach out.

**Author:** 
Tejas Patel

