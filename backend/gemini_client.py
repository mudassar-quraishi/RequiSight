import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def extract_from_gemini(conversation_text):

    prompt = f"""
Extract structured requirements from the conversation.

Return ONLY pure JSON. Do not add explanation text.

Format:
{{
  "functional_requirements": [],
  "non_functional_requirements": [],
  "constraints": [],
  "target_users": []
}}

Conversation:
{conversation_text}
"""

    response = client.models.generate_content(
        model="gemini-1.5-flash",
        contents=prompt,
    )

    raw_text = response.text.strip()

    # Clean markdown if present
    if raw_text.startswith("```"):
        raw_text = raw_text.replace("```json", "").replace("```", "").strip()

    try:
        return json.loads(raw_text)
    except Exception:
        return {
            "error": "Failed to parse Gemini output",
            "raw_output": raw_text
        }