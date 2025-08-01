# ☕ Coffee Shop - Full-Stack Inventory Management Application

![Project Status](https://img.shields.io/badge/Status-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Frontend Deployed with Firebase](https://img.shields.io/badge/Frontend_Deployed-Firebase-orange?logo=firebase)
![Backend Deployed with Vercel](https://img.shields.io/badge/Backend_Deployed-Vercel-black?logo=vercel)
![Built with React](https://img.shields.io/badge/Built%20With-React-61DAFB?logo=react&logoColor=white)
![Backend Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)
![Database MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)

---

## 🌟 Introduction

Welcome to **Coffee Shop**, a full-stack web application designed to demonstrate robust user authentication and efficient inventory management capabilities for a modern coffee shop. This project serves as a practical showcase of my skills in building dynamic and user-friendly web applications.

It provides a streamlined system for coffee shops to digitally manage menu items. From adding new coffee blends to updating prices or removing discontinued items, this platform offers a complete solution, highlighting my proficiency in creating seamless CRUD (Create, Read, Update, Delete) operations backed by a powerful database.

## ✨ Key Features

This application offers the following core functionalities:

*   **Secure User Authentication:**
    *   Email/Password Login for secure access.
*   **Full CRUD Operations on Items:** Users have the ability to:
    *   **Add** new coffee items to the inventory.
    *   **Edit** existing item details (e.g., name, price, description).
    *   **Delete** items from the inventory.
*   **Responsive Design:** Optimized for seamless viewing and interaction across various devices (desktops and mobile phones) thanks to Tailwind CSS and DaisyUI.
*   **Fast Data Management:** Leverages `@tanstack/react-query` for efficient data fetching, caching, and synchronization.
*   **Intuitive User Experience:** Enhanced with `sweetalert2` for user feedback and clear interaction cues.

## 💡 Problem Solved

The **Coffee Shop** application addresses key challenges faced by small to medium-sized businesses, particularly in the food and beverage industry:

*   **Inefficient Manual Inventory:** Many coffee shops still rely on manual or fragmented systems to track their menu and inventory, leading to errors, outdated information, and wasted time. This application provides a centralized, digital solution.
*   **Lack of Digital Menu Management:** Without a digital system, updating menus, prices, or availability can be cumbersome. This platform empowers users to quickly and easily manage their offerings in real-time.

## 🚀 Live Demos

Experience the application live!

*   **Frontend (Client Application):** [Client](https://coffee-store-8ddda.web.app/)
*   **Backend (API Server):** [Server](https://vercel.com/sarowar-sagors-projects/coffee-store-server)

## 🛠️ Technologies Used

This project is built using a modern and efficient full-stack development approach:

### Frontend
*   **React.js**: A JavaScript library for building user interfaces.
*   **Vite**: A fast build tool that provides a lightning-fast development experience.
*   **React Router DOM**: For declarative routing in React applications.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **DaisyUI**: A Tailwind CSS component library for streamlined UI component creation.
*   **`@tanstack/react-query`**: For robust data fetching, caching, and state management.
*   **`axios`**: Promise-based HTTP client for making API requests.
*   **`sweetalert2`**: For beautiful, responsive, and customizable alert messages.

### Backend
*   **Node.js**: JavaScript runtime environment.
*   **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
*   **`cors`**: Node.js middleware for enabling Cross-Origin Resource Sharing.

### Database
*   **MongoDB**: A NoSQL document database for flexible and scalable data storage.

### Authentication
*   **Firebase Authentication**: For email/password login and user management.

### Deployment & Tools
*   **Firebase Hosting**: For deploying the React frontend.
*   **Vercel**: For deploying the Node.js/Express backend.
*   **GitHub**: For version control.

## ⚙️ Getting Started

Follow these instructions to get a local copy of the project up and running on your machine. This project consists of two separate repositories: one for the frontend (this repo) and one for the backend.

### Prerequisites

Make sure you have the following installed:

*   [Node.js](https://nodejs.org/en/) (LTS version recommended)
*   npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
*   [Git](https://git-scm.com/)


### Installation

Set up the React client application.

1.  **Clone the Frontend Repository (this one):**
    ```bash
    git clone https://github.com/Sarowar-Sagor/Coffee-store-client.git
    ```
2.  **Navigate into the Frontend Directory:**
    ```bash
    cd Coffee-store-client
    ```
3.  **Install Frontend Dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```
4.  **Create `.env` File for Frontend:**
    Create a file named `.env.local` in the `Coffee-store-client` directory and add your Firebase configuration and API endpoint. Replace placeholders with your actual values:
    ```env
    VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
    ```
    *   `VITE_FIREBASE_*`: Get these from your Firebase project settings (Web app configuration).

5.  **Run the Frontend Development Server:**
    ```bash
    npm run dev
    # OR
    yarn dev
    ```
6.  **Open your browser:**
    Visit `http://localhost:5173` (or the port indicated in your terminal) to see the frontend application running.

## 📧 Contact

Feel free to reach out to me for collaborations, questions, or just to say hello!

*   **Email:** `sarowarsagor760@gmail.com`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
