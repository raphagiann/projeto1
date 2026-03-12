# API Documentation

## Visão Geral

Esta documentação descreve os endpoints disponíveis nas APIs do projeto Modern Website.

## Base URLs

- **Java Backend**: `http://localhost:8080/api`
- **Python Backend**: `http://localhost:8000/api`

## Autenticação

A maioria dos endpoints requer autenticação via JWT (JSON Web Token).

### Como usar

1. Faça login ou registre-se para obter um token
2. Inclua o token no header de todas as requisições protegidas:

```
Authorization: Bearer <seu-token-jwt>
```

## Endpoints

### 1. Autenticação

#### POST /register
Registrar novo usuário

**Request Body:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "email": "joao@example.com",
  "name": "João Silva"
}
```

#### POST /login
Fazer login

**Request Body:**
```json
{
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "email": "joao@example.com",
  "name": "João Silva"
}
```

### 2. Usuários

#### GET /users/me
Obter dados do usuário autenticado (requer autenticação)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "id": 1,
  "name": "João Silva",
  "email": "joao@example.com",
  "createdAt": "2024-01-01T10:00:00"
}
```

### 3. Contato

#### POST /contact
Enviar mensagem de contato

**Request Body:**
```json
{
  "name": "Maria Santos",
  "email": "maria@example.com",
  "subject": "Dúvida sobre serviços",
  "message": "Gostaria de saber mais sobre os serviços oferecidos..."
}
```

**Response (200):**
```json
{
  "message": "Mensagem enviada com sucesso"
}
```

### 4. Estatísticas

#### GET /stats
Obter estatísticas do sistema (requer autenticação)

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "users": 150,
  "messages": 45,
  "services": 6
}
```

### 5. Upload de Arquivos (Python API)

#### POST /files/upload
Upload de arquivo

**Request:**
- Content-Type: multipart/form-data
- Body: file (arquivo)

**Response (200):**
```json
{
  "filename": "20240101_120000_documento.pdf",
  "size": 1024000,
  "content_type": "application/pdf",
  "message": "Arquivo enviado com sucesso"
}
```

**Validações:**
- Tipos permitidos: .jpg, .jpeg, .png, .pdf, .doc, .docx
- Tamanho máximo: 10MB

#### GET /files/list
Listar arquivos enviados

**Response (200):**
```json
{
  "files": [
    {
      "filename": "20240101_120000_documento.pdf",
      "size": 1024000,
      "created": "2024-01-01T12:00:00"
    }
  ],
  "count": 1
}
```

### 6. Clima (Python API)

#### GET /weather/{city}
Obter informações de clima

**Response (200):**
```json
{
  "city": "São Paulo",
  "temperature": 25,
  "condition": "Ensolarado",
  "humidity": 60,
  "wind_speed": 15,
  "description": "Céu limpo com algumas nuvens"
}
```

#### GET /weather/forecast/{city}
Obter previsão do tempo

**Response (200):**
```json
{
  "city": "São Paulo",
  "forecast": [
    {
      "day": "Segunda",
      "temp": 26,
      "condition": "Ensolarado"
    },
    {
      "day": "Terça",
      "temp": 24,
      "condition": "Parcialmente nublado"
    }
  ]
}
```

## Códigos de Status HTTP

- `200 OK` - Requisição bem-sucedida
- `201 Created` - Recurso criado com sucesso
- `400 Bad Request` - Dados inválidos
- `401 Unauthorized` - Não autenticado
- `403 Forbidden` - Sem permissão
- `404 Not Found` - Recurso não encontrado
- `500 Internal Server Error` - Erro no servidor

## Tratamento de Erros

Todas as respostas de erro seguem o formato:

```json
{
  "error": "Descrição do erro",
  "message": "Mensagem detalhada",
  "status": 400
}
```

## Rate Limiting

Atualmente não há limite de requisições, mas em produção recomenda-se implementar rate limiting.

## Versionamento

A API atual é a versão 1.0. Futuras versões serão indicadas na URL: `/api/v2/...`

## Swagger/OpenAPI

Documentação interativa disponível em:
- Java API: http://localhost:8080/swagger-ui.html
- Python API: http://localhost:8000/docs
