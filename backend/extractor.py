import json
import os
from gemini_client import extract_from_gemini


def extract_requirements_from_file(path):
    # Build absolute path safely
    full_path = os.path.join(os.path.dirname(__file__), path)

    with open(full_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Use first 20 messages for MVP
    conversation_text = "\n".join(
        f"{msg['speaker']}: {msg['content']}"
        for msg in data[:20]
    )

    result = extract_from_gemini(conversation_text)

    return result