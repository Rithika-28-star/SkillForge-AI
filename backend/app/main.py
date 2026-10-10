# main.py
# ============================================================
# This is the ENTRY POINT of the FastAPI backend.
# When you run "uvicorn app.main:app --reload", Python:
#   1. Imports this file
#   2. Finds the "app" variable (a FastAPI instance)
#   3. Starts an HTTP server that handles requests using "app"
#
# This file:
#   - Creates the FastAPI application instance
#   - Configures CORS (so the React frontend can call this API)
#   - Defines the /health check route
#   - Includes all feature routers (auth, chatbot, resume, etc.)
# ============================================================

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings

# Import all feature routers
# Each router handles a group of related API endpoints
from app.routers import (
    auth,
    chatbot,
    resume,
    skills,
    practice,
    alerts,
    interviews,
    gd,
    rooms,
)


# ---- Create the FastAPI application ----
app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="""
    SkillForge AI — NLP-powered placement preparation platform.

    ## Features (coming in future phases)
    - 🔐 Authentication and Role-Based Access Control
    - 🤖 AI Chatbot for placement guidance
    - 📄 Resume parsing and skill extraction
    - 💻 Company-specific coding practice
    - 📢 Job, internship, and hackathon alerts
    - 🎤 AI mock interviews
    - 💬 Group discussion practice
    - 👥 Real-time peer coding rooms
    """,
    # Enable interactive API docs at /docs (Swagger UI)
    docs_url="/docs",
    # Enable alternative API docs at /redoc
    redoc_url="/redoc",
)


# ---- Configure CORS ----
# CORS = Cross-Origin Resource Sharing.
# Browsers block API calls between different "origins" (domain+port) by default.
# Our React frontend (localhost:5173) and backend (localhost:8000) are different origins.
# We must explicitly tell the backend to ALLOW calls from the frontend.
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,  # Which origins are allowed
    allow_credentials=True,                   # Allow cookies and auth headers
    allow_methods=["*"],                      # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],                      # Allow all headers
)


# ---- Health Check Route ----
# This is the simplest possible API endpoint.
# It just returns a JSON response confirming the server is alive.
# Visit http://localhost:8000/health to test it.
@app.get("/health", tags=["System"])
def health_check():
    """
    Health check endpoint.
    Returns server status and version. Use this to verify the backend is running.
    """
    return {
        "status": "ok",
        "message": f"{settings.APP_NAME} backend is running!",
        "version": settings.APP_VERSION,
        "debug_mode": settings.DEBUG,
    }


# ---- Root Route ----
@app.get("/", tags=["System"])
def root():
    """
    Root endpoint. Redirects users to the API documentation.
    """
    return {
        "message": f"Welcome to {settings.APP_NAME} API",
        "docs": "/docs",
        "health": "/health",
    }


# ---- Include Feature Routers ----
# Each router is responsible for a group of related endpoints.
# The prefix means all routes in that router start with that path.
# Example: auth router with prefix "/auth" handles "/auth/login", "/auth/register"

app.include_router(auth.router,       prefix="/auth",       tags=["Authentication"])
app.include_router(chatbot.router,    prefix="/chatbot",    tags=["AI Chatbot"])
app.include_router(resume.router,     prefix="/resume",     tags=["Resume Parser"])
app.include_router(skills.router,     prefix="/skills",     tags=["Skill Matcher"])
app.include_router(practice.router,   prefix="/practice",   tags=["Coding Practice"])
app.include_router(alerts.router,     prefix="/alerts",     tags=["Alerts"])
app.include_router(interviews.router, prefix="/interviews", tags=["Mock Interviews"])
app.include_router(gd.router,         prefix="/gd",         tags=["GD Practice"])
app.include_router(rooms.router,      prefix="/rooms",      tags=["Coding Rooms"])
