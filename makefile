help:
	@echo -B --always-make
	@echo mkfirst
	@echo mkdocs

mkfirst:
	rm -rfv .git
	git init
	git add --all
	git commit -m "make this the first and the only commit"
	git remote add origin https://github.com/albraga/namus_mensal.git
	git push -u --force origin master

mkdocs:
	if [ -d "docs" ]; then rm -rfv docs; fi
	mkdir docs
	mv dist docs/dist
	cp index.html docs/

