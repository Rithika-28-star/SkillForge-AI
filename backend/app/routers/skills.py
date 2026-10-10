# routers/skills.py
# ============================================================
# Skill Matcher router.
#
# Phase 1: Placeholder only.
# Phase 3 will implement:
#   - GET  /skills/mine      — get the logged-in user's extracted skills
#   - POST /skills/match     — compare user skills against a job description
#   - GET  /skills/suggest   — suggest skills to learn based on gaps
# ============================================================

from fastapi import APIRouter

router = APIRouter()


@router.get("/mine")
def get_my_skills():
    """
    [Phase 1 Placeholder]
    Phase 3 will: return the skills extracted from the user's uploaded resume.
    """
    return {
        "message": "My skills — coming in Phase 3",
        "planned_response": {"skills": ["Python", "SQL", "React"]},
    }


@router.post("/match")
def match_skills():
    """
    [Phase 1 Placeholder]
    Phase 3 will: compare the user's skills against a provided job description
    and return a match score + missing skills.
    """
    return {
        "message": "Skill matching — coming in Phase 3",
        "planned_request": {"job_description": "We are looking for a Python developer..."},
        "planned_response": {"match_score": 78, "missing_skills": ["Django", "Docker"]},
    }


@router.get("/suggest")
def suggest_skills():
    """
    [Phase 1 Placeholder]
    Phase 3 will: suggest skills to learn based on the user's current skill gaps.
    """
    return {
        "message": "Skill suggestions — coming in Phase 3",
    }
