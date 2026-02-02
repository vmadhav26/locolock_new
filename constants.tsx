
import React from 'react';
import { Service, PortfolioItem, Industry } from './types';

export const WHATSAPP_NUMBER = "918897469310";
export const EMAIL = "info@locolock.in";
export const PHONE = "+91 8897469310";
export const WHATSAPP_MSG = encodeURIComponent(`Hello Locolock Technologies,\n\nI hope you’re doing well. I’m reaching out to discuss a potential project and would like to understand how your team can support my requirements.\n\nPlease let me know a convenient time to connect.\n\nThank you.`);

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    slug: 'web-development',
    title: 'Web Development',
    icon: '💻',
    shortDesc: 'High-performance websites built for scale and conversion.',
    problem: 'Slow, unresponsive websites frustrate users and kill conversion rates, leading to lost revenue and poor brand perception.',
    solution: 'We engineer blazingly fast, secure, and scalable web architectures using modern frameworks that prioritize user experience and SEO.',
    impact: 'Increased site speed, lower bounce rates, and a robust platform that grows alongside your business requirements.',
    features: ['Custom Web Applications', 'E-commerce Solutions', 'Performance Tuning', 'Cloud Infrastructure']
  },
  {
    id: 'web-design',
    slug: 'web-design',
    title: 'Web Design',
    icon: '🎨',
    shortDesc: 'Stunning visual experiences that capture and convert leads.',
    problem: 'Generic, dated designs fail to establish trust with high-value clients and founders who value innovation.',
    solution: 'Our design philosophy blends aesthetic premium feel with conversion-driven UI/UX logic to guide users naturally toward your CTA.',
    impact: 'Enhanced brand credibility, improved user engagement, and a visual identity that stands out in a crowded market.',
    features: ['UI/UX Strategy', 'Responsive Design', 'Interactive Prototypes', 'Design Systems']
  },
  {
    id: 'seo',
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    icon: '🚀',
    shortDesc: 'Dominating search results to drive organic, high-intent traffic.',
    problem: 'Great products remain invisible if they aren\'t ranking for the keywords your target audience is searching for.',
    solution: 'We implement data-backed SEO strategies focusing on technical health, content relevance, and domain authority.',
    impact: 'Sustainable organic growth, reduced reliance on paid ads, and long-term brand authority in your niche.',
    features: ['Technical SEO Audits', 'Keyword Strategy', 'On-Page Optimization', 'Content Roadmaps']
  },
  {
    id: 'app-dev',
    slug: 'app-development',
    title: 'App Development',
    icon: '📱',
    shortDesc: 'Native and cross-platform mobile apps for the digital-first world.',
    problem: 'Mobile users expect seamless, intuitive experiences; a poor app can damage your relationship with your most loyal customers.',
    solution: 'We build feature-rich iOS and Android applications that leverage the latest device capabilities for maximum performance.',
    impact: 'Seamless mobile presence, higher customer retention, and an accessible platform for your services anywhere, anytime.',
    features: ['iOS & Android Apps', 'Cross-Platform Solutions', 'App Store Optimization', 'Maintenance & Support']
  },
  {
    id: 'automations',
    slug: 'automations',
    title: 'Automations',
    icon: '⚙️',
    shortDesc: 'Streamlining operations to eliminate manual bottlenecking.',
    problem: 'Repetitive manual tasks drain your team\'s energy and lead to human errors that cost time and money.',
    solution: 'We design and deploy custom automation workflows that connect your tech stack and handle data syncing effortlessly.',
    impact: 'Dramatic reduction in operational overhead, higher accuracy, and freedom for your team to focus on high-level growth.',
    features: ['Workflow Integration', 'Data Synchronization', 'Custom API Connectors', 'Process Optimization']
  },
  {
    id: 'agents',
    slug: 'agents',
    title: 'Agents (AI/Task)',
    icon: '🤖',
    shortDesc: 'Smart AI agents that handle support, tasks, and data processing.',
    problem: 'Providing 24/7 human-level interaction is expensive and difficult to scale as your customer base grows.',
    solution: 'We deploy intelligent AI agents capable of understanding context, answering complex queries, and performing tasks automatically.',
    impact: 'Scale your operations 10x without increasing headcount, providing instant support and processing to your users.',
    features: ['Customer Support Agents', 'Data Processing Agents', 'Custom AI Workflows', 'Task Automation']
  },
  {
    id: 'health-check',
    slug: 'website-health-checkup',
    title: 'Website Health Checkup',
    icon: '🩺',
    shortDesc: 'Deep-dive audits to uncover security risks and bottlenecks.',
    problem: 'Hidden bugs, security vulnerabilities, and slow scripts can bring down your business without warning.',
    solution: 'A comprehensive 50-point inspection of your website\'s code, security, speed, and accessibility standards.',
    impact: 'Peace of mind, prioritized fix lists, and a significant boost in performance and security posture.',
    features: ['Security Audits', 'Speed Benchmarking', 'Accessibility Compliance', 'Code Review']
  }
];

export const INDUSTRIES: Industry[] = [
  { name: 'Startups', description: 'Agile solutions for fast-moving founders.', icon: '⚡' },
  { name: 'E-commerce', description: 'Conversion-optimized stores that scale.', icon: '🛒' },
  { name: 'Healthcare', description: 'Secure and HIPAA-compliant platforms.', icon: '🏥' },
  { name: 'Real Estate', description: 'Dynamic listings and lead capture systems.', icon: '🏠' },
  { name: 'Fintech', description: 'Robust architectures for financial data.', icon: '💰' },
  { name: 'Education', description: 'Interactive LMS and student portals.', icon: '🎓' }
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 1, title: 'SaaS Dashboard', category: 'Web Development', outcome: '30% Increase in User Retention', image: 'https://picsum.photos/seed/saas/800/600' },
  { id: 2, title: 'EdTech App', category: 'App Development', outcome: '50k+ Active Downloads', image: 'https://picsum.photos/seed/edtech/800/600' },
  { id: 3, title: 'Fintech Portal', category: 'Automations', outcome: 'Saved 200 Man-hours/Month', image: 'https://picsum.photos/seed/fintech/800/600' },
  { id: 4, title: 'Healthcare CRM', category: 'Web Design', outcome: 'Streamlined Patient Onboarding', image: 'https://picsum.photos/seed/health/800/600' }
];
