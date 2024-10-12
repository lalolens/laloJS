# Master Makefile for Chat Package
.PHONY: all install build clean start publish usage run-local

############################################################################################
# 					VARIABLES									   #
############################################################################################
CHAT_PROJECT = .
BUILD_DIR = $(CHAT_PROJECT)/dist
PACKAGE_NAME = @lalolens/chat
GIT_REPO = https://github.com/lalolens/laloJS.git
############################################################################################

############################################################################################
# Chat Package Commands														   #
############################################################################################
# Default target that installs dependencies and builds the project
all: install build

# Install project dependencies
install:
	@echo "Installing project dependencies..."
	cd $(CHAT_PROJECT) && npm install --legacy-peer-deps
	@echo ""

# Build the project using TypeScript and Rollup
build: clean
	@echo "Building the project..."
	cd $(CHAT_PROJECT) && npx tsc && npx rollup -c
	@echo "Build completed successfully."
	@echo ""

# Clean the build directory
clean:
	@echo "Cleaning build directory..."
	rm -rf $(BUILD_DIR)
	@echo "Clean completed."
	@echo ""

# Start the development server
start:
	@echo "Starting the development server..."
	cd $(CHAT_PROJECT) && npm run dev
	@echo "Development server is now running."
	@echo ""

# Run the project locally without building to dist folder
run-local:
	@echo "Running the TypeScript project locally..."
	cd $(CHAT_PROJECT)/src && npx ts-node index.ts
	@echo "Local run completed."
	@echo ""

# Publish the package to npm
publish:
	@echo "Publishing the package to npm..."
	cd $(CHAT_PROJECT) && npm publish
	@echo "Package published successfully."
	@echo ""

# Install the package from GitHub
install-package:
	@echo "Installing package from GitHub..."
	npm install git+$(GIT_REPO)#playground/chat
	@echo "Package installed successfully."
	@echo ""

# Display usage information
usage:
	@echo "============================== Makefile Usage =============================="
	@echo "Usage: make [command]"
	@echo ""
	@echo "Available Commands:"
	@echo "------------------------------------------------------------------------------------"
	@echo "  all                        - Install dependencies and build the project."
	@echo "  install                    - Install project dependencies using npm."
	@echo "  build                      - Build the project using ES6 modules."
	@echo "  clean                      - Clean the build directory."
	@echo "  start                      - Start the development server using npm."
	@echo "  run-local                  - Run the TypeScript project locally without building."
	@echo "  publish                    - Publish the package to npm."
	@echo "  install-package            - Install the package from GitHub in another project."
	@echo ""
	@echo "Examples:"
	@echo "------------------------------------------------------------------------------------"
	@echo "  make install                     - Install project dependencies."
	@echo "  make build                       - Build the project."
	@echo "  make clean                       - Clean the build directory."
	@echo "  make start                       - Start the development server."
	@echo "  make run-local                   - Run the TypeScript project locally."
	@echo "  make publish                     - Publish the package to npm."
	@echo "  make install-package             - Install the package from GitHub."
	@echo ""
	@echo "==========================================================================="
	@echo "Use 'make usage' to view this information again."