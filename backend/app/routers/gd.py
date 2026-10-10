# routers/gd.py
# ============================================================
# Group Discussion (GD) Practice router.
#
# Phase 1: Placeholder only.
# Phase 4 will implement:
#   - GET  /gd/topics         — list GD topic categories
#   - GET  /gd/topic/{id}     — get a topic with starter prompts
#   - POST /gd/evaluate       — submit a GD response for AI feedback
#   - POST /gd/topics/add     — staff adds a new GD topic
#
# Group Discussion is a common round in Indian campus placements.
# Students practice expressing structured views on a topic.
# ============================================================

from fastapi import APIRouter

router = APIRouter()


@router.get("/topics")
def list_gd_topics():
    """
    [Phase 1 Placeholder]
    Phase 4 will: return a list of GD topic categories like
    Technology, Current Affairs, Business, Social Issues.
    """
    return {
        "message": "GD topics — coming in Phase 4",
        "planned_response": {
            "categories": [
                "Technology & AI",
                "Current Affairs",
                "Business & Economy",
                "Social Issues",
                "Environment",
            ]
        },
    }


@router.get("/topic/{topic_id}")
def get_gd_topic(topic_id: int):
    """
    [Phase 1 Placeholder]
    Phase 4 will: return a specific GD topic with starter prompts and key points.
    """
    return {
        "message": f"GD topic {topic_id} — coming in Phase 4",
    }


@router.post("/evaluate")
def evaluate_gd_response():
    """
    [Phase 1 Placeholder]
    Phase 4 will: accept a student's written GD response and return
    AI-generated feedback on structure, clarity, and content.
    """
    return {"message": "GD evaluation — coming in Phase 4"}
