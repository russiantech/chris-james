# COS 106 – Introduction to Web Technologies

## Practical Term Project Submission

---

| **Student Name** | Christopher James |
|------------------|-------------------|
| **Matriculation Number** | [Your Matric Number] |
| **Email** | c.james5474@miva.edu.ng |
| **Department** | Computer Science |
| **Submission Date** | June 2026 |

---

## 1. PROJECT OVERVIEW

This submission presents a fully responsive, multi-page academic portfolio and student management website built as the term project for **COS 106: Introduction to Web Technologies**. The site serves as a personal academic portfolio showcasing my profile, technical skills, academic achievements, production-grade projects, and includes an interactive academic planner with full CRUD functionality.

### Design Philosophy

- Dark aesthetic inspired by modern developer portfolios
- Security-first messaging reflecting career orientation toward ethical hacking and secure architecture
- Professional typography using Inter font family with systematic spacing and visual hierarchy
- Performance-optimized with CSS Grid, Flexbox, CSS custom properties, and hardware-accelerated animations
- Accessibility-conscious with semantic HTML, ARIA labels, and keyboard navigation support

---

## 2. LIVE DEMO & SOURCE CODE

| **Resource** | **URL** |
|--------------|---------|
| GitHub Pages (Primary) | https://russiantech.github.io/chris-james |
| Vercel (Mirror) | https://chris-james.vercel.app/ |
| GitHub Repository | https://github.com/russiantech/chris-james |

---

## 3. PAGES IMPLEMENTED & FEATURES

| Page | COS 106 Requirements | Key Features Implemented |
|------|----------------------|------------------------|
| **Homepage** (index.html) | Student name, photograph, welcome message, navigation menu, brief biography | Hero section with animated stats counter, certification preview, project preview, professional layout |
| **About Me** (about.html) | Educational background, career aspirations, technical skills, hobbies & interests | Interactive timeline, categorized skill tags, aspiration cards, hobbies grid, AWS credential showcase |
| **Projects** (projects.html) | 3+ sample projects with descriptions, images/screenshots, links | 6 production projects with feature lists, tech stacks, live links, role descriptions |
| **Academic Planner** (academic.html) | Interactive planner: add tasks, mark complete, delete tasks | Full CRUD with localStorage persistence, filtering, real-time statistics, course progress cards |
| **Contact** (contact.html) | Form with name, email, phone, message; JavaScript validation | Real-time validation, email regex, phone digit-only check, success state, social links |

---

## 4. TECHNICAL IMPLEMENTATION

### 4.1 HTML Requirements

- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<aside>`)
- Forms with proper labels, `for` attributes, and accessibility
- Tables (task metadata display with structured data)
- Images with descriptive alt text
- Hyperlinks (internal navigation + external project links with `target="_blank"` and `rel="noopener"`)
- Lists (unordered navigation, ordered features, definition-style metadata)
- Multimedia structure ready (video/audio semantic containers)

### 4.2 CSS Requirements

- External CSS stylesheet (`assets/css/style.css` — 35,026 characters, single file)
- Responsive design with mobile-first media queries (breakpoints: 480px, 768px)
- CSS Grid (projects grid, welcome grid, semester grid, stats grid, aspirations grid)
- Flexbox (navigation, cards, task items, footer, contact layout, about grid)
- Navigation styling with active states, mobile hamburger menu, backdrop blur
- Animations & transitions (hover effects, scroll reveal animations, counter animation, bounce indicator)
- Consistent color scheme via CSS custom properties (`:root` variables for full design system)
- Mobile-friendly interface tested down to 320px viewport width

### 4.3 JavaScript Requirements

- Event handling (click, submit, blur, input, scroll, DOMContentLoaded)
- DOM manipulation (dynamic task rendering, form state changes, class toggling, element creation)
- Form validation (empty field detection, email regex validation, phone digit-only validation)
- Dynamic content updates (task list rendering, statistics recalculation, filter switching, success states)
- Arrays & functions (task storage array, filter methods, map/reduce for stats, utility functions)
- Interactive task management system (add, complete, delete, filter, sort, persist to localStorage)

---

## 5. PROJECT SCREENSHOTS

### 5.1 Salesnet — AI-Powered Marketplace

An AI-powered, Lagos-first marketplace designed to digitize informal commerce. Features include free vendor storefronts, AI-driven local pricing and product tagging, AR try-on for wearables, geo-location-based vendor recommendations, and embedded fintech for seamless payments.

![Salesnet Screenshot](salesnet-apps.png)

### 5.2 Intellect — Digital Learning Platform

A digital learning companion built to democratize education access. Supports video, PDF, PPT, audio, and interactive lesson formats. Integrates an AI Learning Assistant for personalized tutoring, auto-generates completion certificates, hosts live sessions, and provides a Creator Studio for educators to monetize content.

![Intellect Screenshot](intellect-app.png)

### 5.3 Stitch — Laundry & Fashion SaaS

A vertical SaaS platform transforming Nigeria's laundry and fashion economy. Converts informal SMEs from notebook-based operations to predictable digital revenue through inventory tracking, order management, customer relationship management, and embedded payment processing.

![Stitch Screenshot](stitch-app.png)

### 5.4 Score App — Academic Management System

An innovative scoring and academic management system built for Dunistech Academy and partner institutions. Tracks student attendance, records and manages scores across subjects, keeps parents informed via automated SMS and email updates, and auto-generates performance analysis reports.

![Score App Screenshot](score-app.png)

### 5.5 Inventory Management System

A precision inventory and profit analytics platform designed for SMEs. Features real-time stock tracking, automated sales reporting, demand forecasting using historical data, and deep financial insights. Helps business owners move from gut-feeling restocking to data-driven inventory decisions.

![Inventory Management Screenshot](inventory-app.png)

### 5.6 Techa — Personal Portfolio & SaaS Launchpad

My personal engineering portfolio and SaaS launchpad. Serves as a central hub for product demos, technical writing, client project showcases, and experimental prototypes. Designed with a dark, minimalist aesthetic that emphasizes code quality and system architecture over visual noise.

![Techa Screenshot](techa-site.png)

---

## 6. FILE STRUCTURE

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
└── README.md                           # Project documentation
```

