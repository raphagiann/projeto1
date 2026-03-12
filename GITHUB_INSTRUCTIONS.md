# Instruções para Enviar o Projeto ao GitHub

## Passo 1: Instalar o Git (se ainda não tiver)

Baixe e instale o Git em: https://git-scm.com/download/win

## Passo 2: Abrir o Terminal no Diretório do Projeto

Abra o PowerShell ou Git Bash na pasta:
```
c:\Users\rapha\OneDrive\projetos para github\projeto1
```

## Passo 3: Executar os Comandos

Execute os seguintes comandos no terminal:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit: Modern Website Full Stack Project"

# Adicionar o repositório remoto
git remote add origin https://github.com/raphagiann/projeto1.git

# Renomear branch para main (se necessário)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

## Passo 4: Autenticação

Quando solicitado, use suas credenciais do GitHub:
- Username: raphagiann
- Password: Use um Personal Access Token (não a senha da conta)

### Como criar um Personal Access Token:

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token" > "Generate new token (classic)"
3. Dê um nome (ex: "projeto1")
4. Selecione o escopo "repo"
5. Clique em "Generate token"
6. Copie o token e use como senha

## Alternativa: Usar GitHub Desktop

Se preferir uma interface gráfica:

1. Baixe o GitHub Desktop: https://desktop.github.com/
2. Abra o GitHub Desktop
3. File > Add Local Repository
4. Selecione a pasta: c:\Users\rapha\OneDrive\projetos para github\projeto1
5. Clique em "Publish repository"
6. Selecione sua conta e confirme

## Verificar

Após o push, acesse:
https://github.com/raphagiann/projeto1

Você verá todos os arquivos do projeto lá! ✅
