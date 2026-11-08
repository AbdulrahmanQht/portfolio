export type Locale = 'en' | 'ar';

export const profile = {
  name: 'Abdulrahman Ahmed Alqahtani',
  shortName: 'Abdulrahman Alqahtani',
  role: 'Full-Stack & AI/ML Developer',
  location: 'Dammam, Saudi Arabia',
  email: 'abdulrahmanqht@gmail.com',
  github: 'https://github.com/AbdulrahmanQht',
  linkedin: 'https://linkedin.com/in/abdulrahmanqht',
  cv: '/Abdulrahman_Alqahtani CV.pdf'
};

export const skills = {
  'Programming Languages': ['Python', 'Java', 'C++', 'C#', 'JavaScript', 'TypeScript', 'SQL'],
  'Web & Full-Stack': ['React (TypeScript)', 'Vue.js 3', 'Angular', 'Spring Boot', 'FastAPI', 'ASP.NET MVC 5', 'Vite', 'Bun', 'RabbitMQ', 'TanStack Query', 'Tailwind', 'PrimeVue', 'Bootstrap', 'RESTful API', 'Microservices Architecture', 'HTML', 'CSS'],
  'AI / Machine Learning': ['PyTorch', 'CrewAI', 'Pydantic', 'YOLOv11', 'ResNet50', 'PennyLane', 'Scikit-Learn', 'Pandas', 'NumPy', 'XGBoost', 'LightGBM', 'OpenCV'],
  'Tools & Security': ['Git', 'GitHub', 'Docker', 'Linux', 'Spring Security', 'JWT', 'OAuth2', 'Flyway', 'JUnit', 'Mockito', 'Testcontainers', 'Dapper ORM', 'MiniProfiler', 'OpenTelemetry', 'Jaeger', 'Cloudflare Tunnels', 'BCrypt', 'RBAC', 'Rate Limiting', 'N-tier Architecture', 'Caching', 'Logging']
};

export const experience = {
  title: 'Full-Stack Lead Developer (COOP)',
  organization: 'Strategic Planning Office - Vice Presidency for Academic Affairs (VPAA), IAU',
  period: 'June 2025 - August 2025',
  bullets: [
    'Architected a scalable N-tier web platform using ASP.NET MVC 5, Dapper ORM, server-side caching, and Oracle DB.',
    'Designed role-based access control with scoped data access and a bilingual Arabic/English UI with ApexCharts dashboards.',
    'Automated academic process workflows using Oracle DBMS_SCHEDULER.',
    'Identified and resolved compute bottlenecks via MiniProfiler profiling.',
    'Led the full SDLC, including architecture design, implementation, code reviews, and Git-based version control.'
  ],
  link: 'https://github.com/AbdulrahmanQht/VPAA-Gate'
};

export const experienceAr = {
  title: 'قائد تطوير Full-Stack (تدريب تعاوني)',
  organization: 'مكتب التخطيط الاستراتيجي - وكالة الجامعة للشؤون الأكاديمية (VPAA)، IAU',
  period: 'يونيو 2025 - أغسطس 2025',
  bullets: [
    'صممت بنية ويب قابلة للتوسع متعددة الطبقات باستخدام ASP.NET MVC 5 وDapper ORM والتخزين المؤقت على الخادم وOracle DB.',
    'صممت تحكماً في الوصول قائماً على الأدوار مع نطاقات وصول محددة وواجهة ثنائية اللغة ولوحات ApexCharts.',
    'أتمت إجراءات الشؤون الأكاديمية باستخدام Oracle DBMS_SCHEDULER.',
    'حددت اختناقات الأداء وعالجتها باستخدام MiniProfiler.',
    'قدت دورة حياة تطوير البرمجيات كاملة، بما في ذلك التصميم والتنفيذ ومراجعات الشيفرة والتحكم في الإصدارات باستخدام Git.'
  ]
};

export const skillGroupLabels = {
  'Programming Languages': 'لغات البرمجة',
  'Web & Full-Stack': 'الويب وFull-Stack',
  'AI / Machine Learning': 'الذكاء الاصطناعي والتعلم الآلي',
  'Tools & Security': 'الأدوات والأمان'
} as const;

