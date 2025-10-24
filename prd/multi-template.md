# 🧭 Product Requirements Document (PRD) — Personal Portfolio Website (Multi-Template Version)

## 📌 1. Overview
**Project Name:** Portfolio Website (Multi-Theme Edition)  
**Purpose:**  
Develop a personal portfolio website that supports multiple visual templates/themes, allowing users to switch between different aesthetic modes dynamically.  
The site will use `portfolio.json` as its main data source, ensuring all templates share the same content while presenting it in different visual styles.

---

## 🎯 2. Goals
- Support multiple templates/themes (default + anime + cat animation).  
- Maintain consistent data structure across all templates.  
- Allow real-time theme switching without page reloads.  
- Ensure high performance, accessibility, and responsive design.  
- Facilitate future theme expansion easily through modular design.

---

## 🎨 3. Theme Templates
### 🧩 Template 1 — Default (Modern Developer)
- Clean, minimalistic dark theme with teal/green accent.  
- Suitable for professional use (developers, designers, engineers).  
- Layout focuses on readability and modern typography.

### 🌸 Template 2 — Anime Theme
- Inspired by anime visual aesthetics (e.g., soft gradients, pastel tones, kawaii iconography).  
- Animated transitions and character illustrations accompanying section headers.  
- Sound effects (optional) for interactions.  
- Example color palette: `#F4B6C2` (pink), `#6C5B7B` (purple), `#C06C84` (magenta).

### 🐾 Template 3 — Cat Animation Theme
- Whimsical and fun layout featuring animated cats interacting with the UI.  
- Parallax scrolling with cat-themed illustrations.  
- Easter eggs (e.g., cat paw cursor, meow sounds).  
- Example color palette: `#FCECC9` (cream), `#F38181` (salmon), `#625772` (grayish purple).

---

## 🧱 4. Architecture Overview
| Component | Description |
|------------|-------------|
| **Framework** | Next.js 14 / React 18 |
| **Styling** | Tailwind CSS + custom theme classes |
| **Animation** | Framer Motion / Lottie Animations |
| **State Management** | Zustand or Context API |
| **Theme Switching** | Context-based or via URL params (`?theme=anime`) |
| **Data Source** | `portfolio.json` (shared across all templates) |

---

## 🧠 5. Functionality Flow
1. On load, fetch `portfolio.json`.  
2. Determine selected theme (from user settings or URL parameter).  
3. Load corresponding theme component and style assets dynamically.  
4. Render all sections (Profile, Education, Portfolio, Skills, Experience, Certification) with theme-specific components.  
5. Allow users to switch themes through a toggle menu or settings modal.  

---

## ⚙️ 6. Data and File Structure
**Data:**  
Same JSON file (`portfolio.json`) for all templates.  

**File Structure Example:**
```
/src
  /components
    /themes
      /default
      /anime
      /cat
  /data
    portfolio.json
  /context
    ThemeContext.js
  /pages
    index.jsx
```
Each folder under `/themes` contains its own styled components (e.g., `ProfileCard.jsx`, `ProjectCard.jsx`).

---

## 🧰 7. Technical Requirements
- **Dynamic Imports:** Load theme components only when needed.  
- **Responsive Design:** Mobile-first approach for all templates.  
- **Accessibility:** Minimum Lighthouse score of 90.  
- **Performance:** Lazy-load images and animations.  
- **Modularity:** Adding new themes should require minimal configuration.  

---

## 🧑‍🎨 8. Design Guidelines per Template

### Default Theme
- **Font:** Poppins / Inter  
- **Color Palette:** #0F172A, #14B8A6, #F8FAFC  
- **Layout:** Grid-based cards, hover animations.

### Anime Theme
- **Font:** Nunito / Comic Neue  
- **Color Palette:** #F4B6C2, #C06C84, #6C5B7B  
- **Assets:** Character SVGs, gradient backgrounds, kawaii icons.

### Cat Theme
- **Font:** Fredoka One / Quicksand  
- **Color Palette:** #FCECC9, #F38181, #625772  
- **Assets:** Cat illustrations, Lottie animations, paw icons.

---

## 🚀 9. Future Enhancements
- Add a **custom theme builder** (user creates and saves own themes).  
- Integrate **theme marketplace** for downloadable designs.  
- Add **sound toggle** for anime/cat sound effects.  
- Add **auto-theme detection** (anime theme at night, default during the day).

---

## ✅ 10. Success Criteria
- Fully functional theme switching with consistent data.  
- Smooth animations (<100ms delay).  
- JSON content is reflected identically across all themes.  
- Deployment-ready on Vercel or Netlify.  
- Lighthouse performance score ≥ 90.
