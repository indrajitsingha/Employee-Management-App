# Employee Management App

This is a simple web app built with **React** and **Vite** that helps you add and view employee details.

🚀 Deployed on Netlify click to see live :
🔗 Live Demo: https://eloquent-brioche-b155b9.netlify.app


It uses modern tools and libraries like:

- **React + Vite** – Fast and modern development setup
- **Clerk** – Handles user authentication
- **React Hook Form + Zod** – For building forms with validation
- **AG Grid** – To display employee data in a smart table
- **Tailwind CSS + ShadCN** – For styling and clean UI components
- **EmailJS** – Sends an email when a new employee is added
- **LocalStorage** – Keeps employee data saved in your browser
- **Custom Toasts** – Shows success messages

---

# 🚀 Features

1.Add Employee form with validation

2.Store employee data in localStorage

3.Display employee list in AG Grid with a custom theme

4.Send a confirmation email via EmailJS on successful submission

5.Toast notifications via a custom hook

6.Routing and navigation using React Router

7.UI styled with Tailwind + ShadCN

# 🛠️ Getting Started steps are Included

1. **Clone the project**
   git clone https://github.com/indrajitsingha/Employee-Management-App.git
   cd into folder

2. **Install dependencies**
   npm install

3. **Run the app**
   npm run dev

## ✉️ EmailJS Setup

To make the email feature work:

- Sign up at [https://emailjs.com](https://emailjs.com)
- Create a service and a template
- Replace these in `AddEmployees.jsx`:
  emailjs.send(
  "your_service_id",
  "your_template_id",
  sendemailcontent,
  "your_public_key"
  );

  ```

  ```
