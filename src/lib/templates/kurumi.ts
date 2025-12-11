import { TemplateConfig } from '@/types/template'
import KurumiPortfolio from '@/components/templates/kurumi/KurumiPortfolio'

export async function getTemplateConfig(): Promise<TemplateConfig> {
    return {
        type: 'kurumi',
        id: 'kurumi',
        component: KurumiPortfolio,
        styles: {
            css: `
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');

        .template-kurumi {
          --font-heading: 'Press Start 2P', monospace;
          --font-body: 'VT323', 'Roboto Mono', monospace;
          --color-primary: #B91C1C;
          --color-secondary: #DC2626;
          --color-accent: #450a0a;
          --color-background: #0D0D0D;
          --color-surface: #1A1A1A;
          --color-text: #FAFAFA;
          --color-text-secondary: #D97706;
          --color-text-muted: #6B7280;
          --border-width: 4px;
          --pixel-unit: 4px;
        }

        .template-kurumi body {
          font-family: var(--font-body);
          background: var(--color-background);
          color: var(--color-text);
          overflow-x: hidden;
          image-rendering: pixelated;
        }

        .template-kurumi .font-heading {
          font-family: var(--font-heading);
          font-weight: bold;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .template-kurumi .pixelated {
          image-rendering: pixelated;
          image-rendering: -moz-crisp-edges;
          image-rendering: crisp-edges;
        }

        .template-kurumi .pixel-border {
          border: var(--border-width) solid var(--color-primary);
          box-shadow: var(--pixel-unit) var(--pixel-unit) 0 0 var(--color-accent);
        }

        .template-kurumi .pixel-card {
          background: var(--color-surface);
          border: var(--border-width) solid var(--color-primary);
          box-shadow: 6px 6px 0 0 var(--color-accent);
          transition: all 0.2s ease;
        }

        .template-kurumi .pixel-card:hover {
          transform: translate(-2px, -2px);
          box-shadow: 8px 8px 0 0 var(--color-primary);
        }

        .template-kurumi .pixel-btn {
          background: var(--color-primary);
          color: white;
          border: var(--border-width) solid var(--color-secondary);
          box-shadow: var(--pixel-unit) var(--pixel-unit) 0 0 var(--color-accent);
          font-family: var(--font-heading);
          font-size: 12px;
          padding: 12px 24px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .template-kurumi .pixel-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 0 var(--color-primary);
          background: var(--color-secondary);
        }

        .template-kurumi .pixel-btn:active {
          transform: translate(2px, 2px);
          box-shadow: 0 0 0 0;
        }

        .template-kurumi .pixel-text-shadow {
          text-shadow: 4px 4px 0 var(--color-accent);
        }

        .template-kurumi .pixel-badge {
          background: var(--color-surface);
          color: var(--color-secondary);
          border: 2px solid var(--color-primary);
          padding: 8px 16px;
          font-family: var(--font-body);
          font-size: 16px;
          transition: all 0.2s ease;
        }

        .template-kurumi .pixel-badge:hover {
          background: var(--color-accent);
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 0 var(--color-primary);
        }

        .template-kurumi .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .template-kurumi .section-divider {
          width: 200px;
          height: 8px;
          background: var(--color-primary);
          box-shadow: 4px 4px 0 0 var(--color-accent);
          margin: 0 auto;
        }

        /* Pixel Particle Animation */
        @keyframes pixelFloat {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
        }

        .template-kurumi .pixel-particle {
          animation: pixelFloat 4s ease-in-out infinite;
        }

        /* Character Bob Animation */
        @keyframes characterBob {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .template-kurumi .character-float {
          animation: characterBob 3s ease-in-out infinite;
        }

        /* Glitch Effect for Hover */
        @keyframes pixelGlitch {
          0%, 100% {
            transform: translate(0);
          }
          25% {
            transform: translate(2px, -2px);
          }
          50% {
            transform: translate(-2px, 2px);
          }
          75% {
            transform: translate(2px, 2px);
          }
        }

        .template-kurumi .glitch-hover:hover {
          animation: pixelGlitch 0.3s ease-in-out;
        }

        /* Clock Animation for Kurumi Theme */
        @keyframes clockRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .template-kurumi .clock-rotate {
          animation: clockRotate 10s linear infinite;
        }

        /* Scanline Effect */
        .template-kurumi .scanlines::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 0, 0, 0.1) 2px,
            rgba(0, 0, 0, 0.1) 4px
          );
          z-index: 100;
        }

        /* Pixel Grid Background */
        .template-kurumi .pixel-grid {
          background-image:
            linear-gradient(rgba(185, 28, 28, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185, 28, 28, 0.1) 1px, transparent 1px);
          background-size: 16px 16px;
        }

        /* Scrollbar styling */
        .template-kurumi ::-webkit-scrollbar {
          width: 12px;
        }

        .template-kurumi ::-webkit-scrollbar-track {
          background: var(--color-background);
          border-left: 4px solid var(--color-primary);
        }

        .template-kurumi ::-webkit-scrollbar-thumb {
          background: var(--color-primary);
          border: 2px solid var(--color-accent);
        }

        .template-kurumi ::-webkit-scrollbar-thumb:hover {
          background: var(--color-secondary);
        }

        /* Timeline styling */
        .template-kurumi .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--color-primary);
          transform: translateX(-50%);
        }

        .template-kurumi .timeline-dot {
          width: 16px;
          height: 16px;
          background: var(--color-secondary);
          border: 4px solid var(--color-primary);
          box-shadow: 0 0 0 4px var(--color-accent);
        }

        /* Responsive font sizes for pixel font */
        @media (max-width: 768px) {
          .template-kurumi h1 {
            font-size: 1.5rem !important;
          }
          .template-kurumi h2 {
            font-size: 1.25rem !important;
          }
        }
      `,
            animations: `
        @keyframes pixelBlink {
          0%, 49%, 100% {
            opacity: 1;
          }
          50%, 99% {
            opacity: 0;
          }
        }

        @keyframes pixelSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pixelPulse {
          0%, 100% {
            box-shadow: 4px 4px 0 0 rgba(185, 28, 28, 1);
          }
          50% {
            box-shadow: 6px 6px 0 0 rgba(220, 38, 38, 1);
          }
        }

        .template-kurumi .animate-blink {
          animation: pixelBlink 1s step-end infinite;
        }

        .template-kurumi .animate-slideIn {
          animation: pixelSlideIn 0.4s ease-out;
        }

        .template-kurumi .animate-pulse {
          animation: pixelPulse 2s ease-in-out infinite;
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
                hero: 'Clock',
                education: 'GraduationCap',
                portfolio: 'Target',
                skills: 'Sparkles',
                experience: 'TrendingUp',
                certifications: 'Trophy',
                kurumi_main: '/data/kurumi/main.png',
                kurumi_happy: '/data/kurumi/happy.png',
                kurumi_thinking: '/data/kurumi/thinking.png',
                kurumi_confusion: '/data/kurumi/confusion.png'
            }
        }
    }
}
