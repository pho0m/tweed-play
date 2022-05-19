.PHONY:
dev:
	docker-compose up

.PHONY:
down:
	docker-compose down

.PHONY:
build:
	docker build --tag tweed-play .

.PHONY:
run:
	docker run -d tweed-play
