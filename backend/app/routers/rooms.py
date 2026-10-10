# routers/rooms.py
# ============================================================
# Peer Coding Rooms router.
#
# Phase 1: Placeholder only.
# Phase 5 will implement:
#   - POST /rooms/create      — create a new coding room
#   - GET  /rooms/            — list active rooms
#   - GET  /rooms/{room_id}   — get room details
#   - WebSocket /rooms/ws/{room_id} — real-time collaborative editing
#   - POST /rooms/{room_id}/invite  — invite a friend to a room
#
# Real-time collaboration will use WebSockets, which allow the server
# to push updates to all connected clients instantly.
# ============================================================

from fastapi import APIRouter

router = APIRouter()


@router.post("/create")
def create_room():
    """
    [Phase 1 Placeholder]
    Phase 5 will: create a new collaborative coding room and return a room ID.
    Other users can join using the room ID.
    """
    return {
        "message": "Create coding room — coming in Phase 5",
        "planned_request": {"name": "My Study Room", "language": "python"},
        "planned_response": {"room_id": "xyz789", "join_url": "/rooms/xyz789"},
    }


@router.get("/")
def list_rooms():
    """
    [Phase 1 Placeholder]
    Phase 5 will: list all active coding rooms the user can join.
    """
    return {
        "message": "List rooms — coming in Phase 5",
        "planned_response": {"rooms": []},
    }


@router.get("/{room_id}")
def get_room(room_id: str):
    """
    [Phase 1 Placeholder]
    Phase 5 will: return details and current participants of a specific room.
    """
    return {
        "message": f"Room '{room_id}' — coming in Phase 5",
        "note": "WebSocket real-time editing will be added in this phase.",
    }
