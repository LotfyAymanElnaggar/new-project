# Deployment Checklist

- [ ] Pull latest code
- [ ] Install PHP dependencies (`composer install --no-dev --optimize-autoloader`)
- [ ] Run migrations (`php artisan migrate --force`)
- [ ] Cache config/routes/views
- [ ] Restart queue workers
- [ ] Verify `/health` endpoint
