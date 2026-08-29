export interface KnowledgeItem {
    id: string;
    keywords: string[];
    topics: string[];
    title: string;
    answer: string;
    links?: { label: string; url: string; isExternal?: boolean }[];
    suggestions?: string[];
}

export const CHATBOT_KNOWLEDGE: KnowledgeItem[] = [
    {
        id: 'about-futora',
        keywords: ['futora', 'group', 'company', 'about', 'what is futora', 'who are you', 'overview', 'ecosystem', 'venture', 'conglomerate'],
        topics: ['about', 'company'],
        title: 'About Futora Group',
        answer: 'Futora Group of Companies is an AI-first technology conglomerate and holding company founded by Madhur Dhadve. We operate on a Dual-Model ecosystem: inventing proprietary venture-scale AI software platforms while delivering high-velocity technology and growth engineering services to global businesses. We are also a Government of India recognized MSME.',
        links: [
            { label: 'Explore Products', url: '/companies' },
            { label: 'Growth Services', url: '/services' }
        ],
        suggestions: ['Tell me about your products', 'What services do you offer?', 'Who is the founder?']
    },
    {
        id: 'founder-madhur',
        keywords: ['founder', 'ceo', 'madhur', 'dhadve', 'owner', 'who started', 'creator', 'leadership'],
        topics: ['founder', 'leadership'],
        title: 'About the Founder — Madhur Dhadve',
        answer: 'Madhur Dhadve is the Founder & Visionary CEO of Futora Group. He is an AI specialist, product architect, and tech entrepreneur building billion-dollar AI platforms from India for the world. You can reach out directly via email at futoragroup@gmail.com or call +91 8446653644.',
        links: [
            { label: 'Founder Profile', url: '/founder' },
            { label: 'LinkedIn', url: 'https://in.linkedin.com/in/madhur-dhadve-5b598433a', isExternal: true },
            { label: 'Instagram', url: 'https://instagram.com/madhur.dhadve', isExternal: true }
        ],
        suggestions: ['How to contact Madhur?', 'What companies did he build?']
    },
    {
        id: 'futorapay-finance',
        keywords: ['futorapay', 'futora pay', 'futora wallet', 'finance', 'fintech', 'upi', 'payments', 'wealth', 'money'],
        topics: ['products', 'fintech'],
        title: 'Futora Finance & FutoraPay',
        answer: 'Futora Finance is a next-generation AI financial infrastructure ecosystem featuring two key modules:\n• **Futora Wallet**: An AI-powered financial management OS with real-time portfolio intelligence.\n• **Futora Pay**: A next-gen instant UPI payments app engineered for high-security checkout and seamless money movement.',
        links: [
            { label: 'Open FutoraPay', url: 'https://futorapay.vercel.app/', isExternal: true },
            { label: 'Explore Companies', url: '/companies' }
        ],
        suggestions: ['Tell me about FutoraOne', 'What is Futora AI?']
    },
    {
        id: 'futoraone-social',
        keywords: ['futoraone', 'futora one', 'social', 'community', 'network', 'developers', 'creators'],
        topics: ['products', 'social'],
        title: 'FutoraOne — AI Social Network',
        answer: 'FutoraOne is an AI-powered social media and collaborative platform where tech creators, software engineers, and founders connect, share innovations, and build together in focused micro-communities.',
        links: [
            { label: 'Visit FutoraOne', url: 'https://futora1.vercel.app/', isExternal: true }
        ],
        suggestions: ['What is FutoraLift?', 'What is FutoraFlow?']
    },
    {
        id: 'futoraai-dev',
        keywords: ['futora ai', 'futoraai', 'ai platform', 'developer', 'intelligence', 'llm'],
        topics: ['products', 'ai'],
        title: 'Futora AI — Developer Platform',
        answer: 'Futora AI is an intelligent developer ecosystem and AI platform providing custom machine learning models, autonomous agent frameworks, and modern API tools.',
        links: [
            { label: 'Open Futora AI', url: 'https://futoraai.vercel.app/', isExternal: true }
        ],
        suggestions: ['Tell me about AI services', 'What is Career OS?']
    },
    {
        id: 'futoralift-growth',
        keywords: ['futoralift', 'futora lift', 'marketing', 'growth', 'user acquisition', 'seo', 'ads', 'ppc'],
        topics: ['products', 'services'],
        title: 'FutoraLift — Growth Engine',
        answer: 'FutoraLift is an AI-powered growth and performance marketing agency helping startups and global brands scale with automated user acquisition, conversion rate optimization (CRO), and smart analytics.',
        links: [
            { label: 'Visit FutoraLift', url: 'https://futoralift.vercel.app/', isExternal: true }
        ],
        suggestions: ['Explore all growth services', 'Contact for marketing']
    },
    {
        id: 'futoraflow-automation',
        keywords: ['futoraflow', 'futora flow', 'automation', 'workflow', 'pipelines', 'business os'],
        topics: ['products', 'automation'],
        title: 'FutoraFlow — Workflow Automation',
        answer: 'FutoraFlow is an intelligent business process and workflow automation platform that streamlines enterprise operations, database integrations, and automated pipelines.',
        links: [
            { label: 'Visit FutoraFlow', url: 'https://futoraflow.vercel.app/', isExternal: true }
        ],
        suggestions: ['What is FutoraDrop?', 'What is Career OS?']
    },
    {
        id: 'careeros-education',
        keywords: ['career os', 'careeros', 'career', 'education', 'jobs', 'resume', 'students'],
        topics: ['products', 'education'],
        title: 'Career OS — Career Acceleration Platform',
        answer: 'Career OS is an intelligent career guidance and acceleration ecosystem designed to help students, developers, and job seekers prepare, upskill, and secure high-impact roles.',
        links: [
            { label: 'Open Career OS', url: 'https://careerosx.vercel.app/', isExternal: true }
        ],
        suggestions: ['Are you hiring at Futora?', 'Tell me about all products']
    },
    {
        id: 'futoradrop-launch',
        keywords: ['futoradrop', 'futora drop', 'launch', 'startups', 'first users', 'distribution'],
        topics: ['products', 'launch'],
        title: 'FutoraDrop — Startup Launch Engine',
        answer: 'FutoraDrop is a high-velocity launchpad and distribution engine built to help early-stage tech founders acquire their first 1,000 active users in India.',
        links: [
            { label: 'Visit FutoraDrop', url: 'https://futoradrop.vercel.app/', isExternal: true }
        ],
        suggestions: ['What other products do you have?', 'How to partner?']
    },
    {
        id: 'upcoming-innovations',
        keywords: ['upcoming', 'future', 'pipeline', 'futoraagents', 'futorasense', 'futoratrust', 'futorapulse', 'futoracircle', 'futoraid'],
        topics: ['products', 'future'],
        title: 'Upcoming Futora Innovations',
        answer: 'Futora Group is currently incubating cutting-edge products in its pipeline:\n• **FutoraAgents**: Autonomous AI agent builders & multi-agent systems\n• **FutoraSense**: Real-time business signal & anomaly detection\n• **FutoraPulse**: Social intelligence & trend prediction\n• **FutoraTrust**: Internet credibility scoring & trust engine\n• **FutoraCircle**: Private micro-communities for builders\n• **FutoraID**: Decentralized identity OS for the AI era',
        links: [
            { label: 'View Upcoming Labs', url: '/companies' }
        ],
        suggestions: ['Tell me about Services', 'Contact Futora']
    },
    {
        id: 'services-overview',
        keywords: ['services', 'technology services', 'growth services', 'what do you build', 'hire', 'consulting', 'custom software', 'categories'],
        topics: ['services'],
        title: 'Technology & Growth Services',
        answer: 'We provide end-to-end technology and growth consulting organized into 9 specialized domains:\n1. **Software Development** (Custom web, mobile, SaaS, APIs)\n2. **AI & Automation** (Custom LLMs, RAG, agents, pipelines)\n3. **Cloud & Infrastructure** (AWS/GCP/Azure, DevOps, K8s, SRE)\n4. **Enterprise Systems** (ERP, CRM, HRMS, integrations)\n5. **Web & Commerce** (Headless e-commerce, high-converting sites)\n6. **SEO & Content** (Technical SEO, topical authority, reporting)\n7. **Branding & Marketing** (UI/UX, Performance PPC, CRO)\n8. **Consulting & Strategy** (IT strategy, Fractional CTO, due diligence)\n9. **Quality & Support** (QA testing, security audits, 24/7 SLA)',
        links: [
            { label: 'Explore All 60+ Services', url: '/services' }
        ],
        suggestions: ['Tell me about AI services', 'How do we partner?']
    },
    {
        id: 'ai-automation-services',
        keywords: ['ai services', 'custom llm', 'chatbot', 'rag', 'machine learning', 'agents', 'copilot'],
        topics: ['services', 'ai'],
        title: 'AI & Automation Services',
        answer: 'Our AI engineering arm builds enterprise-grade AI solutions including:\n• Custom LLM and Chatbot Development\n• RAG (Retrieval-Augmented Generation) Systems\n• Autonomous AI Agents & Copilots\n• Computer Vision & Image Recognition\n• Machine Learning Model Training & Deployment\n• Data Pipeline Automation',
        links: [
            { label: 'View AI Services', url: '/services' },
            { label: 'Book AI Consultation', url: '/contact' }
        ],
        suggestions: ['Software Development Services', 'Cloud & DevOps Services']
    },
    {
        id: 'software-dev-services',
        keywords: ['software development', 'web development', 'mobile app', 'saas development', 'api', 'custom app'],
        topics: ['services', 'software'],
        title: 'Software Development Services',
        answer: 'We architect and build battle-tested software systems:\n• Full-Stack Web Applications (React, Next.js, Node.js, Python, Go)\n• Native & Cross-Platform Mobile Apps (iOS & Android)\n• SaaS Multi-Tenant Platforms (MVP to scale)\n• High-throughput API Design & Microservices\n• Legacy Modernization & Cloud Migrations',
        links: [
            { label: 'View Software Services', url: '/services' }
        ],
        suggestions: ['Enterprise Systems', 'Contact Us']
    },
    {
        id: 'contact-partnership',
        keywords: ['contact', 'email', 'phone', 'call', 'partner', 'hire us', 'reach out', 'whatsapp', 'address'],
        topics: ['contact'],
        title: 'Contact & Partnerships',
        answer: 'You can connect directly with the Futora Group leadership team:\n• **Email**: futoragroup@gmail.com\n• **Direct Phone / WhatsApp**: +91 8446653644\n• **Instagram**: @madhur.dhadve\n• **LinkedIn**: Madhur Dhadve\n• **Corporate Office**: Pune, India (MSME Registered)',
        links: [
            { label: 'Open Contact Form', url: '/contact' },
            { label: 'WhatsApp Chat', url: 'https://wa.me/918446653644', isExternal: true }
        ],
        suggestions: ['Explore Products', 'Explore Services']
    },
    {
        id: 'careers-jobs',
        keywords: ['careers', 'jobs', 'hiring', 'work with us', 'internship', 'apply', 'openings'],
        topics: ['careers'],
        title: 'Careers at Futora Group',
        answer: 'Futora Group is always looking for passionate builders, AI researchers, software engineers, and growth marketers to join our mission. You can view open positions and submit your profile on our Careers portal.',
        links: [
            { label: 'Careers Portal', url: '/careers' }
        ],
        suggestions: ['Contact Founder', 'About Futora Group']
    },
    {
        id: 'msme-legal',
        keywords: ['msme', 'government', 'registered', 'legal', 'compliance', 'india', 'legit'],
        topics: ['legal'],
        title: 'Government of India MSME Recognition',
        answer: 'Futora Group of Companies is an officially recognized Micro, Small, and Medium Enterprise (MSME) under the Ministry of MSME, Government of India, operating with strict compliance and corporate governance standards.',
        links: [
            { label: 'Home Overview', url: '/' }
        ],
        suggestions: ['Who is the founder?', 'What is the Dual Model?']
    }
];

