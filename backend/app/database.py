# database.py
# ============================================================
# This file sets up the PostgreSQL database CONNECTION.
#
# We use SQLAlchemy — the most popular Python library for
# talking to databases. It lets you work with database tables
# using Python objects instead of raw SQL strings.
#
# Key concepts:
#   - engine     = the actual connection to the database
#   - SessionLocal = a "session" (like a shopping cart) that
#                  collects your changes and commits them together
#   - Base       = the parent class for all database models (tables)
#
# Phase 1: Connection is configured but NOT yet active.
#           The database tables are NOT created yet.
#           Everything becomes live in Phase 2 when we run
#           database migrations (Alembic).
# ============================================================

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from app.config import settings


# ---- Step 1: Create the database engine ----
# The engine manages connections to your PostgreSQL server.
# It reads the DATABASE_URL from your .env file via settings.
# connect_args is only needed for SQLite (not PostgreSQL), but
# we keep it here as a reminder. For PostgreSQL, it's ignored.
engine = create_engine(
    settings.DATABASE_URL,
    # pool_pre_ping=True makes SQLAlchemy test the connection
    # before using it, so stale connections don't cause errors.
    pool_pre_ping=True,
)

# ---- Step 2: Create the session factory ----
# Each "session" is like a transaction with the database.
# You open a session, do your reads/writes, then close it.
# autocommit=False means changes won't be saved until you call session.commit()
# autoflush=False means SQLAlchemy won't auto-send queries to the DB mid-session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# ---- Step 3: Base class for all ORM models ----
# Every database table (User, Question, Alert, etc.) will be a Python
# class that inherits from Base. SQLAlchemy uses this to know which
# classes represent database tables.
Base = declarative_base()


# ---- Dependency for FastAPI routes ----
# FastAPI uses "dependency injection" to give route handlers a database session.
# Add "db: Session = Depends(get_db)" to any route that needs the database.
# The 'finally' block ensures the session is always closed after the request,
# even if an error occurs.
def get_db():
    """
    Yields a database session for use in a FastAPI route.
    Automatically closes the session when the request is done.
    """
    db = SessionLocal()
    try:
        yield db          # Give the session to the route handler
    finally:
        db.close()        # Always close, even if an exception was raised
