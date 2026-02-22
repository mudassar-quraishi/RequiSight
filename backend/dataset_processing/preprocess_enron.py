import kagglehub
import pandas as pd
import json
import uuid
import os

# Create output folder
os.makedirs("../data", exist_ok=True)

# Download dataset path
dataset_path = kagglehub.dataset_download("wcukierski/enron-email-dataset")

csv_path = os.path.join(dataset_path, "emails.csv")

print("Reading CSV safely...")

# 🔥 CRITICAL FIX: encoding + error handling
df = pd.read_csv(
    csv_path,
    nrows=5000,
    encoding="latin1",   # <- Fix here
    low_memory=False
)

print("Loaded successfully.")

def extract_body(text):
    if "X-FileName:" in str(text):
        return text.split("X-FileName:")[-1]
    return str(text)

df["clean_body"] = df["message"].apply(extract_body)

keywords = ["project", "requirement", "must", "deadline", "budget", "timeline"]

def is_relevant(text):
    text = text.lower()
    return any(k in text for k in keywords)

filtered = df[df["clean_body"].apply(is_relevant)]

communications = []

for _, row in filtered.sample(min(300, len(filtered))).iterrows():
    communications.append({
        "id": str(uuid.uuid4()),
        "channel": "email",
        "speaker": "unknown",
        "content": row["clean_body"][:1000]
    })

output_path = "../data/enron_subset.json"

with open(output_path, "w", encoding="utf-8") as f:
    json.dump(communications, f, indent=2, ensure_ascii=False)

print(f"✅ enron_subset.json created at {output_path}")