# routers/__init__.py
# This file makes the routers directory a Python package.
# It also provides a convenient place to import all routers.
# main.py imports from here using: from app.routers import auth, chatbot, ...

from app.routers import auth, chatbot, resume, skills, practice, alerts, interviews, gd, rooms

__all__ = ["auth", "chatbot", "resume", "skills", "practice", "alerts", "interviews", "gd", "rooms"]
