.PHONY: install serve test env-check

install:
	composer install
	npm install

serve:
	php artisan serve

test:
	php artisan test

env-check:
	npm run check:env
