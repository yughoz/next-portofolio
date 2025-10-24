# 🧭 Product Requirements Document (PRD) — Personal Portfolio Website (Anime 2 Theme Expansion)

## 📌 1. Overview
**Project Name:** Portfolio Website (Anime 2 Theme Update)  
**Purpose:**  
Extend the existing multi-template portfolio website by introducing a new **Anime 2 theme** — a darker, bolder variation inspired by modern anime styles that use **black and red** as dominant colors.  
The new theme aims to deliver a more dramatic, high-contrast experience while maintaining usability, accessibility, and consistency with existing data and structure.

---

## 🎯 2. Goals
- Add a **new Anime 2 template** with black and red aesthetic.  
- Keep consistent data flow from `portfolio.json`.  
- Maintain compatibility with other templates (Default, Anime, Cat Animation).  
- Ensure high performance and responsiveness.  
- Enhance visual differentiation for anime fans seeking a darker, more mature look.

---

## 🎨 3. Theme Design Concept — Anime 2
### 💡 Inspiration
- Dark anime series visuals (e.g., *Attack on Titan*, *Tokyo Ghoul*, *Demon Slayer*).  
- Use of red accents on deep black backgrounds for a sleek yet bold appearance.  
- Incorporation of light particle effects and subtle glows for depth.  

### 🎨 Color Palette
| Color | Hex | Usage |
|--------|------|--------|
| **Primary Black** | `#0A0A0A` | Background |
| **Crimson Red** | `#C8102E` | Highlights, buttons, links |
| **Soft White** | `#F5F5F5` | Text |
| **Dark Gray** | `#1E1E1E` | Secondary backgrounds |
| **Glow Red** | `#FF3B3B` | Hover and accent effects |

### 🖋 Typography
- **Font Titles:** *Orbitron* / *Rajdhani* — futuristic and sharp.  
- **Font Body:** *Inter* / *Poppins* — clean and readable.  

### 🧩 Visual Style
- Neon red borders and glowing hover states.  
- Background animation: moving red light particles.  
- Section transitions with slide/fade and red streaks (Framer Motion).  
- Optional background music toggle with soft synth effect.  

---

## 🧱 4. Architecture Overview
| Component | Description |
|------------|-------------|
| **Framework** | Next.js 14 / React 18 |
| **Styling** | Tailwind CSS + custom dark theme classes |
| **Animation** | Framer Motion + custom canvas particle animation |
| **Data Source** | `portfolio.json` (shared structure) |
| **Theme Management** | Context-based with dynamic imports |
| **Assets** | Anime 2 specific illustrations and icons |

---

## 🧠 5. Functionality Flow
1. User selects Anime 2 theme (either via theme selector or `?theme=anime2`).  
2. The app dynamically imports Anime 2 components and styles.  
3. Data from `portfolio.json` is passed to theme-specific components.  
4. The theme applies its unique layout and color palette.  
5. User can switch back to other themes seamlessly without reload.

---

## ⚙️ 6. File and Folder Structure
```
/src
  /components
    /themes
      /default
      /anime
      /cat
      /anime2      <-- new folder
  /data
    portfolio.json
  /context
    ThemeContext.js
  /pages
    index.jsx
```

Inside `/themes/anime2`:
```
ProfileCard.jsx
ProjectCard.jsx
SkillTag.jsx
ExperienceTimeline.jsx
ThemeLayout.jsx
```
Each component inherits data props but has unique visual styling.

---

## 🧰 7. Technical Requirements
- **Performance:** Lazy-load all Anime 2 assets.  
- **Accessibility:** Maintain minimum contrast ratio of 4.5:1 for red on black.  
- **Animations:** 60 FPS for smooth transitions.  
- **Dynamic Imports:** Import `anime2` components only when active.  
- **Responsiveness:** Fully adaptive to all screen sizes.  

---

## 🧑‍🎨 8. Design Guidelines for Anime 2
- **Visual Tone:** Bold, dark, energetic.  
- **Primary Accent:** Glowing crimson red.  
- **Background:** Matte black gradient with subtle animated effects.  
- **Interactive Elements:** Red hover outlines, pulse on click.  
- **Layout Style:** Strong card shadows and motion emphasis.  

---

## 🚀 9. Future Enhancements
- Add **“Anime 3”** variation (cyberpunk theme).  
- Introduce **custom background selector** for users.  
- Implement **light/dark toggle** for hybrid modes.  
- Add **sound toggle** for theme-specific audio.  

---

## ✅ 10. Success Criteria
- Fully integrated Anime 2 theme selectable via UI toggle.  
- JSON-driven content consistency with other templates.  
- Smooth animation transitions (<100ms).  
- Lighthouse score ≥ 90 on performance and accessibility.  
- Deployment-ready and easily expandable for future themes.
