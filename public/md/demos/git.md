# Introduction to Git (Instructor Notes)

## Organization
One possible way to organize the screen is as follows:
1. Text Editor on left
2. Terminal on right top
3. Finder/file explorer on right bottom.

## Creating a new repository
```bash
# Make a new directory (mkdir) for my project
$ mkdir myNewProject

# Change directory (cd) into the project
$ cd myNewProject

# Initialize the git repository
$ git init
Initialized empty Git repository in /Users/mattfeng/meet/meet-demos/myNewProject/.git/

# List all files in directory; if you see .git, that means the repo was successfully initialized
$ ls -a
.  ..  .git
```

## Tracking Changes, Part 1
```bash
# Create two blank files (touch)
$ touch myapp.py
$ touch README.md

# Get git's current view of our project (aka repository)
$ git status
On branch master

Initial commit

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	README.md
	myapp.py

nothing added to commit but untracked files present (use "git add" to track)

# Add myapp.py to the staging area
$ git add myapp.py

# Check git status again
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   myapp.py

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	README.md
```

## Tracking Changes, Part 2
**Key Idea:** Editing an already staged file does not mean that those edits will automatically be committed.
```bash
# Make some changes to myapp.py, and display the edits (cat)
$ vim myapp.py
$ cat myapp.py
print("Hello!")

# Check git status one more time
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

	new file:   myapp.py

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   myapp.py

Untracked files:
  (use "git add <file>..." to include in what will be committed)

	README.md
```

# Tracking Changes, Part 3 (Multiple Files)