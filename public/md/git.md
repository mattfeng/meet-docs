# Git Notes

Every commit creates a new **child** version, called a **snapshot** of the **parent**. The information that has changed between a parent and child by a **commit** is called the **change set**. The series of snapshots formed by this linked list is called a stream or **branch**. The main branch is typically called the **master** in Git.

What is Git? Git is software that knows how to apply and roll back change sets between two snapshots.

The focus on change sets is the reason for the ``add`` command in Git. Changes in the working directory are added to the **staging area**, or **index**, for the next commit.

``git status`` shows which changes have been added or not to the index.
``git log`` shows the series of commits made in the working directory.
``git diff`` shows the changes in the working directory that have not yet been added to the index. ``git diff --cached`` shows the staged changes. 

``git diff`` is the command you use to actually see the patch.
``git diff`` without any additional arguments only shows unstaged edits.
``git diff --staged`` lets you see the staged changes that are ready to go into the next commit. Just to make things annoying, ``--staged`` and ``--cached`` are synonyms.

It may be helpful to view ``git add`` as "add this content to the next commit" rather than "add this file to the project."

``git rm`` will delete the file from your working directory, since it believes that you don't want to track it, nor be bugged that it is an "untracked file".

If you only want to remove a file from the staging area, use the command ``git rm --staged``.

Amending commits
``git commit --amend`` if you accidentally commit your staging area too early.

``git checkout -- [file]`` deletes all unstaged changes made to the file since the last commit. Combine this with ``git reset HEAD [file]`` if you want to undo the staged changes.

## Working with Remotes
``git fetch [remote]`` pull data to local repository
``git pull [remote]`` fetch and merge with current branch