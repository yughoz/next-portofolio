import { TemplateConfig } from '@/types/template'
import CatPortfolio from '@/components/templates/cat/CatPortfolio'

export async function getTemplateConfig(): Promise<TemplateConfig> {
  return {
    type: 'cat',
    id: 'cat',
    component: CatPortfolio,
    styles: {
      css: `
        .template-cat {
          --font-heading: 'Fredoka One', 'Bubblegum Sans', cursive;
          --font-body: 'Quicksand', 'Nunito', sans-serif;
          --color-primary: #FF6B9D;
          --color-secondary: #FFC75F;
          --color-accent: #F9F871;
          --color-background: #2D1B69;
          --color-surface: #372486;
          --color-text: #FFFFFF;
          --color-text-secondary: #FFE5B4;
          --color-text-muted: #FFD6E0;
          --border-radius: 2rem;
          --transition-speed: 0.3s;
        }

        .template-cat body {
          font-family: var(--font-body);
          background: linear-gradient(135deg, #2D1B69 0%, #372486 50%, #2D1B69 100%);
          color: var(--color-text);
          transition: all var(--transition-speed) ease;
          overflow-x: hidden;
        }

        .template-cat .font-heading {
          font-family: var(--font-heading);
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .template-cat .card {
          background: linear-gradient(135deg, rgba(45, 27, 105, 0.8), rgba(55, 36, 134, 0.8));
          border: 3px solid transparent;
          border-image: linear-gradient(45deg, #FF6B9D, #FFC75F, #F9F871) 1;
          border-radius: var(--border-radius);
          transition: all var(--transition-speed) ease;
          box-shadow: 0 12px 40px rgba(255, 107, 157, 0.25);
          position: relative;
          overflow: hidden;
        }

        .template-cat .card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #FF6B9D, #FFC75F, #F9F871, #FF6B9D);
          border-radius: var(--border-radius);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .template-cat .card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: inherit;
          border-radius: calc(var(--border-radius) - 3px);
          z-index: -1;
        }

        .template-cat .card:hover::before {
          opacity: 1;
        }

        .template-cat .card:hover {
          transform: translateY(-12px) rotate(1deg);
          box-shadow: 0 25px 50px rgba(255, 107, 157, 0.4);
        }

        .template-cat .gradient-text {
          background: linear-gradient(135deg, #FF6B9D, #FFC75F, #F9F871);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .template-cat .gradient-bg {
          background: linear-gradient(135deg, #2D1B69 0%, #372486 50%, #2D1B69 100%);
          position: relative;
        }

        .template-cat .gradient-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 25% 25%, rgba(255, 107, 157, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 199, 95, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(249, 248, 113, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .template-cat .btn-primary {
          background: linear-gradient(135deg, #FF6B9D, #FFC75F);
          color: white;
          padding: 1.25rem 2.5rem;
          border-radius: 3rem;
          transition: all var(--transition-speed) ease;
          font-weight: 600;
          border: none;
          position: relative;
          overflow: hidden;
          font-family: var(--font-heading);
          letter-spacing: 0.02em;
          box-shadow: 0 8px 25px rgba(255, 107, 157, 0.4);
        }

        .template-cat .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }

        .template-cat .btn-primary:hover::before {
          left: 100%;
        }

        .template-cat .btn-primary:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 15px 40px rgba(255, 107, 157, 0.5);
        }

        .template-cat .section-padding {
          padding: 8rem 1rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .template-cat .section-padding {
            padding: 10rem 1rem;
          }
        }

        .template-cat .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .template-cat .hero-avatar {
          width: 14rem;
          height: 14rem;
          background: linear-gradient(135deg, #FF6B9D, #FFC75F, #F9F871);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: bold;
          color: white;
          margin: 0 auto 3rem;
          box-shadow: 0 0 60px rgba(255, 107, 157, 0.6);
          position: relative;
          animation: catFloat 4s ease-in-out infinite;
          border: 4px solid rgba(255, 255, 255, 0.3);
        }

        @keyframes catFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(-2deg); }
          50% { transform: translateY(0px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(2deg); }
        }

        .template-cat .tech-badge {
          background: linear-gradient(135deg, rgba(255, 107, 157, 0.25), rgba(255, 199, 95, 0.25));
          color: var(--color-text);
          padding: 1rem 2rem;
          border-radius: 2.5rem;
          font-size: 1.1rem;
          border: 2px solid #FF6B9D;
          transition: all var(--transition-speed) ease;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          font-family: var(--font-heading);
          letter-spacing: 0.02em;
        }

        .template-cat .tech-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .template-cat .tech-badge:hover::before {
          left: 100%;
        }

        .template-cat .tech-badge:hover {
          transform: scale(1.15) translateY(-3px) rotate(-2deg);
          box-shadow: 0 12px 30px rgba(255, 107, 157, 0.4);
          border-color: #FFC75F;
        }

        .template-cat .cat-decorator {
          position: absolute;
          font-size: 2.5rem;
          animation: catBounce 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(255, 107, 157, 0.5));
        }

        @keyframes catBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) rotate(0deg); }
          10% { transform: translateY(-15px) rotate(-5deg); }
          30% { transform: translateY(-8px) rotate(3deg); }
          60% { transform: translateY(-12px) rotate(-2deg); }
        }

        .template-cat .paw-print {
          position: absolute;
          width: 30px;
          height: 30px;
          opacity: 0.3;
          animation: pawWalk 8s linear infinite;
        }

        .template-cat .paw-print::before,
        .template-cat .paw-print::after {
          content: '🐾';
          position: absolute;
          font-size: 1.5rem;
        }

        .template-cat .paw-print::after {
          left: 15px;
          top: 10px;
          animation-delay: 0.2s;
        }

        @keyframes pawWalk {
          0% { transform: translateX(-100px) translateY(0); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateX(calc(100vw + 100px)) translateY(-20px); opacity: 0; }
        }

        .template-cat h1, .template-cat h2, .template-cat h3 {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4), 0 0 12px rgba(255, 107, 157, 0.2);
          letter-spacing: 0.02em;
        }

        .template-cat p, .template-cat span, .template-cat div {
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .template-cat .text-pink-200 {
          color: #FFD6E0 !important;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
        }

        .template-cat .text-pink-100 {
          color: #FFFFFF !important;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3) !important;
        }

        .template-cat .text-yellow-400 {
          color: #FFC75F !important;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4) !important;
        }

        /* Improve readability for main description and paragraph text */
        .template-cat .text-lg, .template-cat .text-xl {
          color: #FFFFFF !important;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5) !important;
          font-weight: 500 !important;
        }

        .template-cat .text-pink-100.leading-relaxed {
          color: #FFFFFF !important;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6) !important;
          font-weight: 500 !important;
        }

        /* Improve footer text readability */
        .template-cat footer .text-pink-200 {
          color: #FFFFFF !important;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7) !important;
          font-weight: 600 !important;
        }

        .template-cat footer p {
          color: #FFD6E0 !important;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8) !important;
          font-weight: 600 !important;
          font-size: 1.1rem !important;
        }

        .template-cat .section-title {
          position: relative;
          display: inline-block;
        }

        .template-cat .section-title::after {
          content: '🐱';
          position: absolute;
          right: -3rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 2rem;
          animation: catTail 2s ease-in-out infinite;
        }

        @keyframes catTail {
          0%, 100% { transform: translateY(-50%) rotate(0deg); }
          25% { transform: translateY(-50%) rotate(-10deg); }
          75% { transform: translateY(-50%) rotate(10deg); }
        }

        .template-cat .meow-bubble {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 245, 255, 0.95));
          color: #C8102E;
          padding: 0.75rem 1.5rem;
          border-radius: 2rem 2rem 2rem 0.5rem;
          position: relative;
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 700;
          box-shadow: 0 8px 20px rgba(255, 107, 157, 0.3);
          animation: meowPop 3s ease-in-out infinite;
          border: 2px solid #FFC75F;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
        }

        .template-cat .meow-bubble::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 10px;
          width: 16px;
          height: 16px;
          background: rgba(255, 255, 255, 0.95);
          border: 2px solid #FFC75F;
          border-top: none;
          border-right: none;
          transform: rotate(45deg);
        }

        @keyframes meowPop {
          0%, 70%, 100% { transform: scale(1); opacity: 1; }
          85% { transform: scale(1.1); opacity: 0.8; }
        }
      `,
      animations: `
        .template-cat @keyframes catWalkIn {
          0% {
            opacity: 0;
            transform: translateX(-100px) scale(0.8) rotate(-10deg);
          }
          60% {
            opacity: 0.8;
            transform: translateX(20px) scale(1.05) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1) rotate(0deg);
          }
        }

        .template-cat @keyframes catPounce {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-180deg);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2) rotate(90deg);
          }
          80% {
            opacity: 1;
            transform: scale(0.95) rotate(-10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .template-cat @keyframes catStretch {
          0% {
            opacity: 0;
            transform: translateY(50px) scaleX(0.5);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-10px) scaleX(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scaleX(1);
          }
        }

        .template-cat @keyframes catYawn {
          0%, 100% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.2) rotate(-5deg); }
          50% { transform: scale(0.9) rotate(3deg); }
          75% { transform: scale(1.1) rotate(-2deg); }
        }

        .template-cat .animate-catWalkIn {
          animation: catWalkIn 0.9s ease-out;
        }

        .template-cat .animate-catPounce {
          animation: catPounce 0.7s ease-out;
        }

        .template-cat .animate-catStretch {
          animation: catStretch 0.8s ease-out;
        }

        .template-cat .animate-catYawn {
          animation: catYawn 1.5s ease-in-out infinite;
        }

        .template-cat .stagger-children > * {
          animation-delay: calc(var(--stagger-delay, 0) * 0.2s);
        }
      `
    },
    assets: {
      icons: {
        email: 'Mail',
        linkedin: 'Linkedin',
        github: 'Github',
        website: 'Globe',
        phone: 'Phone',
        instagram: 'Instagram'
      },
      illustrations: {
        hero: 'Neko',
        education: 'BookOpen',
        portfolio: 'Heart',
        skills: 'Zap',
        experience: 'TrendingUp',
        certifications: 'Award'
      }
    }
  }
}