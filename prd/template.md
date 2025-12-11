# 🧭 Product Requirements Document (PRD) — Personal Portfolio Website

## 📌 1. Overview
**Project Name:** Portfolio Website  
**Purpose:**  
Build a personal portfolio website that showcases professional information, projects, education, experience, and certifications.  
The website will fetch content dynamically from a JSON file (`portfolio.json`) to make updates easy without modifying the code.

---

## 🎯 2. Goals
- Present professional and project information in a clean, modern UI.  
- Fetch dynamic data from a JSON source.  
- Fully responsive across all screen sizes.  
- Easy to maintain and deploy (e.g., Vercel, Netlify).  
- SEO-friendly and optimized for performance.

---

## 🧩 3. Key Features
### A. Profile Section
- Displays name, position, short bio, and contact info.  
- Buttons for LinkedIn, GitHub, and personal website.

### B. Education Section
- Lists academic background with institution name, major, degree, and year.

### C. Portfolio Section
- Showcases project cards containing:  
  - Project title  
  - Description  
  - Technologies used (badges)  
  - Buttons for “View Demo” and “View Code”

### D. Skills Section
- Displays technical skills in a grid or tag layout.

### E. Experience Section
- Professional work timeline with roles and achievements.

### F. Certifications Section
- Displays certifications with name, issuer, year, and link.

---

## 🗂 4. Data Structure
Data is sourced from `portfolio.json` using the following structure:
```json
{
  "profile": {},
  "education": [],
  "portfolio": [],
  "skills": [],
  "experience": [],
  "certifications": []
}
```

The JSON file can be stored at:
- `/public/data/portfolio.json` (for Next.js)
- or hosted via static API (e.g., GitHub raw link)

---

## 🧱 5. Technical Stack
| Component | Technology |
|------------|-------------|
| **Framework** | Next.js 14 / React 18 |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Data Handling** | Fetch JSON from public folder |
| **Deployment** | Vercel / Netlify |
| **Version Control** | Git & GitHub |

---

## 🧠 6. Functionality Flow
1. On page load, fetch data from `portfolio.json`.  
2. Store the data in a global state (React Context / Zustand).  
3. Render UI components (`<Profile />`, `<Portfolio />`, `<Education />`, etc.) dynamically.  
4. Update content automatically when the JSON changes — no redeploy needed.

---

## 🧰 7. Non-Functional Requirements
- **Performance:** LCP < 2.5s (Lighthouse)  
- **Accessibility:** Lighthouse score ≥ 90  
- **Responsive:** Optimized for 360px–1440px screens  
- **Maintainability:** Modular component folder structure  
- **Scalability:** New projects can be added easily via JSON updates

---

## 🧑‍🎨 8. Design Guidelines
- **Theme:** Dark mode with teal or neon green accent.  
- **Typography:**  
  - Headings: `Poppins` / `Inter Bold`  
  - Body: `Inter Regular`  
- **Key Components:**  
  - Project Card  
  - Skill Tags  
  - Section Headers with animated underline  
  - Contact Buttons (icon-based)

---

## 🚀 9. Future Enhancements
- Dark/Light mode toggle  
- Auto-fetch projects from GitHub API  
- Separate blog page  
- Optional CMS integration (e.g., Strapi, Sanity)