export type Project = { slug: string; title: string; eyebrow: string; description: string; stack: string[]; repo: string; featured?: boolean; demo?: string; result?: string; sections?: { label: string; text: string }[] };

export const projects: Project[] = [
  { slug: 'tracepilot-ai', title: 'TracePilot AI', eyebrow: 'Featured / multi-agent systems', description: 'A multi-agent platform that audits coding-agent execution traces using blind outcome verification and stateful reliability tracking.', stack: ['Spring Boot', 'FastAPI', 'CrewAI', 'React', 'RabbitMQ', 'PostgreSQL'], repo: 'https://github.com/AbdulrahmanQht/TracePilot-Ai', featured: true, sections: [{ label: 'Problem', text: 'Developers need evidence that a coding agent’s completion claim matches what actually happened in its trace.' }, { label: 'Architecture', text: 'A React frontend submits traces to a Spring Boot orchestrator, which persists and dispatches jobs through RabbitMQ to a FastAPI/CrewAI worker. PostgreSQL stores audits and Jaeger receives distributed traces.' }, { label: 'Role', text: 'Architected the polyglot microservices platform, the asynchronous audit pipeline, reliability reports, observability, and the React dashboard.' }, { label: 'Evidence', text: 'The project includes blind-verifier prompt isolation tests, asynchronous multi-agent audits, stateful reliability reports, distributed tracing, and shareable audit output.' }] },
  { slug: 'quantum-hybrid-defect-detector', title: 'Quantum-Hybrid Defect Detector', eyebrow: 'Featured / graduation project', description: 'A full-stack industrial defect-classification application comparing classical CNN and hybrid quantum-classical inference paths.', stack: ['PyTorch', 'PennyLane', 'FastAPI', 'Vue 3', 'PrimeVue', 'Tailwind'], repo: 'https://github.com/AbdulrahmanQht/Quantum-Hybrid-Defect-Detector', featured: true, result: 'On 2,833 test images, QNN_GPU led with 95.59% accuracy and 95.67% macro F1, versus CNN at 93.47% and 93.70%.', sections: [{ label: 'Problem', text: 'Industrial defect classification needs a consistent way to compare classical and hybrid quantum-classical inference under clean and noisy inputs.' }, { label: 'Architecture', text: 'Vue 3 frontend with bilingual UI and dashboards calls a FastAPI backend. The backend loads CNN, QNN_CPU, and CUDA-conditional QNN_GPU models and exposes classification, benchmark, and quantum-advantage routes.' }, { label: 'Role', text: 'Programming lead for the hybrid-fusion system, stateless backend, model warm-up, rate limiting, secure headers, and Vue SPA.' }, { label: 'Results', text: 'On 2,833 test images, CNN reached 93.47% accuracy and 93.70% macro F1, QNN_CPU reached 94.88% and 94.99%, and QNN_GPU led with 95.59% and 95.67%.' }] },
  { slug: 'vpaa-gate', title: 'VPAA-Gate', eyebrow: 'Featured / COOP project', description: 'An internal university platform for managing college data with ASP.NET MVC 5, Oracle, Dapper, and an N-tier architecture.', stack: ['ASP.NET MVC 5', 'C#', 'Oracle', 'Dapper', 'RBAC', 'ApexCharts'], repo: 'https://github.com/AbdulrahmanQht/VPAA-Gate', featured: true, sections: [{ label: 'Problem', text: 'Academic-affairs workflows needed a structured internal platform for college data, scoped access, and dashboards.' }, { label: 'Architecture', text: 'The Web layer routes requests to Logic services and DataAccess repositories; shared entities and DTOs live in the Model layer.' }, { label: 'Role', text: 'Led architecture, implementation, access control, bilingual UI, workflow automation, profiling, code reviews, and version control during the COOP placement.' }, { label: 'Evidence', text: 'The implementation delivered an ASP.NET MVC 5 platform with scoped RBAC, a bilingual UI, Oracle DBMS_SCHEDULER workflows, MiniProfiler profiling, and ApexCharts dashboards during the COOP project.' }] },
  { slug: 'brain-tumor-detection-pipeline', title: 'Brain Tumor Detection Pipeline', eyebrow: 'Case file', description: 'A decoupled MRI pipeline using YOLOv11 with CBAM for localization and transfer-learning classifiers for ROI diagnosis.', stack: ['YOLOv11', 'CBAM', 'ResNet50', 'MobileNetV2', 'Optuna'], repo: 'https://github.com/AbdulrahmanQht/brain-tumor-detection-pipeline', result: 'README: YOLO peak mAP@0.5 0.9341; MobileNetV2 test accuracy 86.5%; test macro F1 0.8681.' },
  { slug: 'financial-fraud-detection', title: 'Financial Fraud Detection', eyebrow: 'Case file', description: 'A comparative study of fraud classifiers on highly imbalanced transactions, optimizing F2-score to reduce missed fraud.', stack: ['Python', 'Scikit-Learn', 'XGBoost', 'LightGBM', 'Pandas'], repo: 'https://github.com/AbdulrahmanQht/Financial-Fraud-Detection' },
  { slug: 'parallel-a-star', title: 'Parallel A*', eyebrow: 'Case file', description: 'A benchmark of sequential and parallel A* pathfinding using multiprocessing strategies for different workload shapes.', stack: ['Python', 'multiprocessing', 'NumPy', 'Matplotlib'], repo: 'https://github.com/AbdulrahmanQht/parallel-a-star' },
  { slug: 'plant-disease', title: 'Plant-Disease', eyebrow: 'Case file', description: 'A classical computer-vision pipeline for plant-disease symptoms using color, texture, segmentation, and morphology.', stack: ['Python', 'OpenCV', 'Scikit-Image', 'SciPy', 'Pandas'], repo: 'https://github.com/AbdulrahmanQht/Plant-Disease' },
  { slug: 'library-management-system', title: 'Library Management System', eyebrow: 'Case file', description: 'A course project comparing a FastAPI/Vue/PostgreSQL web implementation with a procedural C console implementation.', stack: ['FastAPI', 'Vue 3', 'PostgreSQL', 'C'], repo: 'https://github.com/AbdulrahmanQht/Library-Management-System' }
];

