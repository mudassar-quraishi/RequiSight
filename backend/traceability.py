import json
from gemini_client import call_gemini

def detect_conflicts(requirements):

    prompt = f"""
Analyze these requirements and detect conflicts.

Return JSON in format:

[
  {{
    "req_id_1": "...",
    "req_id_2": "...",
    "reason": "..."
  }}
]

Requirements:
{json.dumps(requirements)}
"""

    response = call_gemini(prompt)

    try:
        return json.loads(response)
    except:
        return {"error": "Conflict detection failed", "raw": response}