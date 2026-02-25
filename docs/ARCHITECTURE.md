# Architecture Notes

This project follows a standard Laravel monolith structure.

## Key Layers
- Routes: `routes/`
- Controllers: `app/Http/Controllers`
- Models: `app/Models`
- Jobs: `app/Jobs`
- Tests: `tests/`

## Suggested Conventions
- Keep controllers thin.
- Move business logic to services/actions.
- Prefer explicit validation in request classes.
