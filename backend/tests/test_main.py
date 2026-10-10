# tests/test_main.py
# ============================================================
# Backend tests using pytest + httpx (via FastAPI's TestClient).
#
# How testing works here:
#   - TestClient is a fake HTTP client that sends requests to your
#     FastAPI app WITHOUT starting a real server.
#   - Each test function starts with "test_" (pytest finds them automatically).
#   - We use "assert" to check that the response is what we expect.
#
# To run tests: cd backend && pytest
# ============================================================

from fastapi.testclient import TestClient

# Import the FastAPI app instance from main.py
from app.main import app


# Create the test client — this is our fake browser/HTTP caller
client = TestClient(app)


# ---- Test 1: Health Check ----
def test_health_check():
    """
    Test that GET /health returns status 200 and status=ok.
    This is the most important test — it confirms the server starts correctly.
    """
    response = client.get("/health")

    # HTTP 200 means "OK / Success"
    assert response.status_code == 200

    # Parse the JSON response body
    data = response.json()

    # Check the response contains what we expect
    assert data["status"] == "ok"
    assert "message" in data
    assert "version" in data


# ---- Test 2: Root Route ----
def test_root_route():
    """
    Test that GET / returns a welcome message with docs link.
    """
    response = client.get("/")
    assert response.status_code == 200

    data = response.json()
    assert "message" in data
    assert "docs" in data


# ---- Test 3: Auth Placeholder Routes ----
def test_auth_register_placeholder():
    """
    Test that POST /auth/register returns a 200 with placeholder message.
    In Phase 2, this test will be updated to check real registration logic.
    """
    response = client.post("/auth/register")
    assert response.status_code == 200
    assert "message" in response.json()


def test_auth_login_placeholder():
    """
    Test that POST /auth/login returns a 200 with placeholder message.
    """
    response = client.post("/auth/login")
    assert response.status_code == 200
    assert "message" in response.json()


# ---- Test 4: Feature Router Placeholders ----
def test_chatbot_placeholder():
    response = client.post("/chatbot/message")
    assert response.status_code == 200


def test_resume_placeholder():
    response = client.post("/resume/upload")
    assert response.status_code == 200


def test_skills_placeholder():
    response = client.get("/skills/mine")
    assert response.status_code == 200


def test_practice_companies_placeholder():
    response = client.get("/practice/companies")
    assert response.status_code == 200


def test_alerts_placeholder():
    response = client.get("/alerts/")
    assert response.status_code == 200


def test_interviews_placeholder():
    response = client.post("/interviews/start")
    assert response.status_code == 200


def test_gd_topics_placeholder():
    response = client.get("/gd/topics")
    assert response.status_code == 200


def test_rooms_placeholder():
    response = client.get("/rooms/")
    assert response.status_code == 200


# ---- Test 5: 404 for Unknown Routes ----
def test_unknown_route_returns_404():
    """
    FastAPI automatically returns 404 for routes that don't exist.
    """
    response = client.get("/this-route-does-not-exist")
    assert response.status_code == 404
