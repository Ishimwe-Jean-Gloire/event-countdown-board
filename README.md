# 🗓️ Event Countdown Board (MongoDB Version)

A beautifully designed Node.js + Express.js web application that allows users to **create, view, edit, and delete events**, with each event displaying a live **countdown timer**. This version uses **MongoDB Atlas** for data storage and incorporates **Bootstrap 5** for responsive design.

## 📸 Screenshots

![Home Page](images/home.PNG)

---

## 📌 Features

- Create new events with a title, description, and date
- Display all events on the homepage in styled Bootstrap cards
- View individual event details
- Edit or delete existing events
- Countdown timer for each event
- Flash messages for user actions (e.g. success, delete)
- Fully responsive design with Bootstrap 5

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- express-session & connect-flash for flash messages
- Method Override for PUT/DELETE methods in forms

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure the following are installed:

- [Node.js](https://nodejs.org/) (v18.x or later recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas/register)

---

## 📥 Installation

1. **Clone this repository:**

```bash
git clone https://github.com/your-username/event-countdown-board.git
cd event-countdown-board
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up your MongoDB Atlas URI:**

Create a `.env` file and add:

```
MONGODB_URI=your_mongodb_atlas_uri
SESSION_SECRET=your_secure_session_secret
```

4. **Run the application:**

```bash
npm start
```

5. Open your browser and visit:  
   👉 [http://localhost:5000](http://localhost:5000)

---

## 🧾 Project Structure

```
event-countdown-board/
│
├── models/
│   └── event.js               # Mongoose schema for Event
│
├── routes/
│   └── event.js               # Express routes for CRUD operations
│
├── views/
│   ├── events/
│   │   ├── index.ejs          # Home page
│   │   ├── new.ejs            # Add new event form
│   │   ├── edit.ejs           # Edit form
│   │   └── show.ejs           # Individual event detail view
│
├── public/
│   └── styles.css             # Custom CSS (optional)
│
├── .env                       # Environment variables
├── server.js                 # Main server entry point
└── README.md
```

---

## 💡 Flash Message Handling

Flash messages are displayed after user actions and disappear automatically after 3 seconds. This is done using:

```js
req.flash("success_msg", "✅ Your event was created!");
```

And in the EJS view:

```ejs
<% if (success_msg) { %>
  <div class="alert alert-success" id="flash-message">
    <%= success_msg %>
  </div>
<% } %>
```

JavaScript automatically hides them:

```js
document.addEventListener("DOMContentLoaded", () => {
  const alert = document.getElementById("flash-message");
  if (alert) {
    setTimeout(() => {
      alert.classList.add("fade");
      setTimeout(() => alert.remove(), 500);
    }, 3000);
  }
});
```

---

## 🧪 Example Event Document (MongoDB)

```json
{
  "_id": "6653a38c5a4e4c2f1bc8e9a1",
  "title": "Conference 2025",
  "description": "Annual Tech Conference",
  "date": "2025-12-20T00:00:00.000Z",
  "createdAt": "2025-05-28T14:22:00.000Z",
  "__v": 0
}
```

---

## 📦 To Do (Optional Improvements)

- Add user authentication
- Enable recurring events or reminders
- Add event categories and filters
- Allow image uploads for events
- Calendar integration

---

## 🧑‍💻 Author

**Glory Ishimwe**  
_Computer Science Student & Aspiring Web Developer_  
🔗 _LinkedIn, GitHub, etc._

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
