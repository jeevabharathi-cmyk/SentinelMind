# 🔧 GitHub Pages Configuration Instructions

## ⚠️ IMPORTANT: Configure GitHub Pages Settings

Your code is ready and pushed to GitHub, but you need to configure GitHub Pages to serve from the `/docs` folder.

## 📋 Step-by-Step Instructions

### 1. Go to Your Repository Settings

1. Open your browser and go to:
   ```
   https://github.com/jeevabharathi-cmyk/SentinelMind
   ```

2. Click on **Settings** (top menu bar)

### 2. Configure GitHub Pages

1. In the left sidebar, scroll down and click **Pages**

2. Under **"Build and deployment"** section:
   - **Source**: Select **"Deploy from a branch"**
   - **Branch**: Select **"master"** (or "main" if that's your default branch)
   - **Folder**: Select **"/docs"** (NOT root)
   - Click **Save**

3. Wait 1-2 minutes for GitHub to deploy

### 3. Verify Deployment

After 2 minutes, refresh the Pages settings page. You should see:
```
Your site is live at https://jeevabharathi-cmyk.github.io/SentinelMind/
```

### 4. Visit Your Site

Open: `https://jeevabharathi-cmyk.github.io/SentinelMind/`

You should see the SentinelMind login screen!

---

## 🐛 Troubleshooting

### If the site shows 404:

**Option A: Check Branch Name**
- Make sure you selected the correct branch (master or main)
- Run `git branch` to see your current branch name

**Option B: Force Refresh**
```bash
# Make a small change and push
git commit --allow-empty -m "Trigger GitHub Pages rebuild"
git push origin master
```

### If the site shows but CSS/JS don't load:

**Check file paths** - The files should be:
- `docs/index.html` ✅
- `docs/css/styles.css` ✅
- `docs/js/app.js` ✅

### If you see "There isn't a GitHub Pages site here":

1. Go to Settings → Pages
2. Make sure:
   - Source is "Deploy from a branch"
   - Branch is "master"
   - Folder is "/docs"
3. Click Save again
4. Wait 2-3 minutes

---

## ✅ Expected Result

When properly configured, visiting your URL should show:
- 🛡️ SentinelMind branding
- Login form with username/password fields
- Dark theme with glassmorphism effects
- Gradient "Sign In" button

---

## 📞 Need Help?

If you're still having issues after following these steps, check:

1. **Repository is Public**: Settings → General → Danger Zone → Change visibility
2. **Files are Committed**: Run `git status` (should show "nothing to commit")
3. **Files are Pushed**: Run `git log origin/master` to verify

---

## 🎯 Quick Verification Checklist

- [ ] Went to repository Settings
- [ ] Clicked on Pages in sidebar
- [ ] Set Source to "Deploy from a branch"
- [ ] Set Branch to "master"
- [ ] Set Folder to "/docs"
- [ ] Clicked Save
- [ ] Waited 2 minutes
- [ ] Refreshed the page
- [ ] Saw "Your site is live" message
- [ ] Visited the URL
- [ ] Site loads correctly

---

**Last Updated**: January 29, 2026
**Status**: Waiting for GitHub Pages configuration
