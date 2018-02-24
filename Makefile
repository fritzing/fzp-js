BIN = ./node_modules/.bin

all: lint test build
lint:
	@$(BIN)/eslint .
lint-fix:
	@$(BIN)/eslint . --fix
test:
	@$(BIN)/jest
.PHONY: all lint lint-fix test

build:
	@$(BIN)/babel -d lib src
.PHONY: build

docs:
	@$(BIN)/esdoc
docs-open: docs
	@open docs/index.html
docs-commit: docs
	git add docs
	git commit -m "Updated docs artifact"
.PHONY: docs docs-open docs-commit

clean:
	@rm -rf docs
.PHONY: clean
