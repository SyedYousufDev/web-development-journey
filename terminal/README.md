# 🖥️ Terminal

A beginner-friendly guide to using the Terminal — one of the most powerful tools in a developer's toolkit.

---

## 📌 What is the Terminal?

The **Terminal** (also called the Command Line or CLI — Command Line Interface) is a text-based interface that lets you communicate directly with your computer by typing commands. Instead of clicking icons and buttons, you type instructions and the computer executes them.

As a web developer, you'll use the terminal to:
- Navigate your file system
- Create and delete files/folders
- Run scripts and tools (like Git, Node.js, npm)
- Deploy and manage projects

---

## 📚 Different Terms You'll Hear

| Term | Meaning |
|------|---------|
| **Terminal** | The application/window you type in |
| **Shell** | The program that reads and executes your commands (e.g. Bash, Zsh) |
| **CLI** | Command Line Interface — text-based interaction |
| **Console** | Often used interchangeably with Terminal |
| **Bash** | A popular shell used on Linux/Mac |
| **Zsh** | Default shell on newer Macs |
| **PowerShell** | Windows shell (more powerful than CMD) |
| **CMD** | Basic Windows command prompt |

---

## 🪟 Windows Users — Installation

Windows doesn't come with a Unix-style terminal by default. You have a few options:

- **Git Bash** — Installs alongside Git and gives you a Bash terminal on Windows ✅ (Recommended for beginners)
- **WSL (Windows Subsystem for Linux)** — Run a full Linux terminal inside Windows
- **PowerShell** — Built-in Windows option with its own syntax

> 💡 **Tip:** Git Bash is the easiest starting point. It's installed automatically when you install Git for Windows.

---

## ⌨️ Basic Commands

These are the commands you'll use every single day:

```bash
pwd           # Print Working Directory — shows where you currently are
ls            # List files and folders in current directory
ls -a         # List ALL files including hidden ones (like .gitignore)
ls -l         # List with details (permissions, size, date)
clear         # Clear the terminal screen
echo "Hello"  # Print text to the terminal
```

---

## 🧭 Navigation Commands

Moving around your file system is one of the most common things you'll do:

```bash
cd folder-name        # Change Directory — go into a folder
cd ..                 # Go one level UP (back to parent folder)
cd ../..              # Go two levels up
cd ~                  # Go to your Home directory
cd /                  # Go to the Root directory
cd Documents/project  # Navigate multiple levels at once
```

---

## 🗺️ Paths in Navigation

There are two types of paths:

**Absolute Path** — starts from the root of the system:
```bash
cd /Users/yourname/Documents/my-project
```

**Relative Path** — starts from where you currently are:
```bash
cd my-project        # Go into "my-project" from current location
cd ../other-project  # Go up one level, then into "other-project"
```

> 💡 **Tip:** Use `pwd` anytime to check your current location.

---

## 📁 Making Directories

```bash
mkdir folder-name           # Make a new folder
mkdir css                   # Creates a "css" folder
mkdir images scripts styles # Create multiple folders at once
mkdir -p parent/child       # Create nested folders (parent AND child)
```

---

## 🚩 What are Flags?

**Flags** (also called options or switches) modify how a command behaves. They start with `-` (short) or `--` (long):

```bash
ls -l          # -l flag: show list in long format
ls -a          # -a flag: show ALL files including hidden
ls -la         # Combine flags: long format + all files
mkdir -p a/b/c # -p flag: create parent directories as needed
rm -r folder   # -r flag: remove recursively (for folders)
rm -f file     # -f flag: force remove without confirmation
```

> 💡 Short flags can usually be combined: `ls -la` = `ls -l -a`

---

## 📄 Touch Command

The `touch` command creates a new empty file:

```bash
touch index.html       # Creates index.html
touch style.css        # Creates style.css
touch app.js README.md # Creates multiple files at once
```

> 💡 If the file already exists, `touch` just updates its timestamp — it won't overwrite your content.

---

## 🗑️ Deleting Files & Folders

```bash
rm filename.txt        # Delete a single file
rm file1.txt file2.txt # Delete multiple files
rm -r folder-name      # Delete a folder and everything inside it
rm -rf folder-name     # Force delete (no confirmation) — use with caution!
rmdir folder-name      # Delete an EMPTY folder only
```

> ⚠️ **Warning:** There is no "Undo" or Recycle Bin in the terminal. Deleted files are gone permanently. Always double-check before running `rm`.

---

## 🔥 Quick Reference Cheat Sheet

```bash
# WHERE AM I?
pwd

# WHAT'S HERE?
ls / ls -la

# MOVE AROUND
cd folder / cd .. / cd ~

# CREATE
mkdir folder-name
touch file.txt

# DELETE
rm file.txt
rm -r folder-name
```

---

## 💡 Pro Tips

- Press **Tab** to auto-complete file and folder names
- Press **↑ Arrow** to cycle through previous commands
- Press **Ctrl + C** to cancel a running command
- Press **Ctrl + L** to clear the screen (same as `clear`)
- Type `history` to see your recent commands

---

*Part of the Delta Batch Web Development Course — Section 33*
