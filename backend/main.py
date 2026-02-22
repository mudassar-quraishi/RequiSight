from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from extractor import extract_requirements_from_file

app = FastAPI()

# Allow frontend connection
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"status": "Backend running"}


@app.post("/extract")
def extract():
    result = extract_requirements_from_file("data/ami_subset.json")
    return {"result": result}