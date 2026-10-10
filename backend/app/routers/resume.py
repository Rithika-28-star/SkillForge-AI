# routers/resume.py
# ============================================================
# Resume Parser router.
#
# Phase 1: Placeholder only.
# Phase 3 will implement:
#   - POST /resume/upload  — upload a PDF resume
#   - GET  /resume/parsed  — get extracted text and skills
#
# NLP library (spaCy or similar) will parse the resume,
# extract named entities (name, skills, education, experience),
# and store results in PostgreSQL.
# ============================================================

from fastapi import APIRouter

router = APIRouter()


@router.post("/upload")
def upload_resume():
    """
    [Phase 1 Placeholder]
    Phase 3 will: accept a PDF file upload, run NLP parsing,
    extract skills, education, and experience, then save to the DB.
    """
    return {
        "message": "Resume upload — coming in Phase 3",
        "planned_request": "multipart/form-data with a PDF file",
        "planned_response": {"extracted_skills": [], "education": [], "experience": []},
    }


@router.get("/parsed")
def get_parsed_resume():
    """
    [Phase 1 Placeholder]
    Phase 3 will: return the most recently parsed resume for the logged-in user.
    """
    return {
        "message": "Parsed resume — coming in Phase 3",
    }
