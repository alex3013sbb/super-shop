### 🚀 Team Guide: Setting up Local Dual-Repository Sync (GitHub + Azure)

To set up a shortcut that automatically pushes your code to both GitHub and Azure DevOps at the same time while linking your tasks.

🔑 Prerequisite: Add your SSH Key to Azure

Click on User Settings in Azure DevOps (the user icon in the top-right corner).

Select SSH Public Keys from the menu.

Click + New Key, paste your local public key (usually found in ~/.ssh/id_ed25519.pub or id_rsa.pub), and save.

```bash
# 1. Add Azure DevOps as a secondary remote destination
git remote add azure git@ssh.dev.azure.com:v3/INFW25A-Super-Cool-Agile-Team/Praxisprojekt/Praxisprojekt

# 2. Create the 'git pushall' shortcut command
git config alias.pushall '!git push origin && git push azure'

# 3. Usage: Include the Azure task ID in your commit message, then push to both platforms
git commit -m "Your commit message #42"
git pushall

```
