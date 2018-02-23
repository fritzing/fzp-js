BIN = ./node_modules/.bin

all: lint test
lint:
	@$(BIN)/eslint .
lint-fix:
	@$(BIN)/eslint . --fix
test:
	@$(BIN)/jest
.PHONY: all lint lint-fix test

docs:
	@$(BIN)/esdoc
docs-open: docs
	@open docs/index.html
docs-commit: docs
	git add docs
	git commit -m "Updated docs artifact"
clean:
	@rm -rf docs
.PHONY: docs docs-open clean
