/**
 * Portfolio Data - Edit this file to update content site-wide
 * No need to touch HTML or other JS files
 */

window.PORTFOLIO_DATA = {
  basics: {
    name: "Saurabh Verma",
    title: "Software Engineer & Product Builder",
    tagline: "I build software that solves real problems.",
    about: [
      "I'm a software engineer with 5+ years of enterprise experience and a passion for building products that people actually use. My day job is at Tata Consultancy Services, where I architect high-throughput APIs, lead DevOps on OpenShift, and ship code that serves millions of requests.",
      "Outside of TCS, I run Verma Software - a family venture with my father. He handles desktop applications and client relationships while I build web apps, mobile apps, and SaaS products. It's a split that lets us cover the full spectrum of software development.",
      "I graduated from Government Engineering College, Modasa with a 9.23 CGPA in Computer Engineering and hold a Microsoft Azure Fundamentals certification. I also leverage modern AI tooling - agents, agentic workflows, and AI-assisted development - to move faster and ship better code."
    ],
    resumeUrl: "/resume.pdf",
    email: "saurabhshalu@gmail.com",
    phone: "+91-8238378122",
    location: "Gandhinagar, Gujarat",
    avatar: "https://avatars.githubusercontent.com/u/32974995?v=4"
  },

  social: [
    { label: "GitHub", url: "https://github.com/saurabhshalu", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/saurabhshalu", icon: "linkedin" },
    { label: "Twitter", url: "https://twitter.com/saurabh_shalu", icon: "twitter" },
    { label: "Instagram", url: "https://instagram.com/saurabh_shalu", icon: "instagram" },
    { label: "Email", url: "mailto:saurabhshalu@gmail.com", icon: "email" }
  ],

  experience: [
    {
      role: "IT Analyst",
      company: "Tata Consultancy Services",
      type: "Full-time",
      location: "Gandhinagar, Gujarat",
      period: "February 2024 - Present",
      current: true,
      points: [
        "Lead DevOps and deployment for multiple client-facing applications on RedHat OpenShift, including VM- and pod-based deployments, DB patching, and versioned releases.",
        "Architected QueryXpress and Auth-Core, enabling high-throughput secure APIs and unified authentication across 20+ applications.",
        "Standardized CI/CD, Trivy vulnerability scanning, and SonarQube code quality checks, improving release reliability by 40%."
      ]
    },
    {
      role: "System Engineer",
      company: "Tata Consultancy Services",
      type: "Full-time",
      location: "Gandhinagar, Gujarat",
      period: "April 2021 - January 2024",
      current: false,
      points: [
        "Developed CRMS portal for a leading ISP, managing production servers, DR, and VM-based deployments with Galera cluster and MaxScale for HA databases.",
        "Led UI/frontend logic for Dealer & Voucher Management Systems (team of 10) and actively developed CMS (team of 4), delivering all projects in parallel.",
        "Mentored junior developers and resolved a critical privilege escalation vulnerability, securing applications from unauthorized access."
      ]
    },
    {
      role: "Assistant System Engineer - Trainee",
      company: "Tata Consultancy Services",
      type: "Full-time",
      location: "Gandhinagar, Gujarat",
      period: "September 2020 - March 2021",
      current: false,
      points: [
        "Developed an automated project audit web app, reducing audit time by 60% and improving accuracy by 75%.",
        "Integrated frontend with CAS Server for single sign-on authentication and authorization."
      ]
    },
    {
      role: "Co-Builder",
      company: "Verma Software",
      type: "Family Venture",
      location: "Gandhinagar, Gujarat",
      period: "2016 - Present",
      current: true,
      points: [
        "Family software venture with my father. I handle web, mobile, and SaaS products including AyuSense, Gariva, and meetIO.",
        "My father leads desktop application development (payroll, fee management, cheque printing) and client marketing.",
        "Built and deployed e-commerce platforms with integrated payment gateways, inventory management, and real-time features."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology - Computer Engineering",
      school: "Government Engineering College, Modasa",
      grade: "9.23 CGPA",
      period: "June 2016 - August 2020"
    }
  ],

  certifications: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      period: "Certification"
    }
  ],

  awards: [
    {
      title: "Best Team Award",
      issuer: "Tata Consultancy Services"
    },
    {
      title: "Contextual Master",
      issuer: "Tata Consultancy Services"
    }
  ],

  skills: [
    {
      category: "Frontend",
      tags: ["React.js", "Redux", "Tailwind CSS", "Material UI", "Next.js", "TypeScript"]
    },
    {
      category: "Backend",
      tags: ["Node.js", "Express.js", "Spring Boot", "Java", "Python", "REST APIs"]
    },
    {
      category: "DevOps & Cloud",
      tags: ["Docker", "Kubernetes/OpenShift", "GitLab CI/CD", "Azure DevOps", "SonarQube", "Nginx", "Linux"]
    },
    {
      category: "Database & Auth",
      tags: ["MariaDB", "MongoDB", "Redis", "Keycloak", "KrakenD", "Firebase"]
    },
    {
      category: "Mobile & Desktop",
      tags: ["Flutter", "React Native", "Dart", "VB.Net", "SQLite"]
    },
    {
      category: "Tools & AI",
      tags: ["Git", "GitLab", "Figma", "Adobe XD", "AI Agents", "Agentic Workflows"]
    }
  ],

  featuredProjects: [
    {
      name: "AyuSense",
      url: "https://ayusense.skverma.in",
      description: "A privacy-first family health records app built with Flutter. Features on-device OCR for scanning blood tests, medicine tracking, vitals logging, and encrypted local storage - your data never leaves your device.",
      tags: ["Flutter", "Dart", "SQLite", "OCR", "Encryption"],
      color: "#0ea5e9"
    },
    {
      name: "Gariva",
      url: "https://gariva.skverma.in",
      description: "A garage management platform that simplifies vehicle tracking, service scheduling, and inventory management. Built with a modern full-stack architecture for real-time updates and seamless workflows.",
      tags: ["React", "Node.js", "MongoDB", "WebSockets"],
      color: "#10b981"
    },
    {
      name: "meetIO",
      url: "https://meet.skverma.in",
      description: "A real-time video conferencing platform powered by WebRTC. Supports multi-user rooms, screen sharing, and secure peer-to-peer connections for seamless remote collaboration.",
      tags: ["WebRTC", "React", "Node.js", "Socket.io"],
      color: "#8b5cf6"
    },
    {
      name: "Surabhi Art Gallery",
      url: "https://art.skverma.in",
      description: "A full-stack e-commerce platform for art sales, featuring integrated payment gateway (Razorpay), stock management, email notifications, delivery tracking, and an admin dashboard for order management.",
      tags: ["MERN Stack", "Razorpay", "Redux", "Firebase"],
      color: "#f59e0b"
    },
    {
      name: "GoogleThat4U",
      url: "https://googlethat4u.skverma.in",
      description: 'A fun "Let Me Google That For You" clone. Drop a lazy search query and get a shareable animated link that types out the search for the recipient. Built as a weekend project to sharpen React skills.',
      tags: ["React", "Animation", "Netlify"],
      color: "#ef4444"
    },
    {
      name: "Bingo Extended",
      url: "https://bingo.skverma.in",
      description: "A real-time multiplayer Bingo game with live lobbies, chat, and scoring. Built with WebSockets for instant state synchronization across all connected players. Optimized for both desktop and mobile browsers.",
      tags: ["React", "Node.js", "WebSockets", "Redis"],
      color: "#ec4899"
    }
  ],

  otherProjects: [
    {
      name: "URL Shortener",
      url: "https://url.skverma.in",
      description: "A minimal URL shortener with click analytics, built with Angular and Netlify Functions.",
      tags: "Angular - Netlify Functions"
    },
    {
      name: "YAT - Yet Another Tutorial",
      url: "https://yatutorial.skverma.in",
      description: "A tutorial publishing platform where users can create and share programming tutorials.",
      tags: "Next.js - Firebase"
    },
    {
      name: "College Fee Management",
      url: null,
      description: "Windows desktop application for universities to track student records and due payments.",
      tags: "VB.Net - SQL Server - Crystal Reports"
    },
    {
      name: "Payroll Management",
      url: null,
      description: "Desktop payroll solution for SMEs - employee data, payment slips, tax reports, exports.",
      tags: "VB.Net - SQL Server - Crystal Reports"
    },
    {
      name: "Cheque Prints",
      url: null,
      description: "Automated cheque printing software supporting layouts of almost every major bank.",
      tags: "VB.Net - Print Dialog APIs"
    },
    {
      name: "Envelope Prints",
      url: null,
      description: "Desktop utility for printing personalized envelopes in bulk for business correspondence.",
      tags: "VB.Net - Print Dialog APIs"
    }
  ]
};

/* This file is loaded before script.js. All content is injected from here. */
