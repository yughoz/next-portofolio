import { TemplateConfig } from '@/types/template'
import AnimePortfolio from '@/components/templates/anime/AnimePortfolio'

export async function getTemplateConfig(): Promise<TemplateConfig> {
  return {
    type: 'anime',
    id: 'anime',
    component: AnimePortfolio,
    styles: {
      css: `
        .template-anime {
          --font-heading: 'Nunito', 'Comic Neue', cursive;
          --font-body: 'Nunito', sans-serif;
          --color-primary: #F4B6C2;
          --color-secondary: #C06C84;
          --color-accent: #6C5B7B;
          --color-background: #FFF5F5;
          --color-surface: #FFE0E6;
          --color-text: #4A4063;
          --color-text-secondary: #6C5B7B;
          --border-radius: 1.5rem;
          --transition-speed: 0.4s;
        }

        .template-anime body {
          font-family: var(--font-body);
          background: linear-gradient(135deg, #FFF5F5 0%, #FFE0E6 50%, #FFF5F5 100%);
          color: var(--color-text);
          transition: all var(--transition-speed) ease;
          overflow-x: hidden;
        }

        .template-anime .font-heading {
          font-family: var(--font-heading);
          font-weight: 700;
        }

        .template-anime .card {
          background: var(--color-surface);
          border: 3px solid transparent;
          border-image: linear-gradient(45deg, #F4B6C2, #C06C84, #6C5B7B) 1;
          border-radius: var(--border-radius);
          transition: all var(--transition-speed) ease;
          box-shadow: 0 8px 32px rgba(244, 182, 194, 0.3);
          position: relative;
          overflow: hidden;
        }

        .template-anime .card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(45deg, transparent, rgba(244, 182, 194, 0.1), transparent);
          transform: rotate(45deg);
          transition: all 0.6s ease;
          opacity: 0;
        }

        .template-anime .card:hover::before {
          opacity: 1;
          transform: rotate(45deg) translateY(100%);
        }

        .template-anime .card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(244, 182, 194, 0.4);
          border-color: #F4B6C2;
        }

        .template-anime .gradient-text {
          background: linear-gradient(135deg, #F4B6C2, #C06C84, #6C5B7B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .template-anime .gradient-bg {
          background: linear-gradient(135deg, #FFF5F5 0%, #FFE0E6 50%, #FFF5F5 100%);
          position: relative;
        }

        .template-anime .gradient-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(244, 182, 194, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(192, 108, 132, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(108, 91, 123, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .template-anime .btn-primary {
          background: linear-gradient(135deg, #F4B6C2, #C06C84);
          color: white;
          padding: 1rem 2rem;
          border-radius: 2rem;
          transition: all var(--transition-speed) ease;
          font-weight: 600;
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .template-anime .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }

        .template-anime .btn-primary:hover::before {
          left: 100%;
        }

        .template-anime .btn-primary:hover {
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 15px 30px rgba(244, 182, 194, 0.4);
          border-color: #C06C84;
        }

        .template-anime .section-padding {
          padding: 6rem 1rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .template-anime .section-padding {
            padding: 8rem 1rem;
          }
        }

        .template-anime .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .template-anime .hero-avatar {
          width: 10rem;
          height: 10rem;
          background: linear-gradient(135deg, #F4B6C2, #C06C84, #6C5B7B);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin: 0 auto 2rem;
          box-shadow: 0 0 40px rgba(244, 182, 194, 0.5);
          position: relative;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .template-anime .tech-badge {
          background: linear-gradient(135deg, rgba(244, 182, 194, 0.3), rgba(192, 108, 132, 0.3));
          color: var(--color-text);
          padding: 0.75rem 1.5rem;
          border-radius: 2rem;
          font-size: 1rem;
          border: 2px solid #F4B6C2;
          transition: all var(--transition-speed) ease;
          font-weight: 600;
          position: relative;
          overflow: hidden;
        }

        .template-anime .tech-badge::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(244, 182, 194, 0.4), transparent);
          transition: left 0.4s ease;
        }

        .template-anime .tech-badge:hover::before {
          left: 100%;
        }

        .template-anime .tech-badge:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 10px 20px rgba(244, 182, 194, 0.3);
          border-color: #C06C84;
        }

        .template-anime .kawaii-decorator {
          position: absolute;
          font-size: 2rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        .template-anime .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #F4B6C2;
          border-radius: 50%;
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        .template-anime h1, .template-anime h2, .template-anime h3 {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .template-anime .section-title {
          position: relative;
          display: inline-block;
        }

        .template-anime .section-title::after {
          content: '✨';
          position: absolute;
          right: -2rem;
          top: 50%;
          transform: translateY(-50%);
          font-size: 1.5rem;
          animation: bounce 2s ease-in-out infinite;
        }
      `,
      animations: `
        .template-anime @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .template-anime @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-100px) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0);
          }
        }

        .template-anime @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px) rotate(5deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0);
          }
        }

        .template-anime @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0) rotate(180deg);
          }
          80% {
            opacity: 1;
            transform: scale(1.1) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        .template-anime .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .template-anime .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }

        .template-anime .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }

        .template-anime .animate-popIn {
          animation: popIn 0.6s ease-out;
        }

        .template-anime .stagger-children > * {
          animation-delay: calc(var(--stagger-delay, 0) * 0.15s);
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
        hero: 'Sparkles',
        education: 'Star',
        portfolio: 'Heart',
        skills: 'Zap',
        experience: 'TrendingUp',
        certifications: 'Award'
      }
    }
  }
}