from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List
import os
import shutil
from datetime import datetime

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    """Upload de arquivo com validação de segurança"""
    
    # Validação de tipo de arquivo
    allowed_extensions = {'.jpg', '.jpeg', '.png', '.pdf', '.doc', '.docx'}
    file_ext = os.path.splitext(file.filename)[1].lower()
    
    if file_ext not in allowed_extensions:
        raise HTTPException(status_code=400, detail="Tipo de arquivo não permitido")
    
    # Validação de tamanho (10MB)
    file.file.seek(0, 2)
    file_size = file.file.tell()
    file.file.seek(0)
    
    if file_size > 10 * 1024 * 1024:
        raise HTTPException(status_code=400, detail="Arquivo muito grande (máximo 10MB)")
    
    # Salvar arquivo com nome único
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    safe_filename = f"{timestamp}_{file.filename}"
    file_path = os.path.join(UPLOAD_DIR, safe_filename)
    
    try:
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao salvar arquivo: {str(e)}")
    
    return {
        "filename": safe_filename,
        "size": file_size,
        "content_type": file.content_type,
        "message": "Arquivo enviado com sucesso"
    }

@router.get("/list")
async def list_files():
    """Listar arquivos enviados"""
    try:
        files = os.listdir(UPLOAD_DIR)
        file_list = []
        
        for filename in files:
            file_path = os.path.join(UPLOAD_DIR, filename)
            file_stat = os.stat(file_path)
            file_list.append({
                "filename": filename,
                "size": file_stat.st_size,
                "created": datetime.fromtimestamp(file_stat.st_ctime).isoformat()
            })
        
        return {"files": file_list, "count": len(file_list)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
