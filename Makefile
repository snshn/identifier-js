#!/usr/bin/make -f

# Makefile for identifier-js

.PHONY: all build serve \
	symlink_data_cpus \
	symlink_data_monitors \
	symlink_data_motherboards \
	symlink_data_thermalcompounds \
	clean

all: serve

# build the currently symlinked data set
build: src/data/_symlink
	@npm run build

# run a development server
serve: src/data/_symlink
	@npm run serve

# symlink the CPUs dataset
symlink_data_cpus: unsymlink
	@ln -sf cpus src/data/_symlink

# symlink the monitors dataset
symlink_data_monitors: unsymlink
	@ln -sf monitors src/data/_symlink

# symlink the motherboards dataset
symlink_data_motherboards: unsymlink
	@ln -sf motherboards src/data/_symlink

# symlink the thermalcompounds dataset
symlink_data_thermalcompounds: unsymlink
	@ln -sf thermalcompounds src/data/_symlink

# ensure a dataset is linked
src/data/_symlink:
	@ln -s monitors src/data/_symlink
	@# TODO ^ create and use src/data/sample instead of src/data/monitors

unsymlink:
	@rm -f src/data/_symlink

# remove ./build/
clean:
	@rm -rf build
