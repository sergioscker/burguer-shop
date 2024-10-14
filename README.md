# BurgerShop 🍔🚀

**BurgerShop** is a full-stack application that provides a complete online burger shop experience, integrating a robust backend API with a fully responsive frontend interface. This project was developed using modern technologies, focusing on practicality, efficiency, and security, offering a comprehensive end-to-end solution.

## 🌐 Project Links
- **Frontend Deployment (Vercel)**: [burguershop-eight.vercel.app](https://burguershop-eight.vercel.app)
- **API (Railway)**: [api-burgershop.up.railway.app](https://api-burgershop.up.railway.app)

---

## 📦 Technologies Used

### Backend (API)
The backend was built using **Node.js** with the following libraries:

- **Express**: Route and middleware management.
- **Mongoose**: Data modeling for MongoDB.
- **Sequelize**: ORM for integrating with SQL databases such as MySQL and PostgreSQL.
- **JWT (JsonWebToken)**: Secure user authentication.
- **Bcrypt**: Password encryption.
- **Multer**: File upload handling.
- **Stripe API**: Integration to enable dynamic online payments.

### Frontend (Interface)
The frontend was developed using **React**, with **Vite** to enhance performance and streamline the development process. Other technologies include:

- **Axios**: Connecting the frontend to the backend, allowing the interface to efficiently consume the API.
- **React Router Dom**: Route management for the frontend.
- **Styled-components**: CSS-in-JS for dynamic and reusable components.
- **React Hook Form + Yup**: Efficient form creation and validation.
- **React Toastify**: User-friendly notifications to improve the user experience.
- **React Multi Carousel**: Dynamic display of items on the menu.

---

## ⚙️ Features

### API
The **BurgerShop API** offers the following features:

1. **Authentication**: Users can register and log in. Authentication is handled via JWT tokens.
2. **Password Encryption**: Passwords are securely stored using **bcrypt**.
3. **Order Management**: Orders are processed through the API, with payments handled by **Stripe**.
4. **File Upload**: Product images can be uploaded and stored securely.

### Interface
The **BurgerShop** interface delivers a smooth and responsive user experience with the following features:

1. **Token-Based Authentication**: Users consume the API through a token generated upon login, ensuring secure operations.
2. **Local Storage**: Key information is stored in **LocalStorage** for continuous, seamless navigation.
3. **Responsive Design**: The layout adapts to any device, offering an optimal experience across desktops, tablets, and smartphones.
4. **Online Payments**: Integration with **Stripe** allows fast and secure payments directly through the site.
5. **Dynamic Notifications**: Using **React Toastify**, users receive instant feedback with dynamic notifications.

---

## 🛠️ How to Run the Project Locally

### Prerequisites
- **Node.js** installed.
- **MongoDB** or another SQL database (MySQL/PostgreSQL).
- A **Stripe** account to configure payments.

### Clone the Repository
```bash
git clone [https://github.com/your-username/burgershop.git](https://github.com/sergioscker/burguer-shop.git)
cd burgershop
```

### Backend Setup (API)
1. Install dependencies:
   ```bash
   cd burgershop-api
   yarn install
   ```
2. Create a `.env` file and set up environment variables:
   ```bash
   MONGO_URI=<your MongoDB connection>
   JWT_SECRET=<your JWT secret>
   STRIPE_SECRET_KEY=<your Stripe secret key>
   ```
3. Run the server:
   ```bash
   yarn dev
   ```

### Frontend Setup (Interface)
1. Install dependencies:
   ```bash
   cd burgershop-interface
   yarn install
   ```
2. Run the development server:
   ```bash
   yarn dev
   ```

### Build for Production
To generate the optimized build for production:
```bash
yarn build
```

---

## 🚀 Deployment

### API (Railway)
The API is deployed on **Railway**, providing a simple and fast production environment setup. Despite facing some challenges with production errors, the final deploy was successfully configured.

- API Link: [api-burgershop.up.railway.app](https://api-burgershop.up.railway.app)

### Interface (Vercel)
The frontend is deployed on **Vercel**, ensuring high performance and a seamless user experience on any device.

- Deployment Link: [burguershop-eight.vercel.app](https://burguershop-eight.vercel.app)

---

## 🎉 Conclusion

This project has been a rewarding journey, from backend setup to building a fully functional and responsive interface. The use of various technologies, integration with **Stripe API**, and the deployment on **Railway** and **Vercel** were crucial steps to ensure that **BurgerShop** delivers a high-quality experience to its users.

Feel free to check out the project using the links above. I hope you enjoy it as much as I enjoyed developing it!

---

## 📝 License
This project is licensed under the **MIT** license.

---

Made with ❤️ by [Sérgio Oliveira](https://github.com/sergioscker) 🙌
```

---

### Key Tips for Formatting:
- **Headings**: Use `#`, `##`, and `###` to create hierarchical headers.
- **Code Blocks**: Wrap code in triple backticks (```) for better readability.
- **Lists**: Use `-` for bullet points and numbers for ordered lists.
- **Links**: Format them as `[link text](URL)`.

This version uses clean Markdown and ensures that the README will look neat and professional on GitHub. The emojis help add personality without the need for custom styling.
