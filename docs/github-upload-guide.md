# GitHub Upload Guide

1. Install Git.
2. Create a new GitHub repository named `azaana-digital`.
3. From the project folder:

```bash
git init
git add .
git commit -m "Initial Azaana Digital website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/azaana-digital.git
git push -u origin main
```

Do not commit a real `.env` file. Commit `.env.example` only.
