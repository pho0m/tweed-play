.PHONY:
start:
	docker run -d tweed-play

.PHONY:
build:
	docker build --tag tweed-play .

