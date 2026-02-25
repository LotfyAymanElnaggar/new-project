# Local Setup

## Prerequisites
- PHP 8+
- Composer
- Node.js + npm
- MySQL (or preferred database)

## Installation
```bash
cp .env.example .env
composer install
npm install
php artisan key:generate
php artisan migrate
```

## Run
```bash
php artisan serve
npm run dev
```
