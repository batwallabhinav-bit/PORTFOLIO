# Modern Personal Developer Portfolio

A responsive, high-performance developer portfolio built with modern HTML5, CSS3, and JavaScript. Zero dependencies, instant loading, and easily customizable.

## ✨ Features

- 🌓 **Dark & Light Mode**: Smooth theme toggling with `localStorage` persistence and system color preference detection.
- ⚡ **Dynamic Profile Data**: All personal information, skills, stats, projects, and career experience can be edited in a single file: `js/projects-data.js`.
- ⌨️ **Interactive Hero Section**: Dynamic typewriter headline, quick CTAs, and code mockup card.
- 🎯 **Project Showcase with Filtering**: Filter projects by categories (`Full-Stack`, `AI/ML`, `Web`, `DevOps/Tools`).
- 🔍 **Project Detail Modal**: Rich popups showing in-depth architectural highlights, screenshots/banners, and links.
- 📈 **Skills Matrix**: Categorized tech stack breakdown with animated progress bars.
- 📅 **Experience & Education Timeline**: Clean vertical career milestone cards.
- ✉️ **Interactive Contact Form**: Client-side validation with toast notifications.
- 📱 **100% Mobile Responsive**: Tested across desktop, tablet, and mobile layouts.

---

## 🚀 How to Run Locally

Because this project uses vanilla web standards, no compilation or `npm install` is required!

### Option 1: Python Built-in Server (Recommended)
Open PowerShell or Terminal in this folder and run:
```powershell
python -m http.server 3000
```
Then visit: [http://localhost:3000](http://localhost:3000)

### Option 2: Direct File Open
Simply double-click `index.html` to open it in Chrome, Edge, Safari, or Firefox.

---

## 🎨 How to Customize

1. **Update Profile, Projects & Skills**:
   Open [`js/projects-data.js`](js/projects-data.js) and update the `portfolioData` object:
   - `personal`: Name, role titles for typewriter, bio, location, email, social links.
   - `skills`: Add or modify technical competencies and proficiency levels.
   - `projects`: Add your real GitHub repositories, live demo URLs, screenshots, and descriptions.
   - `experience` & `education`: Add your work history, degrees, and milestones.

2. **Styling & Color Palettes**:
   Open [`css/styles.css`](css/styles.css) and customize the CSS root variables at the top of the file (e.g. `--accent-primary`, `--bg-primary`, gradients).

---

## 🌐 Free Deployment Options

### 1. GitHub Pages (100% Free)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to **Settings** > **Pages** in your GitHub repository.
3. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<your-repo-name>/`.

### 2. Vercel / Netlify
Drag and drop the `portfolio` folder directly onto [Vercel](https://vercel.com) or [Netlify Drop](https://app.netlify.com/drop) for instant deployment with SSL and custom domain support.
