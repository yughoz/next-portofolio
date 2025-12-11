import { TemplateConfig } from '@/types/template'
import DefaultPortfolio from '@/components/templates/default/DefaultPortfolio'

export async function getTemplateConfig(): Promise<TemplateConfig> {
  return {
    type: 'default',
    id: 'default',
    component: DefaultPortfolio,
    styles: {
      css: `
        .template-default {
          --font-heading: 'Poppins', 'Inter', sans-serif;
          --font-body: 'Inter', sans-serif;
          --color-primary: #14b8a6;
          --color-secondary: #0d9488;
          --color-accent: #14b8a6;
          --color-background: #111827;
          --color-surface: #1f2937;
          --color-text: #ffffff;
          --color-text-secondary: #9ca3af;
          --border-radius: 0.75rem;
          --transition-speed: 0.3s;
        }

        .template-default body {
          font-family: var(--font-body);
          background: var(--color-background);
          color: var(--color-text);
          transition: all var(--transition-speed) ease;
        }

        .template-default .font-heading {
          font-family: var(--font-heading);
        }

        .template-default .card {
          background: var(--color-surface);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--border-radius);
          transition: all var(--transition-speed) ease;
        }

        .template-default .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
          border-color: var(--color-primary);
        }

        .template-default .gradient-text {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .template-default .gradient-bg {
          background: linear-gradient(135deg, var(--color-background), var(--color-surface), var(--color-background));
        }

        .template-default .btn-primary {
          background: var(--color-primary);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: var(--border-radius);
          transition: all var(--transition-speed) ease;
          font-weight: 500;
        }

        .template-default .btn-primary:hover {
          background: var(--color-secondary);
          transform: scale(1.05);
          box-shadow: 0 10px 15px -3px rgba(20, 184, 166, 0.3);
        }

        .template-default .section-padding {
          padding: 5rem 1rem;
        }

        @media (min-width: 768px) {
          .template-default .section-padding {
            padding: 6rem 1rem;
          }
        }

        .template-default .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .template-default .hero-avatar {
          width: 8rem;
          height: 8rem;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          font-weight: bold;
          color: white;
          margin: 0 auto 2rem;
        }

        .template-default .tech-badge {
          background: rgba(20, 184, 166, 0.2);
          color: var(--color-primary);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          border: 1px solid rgba(20, 184, 166, 0.3);
          transition: all var(--transition-speed) ease;
        }

        .template-default .tech-badge:hover {
          background: rgba(20, 184, 166, 0.3);
          transform: scale(1.05);
        }
      `,
      animations: `
        .template-default @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .template-default @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .template-default @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .template-default .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .template-default .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out;
        }

        .template-default .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out;
        }

        .template-default .stagger-children > * {
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
        hero: 'avatar',
        education: 'GraduationCap',
        portfolio: 'Briefcase',
        skills: 'Code2',
        experience: 'Building2',
        certifications: 'Award'
      }
    }
  }
}