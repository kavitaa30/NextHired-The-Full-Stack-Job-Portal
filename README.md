# 🧠 nextHired – The Full Stack Job Portal

🚀 A modern, responsive, and production-ready **Job Portal** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It enables companies to post jobs and applicants to explore and apply with ease.

🔗 **Live Demo:** [nextHired on Render](https://nexthired-the-full-stack-job-portal.onrender.com/)

---

## ✨ Features

- 👤 **Role-Based Authentication** – Secure login for admin, companies, and applicants  
- 📝 **Job Posting & Management** – Add, edit, and delete job listings  
- 🔍 **Smart Job Filtering** – Filter jobs by location, type, salary, and experience  
- 📬 **Application Handling** – Track and manage applicants per job post  
- 📊 **Admin Dashboard** – Manage all jobs and users with ease  
- 💡 **Clean UI/UX** – Intuitive interface and responsive design  
- 🌐 **Deployed on Render** – Fast, free, and reliable cloud hosting  

---

## 🛠️ Tech Stack

### 🌐 Frontend
- React.js, Axios, React Router  
- Context API, React Hooks  
- CSS Modules / Custom Styling  
- Toast Notifications  

### 🧠 Backend
- Node.js, Express.js  
- MongoDB, Mongoose  
- JWT (jsonwebtoken), bcrypt.js  
- dotenv for environment config  

### ☁️ Cloud & Media
- MongoDB Atlas  
- Cloudinary (for images/logos)  
- Render (deployment)

### 🧪 Dev Tools
- Postman  
- Nodemon  
- Git & GitHub  

---

## 📁 Folder Structure

```
nextHired/
│
├── backend/            # Node + Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── config/
│
├── frontend/           # React App
│   ├── components/
│   ├── pages/
│   ├── api/
│   └── utils/
│
├── .env
├── README.md
└── package.json
```

---

## ⚙️ Getting Started Locally

```bash
# Clone the repository
git clone https://github.com/Tushar-Shinde31/NextHired-The-Full-Stack-Job-Portal.git
cd NextHired-The-Full-Stack-Job-Portal

# Install backend dependencies
cd backend
npm install

# Start backend server
npm run dev

# Open a new terminal and install frontend dependencies
cd ../frontend
npm install

# Start frontend app
npm start
```

---

## 🧾 Example `.env` File

Create a `.env` file in the `backend/` directory with the following content:

```env
MONGO_URI=
PORT=
SECRET_KEY=
CLOUD_NAME=
API_KEY=
API_SECRET=
```

> ⚠️ **Note:** Never commit your real `.env` file. This is just an example for development setup.

---

## 📈 Future Scope

Here are some enhancements planned for future versions of **nextHired**:

- ✅ **Resume Uploading** – Allow applicants to upload resumes directly  
- 💬 **In-app Messaging** – Enable communication between recruiters and applicants  
- 🔔 **Real-Time Notifications** – Email or in-app alerts for job status updates  
- 📱 **Mobile App (React Native)** – Launch a mobile version of the platform  
- 📊 **Analytics Dashboard** – Job stats, applicant trends, and reporting tools  
- 🌐 **Multilingual Support** – Localize platform for a global audience  
- 🔒 **2FA Authentication** – Enhance login security for all user roles  

---

## 🌟 Author

Built with ❤️ by [**Tushar Shinde**](https://github.com/Tushar-Shinde31)

---

## 🙌 Support

If you like this project, consider giving it a ⭐ on GitHub!  
Feel free to fork, contribute, or raise issues.

---

**nextHired – Bridging Jobs & Talent** 💼🚀👨‍💻
