# routers/chatbot.py
# ============================================================
# AI Chatbot router.
#
# Phase 1: Placeholder only.
# Phase 4 will implement:
#   - POST /chatbot/message — send a message, get an AI reply
#   - GET  /chatbot/history — fetch conversation history
#
# The chatbot will call an LLM API (e.g., OpenAI GPT or Google Gemini).
# The API key will be read from the .env file — NEVER hardcoded.
# ============================================================

from fastapi import APIRouter

router = APIRouter()


@router.post("/message")
def send_message():
    """
    [Phase 1 Placeholder]
    Phase 4 will: accept a user message, send it to the LLM API,
    and return the AI's reply. Conversation history will be tracked per user.
    """
    return {
        "message": "Chatbot endpoint — coming in Phase 4",
        "planned_request": {"user_message": "How do I prepare for TCS?"},
        "planned_response": {"reply": "Here are some tips for TCS placement..."},
        "note": "LLM API key must be set in .env before this works.",
    }


@router.get("/history")
def get_chat_history():
    """
    [Phase 1 Placeholder]
    Phase 4 will: return the logged-in user's chat history with the AI.
    """
    return {
        "message": "Chat history — coming in Phase 4",
        "planned_response": {"messages": []},
    }
