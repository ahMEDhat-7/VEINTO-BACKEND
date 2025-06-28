# 🧠 VIENTO Backend – E-commerce API

This is the backend for **VIENTO**, a modern e-commerce platform for selling hats and accessories. It provides a secure, scalable REST API built with **Node.js**, **Express**, **TypeScript**, and **MySQL** using an ORM like **Prisma** or **TypeORM**.

---

## 🚀 Tech Stack

- **Runtime**: Node.js (TypeScript)
- **Framework**: Express.js
- **Database**: MySQL
- **ORM**: Prisma or TypeORM
- **Authentication**: JWT (access & refresh tokens)
- **File Uploads**: Cloudinary / Amazon S3
- **Validation**: Zod or class-validator
- **Security**: Helmet, rate limiting, CORS
- **Logging**: Morgan + Winston

---

## 📦 Features

### 🔐 Authentication & Authorization
- JWT-based access and refresh token system
- Role-based access (user, admin)
- Password hashing with bcrypt

### 🛍️ Product & Catalog
- Full CRUD for products (admin only)
- Filter by category, price, and search keyword
- Upload product images to Cloudinary

### 🛒 Shopping Cart & Orders
- Add/update/remove items from cart
- Place orders and manage order history
- Admin dashboard for managing all orders

### ⚙️ Admin Dashboard
- View user list, sales stats, and order activity
- Manage product inventory and pricing


---

## 🧪 API Endpoints (Sample)

### Auth

| Method | Route           | Description         |
|--------|------------------|---------------------|
| POST   | `/auth/register` | Register new user   |
| POST   | `/auth/login`    | Login user          |
| POST   | `/auth/logout`   | Revoke token        |
| POST   | `/auth/refresh`  | Refresh access token|

### Products

| Method | Route           | Description               |
|--------|------------------|---------------------------|
| GET    | `/products`      | Get all products          |
| GET    | `/products/:id`  | Get single product        |
| POST   | `/products`      | Create product (admin)    |
| PUT    | `/products/:id`  | Update product (admin)    |
| DELETE | `/products/:id`  | Delete product (admin)    |

### Orders & Cart

| Method | Route             | Description               |
|--------|--------------------|---------------------------|
| GET    | `/cart`            | Get user cart             |
| POST   | `/cart`            | Add item to cart          |
| DELETE | `/cart/:itemId`    | Remove item from cart     |
| POST   | `/orders`          | Place order               |
| GET    | `/orders`          | Get user orders           |

---

# 🧩 Future Enhancements
- Stripe payment integration

- Email order confirmations

- Inventory alerts


# 📄 License
- MIT License