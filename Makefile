BIN = ./node_modules/.bin

all: lint test build
lint:
	@$(BIN)/eslint .
lint-fix:
	@$(BIN)/eslint . --fix
test:
	@$(BIN)/jest
open-coverage: test
	@open coverage/lcov-report/index.html
.PHONY: all lint lint-fix test open-coverage

build:
	@$(BIN)/babel -d lib src
build-commit: build
	git add lib
	git commit -m "Updated lib artifact"
.PHONY: build build-commit

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
