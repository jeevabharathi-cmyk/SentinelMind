# 🛡️ SentinelMind

**Insider Threat Prediction Platform**

A commercial-grade, privacy-preserving insider threat prediction platform for enterprise security.

## 🌐 Live Demo

Visit: [https://jeevabharathi-cmyk.github.io/SentinelMind](https://jeevabharathi-cmyk.github.io/SentinelMind)

## 📁 Project Structure

```
docs/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling (organized by sections)
└── js/
    └── app.js          # Application logic (authentication, navigation, content)
```

## ✨ Features

### Security Features
- 🔐 **Secure Login System** - Authentication with session management
- 🛡️ **Session Indicators** - Visual security status badges
- 📊 **Risk Monitoring** - Real-time threat assessment

### Dashboard Pages
1. **Risk Overview** - Main dashboard with key metrics
2. **Behavioral Analytics** - ML-powered user behavior analysis
3. **Risk Heatmap** - Organizational risk visualization
4. **User Risk Profile** - Individual user assessments
5. **Data Exfiltration Monitor** - Real-time data transfer tracking
6. **Alerts & Incidents** - Security alert management
7. **Audit Logs** - Compliance and activity tracking
8. **User Management** - Access control administration

### Design Features
- 🎨 **Glassmorphism Effects** - Modern backdrop blur and transparency
- 🌈 **Gradient Accents** - Beautiful color transitions
- ✨ **Smooth Animations** - Micro-interactions and transitions
- 📱 **Responsive Layout** - Works on all screen sizes
- 🎯 **Dark Theme** - Eye-friendly professional interface

## 🚀 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `master` (or `main`)
   - Folder: `/docs`
   - Save

2. **Deploy Updates:**
   ```bash
   git add docs/
   git commit -m "Update deployment"
   git push origin master
   ```

3. **Access Your Site:**
   - URL: `https://[username].github.io/[repository-name]`
   - Example: `https://jeevabharathi-cmyk.github.io/SentinelMind`

### Local Development

Simply open `docs/index.html` in your browser - no build process needed!

## 🎨 Customization

### Colors
Edit CSS variables in `docs/css/styles.css`:
```css
:root {
    --primary: #3b82f6;
    --secondary: #8b5cf6;
    --accent: #06b6d4;
    /* ... more variables */
}
```

### Content
Edit page content in `docs/js/app.js` - look for functions like:
- `getDashboardContent()`
- `getAnalyticsContent()`
- etc.

### Navigation
Add/modify navigation items in `docs/index.html` sidebar section.

## 🔧 Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No framework dependencies
- **Google Fonts** - Outfit font family

## 📝 License

This project is for demonstration purposes.

## 👨‍💻 Author

Created by Jeeva Bharathi

---

**Note:** This is a frontend demonstration. For production use, integrate with backend APIs for real data and authentication.
