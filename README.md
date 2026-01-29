# React + Vite
# 🛡️ SentinelMind

**Insider Threat Prediction Platform**

Commercial-grade, privacy-preserving insider threat prediction platform for enterprise security.

## 🌐 Live Demo

**GitHub Pages:** [https://jeevabharathi-cmyk.github.io/SentinelMind](https://jeevabharathi-cmyk.github.io/SentinelMind)

## 📁 Project Structure

```
SentinelMind/
├── docs/                    # 🚀 GitHub Pages deployment (structured)
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── styles.css      # Organized stylesheet
│   ├── js/
│   │   └── app.js          # Application logic
│   ├── .nojekyll           # GitHub Pages config
│   └── README.md           # Deployment documentation
│
├── src/                     # 💻 React development source
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── context/            # Security context
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
│
├── standalone.html          # 📄 Single-file version
├── package.json
└── vite.config.js
```

## ✨ Features

### Security Features
- 🔐 Secure authentication system
- 🛡️ Session management
- 📊 Real-time risk assessment
- 🔍 Behavioral analytics
- 🚨 Anomaly detection
- 📋 Comprehensive audit logging
- 👥 User management

### Dashboard Pages
1. **Risk Overview** - Key metrics and alerts
2. **Behavioral Analytics** - ML-powered analysis
3. **Risk Heatmap** - Visual risk distribution
4. **User Risk Profile** - Individual assessments
5. **Data Exfiltration Monitor** - Transfer tracking
6. **Alerts & Incidents** - Security management
7. **Audit Logs** - Compliance tracking
8. **User Management** - Access control

### Design Features
- 🎨 Glassmorphism effects
- 🌈 Gradient accents
- ✨ Smooth animations
- 📱 Responsive layout
- 🎯 Professional dark theme

## 🚀 Deployment Options

### Option 1: GitHub Pages (Structured - Recommended)

The `docs/` folder contains a clean, organized version:

1. **Configure GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `master`
   - Folder: `/docs`
   - Save

2. **Your site will be live at:**
   ```
   https://[username].github.io/SentinelMind
   ```

3. **Update deployment:**
   ```bash
   git add docs/
   git commit -m "Update deployment"
   git push origin master
   ```

### Option 2: Build from React Source

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Deploy to gh-pages branch
npm run deploy
```

## 💻 Tech Stack

### Production Deployment (docs/)
- **HTML5** - Semantic structure
- **CSS3** - Modern styling
- **Vanilla JavaScript** - No dependencies
- **Google Fonts** - Outfit typography

### Development Source (src/)
- **React 19** - UI framework
- **Vite** - Build tool
- **Recharts** - Data visualization
- **Framer Motion** - Animations
- **DOMPurify** - Security
- **Lucide React** - Icons

## 🎨 Customization

### Colors (docs/css/styles.css)
```css
:root {
    --primary: #3b82f6;
    --secondary: #8b5cf6;
    --accent: #06b6d4;
}
```

### Content (docs/js/app.js)
Edit page content functions:
- `getDashboardContent()`
- `getAnalyticsContent()`
- etc.

## 📝 Files Overview

| File | Purpose |
|------|---------|
| `docs/index.html` | Clean HTML structure |
| `docs/css/styles.css` | Organized, commented CSS |
| `docs/js/app.js` | Modular JavaScript logic |
| `standalone.html` | Single-file version (all-in-one) |

## 🔧 Local Development

**For structured version:**
```bash
# Simply open in browser
open docs/index.html
```

**For React version:**
```bash
npm install
npm run dev
```

## 📄 License

This project is for demonstration purposes.

## 👨‍💻 Author

Created by Jeeva Bharathi

---

**Note:** The `docs/` folder is production-ready for GitHub Pages. The `src/` folder is for React development.
