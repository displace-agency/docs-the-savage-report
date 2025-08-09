# GitHub MCP Capabilities Guide

## What is GitHub MCP?

GitHub MCP (Model Context Protocol) is a tool that allows me to interact directly with your GitHub repositories. Think of it as giving me controlled access to help you manage your code and documentation.

## What I Can Do

### 📄 File Management

**Create New Files**
- Create any type of file (markdown, code, config files, etc.)
- Place files in any folder within the repository
- Set commit messages to explain what was added

**Update Existing Files**
- Modify content in existing files
- Fix typos, update information, or completely rewrite sections
- **Note:** I must send the entire file back, even for small changes

**Read Files**
- View the contents of any file in your repository
- Check current versions before making updates
- Review folder structures and file organization

### 🔍 Search & Discovery

**Search Repositories**
- Find repositories by name or topic
- Search across all of GitHub or within specific organizations

**Search Code**
- Look for specific code snippets across repositories
- Find examples of how certain functions or features are implemented
- Search for specific text within files

**Search Issues & Pull Requests**
- Find open or closed issues
- Search for specific problems or feature requests
- Look up pull requests by keywords

### 📁 Repository Management

**Create Repositories**
- Set up new repositories with custom names and descriptions
- Make them public or private
- Initialize with README if needed

**Fork Repositories**
- Create copies of existing repositories
- Fork to your account or organizations

**Create Branches**
- Set up new branches for features or experiments
- Branch from main or any other existing branch

### 🔄 Collaboration Features

**Issues**
- Create new issues with titles, descriptions, and labels
- Update existing issues (close, reopen, edit)
- Add comments to ongoing discussions
- List all issues with various filters

**Pull Requests**
- Create PRs to propose changes
- Review existing pull requests
- Add comments and reviews
- Merge approved pull requests
- Check PR status and test results

### 📊 Information Gathering

**List Commits**
- View commit history for any branch
- See who made changes and when

**View Repository Contents**
- Browse all files and folders
- Check file sizes and types
- Navigate repository structure

## What I Cannot Do

### ❌ Limitations

- **Cannot edit files in place** - Must retrieve full content and send it all back
- **Cannot delete files directly** - Need to use other methods
- **Cannot access private repos** - Unless you've granted access
- **Cannot perform Git operations** - Like rebasing, cherry-picking, or complex merges
- **Cannot run code** - I can read and write it, but not execute it
- **Cannot access GitHub Actions directly** - Can't trigger or modify workflows
- **Cannot manage repository settings** - Like webhooks, permissions, or advanced configurations

## Common Use Cases

### 1. Documentation Management
```
"Update the README with new installation instructions"
"Create a new guide in the docs folder"
"Fix typos in the API documentation"
```

### 2. Code Updates
```
"Add a new configuration file"
"Update the package.json version"
"Create a new component file"
```

### 3. Project Organization
```
"Create a new issue for the bug we discussed"
"Add a comment to PR #34"
"Search for all issues related to authentication"
```

### 4. Content Creation
```
"Create a new blog post in the posts folder"
"Update the changelog with today's releases"
"Add a new prompt template"
```

## How File Updates Work

When you ask me to update a specific part of a file:

1. **I fetch** the entire current file content
2. **I modify** only the part you requested
3. **I send back** the complete file with changes
4. **GitHub saves** it as a new version with your commit message

This means even for changing one line, the entire file is transmitted back to GitHub. It's like opening a document, making an edit, and saving the whole document again.

## Best Practices

### ✅ Do's
- **Be specific** about what file and what changes you want
- **Provide context** like file paths and repository names
- **Ask me to check first** if you're unsure about current content
- **Request backups** by creating new branches for major changes

### ⚠️ Don'ts
- Don't assume I can see your private repos without access
- Don't expect real-time collaboration (I can't see live edits from others)
- Don't ask me to run or test code (I can only read/write it)

## Example Commands

### Simple Requests
- "Check what's in the README file"
- "Create a new file called setup.md in the docs folder"
- "Update the version number in package.json to 2.0.0"
- "Search for issues about payment processing"

### Complex Requests
- "Create a comprehensive API documentation file with sections for authentication, endpoints, and examples"
- "Update the FAQ section to use collapsible toggles instead of plain text"
- "Find all pull requests related to the shopping cart feature and summarize their status"

## Authentication Note

I can only access:
- Public repositories (anyone's)
- Private repositories you've explicitly given me access to
- Organizations where you've authorized access

## Quick Reference

| Action | Can Do? | Notes |
|--------|---------|-------|
| Read files | ✅ Yes | Any file in accessible repos |
| Create files | ✅ Yes | Any file type |
| Update files | ✅ Yes | Must send entire file back |
| Delete files | ❌ No | Not directly available |
| Search repos | ✅ Yes | Public repos or with access |
| Create issues | ✅ Yes | With title and description |
| Create PRs | ✅ Yes | Between branches |
| Merge PRs | ✅ Yes | If permissions allow |
| Run code | ❌ No | Can only read/write |
| Trigger Actions | ❌ No | No workflow control |

---

*This guide explains my GitHub capabilities through MCP. For specific tasks not listed here, just ask and I'll let you know if it's possible!*
