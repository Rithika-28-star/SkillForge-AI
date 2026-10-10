# routers/practice.py
# ============================================================
# Coding Practice Questions router.
#
# Phase 1: Placeholder only.
# Phase 3 will implement:
#   - GET  /practice/companies       — list companies with question sets
#   - GET  /practice/{company}       — get questions for a specific company
#   - POST /practice/add             — staff can add a new question (with link)
#   - GET  /practice/question/{id}   — get a single question detail
#
# Questions will link to LeetCode, CodeChef, or other platforms.
# ============================================================

from fastapi import APIRouter

router = APIRouter()


@router.get("/companies")
def list_companies():
    """
    [Phase 1 Placeholder]
    Phase 3 will: return a list of companies with question sets.
    Example: TCS, Infosys, Wipro, Google, Amazon, etc.
    """
    return {
        "message": "Company list — coming in Phase 3",
        "planned_response": {
            "companies": ["TCS", "Infosys", "Wipro", "Accenture", "Google", "Amazon"]
        },
    }


@router.get("/{company}")
def get_company_questions(company: str):
    """
    [Phase 1 Placeholder]
    Phase 3 will: return questions for a specific company,
    each with a title, difficulty, topic, and a LeetCode/CodeChef link.
    """
    return {
        "message": f"Questions for '{company}' — coming in Phase 3",
        "planned_response": {
            "company": company,
            "questions": [
                {
                    "title": "Two Sum",
                    "difficulty": "Easy",
                    "topic": "Arrays",
                    "link": "https://leetcode.com/problems/two-sum/",
                }
            ],
        },
    }


@router.post("/add")
def add_question():
    """
    [Phase 1 Placeholder]
    Phase 3 will: allow staff to add a new question with a link.
    Requires staff or admin role.
    """
    return {"message": "Add question — coming in Phase 3 (staff only)"}