---

## 7. RECENT CERTIFICATIONS (MIVA-COS 111)

Completed as part of **MIVA-COS 111: Technical Certification in Computing I** (Micro-Credential Program):

| Certification | Completion Date | Platform | Skills Gained |
|---------------|-----------------|----------|---------------|
| AWS Technical Essentials | June 26, 2026 | AWS Training & Certification | EC2, S3, VPC, IAM, cloud security fundamentals |
| AWS ML Engineer Associate Curriculum Overview | June 28, 2026 | AWS Training & Certification | Supervised/Unsupervised/Reinforcement Learning, SageMaker, feature engineering |
| Fundamentals of Generative AI | June 28, 2026 | AWS Training & Certification | Foundation models, prompt engineering, RAG, fine-tuning, responsible AI deployment |

---

## 8. CAREER ORIENTATION

> **Fullstack Software Engineer | AI & Data Integration | Ethical Hacking**

I operate at the intersection of software engineering, artificial intelligence, and cybersecurity. My core philosophy: **security is not an afterthought—it is the foundation**. Every system I architect is designed with defense-in-depth principles, from IAM policy enforcement and VPC segmentation to continuous penetration testing and secure CI/CD pipelines.

### Career Trajectory

- **AI Engineering**: Build and deploy custom ML models from scratch, focusing on predictive analytics for African SMEs and computer vision for agricultural optimization
- **Cybersecurity & Ethical Hacking**: Attain CEH and OSCP certifications; lead red-team operations and secure architecture reviews for fintech and government platforms across West Africa
- **Systems Architecture**: Design distributed systems scaling from thousands to millions of users; master cloud-native patterns, event-driven architecture, and data mesh strategies
- **Tech for Social Impact**: Leverage engineering skills to improve education access, financial inclusion, and healthcare delivery in underserved communities

---

## 9. BROWSER COMPATIBILITY

| Browser | Minimum Version | Status |
|---------|-----------------|--------|
| Google Chrome | 90+ | Fully supported |
| Mozilla Firefox | 88+ | Fully supported |
| Apple Safari | 14+ | Fully supported |
| Microsoft Edge | 90+ | Fully supported |
| Mobile Safari (iOS) | 14+ | Fully supported |
| Chrome Mobile (Android) | 10+ | Fully supported |

---

## 10. PERFORMANCE METRICS

- **Lighthouse Score** (Estimated): 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- **Total Page Weight**: < 500KB (images optimized, CSS minified potential)
- **First Contentful Paint**: < 1.5s (local)
- **Time to Interactive**: < 2.5s (local)

---

## 11. ACCESSIBILITY FEATURES

- Semantic HTML5 structure throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels on navigation toggle and interactive elements
- Alt text on all images with descriptive content
- Keyboard-navigable interface (focus states, logical tab order)
- Color contrast ratios meeting WCAG 2.1 AA standards (tested via DevTools)
- Screen reader compatible form labels and error messages
- Reduced motion support via `prefers-reduced-motion` media query

---

## 12. ACADEMIC INTEGRITY DECLARATION

I, **Christopher James**, hereby declare that this project is entirely my own original work. All code, design, and content were created independently for the **COS 106: Introduction to Web Technologies** term project. I have not copied, shared, or submitted another student's work. Any external resources used (such as Font Awesome icons, Google Fonts, and CSS documentation) are properly attributed and used within fair academic use guidelines.

**Student Signature:** ______________________________

**Date:** June 29, 2026

---

*© 2026 Christopher James. Miva Open University — BSc Computer Science.*
