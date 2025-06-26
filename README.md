# Digital Library - FrontEnd

🔗 **Live Demo:** https://digital-library-f.vercel.app/

Welcome to the Digital Library Frontend!! This application provides an intuitive and engaging user interface for exploring a vast collection of books, managing your personal reading list, and handling user authentication. It's designed to offer a seamless user experience, allowing you to sign up, log in, browse public books, and curate your own digital library with ease. This frontend interacts with a separate backend API to fetch and manage data.

---

### 🚀 Tech Stack
- The Digital Library Frontend is built using a modern and robust set of technologies to deliver a dynamic and responsive user experience:

- React: A powerful JavaScript library for building user interfaces, enabling a component-based architecture for efficient development.

- JavaScript (ES6+): The primary programming language, leveraging modern features for clean and efficient code.

- React Router DOM: For declarative routing, allowing smooth navigation between different views of the application (Home, Profile, Authentication).

- Framer Motion: A production-ready motion library for React, used to create smooth and engaging animations and transitions throughout the UI (e.g., book card animations).

- SCSS (Sass): A CSS preprocessor that extends CSS with features like variables, nesting, and mixins, enhancing stylesheet organization and maintainability.

- Axios: A popular promise-based HTTP client for making requests to the backend API, simplifying data fetching and interaction.

- Local Storage: Utilized for client-side persistence of user authentication tokens and basic user information to maintain session state across page reloads.

### ✨ Key Features
The Digital Library Frontend offers the following core functionalities:

- User Authentication:

- Sign Up: Create a new user account securely.

- Log In: Access your existing account with proper credentials.

Public Book Catalog:

- Browse and discover a wide array of books available in the public domain.

- Interactive book cards providing quick access to details and actions.

Personalized Library Management:

- Add Books: Easily add books from the public catalog to your personal library.

- Remove Books: Effortlessly remove books from your personal collection.

- Real-time updates to your library upon adding or removing books, ensuring a seamless user experience.

- Responsive Design: The application is designed to adapt and look great across various devices and screen sizes (desktops, tablets, mobile phones).

- Interactive UI: Smooth and appealing animations, powered by Framer Motion, enhance user engagement.

- Client-Side State Management: Efficiently manages application state using React Hooks (useState, useEffect, useCallback) for local and global component data.
### 📁 Project Structure

```bash
digital-library-frontend/
├── public/                      # Static assets (e.g., index.html)
├── src/
│   ├── assets/                  # Images, fonts, or other static media
│   ├── components/              # Reusable UI components
│   │   ├── Authentication/      # Login/Signup form
│   │   ├── BookCard/            # Individual book display card
│   │   ├── Footer/              # Application footer
│   │   └── NavBar/              # Navigation bar
│   ├── hooks/                   # Custom React Hooks for reusable logic
│   │   ├── useAuthForm.js       # Handles authentication form logic
│   │   ├── useBookActions.js    # Manages add/remove book actions
│   │   └── useProfileData.js    # Fetches and manages user profile data
│   ├── services/                # Logic for interacting with the backend API
│   │   ├── AuthServices.js      # API calls related to authentication
│   │   ├── BookServices.js      # API calls related to public books (if separate)
│   │   └── LibraryServices.js   # API calls for user's personal library
│   ├── styles/                  # SCSS stylesheets for components
│   │   ├── Authentication.scss
│   │   ├── BookCard.scss
│   │   ├── ProfileGrid.scss
│   ├── views/                   # View-level components (rendered by React Router)
│   │   ├── Home.jsx             # Displays the public book catalog
│   │   └── Profile.jsx          # Displays the user's personal library
│   ├── App.jsx                  # Main application component and routing setup
│   ├── main.jsx                 # React entry point (ReactDOM rendering)
│   └── index.css / App.css      # Global CSS or root styling
├── .env                         # Example environment variables file
├── package.json                 # Project dependencies and scripts
└── README.md                    # This documentation file
```
---

### 📬 Contact
Created by Facundo Robert – GitHub

Feel free to reach out for collaboration or feedback!

---
