run: all test-load

include node_modules/fritzing-js/setup.mk

test-load-data:
	mkdir -p test/fixtures
	git clone https://github.com/fritzing/fritzing-parts.git test/fixtures/fritzing-parts
test-load:
	node test/_fritzing-parts-test.js
.PHONY: test-load-data test-load
