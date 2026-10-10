# routers/interviews.py
# ============================================================
# AI Mock Interview router.
#
# Phase 1: Placeholder only.
# Phase 4 will implement:
#   - POST /interviews/start       — start a mock interview session
#   - POST /interviews/answer      — submit an answer, get AI feedback
#   - GET  /interviews/history     — get past interview sessions
#   - GET  /interviews/question    — get the next AI-generated question
#
# The AI will generate role-specific questions (technical/HR) and
# evaluate answers using the LLM API.
# ============================================================

from fastapi import APIRouter

router = APIRouter()


@router.post("/start")
def start_interview():
    """
    [Phase 1 Placeholder]
    Phase 4 will: start a new mock interview session with a topic (e.g., "Python", "HR").
    Returns the first AI-generated question.
    """
    return {
        "message": "Start mock interview — coming in Phase 4",
        "planned_request": {"topic": "Python", "difficulty": "medium"},
        "planned_response": {
            "session_id": "abc123",
            "question": "What is a Python decorator and when would you use it?",
        },
    }


@router.post("/answer")
def submit_answer():
    """
    [Phase 1 Placeholder]
    Phase 4 will: accept the user's answer, evaluate it using the LLM API,
    and return feedback + the next question.
    """
    return {
        "message": "Submit answer — coming in Phase 4",
        "planned_request": {"session_id": "abc123", "answer": "A decorator is..."},
        "planned_response": {"feedback": "Good explanation! You could also mention...", "next_question": "..."},
    }


@router.get("/history")
def get_interview_history():
    """
    [Phase 1 Placeholder]
    Phase 4 will: return past mock interview sessions for the logged-in user.
    """
    return {"message": "Interview history — coming in Phase 4"}
