# routers/auth.py
# ============================================================
# Authentication and Role-Based Access Control (RBAC) router.
#
# Phase 1: Placeholder endpoints only. Returns mock responses.
# Phase 2 will implement:
#   - POST /auth/register  — create a new user account
#   - POST /auth/login     — verify credentials, issue a JWT token
#   - GET  /auth/me        — get current logged-in user info
#   - POST /auth/logout    — invalidate the token
#   - RBAC middleware      — check user role before allowing access
#
# Key concepts:
#   - JWT (JSON Web Token): a signed string that proves who you are
#   - Hashing: passwords are NEVER stored as plain text. We store a hash.
#   - RBAC: Role-Based Access Control — what a user can do depends on their role
# ============================================================

from fastapi import APIRouter

# APIRouter groups related endpoints together.
# We include this router in main.py with a prefix.
router = APIRouter()


@router.post("/register")
def register():
    """
    [Phase 1 Placeholder]
    Phase 2 will: accept email/password, hash the password, save the user to the DB,
    and return a success message.
    """
    return {
        "message": "Register endpoint — coming in Phase 2",
        "planned_fields": ["name", "email", "password", "role"],
    }


@router.post("/login")
def login():
    """
    [Phase 1 Placeholder]
    Phase 2 will: verify email/password, return a signed JWT token.
    The frontend stores this token and sends it with every protected request.
    """
    return {
        "message": "Login endpoint — coming in Phase 2",
        "planned_response": {"access_token": "...", "token_type": "bearer"},
    }


@router.get("/me")
def get_current_user():
    """
    [Phase 1 Placeholder]
    Phase 2 will: read the JWT token from the request header,
    decode it, and return the current user's profile.
    """
    return {
        "message": "Get current user — coming in Phase 2",
        "planned_response": {"id": 1, "name": "...", "email": "...", "role": "student"},
    }
