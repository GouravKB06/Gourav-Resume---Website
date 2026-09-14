// ============================================================
// RESUME DATA — Single Source of Truth
// All content pulled from Gourav Kesarla B's resume
// ============================================================

export const resumeData = {
  personal: {
    name: 'Gourav Kesarla B',
    nameShort: 'Gourav KB',
    title: 'Information Science Engineer',
    subtitle: 'Backend Developer & Cloud Enthusiast',
    tagline: 'Building production-quality systems with Java, Spring Boot, and an eye on the cloud.',
    email: 'gouravkb06@gmail.com',
    phone: '+91 74838 90391',
    location: 'Uttarahalli, Bengaluru – 560061, Karnataka, India',
    github: 'https://github.com/GouravKB06',
    linkedin: 'https://linkedin.com/in/gouravkb06',
    githubUsername: 'GouravKB06',
    linkedinUsername: 'gouravkb06',
  },

  objective: `Motivated second-year Information Science & Engineering student with hands-on full-stack development experience and a strong interest in cloud computing. Building production-style applications while actively exploring AWS cloud fundamentals and backend engineering best practices.`,

  education: [
    {
      institution: 'JSS Academy of Technology, Bengaluru',
      location: 'Bengaluru, Karnataka',
      degree: 'B.E./B.Tech in Information Science and Engineering',
      graduation: '2028',
      cgpa: '9.27',
      cgpaNotes: 'Average of first 3 semesters',
    },
    {
      institution: '12th Standard',
      board: 'State Board',
      percentage: '91%',
    },
    {
      institution: '10th Standard',
      board: 'CBSE',
      percentage: '81%',
    },
  ],

  projects: [
    {
      id: 'meditrack',
      title: 'MediTrack',
      subtitle: 'Medicine Inventory & Expiry Tracking System',
      type: 'Full-Stack Web Application',
      description:
        'A production-quality full-stack web application built for pharmacies, clinics, and home users to track medicine inventory, monitor batch-level expiry dates, and receive automatic alerts before medicines expire.',
      github: 'https://github.com/GouravKB06/MediTrack',
      tech: ['Java 17', 'Spring Boot 3.2', 'Thymeleaf', 'Spring Data JPA', 'Hibernate', 'MySQL 8.0', 'Maven', 'MVC Architecture'],
      highlights: [
        'Built full-stack Spring Boot 3.2 application following MVC architecture (controllers, services, repositories)',
        'Designed fully normalized (3NF) relational database schema with 7 tables including indexes and foreign key constraints',
        'Implemented 5 stored procedures (sp_transfer_stock for atomic batch transfers, cursor-based sp_process_expired_medicines) and 3 MySQL triggers',
        'Developed 4-tier automatic expiry classification: EXPIRED, CRITICAL (≤7 days), WARNING (≤30 days), SAFE — displayed on dashboard',
        'Built complete CRUD with Jakarta Bean Validation, Post/Redirect/Get pattern, flash-message toasts, real-time search, and printable expiry audit report',
        'Automated daily expiry monitoring with Spring @Scheduled cron jobs generating console-logged morning reports',
      ],
      featured: true,
      color: 'accent',
    },
    {
      id: 'kannada-platform',
      title: 'Kannada Rajyotsava Literature Platform',
      subtitle: 'Cultural Literature Discovery Website',
      type: 'Hackathon Project — HACKEEE 4.0',
      description:
        'A website showcasing Kannada poets and literary works, featuring curated content recommendations to help readers discover new poems and authors. Built as a team of 4 during HACKEEE 4.0 hackathon.',
      github: null,
      tech: ['HTML', 'CSS', 'JavaScript', 'UI/UX Design'],
      highlights: [
        'Built a website showcasing Kannada poets and literary works with curated content recommendations',
        'Led branding and logo design for the platform, shaping its visual identity and overall look and feel',
        'Collaborated in a team of 4, handling design and coordination under hackathon time pressure',
      ],
      featured: false,
      color: 'accent-green',
    },
  ],

  skills: {
    languages: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 70 },
      { name: 'C', level: 65 },
      { name: 'SQL', level: 85 },
    ],
    web: [
      { name: 'HTML', level: 80 },
      { name: 'CSS', level: 75 },
      { name: 'JavaScript', level: 55 },
    ],
    frameworks: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Spring Data JPA', level: 80 },
      { name: 'Thymeleaf', level: 75 },
      { name: 'Hibernate', level: 78 },
      { name: 'Maven', level: 72 },
    ],
    databases: [
      { name: 'MySQL', level: 88 },
      { name: 'SQLite', level: 70 },
    ],
    tools: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 82 },
    ],
    exploring: ['AWS Cloud Fundamentals', 'Prompt Engineering', 'Video Editing & Marketing'],
  },

  certifications: [
    {
      title: 'Java Programming Certification',
      issuer: 'Scaler Academy',
      year: null,
    },
  ],

  experience: [
    {
      id: 'navotthana',
      role: 'Hospitality & Logistics Volunteer',
      organization: 'JSS Navotthana — 24-Hour National-Level Hackathon',
      location: 'JSS Academy of Technology, Bengaluru',
      date: 'April 2026',
      type: 'Volunteer',
      scale: '50 teams / ~200 participants',
      associatedWith: ['IEEE IT Society', 'Institution\'s Innovation Council', 'GeeksforGeeks', 'Hack2Skill'],
      organizedBy: 'Department of CSE (AI & ML) in collaboration with Departments of ISE and CSE, JSSATEB',
      highlights: [
        'Supported overnight operations for a 200-participant hackathon',
        'Independently resolved network connectivity and food-coordination issues for a group of 20–25 participants',
        'Demonstrated hands-on problem-solving and event coordination under time pressure',
        'Managed teams across multiple hackathons as a participant, handling task delegation and timelines',
      ],
    },
  ],

  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Kannada', level: 'Fluent' },
    { name: 'Telugu', level: 'Fluent' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Tamil', level: 'Fluent' },
  ],

  interests: [
    'Cloud Computing (AWS)',
    'Backend Engineering',
    'Database Design',
    'AI & Prompt Engineering',
    'Event Coordination',
    'Video Editing & Marketing',
  ],
} as const;

export type ResumeData = typeof resumeData;
export type Project = (typeof resumeData.projects)[number];
export type Experience = (typeof resumeData.experience)[number];
