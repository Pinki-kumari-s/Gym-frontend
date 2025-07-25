# 🏋️‍♂️ Gym Website – Frontend

This is the **frontend** of the Gym Website built using **React**. It showcases top workout sessions and includes a contact form that sends emails through the backend server.

---

## 🌐 Tech Stack

- React.js
- Axios
- React Router
- React Toastify
- React Spinners
- CSS / SCSS

---

## 🚀 Live Preview

You can deploy this frontend using **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 🛠️ Setup Instructions

Follow these steps to run the project locally:

1. **Clone the repository**

```bash
git clone https://github.com/Pinki-Kumari-s/Gym-frontend.git
cd Gym-frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set environment variables (optional)**

If you use environment variables like backend URL, create a `.env` file in the root folder:

```env
VITE_BACKEND_URL=http://localhost:5000
```

> Make sure your backend is running at the specified port (5000).

4. **Run the React development server**

```bash
npm run dev
```

Now open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Folder Structure

```
gym-frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── .env
├── package.json
└── README.md
```

---

## ✨ Features

- 🖼️ Beautiful UI with workout section
- ✉️ Contact form that sends emails via backend
- 🔁 Loading spinners and toast notifications
- 🧭 Routing with `react-router-dom`
- 🧪 Environment config via `.env` (`VITE_` prefix)

---

## 🌍 Deployment Tips

- Use **Vercel** or **Netlify** for quick frontend hosting.
- Connect to backend via environment variable `VITE_BACKEND_URL`.
- Ensure CORS is properly configured on backend for production domain.

---

## 🤝 Backend Integration

Make sure your backend is:
- Deployed
- Accepting requests from frontend
- CORS-enabled

API endpoint expected by the frontend:

```
POST `${VITE_BACKEND_URL}/api/contact`
```

---

## 📬 Contact

For questions or support, contact [your-sanjayyadavmintadevi@gmail.com](mailto:sanjayyadavmintadevi@gmail.com.com)

