# 🚀 RequiSight  
### AI-Powered Requirement Extraction & Analysis Platform  

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Backend-FastAPI-green?style=for-the-badge" />
  <img src="https://img.shields.io/badge/AI-Google%20Gemini-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Status-Active-success?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-purple?style=for-the-badge" />
</p>

<p align="center">
  Transform unstructured conversations into structured software requirements using AI.
</p>

---

## ✨ Overview

**RequiSight** is an AI-powered requirement engineering platform that automatically extracts structured software requirements from unstructured text such as:

- 📝 Meeting transcripts  
- 💬 Slack conversations  
- 📞 Client discussions  
- 📄 Raw documentation  

Using **Google Gemini AI**, the system classifies and structures requirements into machine-readable JSON format.

---

## 🎯 Problem Statement

Requirement gathering in software projects is often:

- Manual  
- Time-consuming  
- Ambiguous  
- Poorly documented  
- Hard to trace  

RequiSight automates this workflow using AI, reducing manual effort and improving clarity in early project phases.

---

## 🧠 Core Features

- 🔍 AI-powered requirement extraction  
- 🏷 Functional & Non-functional classification  
- ⚠ Constraint detection  
- 👥 Target user identification  
- 📊 Structured JSON output  
- ⚡ FastAPI backend  
- 🎨 Modern React dashboard  
- 🔄 Real-time API integration  

---

## 🏗 Architecture

```
User (Frontend)
        ↓
React + Vite Dashboard
        ↓
FastAPI Backend
        ↓
Google Gemini API
        ↓
Structured JSON Requirements
```

---

## 🛠 Tech Stack

### 🔹 Frontend
- React
- Vite
- Tailwind CSS
- Radix UI
- Lucide Icons

### 🔹 Backend
- FastAPI
- Python 3
- Google Gemini (`google-genai`)
- Uvicorn

---

## 📂 Project Structure

```
RequiSight/
│
├── backend/
│   ├── data/
│   │   └── ami_subset.json
│   ├── main.py
│   ├── extractor.py
│   ├── gemini_client.py
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

---

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/RequiSight.git
cd RequiSight
```

---

# 🖥 Backend Setup

## Create Virtual Environment

```bash
python -m venv .venv
```

## Activate Environment

### Windows
```bash
.venv\Scripts\activate
```

### Mac/Linux
```bash
source .venv/bin/activate
```

## Install Dependencies

```bash
pip install fastapi uvicorn python-dotenv google-genai
```

---

## 🔑 Configure Gemini API Key

Create a `.env` file inside the `backend/` directory:

```env
GEMINI_API_KEY=your_api_key_here
```

Get your API key from:  
👉 https://aistudio.google.com/app/apikey

---

## ▶ Run Backend

```bash
uvicorn main:app --reload
```

Backend will run at:

```
http://127.0.0.1:8000
```

---

# 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🔌 API Endpoint

## POST `/extract`

Returns structured requirements:

```json
{
  "functional_requirements": [],
  "non_functional_requirements": [],
  "constraints": [],
  "target_users": []
}
```

---

# 🧠 How It Works

1. User clicks **Extract Requirements**
2. Frontend sends POST request to `/extract`
3. Backend loads conversation dataset
4. Gemini processes structured prompt
5. AI returns JSON output
6. Dashboard updates dynamically

---

# 🚀 Future Roadmap

- 📊 Traceability matrix generation  
- ⚔ Requirement conflict detection  
- 📄 BRD auto-generation  
- 😊 Sentiment analysis  
- 📤 Export to PDF / DOCX  
- 🔐 Authentication & role management  
- 🔗 Jira integration  
---

# ⭐ Support

If you found this project helpful:

- ⭐ Star the repository  
- 🍴 Fork it  
- 🛠 Contribute  

---

# 📜 License

MIT License
