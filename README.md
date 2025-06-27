# Aoun 💻🎓📱

**Aoun** is a modern, student-focused web platform built with React, offering students easy access to job opportunities, housing listings, educational resources, and community features. Designed as the frontend for the **StudentPath** ecosystem, the app integrates seamlessly with a backend ASP.NET Core API and delivers a clean, responsive user experience.

---

## 🌐 Key Features

### 🔐 Authentication & User Management
- Centralized login, logout, registration
- JWT token handling and session persistence
- Multi-step signup flow and profile management

### 🏡 Housing System
- Browse housing listings with details and images
- Post new property listings (for property managers)
- View specific property pages with dynamic routing

### 💼 Activities & Opportunities
- View job listings and student activities
- Post new job or activity opportunities
- Detailed job and activity pages

### 🧑‍🎓 User Profile System
- View and edit personal information
- Upload profile pictures
- Save changes with secure API integration

---

## ⚙️ Tech Stack

| Category         | Technology             | Purpose                                  |
|------------------|------------------------|------------------------------------------|
| Framework        | React ^18.2.0          | Core UI library                          |
| Build Tool       | Vite ^5.1.4            | Fast dev/build system                    |
| Routing          | react-router-dom ^6.22 | Client-side routing                      |
| HTTP Client      | axios ^1.9.0           | Backend communication                    |
| Auth Handling    | jwt-decode ^4.0.0      | JWT parsing and session storage          |
| Styling          | Tailwind CSS           | Utility-first CSS framework              |
| Icons            | react-icons ^5.0.1     | Icon rendering                           |
| Animations       | framer-motion ^11.0.8  | UI transitions and effects               |

---

## 🗂️ Project Structure

```text
src/
├── App.jsx                         # Entry point with routing & auth context
├── context/
│   └── AuthContext.jsx             # Authentication state provider
├── Pages/
│   ├── Login/                      # Login & OTP flows
│   ├── Register/                  # Multi-step registration
│   ├── Profile/                   # Profile & profile settings
│   ├── Properties/                # Housing listings & details
│   ├── Activities/                # Activities & jobs
│   └── Content/                   # Blog, FAQ, About, Team, etc.
├── Services/                      # API service handlers
│   ├── PropertyService.js
│   ├── JobService.js
│   ├── RegisterService.js
│   └── UserService.js
└── components/
    └── Navbar.jsx                 # Main navigation bar
