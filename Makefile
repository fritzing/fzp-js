include node_modules/fritzing-js/setup.mk

test-load-data:
	git clone git@github.com:fritzing/fritzing-parts.git test/fixtures/fritzing-parts
test-load:
	node test/partstest.js
.PHONY: test-load-data test-load
