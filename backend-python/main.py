from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import files, weather

app = FastAPI(
    title="Modern Website - Python Services",
    description="Serviços auxiliares e microserviços",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(files.router, prefix="/api/files", tags=["Files"])
app.include_router(weather.router, prefix="/api/weather", tags=["Weather"])

@app.get("/")
def read_root():
    return {"message": "Modern Website Python API", "status": "running"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
