# Queue Notes

## Run worker locally
```bash
php artisan queue:work
```

## Recommended in production
- Use a process manager (supervisor/systemd)
- Enable retries and failure monitoring
