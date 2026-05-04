# 🐙 Git & GitHub

A complete beginner's guide to version control with Git and GitHub — essential tools for every web developer.

---

## 📌 What is Git & GitHub?

**Git** is a free, open-source **version control system**. It tracks changes in your code over time, so you can go back to any previous version, experiment safely, and collaborate with others.

**GitHub** is a **cloud-based platform** that hosts your Git repositories online. Think of it this way:

| Git | GitHub |
|-----|--------|
| The tool on your computer | The website that stores your code |
| Tracks changes locally | Shares your code with the world |
| Works offline | Needs internet |
| Like saving versions of a document | Like Google Drive for your code |

---

## 👤 Creating a GitHub Account

1. Go to [github.com](https://github.com)
2. Click **Sign Up**
3. Choose a username (this will be public — pick something professional)
4. Enter your email and create a password
5. Verify your account and you're done!

> 💡 **Tip:** Your GitHub profile acts like a portfolio. Future employers will look at it!

---

## 🌐 Using GitHub

GitHub lets you:
- **Create repositories** (folders for your projects)
- **View your code** in the browser
- **Share your projects** with others
- **Collaborate** by accepting contributions
- **Deploy websites** using GitHub Pages (free hosting!)

Key terms on GitHub:
- **Repository (Repo)** — A project folder with all its files and history
- **Commit** — A saved snapshot of your changes
- **Branch** — A separate version of your code to work on
- **Pull Request** — A request to merge your changes into the main branch

---

## 💻 Using Git (Locally)

After installing Git, open your terminal and verify the installation:

```bash
git --version
# Output: git version 2.x.x
```

Git tracks your project files and their entire change history — all stored in a hidden `.git` folder inside your project.

---

## ⚙️ Configuring Git

Before you start using Git, tell it who you are. This info appears on every commit you make:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Check your configuration:
```bash
git config --list
```

> 💡 Use `--global` to set this for all projects on your computer. Use without `--global` to set it for just one project.

---

## 🔵 Git with VSCode

VSCode has built-in Git integration:

- The **Source Control panel** (Ctrl+Shift+G) shows all changed files
- Changed files show a **M** (Modified) or **U** (Untracked) badge
- You can stage, commit, and push directly from VSCode without the terminal
- Conflicts are highlighted in the editor with visual diff tools

> 💡 Both methods (terminal and VSCode) do the same thing — use whichever feels more comfortable.

---

## 📥 Clone Command

**Cloning** downloads an existing repository from GitHub to your computer:

```bash
git clone https://github.com/username/repository-name.git

# Clone into a specific folder name:
git clone https://github.com/username/repo.git my-folder
```

This creates a local copy with the full Git history included.

---

## 📊 Status Command

Check the current state of your repository at any time:

```bash
git status
```

It tells you:
- Which files are **modified** (changed but not staged)
- Which files are **staged** (ready to commit)
- Which files are **untracked** (new files Git doesn't know about yet)

> 💡 Run `git status` frequently — it's your best friend for understanding what's happening.

---

## ➕ Add & Commit Commands

Changes go through a two-step process before being saved:

**Step 1 — Stage your changes (Add):**
```bash
git add filename.html       # Stage a specific file
git add css/style.css       # Stage a file in a subfolder
git add .                   # Stage ALL changes in the current folder
```

**Step 2 — Commit (Save a snapshot):**
```bash
git commit -m "Your message describing what you changed"

# Examples of good commit messages:
git commit -m "Add navigation bar to homepage"
git commit -m "Fix broken link in footer"
git commit -m "Style the contact form"
```

> 💡 Write commit messages in present tense and be descriptive. Future-you will thank you!

---

## 🚀 Push Command

**Push** sends your local commits to GitHub:

```bash
git push origin main
# "origin" = the remote (GitHub)
# "main" = the branch name
```

After pushing, your code is visible on GitHub.

---

## 🆕 Init Command

**Init** creates a brand new Git repository in your current folder:

```bash
git init
```

This creates a hidden `.git` folder and starts tracking your project. Use this when starting a project from scratch (not cloning).

---

## 📤 Pushing a Local Repo to GitHub

When you start a project locally and want to put it on GitHub:

```bash
# 1. Initialize Git in your project folder
git init

# 2. Stage all your files
git add .

# 3. Make your first commit
git commit -m "Initial commit"

# 4. Connect to your GitHub repository
git remote add origin https://github.com/username/repo-name.git

# 5. Push to GitHub
git push -u origin main
```

> 💡 The `-u` flag sets "origin main" as the default, so next time you can just type `git push`.

---

## 🔄 Workflow

The everyday Git workflow looks like this:

```
Make changes to files
      ↓
git add .
      ↓
git commit -m "describe changes"
      ↓
git push origin main
      ↓
Code is live on GitHub ✅
```

Repeat this cycle as you work on your project!

---

## 🌿 Git Branches

A **branch** is an independent copy of your code where you can work without affecting the main project:

```bash
git branch              # List all branches
git branch feature-nav  # Create a new branch called "feature-nav"
```

> 💡 The default branch is called `main` (or `master` in older repos). Always keep `main` clean and working.

---

## 🔀 Branch Commands

```bash
git branch new-branch-name   # Create a branch
git switch new-branch-name   # Switch to that branch
git checkout new-branch-name # Older way to switch branches

# Create AND switch to new branch in one command:
git switch -c new-branch-name
git checkout -b new-branch-name  # Older syntax
```

---

## 🔗 Merging Branches

Once your feature is ready, merge it back into `main`:

```bash
# Step 1: Switch to the branch you want to merge INTO
git switch main

# Step 2: Merge your feature branch
git merge feature-nav
```

After merging, you can delete the branch:
```bash
git branch -d feature-nav
```

---

## 📥 Pull Command

**Pull** downloads the latest changes from GitHub to your local machine:

```bash
git pull origin main
```

Always pull before starting work if you're collaborating, to make sure you have the latest code.

---

## ⚡ Merge Conflicts

A **merge conflict** happens when two people (or branches) change the same part of the same file. Git can't decide which version to keep and asks you to resolve it manually.

Git marks the conflict in the file like this:
```
<<<<<<< HEAD
Your version of the code
=======
Their version of the code
>>>>>>> feature-branch
```

To resolve:
1. Open the file and decide which code to keep
2. Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
3. Save the file
4. `git add .` and `git commit`

---

## 🔧 Fixing Mistakes

```bash
# Undo changes in a file (before staging):
git restore filename.html

# Unstage a file (after add, before commit):
git restore --staged filename.html

# Change the last commit message:
git commit --amend -m "New correct message"

# View commit history:
git log
git log --oneline  # Compact version
```

---

## 🍴 What is Forking?

**Forking** creates your own personal copy of someone else's repository on GitHub.

- The fork lives in **your** GitHub account
- You can freely make changes without affecting the original
- You can submit a **Pull Request** to suggest your changes to the original project

**Fork vs Clone:**
| Fork | Clone |
|------|-------|
| Copy on GitHub | Copy on your computer |
| Used for contributing to others' projects | Used for your own projects |
| Done on github.com | Done in terminal with `git clone` |

---

## 🔥 Full Git Cheat Sheet

```bash
# SETUP
git config --global user.name "Name"
git config --global user.email "email"

# START A PROJECT
git init                          # New local repo
git clone <url>                   # Copy from GitHub

# DAILY WORKFLOW
git status                        # Check what's changed
git add .                         # Stage everything
git commit -m "message"           # Save snapshot
git push origin main              # Upload to GitHub
git pull origin main              # Download from GitHub

# BRANCHES
git branch                        # List branches
git switch -c branch-name         # Create + switch
git switch main                   # Go back to main
git merge branch-name             # Merge into current
git branch -d branch-name         # Delete branch

# UNDO
git restore file.html             # Discard changes
git restore --staged file.html    # Unstage
git log --oneline                 # View history
```

---

*Part of the Delta Batch Web Development Course — Section 34*
