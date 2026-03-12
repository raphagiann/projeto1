@echo off
echo ========================================
echo   Enviando Projeto para GitHub
echo ========================================
echo.

REM Verificar se Git está instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Git nao esta instalado!
    echo.
    echo Por favor, instale o Git em: https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo [1/6] Inicializando repositorio Git...
git init

echo.
echo [2/6] Adicionando arquivos...
git add .

echo.
echo [3/6] Criando commit inicial...
git commit -m "Initial commit: Modern Website Full Stack Project"

echo.
echo [4/6] Adicionando repositorio remoto...
git remote add origin https://github.com/raphagiann/projeto1.git

echo.
echo [5/6] Configurando branch main...
git branch -M main

echo.
echo [6/6] Enviando para GitHub...
echo.
echo ATENCAO: Voce precisara fazer login com suas credenciais do GitHub
echo Username: raphagiann
echo Password: Use um Personal Access Token (nao a senha da conta)
echo.
git push -u origin main

echo.
echo ========================================
echo   Projeto enviado com sucesso!
echo ========================================
echo.
echo Acesse: https://github.com/raphagiann/projeto1
echo.
pause
