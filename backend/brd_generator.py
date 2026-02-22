import json
from gemini_client import call_gemini

def generate_brd(requirements):

    prompt = f"""
Generate a structured Business Requirements Document using these requirements.

Sections required:
- Executive Summary
- Business Objectives
- Functional Requirements
- Non-Functional Requirements
- Assumptions
- Success Metrics
- Timeline

Return JSON structured by sections.

Requirements:
{json.dumps(requirements)}
"""

    response = call_gemini(prompt)

    try:
        return json.loads(response)
    except:
        return {"error": "BRD generation failed", "raw": response}