export const DEFAULT_SUGGESTIONS = [
    'What is Futora Group?',
    'Tell me about FutoraPay',
    'What services do you offer?',
    'Who is Madhur Dhadve?',
    'How to partner with Futora?'
];

export function findBestAnswer(query: string): {
    answer: string;
    title?: string;
    links?: { label: string; url: string; isExternal?: boolean }[];
    suggestions?: string[];
} {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) {
        return {
            answer: 'Hello! I am Futora AI, your personal ecosystem assistant. Ask me anything about our proprietary AI platforms, growth services, or partnership opportunities.',
            suggestions: DEFAULT_SUGGESTIONS
        };
    }

    // Direct greeting handler
    if (/^(hi|hello|hey|namaste|hola|greetings|wassup|sup)/i.test(cleanQuery) && cleanQuery.split(' ').length <= 2) {
        return {
            answer: 'Hello! Welcome to Futora Group. I can help you learn about our AI products (FutoraPay, FutoraOne, Futora AI, etc.), our 9 Technology & Growth Service domains, or connect you directly with Founder Madhur Dhadve.',
            suggestions: DEFAULT_SUGGESTIONS
        };
    }

    let highestScore = 0;
    let bestMatch: KnowledgeItem | null = null;

    const queryWords = cleanQuery.split(/\s+/).filter(w => w.length > 2);

    for (const item of CHATBOT_KNOWLEDGE) {
        let score = 0;

        // Keyword matches
        for (const keyword of item.keywords) {
            if (cleanQuery.includes(keyword)) {
                score += keyword.length >= 6 ? 6 : 4;
            }
        }

        // Word overlap matching
        for (const word of queryWords) {
            if (item.keywords.some(k => k.includes(word))) {
                score += 2;
            }
            if (item.answer.toLowerCase().includes(word)) {
                score += 1;
            }
            if (item.title.toLowerCase().includes(word)) {
                score += 3;
            }
        }

        if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
        }
    }

    if (bestMatch && highestScore >= 3) {
        return {
            answer: bestMatch.answer,
            title: bestMatch.title,
            links: bestMatch.links,
            suggestions: bestMatch.suggestions || DEFAULT_SUGGESTIONS
        };
    }

    // Intelligent Fallback
    return {
        answer: "I'd love to assist you! Futora Group is an AI-first conglomerate operating proprietary platforms (FutoraPay, FutoraOne, Futora AI, FutoraLift, FutoraFlow, Career OS) and delivering 9 domains of enterprise Growth & Technology Services. How can I help you explore further?",
        links: [
            { label: 'Explore Products', url: '/companies' },
            { label: 'View Services', url: '/services' },
            { label: 'Contact Us', url: '/contact' }
        ],
        suggestions: DEFAULT_SUGGESTIONS
    };
}
