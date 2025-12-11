import { TemplateConfig } from '@/types/template'
import Anime2Portfolio from '@/components/templates/anime2/Anime2Portfolio'

export async function getTemplateConfig(): Promise<TemplateConfig> {
  return {
    type: 'anime2',
    id: 'anime2',
    component: Anime2Portfolio,
    styles: {
      css: `
        .template-anime2 {
          --font-heading: 'Orbitron', 'Rajdhani', monospace;
          --font-body: 'Inter', 'Poppins', sans-serif;
          --color-primary: #C8102E;
          --color-secondary: #FF3B3B;
          --color-accent: #8B0000;
          --color-background: #0A0A0A;
          --color-surface: #1E1E1E;
          --color-text: #F5F5F5;
          --color-text-secondary: #E5E5E5;
          --color-text-muted: #999999;
          --border-radius: 0.75rem;
          --transition-speed: 0.3s;
        }

        .template-anime2 body {
          font-family: var(--font-body);
          background: linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%);
          color: var(--color-text);
          transition: all var(--transition-speed) ease;
          overflow-x: hidden;
        }

        .template-anime2 .font-heading {
          font-family: var(--font-heading);
          font-weight: 900;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .template-anime2 .card {
          background: linear-gradient(135deg, rgba(30, 30, 30, 0.95), rgba(10, 10, 10, 0.95));
          border: 2px solid rgba(200, 16, 46, 0.3);
          border-radius: var(--border-radius);
          transition: all var(--transition-speed) ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
        }

        .template-anime2 .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(200, 16, 46, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .template-anime2 .card:hover::before {
          left: 100%;
        }

        .template-anime2 .card:hover {
          border-color: var(--color-primary);
          box-shadow: 0 8px 30px rgba(200, 16, 46, 0.3);
          transform: translateY(-4px);
        }

        .template-anime2 .gradient-text {
          background: linear-gradient(135deg, #C8102E, #FF3B3B, #8B0000);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 900;
          letter-spacing: 0.02em;
        }

        .template-anime2 .gradient-bg {
          background: linear-gradient(135deg, #0A0A0A 0%, #1E1E1E 50%, #0A0A0A 100%);
          position: relative;
        }

        .template-anime2 .gradient-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(200, 16, 46, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 59, 59, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 10%, rgba(139, 0, 0, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .template-anime2 .btn-primary {
          background: linear-gradient(135deg, #C8102E, #8B0000);
          color: white;
          padding: 1rem 2rem;
          border-radius: var(--border-radius);
          transition: all var(--transition-speed) ease;
          font-weight: 700;
          border: 2px solid rgba(200, 16, 46, 0.3);
          position: relative;
          overflow: hidden;
          font-family: var(--font-heading);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(200, 16, 46, 0.4);
        }

        .template-anime2 .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }

        .template-anime2 .btn-primary:hover::before {
          left: 100%;
        }

        .template-anime2 .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(200, 16, 46, 0.6);
          border-color: var(--color-secondary);
        }

        .template-anime2 .section-padding {
          padding: 5rem 1rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .template-anime2 .section-padding {
            padding: 6rem 1rem;
          }
        }

        .template-anime2 .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .template-anime2 .hero-avatar {
          width: 12rem;
          height: 12rem;
          background: linear-gradient(135deg, #C8102E, #FF3B3B);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          margin: 0 auto 2rem;
          box-shadow: 0 0 40px rgba(200, 16, 46, 0.8);
          position: relative;
          border: 3px solid rgba(255, 59, 59, 0.5);
        }

        @keyframes animeFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .template-anime2 .tech-badge {
          background: linear-gradient(135deg, rgba(30, 30, 30, 0.9), rgba(10, 10, 10, 0.9));
          color: var(--color-secondary);
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-size: 1rem;
          border: 2px solid rgba(200, 16, 46, 0.3);
          transition: all var(--transition-speed) ease;
          font-weight: 700;
          position: relative;
          overflow: hidden;
          font-family: var(--font-heading);
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .template-anime2 .tech-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(200, 16, 46, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .template-anime2 .tech-badge:hover::before {
          left: 100%;
        }

        .template-anime2 .tech-badge:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(200, 16, 46, 0.4);
          border-color: var(--color-primary);
          background: linear-gradient(135deg, rgba(139, 0, 0, 0.9), rgba(30, 30, 30, 0.9));
        }

        .template-anime2 .particle {
          position: absolute;
          background: radial-gradient(circle, rgba(255, 59, 59, 0.8) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          animation: particleFloat 15s linear infinite;
        }

        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .template-anime2 h1, .template-anime2 h2, .template-anime2 h3 {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 20px rgba(200, 16, 46, 0.3);
          letter-spacing: 0.02em;
        }

        .template-anime2 .section-title {
          position: relative;
          display: inline-block;
        }

        .template-anime2 .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
        }

        .template-anime2 .glow-border {
          position: relative;
          background: linear-gradient(135deg, #0A0A0A, #1E1E1E);
          border-radius: var(--border-radius);
        }

        .template-anime2 .glow-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #C8102E, #FF3B3B, #8B0000, #C8102E);
          border-radius: var(--border-radius);
          z-index: -1;
          opacity: 0.7;
          filter: blur(8px);
          animation: glowRotate 4s linear infinite;
        }

        @keyframes glowRotate {
          0% { filter: blur(8px) hue-rotate(0deg); }
          100% { filter: blur(8px) hue-rotate(360deg); }
        }

        .template-anime2 .energy-bar {
          height: 4px;
          background: linear-gradient(90deg, transparent, var(--color-primary), transparent);
          position: relative;
          overflow: hidden;
        }

        .template-anime2 .energy-bar::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, var(--color-secondary), transparent);
          animation: energyFlow 2s linear infinite;
        }

        @keyframes energyFlow {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        /* Scrollbar styling */
        .template-anime2 ::-webkit-scrollbar {
          width: 8px;
        }

        .template-anime2 ::-webkit-scrollbar-track {
          background: #0A0A0A;
        }

        .template-anime2 ::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #C8102E, #8B0000);
          border-radius: 4px;
        }

        .template-anime2 ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #FF3B3B, #C8102E);
        }
      `,
      animations: `
        .template-anime2 @keyframes animeSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-50px) skewX(-10deg);
            filter: blur(10px);
          }
          60% {
            opacity: 0.8;
            transform: translateX(10px) skewX(5deg);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) skewX(0deg);
            filter: blur(0px);
          }
        }

        .template-anime2 @keyframes animePulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        .template-anime2 @keyframes animeGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(200, 16, 46, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(200, 16, 46, 0.8), 0 0 60px rgba(255, 59, 59, 0.4);
          }
        }

        .template-anime2 @keyframes dataStream {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .template-anime2 .animate-animeSlideIn {
          animation: animeSlideIn 0.8s ease-out;
        }

        .template-anime2 .animate-animePulse {
          animation: animePulse 2s ease-in-out infinite;
        }

        .template-anime2 .animate-animeGlow {
          animation: animeGlow 3s ease-in-out infinite;
        }

        .template-anime2 .stagger-children > * {
          animation-delay: calc(var(--stagger-delay, 0) * 0.1s);
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
        hero: 'Flame',
        education: 'GraduationCap',
        portfolio: 'Target',
        skills: 'Zap',
        experience: 'TrendingUp',
        certifications: 'Trophy'
      }
    }
  }
}