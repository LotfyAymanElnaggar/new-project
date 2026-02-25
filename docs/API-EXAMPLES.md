# API Examples

> Update paths to match your API routes.

## Login
```bash
curl -X POST http://127.0.0.1:8000/api/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"test@example.com","password":"password"}'
```

## Current User
```bash
curl http://127.0.0.1:8000/api/user \\
  -H "Authorization: Bearer <TOKEN>"
```
