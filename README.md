# SkillForge AI 🚀

An NLP-powered placement preparation platform for students, staff, and admins.

---

## What is SkillForge AI?

SkillForge AI helps college students prepare for campus placements by providing:

- 🤖 **AI Chatbot** — Get placement guidance from a real LLM
- 📄 **Resume Parser** — Upload your resume and extract skills automatically
- 💻 **Coding Practice** — Company-specific questions linked to LeetCode & CodeChef
- 🎯 **Skill Matching** — See how your skills match job requirements
- 📢 **Alerts** — Get notified about internships, jobs, and hackathons
- 🎤 **Mock Interviews** — Practice with AI-generated questions
- 💬 **Group Discussion** — Practice GD topics with peers
- 👥 **Coding Rooms** — Collaborate with friends in real-time

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Frontend   | React + JavaScript + Vite         |
| Backend    | Python + FastAPI                  |
| Database   | PostgreSQL                        |
| Auth       | JWT tokens + Role-Based Access    |
| AI/NLP     | LLM API (OpenAI/Gemini-compatible)|

---

## Roles

| Role    | Access Level                                             |
|---------|----------------------------------------------------------|
| Student | Practice, chatbot, resume, alerts, interviews, GD, rooms |
| Staff   | All student features + manage question sets              |
| Admin   | Full control including user and role management          |

---

## Project Structure

```
project1/
├── frontend/          # React + Vite app (what users see)
│   ├── src/
│   │   ├── pages/     # One file per page
│   │   ├── components/# Reusable UI pieces
│   │   ├── context/   # Auth state management
│   │   └── services/  # API call functions
│   └── .env.example   # Frontend env variable template
│
├── backend/           # FastAPI Python server
│   ├── app/
│   │   ├── main.py    # Entry point
│   │   ├── config.py  # Environment variable loader
│   │   ├── database.py# PostgreSQL connection
│   │   ├── routers/   # Feature modules (auth, chatbot, resume, etc.)
│   │   ├── models/    # Database table definitions
│   │   └── schemas/   # Request/response data shapes
│   ├── tests/         # Backend tests (pytest)
│   └── .env.example   # Backend env variable template
│
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org/) (v18 or higher) — for the frontend
- [Python](https://python.org/) (v3.10 or higher) — for the backend
- [PostgreSQL](https://postgresql.org/) — for the database

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd project1
```

### 2. Set up the Backend

```bash
# Go into the backend folder
cd backend

# Create a Python virtual environment
# Think of this as an isolated Python installation just for this project
python -m venv venv

# Activate it (Windows PowerShell)
.\venv\Scripts\Activate

# Activate it (Mac/Linux)
# source venv/bin/activate

# Install all required packages
pip install -r requirements.txt

# Copy the environment variable template
copy .env.example .env
# Now open .env and fill in your real values (database URL, API keys, etc.)

# Start the backend server
uvicorn app.main:app --reload
```

The backend will run at: **http://localhost:8000**

Test it by visiting: **http://localhost:8000/health**

You should see: `{"status": "ok", "message": "SkillForge AI backend is running!"}`

### 3. Set up the Frontend

```bash
# Open a new terminal and go to the frontend folder
cd frontend

# Install all Node packages
npm install

# Copy the environment variable template
copy .env.example .env
# Open .env and fill in your backend URL if needed

# Start the frontend development server
npm run dev
```

The frontend will run at: **http://localhost:5173**

### 4. Run Tests

**Backend tests (pytest):**
```bash
cd backend
pytest
```

**Frontend tests (Vitest):**
```bash
cd frontend
npm run test
```

---

## Environment Variables

**Never commit real secrets to Git.** Use `.env` files (which are in `.gitignore`).

See `backend/.env.example` and `frontend/.env.example` for what variables are needed.

---

## Development Phases

- [x] **Phase 1** — Foundation: skeleton app, placeholder pages and routes
- [ ] **Phase 2** — Auth & Database: real login with JWT, PostgreSQL tables
- [ ] **Phase 3** — Core Features: resume parsing, coding practice, alerts
- [ ] **Phase 4** — AI Features: LLM chatbot, mock interviews, GD practice
- [ ] **Phase 5** — Social: peer coding rooms, friend system, notifications
- [ ] **Phase 6** — Deployment: Docker, Vercel, Render

---

## Contributing

This project is built phase by phase. Each phase builds on the previous one.
Read the implementation plan for details on what comes next.

---

## License

MIT License — free to use and learn from.
