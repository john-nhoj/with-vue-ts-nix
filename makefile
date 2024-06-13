# Makefile to symlink git hooks

# Variables
HOOKS_DIR := .git/hooks
LOCAL_HOOKS_DIR := git-hooks
PRE_COMMIT_HOOK := pre-commit

# Targets
.PHONY: symlink-pre-commit
symlink-pre-commit:
	@echo "Creating symlink for pre-commit hook..."
	@ln -sf ../../$(LOCAL_HOOKS_DIR)/$(PRE_COMMIT_HOOK) $(HOOKS_DIR)/$(PRE_COMMIT_HOOK)
	@echo "Pre-commit hook symlinked successfully."
