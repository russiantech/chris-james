# Christopher James — Academic Portfolio

**COS 106: Introduction to Web Technologies**  
**Miva Open University — BSc Computer Science (100L, 2nd Semester)**  
**Submitted: June 2026**

---

## Live Demo & Repository

- **Production Portfolio:** [Techa](https://techa.salesnet.ng)
- **GitHub Repository:** [Chris James](github.com/russiantech/chris-james) 
- **Hosted Version:** [cos106-portfolio.netlify.app](https://netlify.app) *(to be deployed)*

---

## Project Overview

A fully responsive, multi-page academic portfolio and student management website built as the term project for **COS 106: Introduction to Web Technologies**. The site serves as a personal academic portfolio showcasing my profile, technical skills, academic achievements, production-grade projects, and includes an interactive academic planner with full CRUD functionality.

### Design Philosophy
- **Dark aesthetic** inspired by modern developer portfolios (e.g., techa.salesnet.ng)
- **Security-first messaging** reflecting career orientation toward ethical hacking and secure architecture
- **Professional typography** using Inter font family with systematic spacing and visual hierarchy
- **Performance-optimized** with CSS Grid, Flexbox, CSS custom properties, and hardware-accelerated animations
- **Accessibility-conscious** with semantic HTML, ARIA labels, and keyboard navigation support

---

## Pages & Features

| Page | COS 106 Requirements | Key Features |
|------|---------------------|-------------|
| **Homepage** (`index.html`) | Student name, photograph, welcome message, navigation menu, brief biography | Hero section with animated stats counter, certification preview, project preview, professional layout |
| **About Me** (`about.html`) | Educational background, career aspirations, technical skills, hobbies & interests | Interactive timeline, categorized skill tags, aspiration cards, hobbies grid, detailed AWS credential showcase |
| **Projects** (`projects.html`) | 3+ sample projects with descriptions, images/screenshots, links | 6 production projects with feature lists, tech stacks, live links, role descriptions |
| **Academic Planner** (`academic.html`) | Interactive planner: add tasks, mark complete, delete tasks | Full CRUD with localStorage persistence, filtering (All/Pending/Completed/High Priority), real-time statistics, course progress cards |
| **Contact** (`contact.html`) | Form with name, email, phone, message; JavaScript validation | Real-time validation, email regex, phone digit-only check, empty field prevention, success state, social links |

---

## Technical Implementation

### HTML Requirements 
- [x] Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`)
- [x] Forms with proper labels, `for` attributes, and accessibility
- [x] Tables (task metadata display with structured data)
- [x] Images with descriptive `alt` text
- [x] Hyperlinks (internal navigation + external project links with `target="_blank"` and `rel="noopener"`)
- [x] Lists (unordered navigation, ordered features, definition-style metadata)
- [x] Multimedia structure ready (video/audio semantic containers)

### CSS Requirements 
- [x] **External CSS stylesheet** (`assets/css/style.css` — 35,026 characters, single file)
- [x] **Responsive design** with mobile-first media queries (breakpoints: 480px, 768px)
- [x] **CSS Grid** (projects grid, welcome grid, semester grid, stats grid, aspirations grid)
- [x] **Flexbox** (navigation, cards, task items, footer, contact layout, about grid)
- [x] **Navigation styling** with active states, mobile hamburger menu, backdrop blur
- [x] **Animations & transitions** (hover effects, scroll reveal animations, counter animation, bounce indicator)
- [x] **Consistent color scheme** via CSS custom properties (`:root` variables for full design system)
- [x] **Mobile-friendly interface** tested down to 320px viewport width

### JavaScript Requirements 
- [x] **Event handling** (`click`, `submit`, `blur`, `input`, `scroll`, `DOMContentLoaded`)
- [x] **DOM manipulation** (dynamic task rendering, form state changes, class toggling, element creation)
- [x] **Form validation** (empty field detection, email regex validation, phone digit-only validation)
- [x] **Dynamic content updates** (task list rendering, statistics recalculation, filter switching, success states)
- [x] **Arrays & functions** (task storage array, filter methods, map/reduce for stats, utility functions)
- [x] **Interactive task management system** (add, complete, delete, filter, sort, persist to localStorage)

---

## File Structure

```
cos106-portfolio-christopher-james/
│
├── index.html                          # Homepage — Hero, stats, cert preview, project preview
├── about.html                          # About Me — Bio, timeline, skills, aspirations, hobbies, credentials
├── projects.html                       # Projects — 6 production projects with full details
├── academic.html                       # Academic Planner — Interactive task manager + course overview
├── contact.html                        # Contact — Validated form + social links
│
├── assets/
│   ├── css/
│   │   └── style.css                   # Complete stylesheet (35KB, 900+ lines)
│   │
│   ├── js/
│   │   ├── main.js                     # Navigation, scroll effects, animations, utilities
│   │   ├── planner.js                  # Task CRUD, filtering, statistics, localStorage
│   │   └── contact.js                  # Form validation, real-time error handling
│   │
│   ├── images/
│   │   ├── avatar.png                  # Profile image (400x400px, generated)
│   │   ├── 1_Technology_and_Developer_Wallpaper.png  # Hero background
│   │   ├── 2_57_905_Dark_Workspace_Royalty_Free.png  # Secondary background
│   │   ├── 3_57_879_Workspace_Dark_Royalty_Free.png  # Tertiary background
│   │   ├── project-salesnet.png          # Salesnet project thumbnail
│   │   ├── project-intellect.png         # Intellect project thumbnail
│   │   ├── project-stitch.png            # Stitch project thumbnail
│   │   ├── project-score-app.png         # Score App project thumbnail
│   │   ├── project-inventory.png         # Inventory System thumbnail
│   │   └── project-techa.png           # Techa portfolio thumbnail
│   │
│   └── docs/
│       └── [AWS certificates]            # MIVA-COS 111 micro-credential PDFs
│
└── README.md                           # This documentation file
```

---

## Recent Certifications (MIVA-COS 111)

Completed as part of **MIVA-COS 111: Technical Certification in Computing I** (Micro-Credential Program):

| Certification | Completion Date | Platform | Skills Gained |
|-------------|----------------|----------|--------------|
| **AWS Technical Essentials** | June 26, 2026 | AWS Training & Certification | EC2, S3, VPC, IAM, cloud security fundamentals |
| **AWS ML Engineer Associate Curriculum Overview** | June 28, 2026 | AWS Training & Certification | Supervised/Unsupervised/Reinforcement Learning, SageMaker, feature engineering, business problem formulation |
| **Fundamentals of Generative AI** | June 28, 2026 | AWS Training & Certification | Foundation models, prompt engineering, RAG, fine-tuning, responsible AI deployment |

These certifications are submitted as part of the MIVA-COS 111 coursework requirement and are displayed in the About page credentials section.

---

## Career Orientation

> **Fullstack Software Engineer | AI & Data Integration | Ethical Hacking**

I operate at the intersection of **software engineering**, **artificial intelligence**, and **cybersecurity**. My core philosophy: *security is not an afterthought—it is the foundation*. Every system I architect is designed with defense-in-depth principles, from IAM policy enforcement and VPC segmentation to continuous penetration testing and secure CI/CD pipelines.

### Career Trajectory
- **AI Engineering:** Build and deploy custom ML models from scratch (not merely API integration), focusing on predictive analytics for African SMEs and computer vision for agricultural optimization
- **Cybersecurity & Ethical Hacking:** Attain CEH and OSCP certifications; lead red-team operations and secure architecture reviews for fintech and government platforms across West Africa
- **Systems Architecture:** Design distributed systems scaling from thousands to millions of users; master cloud-native patterns, event-driven architecture, and data mesh strategies
- **Tech for Social Impact:** Leverage engineering skills to improve education access, financial inclusion, and healthcare delivery in underserved communities

---

## How to Run Locally

### Option 1: Direct File Open (No Server)
1. Download and extract the ZIP file
2. Double-click `index.html` to open in any modern browser
3. Note: localStorage features will work; some browser security features may limit external font loading

### Option 2: Local Development Server (Recommended)
```bash
# Using Node.js (npx)
npx serve .

# Using Python 3
python -m http.server 8000

# Using PHP
php -S localhost:8000

# Using VS Code Live Server extension
# (Right-click index.html → "Open with Live Server")
```
Then navigate to `http://localhost:8000`

### Option 3: Deploy to Production
- **GitHub Pages:** Push to GitHub, enable Pages in repository settings
- **Netlify:** Drag-and-drop folder to [netlify.com](https://netlify.com) or connect GitHub repo
- **Vercel:** Use `vercel --prod` CLI or import GitHub repository
- **Surge.sh:** Run `surge` in project directory

---

## Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|--------|
| Google Chrome | 90+ |  Fully supported |
| Mozilla Firefox | 88+ |  Fully supported |
| Apple Safari | 14+ |  Fully supported |
| Microsoft Edge | 90+ |  Fully supported |
| Mobile Safari (iOS) | 14+ |  Fully supported |
| Chrome Mobile (Android) | 10+ |  Fully supported |

---

## Performance Metrics

- **Lighthouse Score (Estimated):** 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- **Total Page Weight:** < 500KB (images optimized, CSS minified potential)
- **First Contentful Paint:** < 1.5s (local)
- **Time to Interactive:** < 2.5s (local)

---

## Accessibility Features

- Semantic HTML5 structure with proper heading hierarchy
- ARIA labels on interactive elements
- Keyboard-navigable menu and form controls
- Color contrast ratio > 4.5:1 for all text
- Focus states visible on all interactive elements
- Alt text on all images
- Form labels explicitly associated with inputs

---

## Academic Integrity Declaration

This project was built independently by **Christopher James** as the term project for **COS 106: Introduction to Web Technologies** at Miva Open University. All code is original, written from scratch without the use of website builders, templates, or copy-paste solutions. External resources used:
- Google Fonts (Inter typeface)
- Unsplash/Pexels stock images (workspace backgrounds)
- AWS Training & Certification materials (for credential content)

All project descriptions, career aspirations, and personal information are authentic and accurate.

---

## Author

**Christopher James**  
    Academic: c.james5474@miva.edu.ng  
    Professional: chrisjsmez@gmail.com  
    (234) 702-656-1327  
    [techa.salesnet.ng](https://techa.salesnet.ng)  
    [LinkedIn](https://linkedin.com) | 💻 [GitHub](https://github.com)

**Miva Open University**  
BSc Computer Science — 100L, 2nd Semester (In Progress)  
Gracelnd Estate, Ajah, Lagos, Nigeria

---

*Built with precision. Architected for scale. Secured by design.*
