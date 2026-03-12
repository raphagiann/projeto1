# Modern Website - Projeto Full Stack

Site web moderno, profissional e totalmente responsivo com arquitetura completa.

## 🚀 Tecnologias

### Frontend
- **React 18** - Framework JavaScript moderno
- **TailwindCSS** - Framework CSS utility-first
- **React Router** - Navegação SPA
- **Axios** - Cliente HTTP

### Backend Java
- **Spring Boot 3.2** - Framework Java
- **Spring Security** - Autenticação e autorização
- **JWT** - Tokens de autenticação
- **Hibernate** - ORM
- **PostgreSQL** - Banco de dados
- **Swagger/OpenAPI** - Documentação de API

### Backend Python
- **FastAPI** - Framework Python moderno
- **SQLAlchemy** - ORM Python
- **Uvicorn** - Servidor ASGI

### Database
- **PostgreSQL 15** - Banco de dados relacional

## 📁 Estrutura do Projeto

```
projeto1/
├── frontend/              # Aplicação React
│   ├── src/
│   │   ├── components/   # Componentes reutilizáveis
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── services/     # Serviços e APIs
│   │   └── utils/        # Utilitários
│   └── public/
├── backend-java/         # API Spring Boot
│   └── src/main/java/com/modernsite/backend/
│       ├── controller/   # Controllers REST
│       ├── service/      # Lógica de negócio
│       ├── repository/   # Acesso a dados
│       ├── model/        # Entidades JPA
│       ├── dto/          # Data Transfer Objects
│       ├── security/     # Configuração JWT
│       └── config/       # Configurações
├── backend-python/       # API FastAPI
│   └── app/
│       ├── api/          # Rotas da API
│       ├── models/       # Modelos de dados
│       ├── schemas/      # Schemas Pydantic
│       └── services/     # Serviços
├── database/             # Scripts SQL
└── docker-compose.yml    # Orquestração Docker
```

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- Java 17+
- Python 3.11+
- PostgreSQL 15+
- Maven 3.9+
- Docker (opcional)

### Opção 1: Executar com Docker (Recomendado)

```bash
# Clonar o repositório
cd projeto1

# Iniciar todos os serviços
docker-compose up -d

# Acessar:
# Frontend: http://localhost:3000
# Backend Java: http://localhost:8080/api
# Backend Python: http://localhost:8000
# Swagger UI: http://localhost:8080/swagger-ui.html
```

### Opção 2: Executar Localmente

#### 1. Configurar Banco de Dados

```bash
# Criar banco de dados PostgreSQL
psql -U postgres
CREATE DATABASE modernsite;
\q

# Executar script de inicialização
psql -U postgres -d modernsite -f database/init.sql
```

#### 2. Backend Java (Spring Boot)

```bash
cd backend-java

# Compilar e executar
mvn clean install
mvn spring-boot:run

# Ou usando o JAR
java -jar target/backend-java-1.0.0.jar
```

#### 3. Backend Python (FastAPI)

```bash
cd backend-python

# Criar ambiente virtual
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# Instalar dependências
pip install -r requirements.txt

# Executar
python main.py
# Ou: uvicorn main:app --reload --port 8000
```

#### 4. Frontend (React)

```bash
cd frontend

# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm start

# Build para produção
npm run build
```

## 🔐 Segurança

### Implementações de Segurança

- ✅ **Autenticação JWT** - Tokens seguros com expiração
- ✅ **Bcrypt** - Hash de senhas
- ✅ **CORS** - Configuração de origens permitidas
- ✅ **Validação de Dados** - Front-end e back-end
- ✅ **SQL Injection** - Proteção via ORM (Hibernate/SQLAlchemy)
- ✅ **XSS Protection** - Sanitização de inputs
- ✅ **CSRF Protection** - Tokens CSRF
- ✅ **File Upload Validation** - Validação de tipo e tamanho

### Configurações de Segurança

```properties
# backend-java/src/main/resources/application.properties
jwt.secret=your-secret-key-change-this-in-production-minimum-256-bits
jwt.expiration=86400000
```

## 📡 API Endpoints

### Autenticação
- `POST /api/register` - Registrar novo usuário
- `POST /api/login` - Fazer login

### Usuários
- `GET /api/users/me` - Obter dados do usuário autenticado (requer JWT)

### Contato
- `POST /api/contact` - Enviar mensagem de contato

### Estatísticas
- `GET /api/stats` - Obter estatísticas do sistema (requer JWT)

### Serviços Python
- `POST /api/files/upload` - Upload de arquivo
- `GET /api/files/list` - Listar arquivos
- `GET /api/weather/{city}` - Obter clima
- `GET /api/weather/forecast/{city}` - Previsão do tempo

## 📚 Documentação da API

Acesse a documentação interativa:

- **Swagger UI (Java)**: http://localhost:8080/swagger-ui.html
- **OpenAPI Docs (Java)**: http://localhost:8080/api-docs
- **FastAPI Docs (Python)**: http://localhost:8000/docs
- **ReDoc (Python)**: http://localhost:8000/redoc

## 🎨 Funcionalidades

### Frontend
- ✅ Design responsivo (mobile-first)
- ✅ Navbar fixa com menu responsivo
- ✅ Animações suaves
- ✅ Formulários com validação
- ✅ Sistema de autenticação
- ✅ Dashboard administrativo
- ✅ Páginas: Home, Sobre, Serviços, Contato

### Backend
- ✅ API RESTful
- ✅ Autenticação JWT
- ✅ CRUD completo
- ✅ Validação de dados
- ✅ Tratamento de erros
- ✅ Logs
- ✅ Upload de arquivos
- ✅ Integração com APIs externas

## 🧪 Testes

```bash
# Backend Java
cd backend-java
mvn test

# Frontend
cd frontend
npm test
```

## 📦 Build para Produção

```bash
# Frontend
cd frontend
npm run build

# Backend Java
cd backend-java
mvn clean package

# Docker (todos os serviços)
docker-compose up --build
```

## 🔄 Variáveis de Ambiente

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8080/api
```

### Backend Java (application.properties)
```
spring.datasource.url=jdbc:postgresql://localhost:5432/modernsite
spring.datasource.username=postgres
spring.datasource.password=postgres
jwt.secret=your-secret-key
```

## 🐛 Troubleshooting

### Erro de conexão com banco de dados
```bash
# Verificar se PostgreSQL está rodando
psql -U postgres -c "SELECT version();"

# Verificar se o banco existe
psql -U postgres -l | grep modernsite
```

### Erro de porta em uso
```bash
# Windows
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:8080 | xargs kill -9
```

## 📝 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 👥 Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request.

## 📧 Contato

Para dúvidas ou sugestões, entre em contato através do formulário no site.
