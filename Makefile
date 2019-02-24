#!/usr/bin/make -f

# Makefile for identifier-js

SHELL := /bin/bash

.PHONY: all help build serve \
	symlink_dataset_cpus \
	symlink_dataset_monitors \
	symlink_dataset_motherboards \
	symlink_dataset_thermalcompounds \
	clean

help: ## Show this help dialog.
	@echo -e "$$(grep -hE '^\S+:.*##' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' -e 's/^\(.\+\):\(.*\)/\\x1b[36m\1\\x1b[m:\2/' | column -c2 -t -s :)"

build: src/data/_current ## Build app using the current data set.
	@npm run build

serve: src/data/_current ## Run a development server.
	@npm run serve

symlink_dataset_cpus: un_symlink ## Symlink the CPUs dataset.
	@ln -sf cpus src/data/_current

symlink_dataset_monitors: un_symlink ## Symlink the monitors dataset.
	@ln -sf monitors src/data/_current

symlink_dataset_motherboards: un_symlink ## Symlink the motherboards dataset.
	@ln -sf motherboards src/data/_current

symlink_dataset_thermalcompounds: un_symlink ## Symlink the thermalcompounds dataset.
	@ln -sf thermalcompounds src/data/_current

src/data/_current: # Ensure dataset is linked
	@ln -s monitors src/data/_current
	@# TODO ^ create and use src/data/sample instead of src/data/monitors

un_symlink: # Break the symlink
	@rm -f src/data/_current

clean: ## Remove build files.
	@rm -rf dist
