# E-Commerce Web Application

A comprehensive e-commerce platform built with modern web technologies to provide users with a seamless online shopping experience. The application is designed with a feature-rich front-end and a robust admin panel, enabling efficient management of the entire store.

## Table of Contents

- [Features](#features)
  - [User Features](#user-features)
  - [Admin Features](#admin-features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)
  - [User](#user)
  - [Admin](#admin)
- [License](#license)

## Features

### User Features:
- **Google Authentication:** Sign up or log in via Google for a quick and easy start.
- **Product Management:** Add products to the cart, apply coupon codes, and manage shipping details.
- **Secure Payments:** Transactions are handled seamlessly using the Stripe payment gateway.
- **Product Reviews & Ratings:** Rate and leave feedback on products.
- **Search & Filter:** Easily search for products by category and price range.

### Admin Features:
- **Dashboard:** View statistics including revenue, user count, transactions, and product data.
- **Inventory Management:** Monitor stock levels in real-time.
- **Gender Ratio & Top Transactions:** Analytical insights with a gender ratio and top transaction data.
- **Coupon Management:** Create and manage coupon codes.
- **Data Visualization:** Graphical representations such as bar charts, pie charts, and line charts offer a comprehensive view of store performance.

## Tech Stack

- **Frontend:**
  - React
  - TypeScript
  - JavaScript
  - Framer Motion (for smooth animations)
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Node Cache (for caching performance optimizations)
  
- **Payment Integration:**
  - Stripe API
  
- **Authentication:**
  - Google OAuth
 
## Setup and Installation

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or on a remote server

### Installation

1. Install client-side dependencies:
    ```bash
    git clone https://github.com/Nur-Adnan/MERN-Stack-E-commerce-Frontend.git
    npm install
    ```

2. Install server-side dependencies:
    ```bash
    git clone https://github.com/Nur-Adnan/MERN-Stack-E-commerce-Backend.git
    npm install
    ```

3. Create an `.env` file in the client folder with the following variables:
    ```bash
    VITE_FIREBASE_KEY=your-firebase-api-key
    VITE_AUTH_DOMAIN=your-auth-domain
    VITE_PROJECT_ID=your-project-id
    VITE_STORAGE_BUCKET=your-storage-bucket
    VITE_MESSAGING_SENDER_ID=your-messaging-sender-id
    VITE_APP_ID=your-app-id
    VITE_SERVER=your-server-url
    VITE_STRIPE_KEY=your-stripe-public-key
    ```

4. Create an `.env` file in the server folder with the following variables:
    ```bash
    PORT=your-port-number
    MONGO_URI=your-mongodb-connection-string
    STRIPE_KEY=your-stripe-secret-key
    CLOUD_NAME=your-cloudinary-cloud-name
    CLOUD_API_KEY=your-cloudinary-api-key
    CLOUD_API_SECRET=your-cloudinary-api-secret
    ```

5. Run the development server:
    - In the `server` folder, start the backend:
      ```bash
      npm run dev
      ```

    - In the `client` folder, start the frontend:
      ```bash
      npm run dev
      ```

6. The application will be available at `http://localhost:5173`.

## Screenshots

### User
![image](https://github.com/user-attachments/assets/6614090a-e193-4878-94b5-f6e4818e871b)
![image](https://github.com/user-attachments/assets/c6e3d263-aa63-4bf9-9d9b-c929c3d8d64d)
![image](https://github.com/user-attachments/assets/8e0d524f-5397-44d3-bb28-37e923e6298c)
![image](https://github.com/user-attachments/assets/f894503c-c50c-4921-90e8-5d73be667c57)
![image](https://github.com/user-attachments/assets/c674fa01-775d-4b84-b8ae-4f046af58f03)
![image](https://github.com/user-attachments/assets/6f72ee90-4ad2-4929-bddd-21047b22c39c)
![image](https://github.com/user-attachments/assets/cf3e387d-32a2-4556-8356-80b076c6c999)
![image](https://github.com/user-attachments/assets/54fa5996-102a-420c-b79c-8891feeb7fcb)
![image](https://github.com/user-attachments/assets/f88ec362-14e2-43ef-b43f-9e333b381a7b)
![image](https://github.com/user-attachments/assets/9b9e36a0-5530-4f2f-a984-ae886cf1d284)
![image](https://github.com/user-attachments/assets/64f5e816-fa64-47d2-9c6f-6009937b9111)

### Admin
![image](https://github.com/user-attachments/assets/c788a29c-d981-4889-b4dd-d1ecf8cc1f99)
![image](https://github.com/user-attachments/assets/02524662-b97f-48ed-bcba-f4f7d0ead320)
![image](https://github.com/user-attachments/assets/8f0177d0-c543-4c35-835b-194beae508e2)
![image](https://github.com/user-attachments/assets/c3459b82-865a-48ad-b7a7-7fbe419407c6)
![image](https://github.com/user-attachments/assets/e28052a1-f540-4043-a874-3aff5d4f7aee)
![image](https://github.com/user-attachments/assets/80cac13c-8d67-4b71-beda-3b0582d8da06)
![image](https://github.com/user-attachments/assets/c9c099b5-61e7-4606-b1cb-afb5e9fbbe79)
![image](https://github.com/user-attachments/assets/2ac1a75e-64e9-4629-bcb3-73a06e97a264)
![image](https://github.com/user-attachments/assets/be485917-cd85-467a-9f26-2ff187059e6e)
![image](https://github.com/user-attachments/assets/86fa329f-938c-45ed-a0fe-d4e543731e58)
![image](https://github.com/user-attachments/assets/2c99f19f-d9cf-4a83-8f16-30b56deb862f)
![image](https://github.com/user-attachments/assets/aee29033-4c42-4605-ab5d-7d8690c04a38)

## License

This project is licensed under the MIT License.
