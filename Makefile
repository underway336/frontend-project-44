install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js
	
brain-gcd:
	node bin/brain-gcd.js

publish:
	npm publish --dry-run

#install: install-deps
#	npx simple-git-hooks

#run:
#	bin/nodejs-package.js 10

#install-deps:
#	npm ci

#test:
#	npm test

#test-coverage:
#	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

#.PHONY: test	
