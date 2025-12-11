# 🧭 Product Requirements Document (PRD) — Personal Portfolio Website (Kurumi Theme)

## 📌 1. Overview
**Project Name:** Portfolio Website (Kurumi Theme)  
**Purpose:**  
Introduce a new **Kurumi theme** inspired by Kurumi Tokisaki from Date A Live, featuring a **pixel art aesthetic** with **black and red** as dominant colors.  
This theme aims to deliver a retro-gaming inspired experience with modern web capabilities, featuring animated pixel art sprites and nostalgic 8-bit styling while maintaining usability and performance.

---

## 🎯 2. Goals
- Add a **new Kurumi template** with pixel art style and black/red aesthetic.  
- Utilize existing character assets from `/public/data/kurumi/` directory.  
- Keep consistent data flow from `portfolio.json`.  
- Maintain compatibility with other templates (Default, Anime, Anime 2, Cat Animation).  
- Ensure high performance and responsiveness.  
- Deliver a unique retro-gaming aesthetic appealing to fans of pixel art and Date A Live.

---

## 🎨 3. Theme Design Concept — Kurumi

### 💡 Inspiration
- Pixel art games and retro gaming consoles (8-bit / 16-bit era).  
- Kurumi Tokisaki's color scheme (black dress, red eye, dark aesthetic).  
- Gothic Lolita fashion aesthetic combined with pixel styling.  
- Clock and time motifs as subtle design elements.  

### 🎨 Color Palette
| Color | Hex | Usage |
|--------|------|--------|
| **Deep Black** | `#0D0D0D` | Primary background |
| **Blood Red** | `#B91C1C` | Primary accent, buttons, highlights |
| **Crimson Glow** | `#DC2626` | Hover states, active elements |
| **Dark Maroon** | `#450a0a` | Secondary backgrounds, cards |
| **Pixel White** | `#FAFAFA` | Text, contrast elements |
| **Shadow Gray** | `#1A1A1A` | Card backgrounds, borders |
| **Gold Accent** | `#D97706` | Special highlights (clock elements) |

### 🖋 Typography
- **Font Titles:** *Press Start 2P* / *VT323* — authentic pixel/retro gaming feel.  
- **Font Body:** *Inter* / *Roboto Mono* — readable with subtle tech aesthetic.  

### 🧩 Visual Style
- **Pixel Art Sprites:** Animated Kurumi character with multiple expressions.  
- **Pixel Borders:** 2-4px solid borders with slight shadow for depth.  
- **8-bit Aesthetic:** Square/blocky UI elements, pixel-perfect spacing.  
- **Clock Motifs:** Subtle clock/time elements in decorations.  
- **Scanline Effects:** Optional CRT-style overlay for retro feel.  
- **Particle Effects:** Floating pixel particles in red/black.  
- **Hover Animations:** Pixel "glitch" or flash effects on interactive elements.  

### 🖼️ Available Assets
Located in `/public/data/kurumi/`:
- `main.png` — Default/idle Kurumi sprite
- `happy.png` — Happy expression sprite  
- `thinking.png` — Thinking expression sprite  
- `confusion.png` — Confused expression sprite  

---

## 🧱 4. Architecture Overview
| Component | Description |
|------------|-------------|
| **Framework** | Next.js 14 / React 18 |
| **Styling** | Tailwind CSS + custom pixel theme classes |
| **Animation** | CSS animations + Framer Motion for sprite states |
| **Data Source** | `portfolio.json` (shared structure) |
| **Theme Management** | Context-based with dynamic imports |
| **Assets** | Pixel art Kurumi sprites from `/data/kurumi` |

---

## 🧠 5. Functionality Flow
1. User selects Kurumi theme (via theme selector or `?theme=kurumi`).  
2. The app dynamically imports Kurumi components and pixel-art styles.  
3. Data from `portfolio.json` is passed to theme-specific components.  
4. The theme applies pixel art styling and character sprite.  
5. Kurumi sprite changes expression based on scroll position or user interaction.  
6. User can switch back to other themes seamlessly without reload.

---

## ⚙️ 6. File and Folder Structure
```
/src
  /components
    /templates
      /kurumi         <-- new folder
        KurumiTemplate.tsx
  /assets
    /kurumi
      (sprite references)
/public
  /data
    /kurumi
      main.png
      happy.png
      thinking.png
      confusion.png
```

Inside `/templates/kurumi`:
```
KurumiTemplate.tsx    -- Main layout with pixel styling
KurumiCharacter.tsx   -- Animated character sprite component
PixelCard.tsx         -- Pixel-styled card component  
PixelBadge.tsx        -- Pixelated skill/cert badge
PixelTimeline.tsx     -- Retro timeline component
```

---

## 🧰 7. Technical Requirements
- **Performance:** Lazy-load sprite assets.  
- **Image Optimization:** Use Next.js Image component with proper sizing.  
- **Accessibility:** Maintain minimum contrast ratio of 4.5:1 for red/white on black.  
- **Animations:** Smooth sprite transitions and hover effects.  
- **Dynamic Imports:** Import `kurumi` components only when active.  
- **Responsiveness:** Fully adaptive; pixel aesthetic maintained at all sizes.  
- **Pixel Perfect:** 4px base unit for consistent pixel-art spacing.  

---

## 🧑‍🎨 8. Design Guidelines for Kurumi Theme

### Profile Section
- **Layout:** Centered pixel-art avatar with animated Kurumi sprite.  
- **Sprite Behavior:** Changes expression on hover or based on section.  
- **Border Style:** 4px solid red border with corner notches.  

### Project Cards
- **Style:** Pixel-art cards with 2px borders and blocky shadows.  
- **Hover Effect:** Glitch/flash animation in red.  
- **Layout:** Grid-based with pixel-perfect gutters.  

### Skills Section
- **Display:** Pixel progress bars with 8-bit styling.  
- **Tags:** Pixelated badge style with red accents.  

### Experience Timeline
- **Style:** Vertical timeline with pixel connectors.  
- **Nodes:** Red pixel dots with subtle glow.  
- **Cards:** Dark maroon background with pixel borders.  

### Interactive Elements
- **Buttons:** Pixel-styled with press effect (offset shadow).  
- **Links:** Red color with pixel underline on hover.  
- **Cursor:** Optional pixel crosshair or custom cursor.  

---

## 🌟 9. Character Sprite System

### Expression Mapping
| Scroll/Section | Expression | Sprite |
|---------------|------------|--------|
| Hero/Top | Neutral | `main.png` |
| Skills | Happy | `happy.png` |
| Experience | Thinking | `thinking.png` |
| 404/Error | Confused | `confusion.png` |

### Animation Behavior
- Sprite fades/transitions between expressions.  
- Optional floating animation (gentle bob).  
- Slight parallax effect on scroll.  

---

## 🚀 10. Future Enhancements
- Add **more character expressions** (angry, excited, wink).  
- Implement **8-bit sound effects** toggle for interactions.  
- Create **pixel art background scenes** that change with sections.  
- Add **clock animation** as floating decoration.  
- Implement **theme unlockables** (hidden easter eggs reveal new sprites).  

---

## ✅ 11. Success Criteria
- Fully integrated Kurumi theme selectable via UI toggle.  
- Pixel art aesthetic consistently applied across all sections.  
- Character sprite animates and changes expressions correctly.  
- JSON-driven content consistency with other templates.  
- Smooth animation transitions (<100ms).  
- Lighthouse score ≥ 90 on performance and accessibility.  
- Deployment-ready and easily expandable for future sprites.
