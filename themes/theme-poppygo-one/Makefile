default: build_css build_hugotheme build_pogosite

build_css:
	@echo COMPILING STATIC CSS
	@npm run tailwind

clean_dist:
	@rm -Rf ./dist

clean_build:
	@rm -Rf ./build

build_hugotheme: clean_dist clean_build
	@echo BUIlDING HUGO THEME
	@mkdir -p ./build/poppygo-one
	@cp -Rf ./README.md archetypes assets exampleSite layouts theme.toml LICENSE build/poppygo-one
	@rm -Rf ./build/poppygo-one/exampleSite/themes
	@mkdir -p ./dist
	@cd ./build && tar czf ../dist/poppygo-one.tgz ./poppygo-one

build_pogosite: build_hugotheme
	@echo BUIlDING POPPYGO SITE TEMPLATE
	@cp -Rf ./build/poppygo-one/exampleSite ./build/poppygo-one-tpl
	@mkdir -p ./build/poppygo-one-tpl/themes
	@cp -Rf ./build/poppygo-one ./build/poppygo-one-tpl/themes/
	@cd ./build/poppygo-one-tpl && zip -q -r ../../dist/poppygo-one.pogosite *

release: build_pogosite
	@echo CREATE RELEASE
	@echo "## Changelog\n" > ./dist/changelog.txt
	@git log $$(git describe --tags --abbrev=0)..HEAD --pretty=format:"%h: %s" | grep -v Merge >> ./dist/changelog.txt
	@cat ./dist/changelog.txt
	@git tag -a v`cat VERSION` -m "new version `cat VERSION`"
	@git push origin v`cat VERSION`
	@gh release create v`cat VERSION` dist/poppygo-one.pogosite dist/poppygo-one.tgz -p -t v`cat VERSION` -F dist/changelog.txt
