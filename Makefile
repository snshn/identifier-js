# Makefile for identifier-js

.PHONY: all build serve symlink_data_monitors clean

all: serve

# build the currently symlinked data set
build: src/data/_symlink
	@npm run build

# ensure a dataset is linked
serve: src/data/_symlink
	@npm run serve

# symlink the monitors dataset
symlink_data_monitors:
	@ln -sf monitors src/data/_symlink

# ensure the symlink is in place
src/data/_symlink:
	@ln -s monitors src/data/_symlink
	@# TODO ^ use src/data/sample instead of src/data/monitors

# remove ./build/
clean:
	@rm -rf build
