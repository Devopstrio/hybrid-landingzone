.PHONY: help build up down test lint migrate provision-test

help:
	@echo "Hybrid Landing Zone Platform - Management Commands"
	@echo "--------------------------------------------------"
	@echo "build          : Build all containers"
	@echo "up             : Start all services"
	@echo "down           : Stop all services"
	@echo "test           : Run all tests"
	@echo "lint           : Run linting checks"
	@echo "migrate        : Run database migrations"
	@echo "provision-test : Test account provisioning workflow"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

provision-test:
	docker-compose exec api python scripts/enroll/test_provisioning.py
