/**
 * seo-routes.mjs — Single source of truth for all portfolio routes and their SEO metadata.
 * Used by the prerender script at build time to generate per-route HTML files.
 *
 * IMPORTANT: When adding a new page, add its entry here AND in src/App.jsx.
 */

export const BASE_URL = 'https://zaynul-abedin-miah.vercel.app';
export const OG_IMAGE = '/images/og-image.png';
export const SITE_NAME = 'Zaynul Abedin Miah';

export const routes = [
  {
    path: '/',
    title: 'Zaynul Abedin Miah | AI Dubbing & Cloud-Native Developer',
    description:
      "Explore Zaynul Abedin Miah's AI and cloud-native work, including responsible multilingual video localization with ElevenLabs Dubbing v2.",
    lastmod: '2026-06-04',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Zaynul Abedin Miah',
        alternateName: 'azaynul10',
        url: `${BASE_URL}/`,
        image: `${BASE_URL}/images/Zaynul.jpg`,
        jobTitle: 'AI Dubbing & Cloud-Native Developer',
        description:
          "Explore Zaynul Abedin Miah's AI and cloud-native work, including responsible multilingual video localization with ElevenLabs Dubbing v2.",
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'BRAC University',
        },
        sameAs: [
          'https://github.com/azaynul10',
          'https://www.linkedin.com/in/zaynul-abedin-miah/',
          'https://www.youtube.com/@zaynulabedinmiah',
          'https://x.com/azaynul123',
        ],
        knowsAbout: [
          'Agentic AI',
          'Kubernetes',
          'Cloud Native',
          'MLflow',
          'Databricks',
          'OpenAI Structured Outputs',
          'PyTorch',
          'Site Reliability Engineering',
          'ElevenLabs Ambassador',
          'AI Dubbing',
          'Video Localization',
        ],
      },
    },
  },
  {
    path: '/projects/kube-autofix-autonomous-kubernetes-sre-agent',
    title: 'Kube-AutoFix: Autonomous Kubernetes SRE Agent | Zaynul Abedin Miah',
    description:
      'Kube-AutoFix is a closed-loop autonomous Kubernetes debugging and self-healing agent using GPT-4o Structured Outputs, Pydantic validation, and MLflow experiment tracking.',
    lastmod: '2026-04-15',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Kube-AutoFix',
      description:
        'Closed-loop autonomous Kubernetes debugging and self-healing agent using GPT-4o Structured Outputs, Pydantic validation, and MLflow experiment tracking.',
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Linux',
      author: { '@type': 'Person', name: 'Zaynul Abedin Miah' },
    },
  },
  {
    path: '/projects/mlflow-agent-observability-databricks',
    title: 'MLflow Agent Observability on Databricks | Zaynul Abedin Miah',
    description:
      'Focused observability extension of Kube-AutoFix: MLflow experiment tracking for autonomous AI agent decisions on Databricks.',
    lastmod: '2026-04-10',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'MLflow Agent Observability',
      description:
        'Focused observability extension of Kube-AutoFix: MLflow experiment tracking for autonomous AI agent decisions on Databricks.',
      applicationCategory: 'DeveloperApplication',
      author: { '@type': 'Person', name: 'Zaynul Abedin Miah' },
    },
  },
  {
    path: '/projects/transnational-air-quality-ai-agent',
    title: 'Transnational Air Quality AI Agent | Zaynul Abedin Miah',
    description:
      'IoT-driven Air Quality Monitoring with Google ADK multi-agent architecture and Random Forest ML predicting AQI at 89% accuracy.',
    lastmod: '2026-03-20',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Transnational Air Quality AI Agent',
      description:
        'IoT-driven Air Quality Monitoring with Google ADK multi-agent architecture and Random Forest ML predicting AQI at 89% accuracy.',
      applicationCategory: 'DeveloperApplication',
      author: { '@type': 'Person', name: 'Zaynul Abedin Miah' },
    },
  },
  {
    path: '/projects/intelligent-accessibility-navigator',
    title: 'IAN: Intelligent Accessibility Navigator | Zaynul Abedin Miah',
    description:
      'Real-time visual assistance system for the visually impaired using Gemini 2.5 Vision, deployed on Google Cloud Run with TTS output.',
    lastmod: '2026-03-15',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Intelligent Accessibility Navigator',
      description:
        'Real-time visual assistance system for the visually impaired using Gemini 2.5 Vision, deployed on Google Cloud Run with TTS output.',
      applicationCategory: 'DeveloperApplication',
      author: { '@type': 'Person', name: 'Zaynul Abedin Miah' },
    },
  },
  {
    path: '/community/bangladesh-ai-cloud-native-developer-community',
    title: 'Bangladesh AI & Cloud Native Developer Community | Zaynul Abedin Miah',
    description:
      'Co-organizing and leading 87K+ tech community members across AI, ML, Cloud Native, AWS, Azure, and CNCF chapters in Bangladesh.',
    lastmod: '2026-06-04',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Bangladesh AI & Cloud Native Developer Community',
      description:
        'Co-organizing and leading 87K+ tech community members across AI, ML, Cloud Native, AWS, Azure, and CNCF chapters in Bangladesh.',
      author: { '@type': 'Person', name: 'Zaynul Abedin Miah' },
    },
  },
  {
    path: '/speaking/ai-cloud-native-workshops',
    title: 'Community Events & Learning Sessions | Zaynul Abedin Miah',
    description:
      'Selected public community activities and learning sessions across cloud-native, AWS, AI, open source, and student developer communities.',
    lastmod: '2026-05-01',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Community Events & Learning Sessions',
      description:
        'Selected public community activities and learning sessions across cloud-native, AWS, AI, open source, and student developer communities.',
      author: { '@type': 'Person', name: 'Zaynul Abedin Miah' },
    },
  },
  {
    path: '/credentials',
    title: 'Credentials & Certifications | Zaynul Abedin Miah',
    description:
      'Verified learning and program milestones supporting my work in AI, cloud-native, open-source, and student developer communities.',
    lastmod: '2026-06-04',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Credentials & Certifications',
      description:
        'Verified learning and program milestones supporting my work in AI, cloud-native, open-source, and student developer communities.',
      author: { '@type': 'Person', name: 'Zaynul Abedin Miah' },
    },
  },
];