export const copy = {
  en: { nav: { profile: 'Profile', skills: 'Skills', projects: 'Projects', experience: 'Experience', contact: 'Contact' }, summary: 'Full-Stack & AI/ML Developer specializing in the end-to-end deployment of scalable web applications and complex deep learning solutions.', intro: 'I build dependable software at the intersection of product engineering, distributed systems, and applied machine learning.', download: 'Download CV', viewCase: 'Open case file', viewRepo: 'Repository', liveDemo: 'Live demo', labels: { profile: 'Profile', skills: 'Technical skills', projects: 'Project files', experience: 'Experience & education', contact: 'Open a line', education: 'Education', location: 'Location', email: 'Email' }, locationText: 'Dammam, Saudi Arabia', education: 'Bachelor of Science in Computer Science · Imam Abdulrahman Bin Faisal University (IAU) · Second-Class Honors · GPA: 4.44/5.00', contactText: 'For thoughtful technical conversations, reach me through email, LinkedIn, or GitHub.' },
  ar: { nav: { profile: 'الملف الشخصي', skills: 'المهارات', projects: 'المشاريع', experience: 'الخبرة', contact: 'تواصل' }, summary: 'مطور Full-Stack وAI/ML متخصص في النشر الشامل لتطبيقات الويب القابلة للتوسع وحلول التعلم العميق.', intro: 'أبني برمجيات موثوقة عند تقاطع هندسة المنتجات والأنظمة الموزعة والتعلم الآلي التطبيقي.', download: 'تحميل السيرة الذاتية', viewCase: 'فتح ملف المشروع', viewRepo: 'المستودع', liveDemo: 'نسخة تجريبية', labels: { profile: 'الملف الشخصي', skills: 'المهارات التقنية', projects: 'ملفات المشاريع', experience: 'الخبرة والتعليم', contact: 'تواصل معي', education: 'التعليم', location: 'الموقع', email: 'البريد الإلكتروني' }, locationText: 'الدمام، المملكة العربية السعودية', education: 'بكالوريوس علوم الحاسب · Imam Abdulrahman Bin Faisal University (IAU) · مرتبة الشرف الثانية · المعدل: 4.44/5.00', contactText: 'للتواصل التقني، يمكن مراسلتي عبر البريد الإلكتروني أو LinkedIn أو GitHub.' }
};
