# routers/alerts.py
# ============================================================
# Alerts router — Internships, Jobs, and Hackathons.
#
# Phase 1: Placeholder only.
# Phase 3 will implement:
#   - GET  /alerts/           — list all active alerts
#   - GET  /alerts/{type}     — filter by type: job, internship, hackathon
#   - POST /alerts/           — staff/admin posts a new alert
#   - DELETE /alerts/{id}     — admin removes an alert
# ============================================================

from fastapi import APIRouter

router = APIRouter()


@router.get("/")
def list_alerts():
    """
    [Phase 1 Placeholder]
    Phase 3 will: return all active placement alerts visible to students.
    """
    return {
        "message": "Alerts list — coming in Phase 3",
        "planned_response": {
            "alerts": [
                {
                    "id": 1,
                    "type": "internship",
                    "title": "Summer Internship at XYZ Corp",
                    "deadline": "2025-04-01",
                    "link": "https://example.com/apply",
                }
            ]
        },
    }


@router.get("/{alert_type}")
def get_alerts_by_type(alert_type: str):
    """
    [Phase 1 Placeholder]
    Phase 3 will: filter alerts by type (job / internship / hackathon).
    """
    return {
        "message": f"Alerts of type '{alert_type}' — coming in Phase 3",
    }


@router.post("/")
def post_alert():
    """
    [Phase 1 Placeholder]
    Phase 3 will: allow staff/admin to post a new alert.
    """
    return {"message": "Post alert — coming in Phase 3 (staff/admin only)"}
