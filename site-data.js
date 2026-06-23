window.portfolioData = {
  profile: {
    name: "Ahmet Işık",
    kicker: "Software Development Engineer at AWS",
    headline: "Building reliable cloud products across services, UI, and infrastructure.",
    location: "Berlin, Germany",
    summary:
      "At AWS in Berlin, I work on Amazon Connect scheduling and workforce management. My work spans service APIs, frontend workflows, infrastructure, permissions, observability, and rollout readiness, with a focus on dependable product behavior at cloud scale.",
    avatar: "https://avatars.githubusercontent.com/u/48672998?v=4",
    current: "AWS - Amazon Connect",
    focus: "Full-stack & cloud engineering",
    education: "M.Sc. Informatics @ TUM",
    contactNote:
      "Open to engineering conversations about cloud products, developer platforms, full-stack systems, and frontend architecture.",
    highlights: ["Amazon Connect", "AWS cloud engineering", "Full-stack product ownership"],
  },
  links: {
    email: "mailto:ahmet.isk13@outlook.com",
    github: "https://github.com/AhmetIsk",
    linkedin: "https://www.linkedin.com/in/ahmet-isik/",
    resume: "resume.pdf",
  },
  github: {
    username: "AhmetIsk",
    publicRepos: 21,
    followers: 21,
    following: 20,
    profileUpdated: "2026-06-22",
    repositoriesUrl: "https://github.com/AhmetIsk?tab=repositories",
  },
  about: [
    {
      title: "Engineering focus",
      body:
        "I work on customer-facing cloud features that require backend design, frontend integration, infrastructure changes, permission modeling, rollout planning, and production observability.",
    },
    {
      title: "Operating style",
      body:
        "I prefer clear contracts, measurable behavior, and pragmatic ownership. Strong delivery means the feature works in the UI, behaves correctly in services, passes launch gates, can be monitored, and is safe to operate.",
    },
  ],
  projects: [
    {
      title: "Amazon Connect scheduling and leave management",
      eyebrow: "Professional work",
      featured: true,
      description:
        "End-to-end engineering for Amazon Connect workforce management, focused on schedule editing workflows, leave-management visibility, permissions integration, feature rollout, and production readiness.",
      tech: ["Java", "Kotlin", "TypeScript", "React", "AWS CDK", "DynamoDB", "CloudWatch"],
      highlights: [
        "Owned backend service, web middleware, and frontend changes across multiple packages for a production scheduling milestone",
        "Unblocked a cross-team permission dependency and shipped through feature-flag-controlled rollout",
        "Drove launch-readiness work including design review, security engagement, penetration-test coordination, operational readiness review, launch metrics, and runbook documentation",
      ],
      icon: "assets/logos/aws.svg",
      logoStyle: "brand",
      github: "",
      demo: "",
    },
    {
      title: "Kertos Trust Center access workflow",
      eyebrow: "Professional work",
      description:
        "End-to-end access request and approval workflow for a public-facing compliance Trust Center, covering external requests, admin review, email notifications, and secure time-limited document access.",
      tech: ["Django", "React", "TypeScript", "PostgreSQL", "Email workflows", "Access control"],
      highlights: [
        "Built token-based access links with 72-hour expiration and audit-friendly request handling",
        "Delivered the launch-critical admin and external user flows while the original feature owner was unavailable",
        "Launched on time with zero downtime and supported 130+ document requests in the first week",
      ],
      icon: "assets/logos/kertos.svg",
      logoStyle: "brand",
      github: "",
      demo: "https://trust.kertos.io/",
      meta: "Compliance platform",
    },
    {
      title: "Trendyol Pandora developer platform",
      eyebrow: "Professional work",
      description:
        "Internal developer-platform work across service catalog, cost metrics, team hierarchy, documentation, and plugin scaffolding for a large engineering organization.",
      tech: ["Go", "Node.js", "React", "Next.js", "Elasticsearch", "Kafka", "CI/CD"],
      highlights: [
        "Reduced a cost metrics dashboard load from 15.3s to under 900ms through API gateway caching and proactive cache refresh",
        "Cut plugin setup from 25-30 minutes to under 3 minutes with Go-based CLI scaffolding adopted by 18 teams",
        "Built validation and backend aggregation patterns that reduced redundant calls and prevented indexing issues before production impact",
      ],
      icon: "assets/logos/trendyol.svg",
      logoStyle: "brand",
      github: "",
      demo: "",
      meta: "Internal developer portal",
    },
    {
      title: "CineScout",
      eyebrow: "Live product demo",
      description:
        "A responsive movie and TV series discovery application built with a typed React stack, centralized state management, search/filter flows, detail pages, and episode browsing.",
      tech: ["React", "TypeScript", "Redux Toolkit", "Material UI", "Axios", "Vercel"],
      highlights: [
        "Searches movies and TV shows through the OMDb API",
        "Supports filtering by media type and year",
        "Includes detail views, TV season/episode browsing, and light/dark theme switching",
      ],
      icon: "assets/icons/github.svg",
      github: "https://github.com/AhmetIsk/cinescout-app",
      demo: "https://cinescout-wine.vercel.app/",
      meta: "Public source and live demo",
    },
    {
      title: "GitHub Catalog",
      eyebrow: "Public web app",
      description:
        "A GitHub repository explorer with user search, repository filtering, pagination, multilingual UI, Storybook component coverage, and end-to-end testing.",
      tech: ["TypeScript", "React", "Apollo Client", "Material UI", "React Intl", "Playwright"],
      highlights: [
        "Uses GitHub GraphQL API for repository data",
        "Supports search, language filtering, fork toggles, and pagination",
        "Includes Storybook and Cucumber/Playwright test coverage",
      ],
      icon: "assets/icons/github.svg",
      github: "https://github.com/AhmetIsk/Github-Catalog",
      demo: "https://github-explorer-nine-gamma.vercel.app/",
      meta: "Public demo",
    },
    {
      title: "Electric Vehicle Data Grid",
      eyebrow: "Public frontend project",
      description:
        "A TypeScript React application demonstrating operational data-table workflows with AG Grid, server-side pagination, filtering, sorting, detail views, and error logging.",
      tech: ["React", "TypeScript", "AG Grid", "Material UI", "Axios", "MongoDB"],
      highlights: [
        "Implements server-side pagination, filtering, and sorting",
        "Includes CRUD-oriented detail and delete flows",
        "Adds database-backed error tracking and monitoring endpoints",
      ],
      icon: "assets/icons/github.svg",
      github: "https://github.com/AhmetIsk/generic-datagrid-app",
      demo: "",
      meta: "Public source",
    },
    {
      title: "Decision Tracker",
      eyebrow: "Public GitHub repo",
      description:
        "A lightweight Python tool for recording engineering decisions and publishing a static report, designed for project traceability without adding process overhead.",
      tech: ["Python", "CLI", "Static reporting", "GitHub Pages"],
      highlights: [
        "Captures decisions in a simple local workflow",
        "Builds a static HTML report",
        "Fits small projects and personal engineering logs",
      ],
      icon: "assets/icons/github.svg",
      github: "https://github.com/AhmetIsk/decision-tracker",
      demo: "https://ahmetisk.github.io/decision-tracker/",
      meta: "Updated Jun 2026",
    },
    {
      title: "ShopCart",
      eyebrow: "Senior project",
      description:
        "A mobile shopping-list and price-comparison application from the Bilkent senior project, combining image, barcode, and voice input concepts with mobile frontend and backend services.",
      tech: ["JavaScript", "Django", "React Native", "AWS", "MIT License"],
      highlights: [
        "Creates shopping lists from image, barcode, and voice input concepts",
        "Combines mobile frontend and backend services",
        "Represents a larger team project with product and engineering scope",
      ],
      icon: "assets/logos/bilkent.svg",
      logoStyle: "brand",
      github: "https://github.com/AhmetIsk/CS-Senior-Project---ShopCart",
      demo: "https://ahmetisk.github.io/CS-Senior-Project---ShopCart/Website/",
      meta: "Bilkent CS",
    },
    {
      title: "JotForum",
      eyebrow: "Published package",
      description:
        "A forum package that lets websites host comment discussions without running a separate database, using Jotform forms as the persistence layer.",
      tech: ["JavaScript", "npm", "Forms", "Rollup", "ISC License"],
      highlights: [
        "Published as an npm package",
        "Built during Jotform internship work",
        "Turns form submissions into a lightweight comment system",
      ],
      icon: "assets/logos/jotform.svg",
      logoStyle: "brand",
      github: "https://github.com/AhmetIsk/JotForum",
      demo: "https://www.npmjs.com/package/jotforum",
      meta: "npm package",
    },
    {
      title: "Painting Portfolio",
      eyebrow: "Creative work",
      description:
        "A deployed gallery for personal paintings, presented as a standalone creative portfolio alongside engineering work.",
      tech: ["HTML", "CSS", "Bootstrap", "GitHub Pages"],
      highlights: [
        "Organizes oil and acrylic painting collections",
        "Built as a standalone static website",
        "Deployed publicly with GitHub Pages",
      ],
      icon: "assets/icons/github.svg",
      github: "https://github.com/AhmetIsk/Personal-Website",
      demo: "https://ahmetisk.github.io/Personal-Website/",
      meta: "Art gallery",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "Next.js", "HTML", "CSS", "Accessibility"],
    },
    {
      category: "Backend",
      items: ["Java", "Python", "Django", "Node.js", "Go", "REST APIs", "GraphQL"],
    },
    {
      category: "Cloud and data",
      items: ["AWS CDK", "Lambda", "DynamoDB", "SQS", "SNS", "S3", "CloudWatch"],
    },
    {
      category: "Engineering practice",
      items: ["API design", "CI/CD", "Testing", "Observability", "Security reviews", "Documentation"],
    },
  ],
  experience: [
    {
      role: "Software Development Engineer",
      organization: "Amazon Web Services - Amazon Connect",
      period: "Aug 2025 - Present",
      description:
        "Builds workforce-management and leave-management features for Amazon Connect scheduling. Work spans low-level design, backend service changes, web middleware, React UI integration, permission-service integration, feature-flag rollout, metrics, security review, penetration-test coordination, operational readiness review, and production readiness.",
      icon: "assets/logos/aws.svg",
      logoStyle: "brand",
    },
    {
      role: "Software Engineer - Working Student",
      organization: "Kertos",
      period: "Nov 2023 - Jul 2025",
      description:
        "Built compliance-platform features with Django, React, TypeScript, and PostgreSQL. Owned Trust Center access workflows, admin review tooling, secure 72-hour document access links, audit-friendly request handling, API development, filtering, background jobs, tests, and CI improvements.",
      icon: "assets/logos/kertos.svg",
      logoStyle: "brand",
    },
    {
      role: "Software Developer - Praktikum",
      organization: ".msg",
      period: "Dec 2024 - Feb 2025",
      description:
        "Co-developed a purchase requisition application with SAP Fiori Elements and SAP BTP in an agile team, contributing to enterprise workflow UI, data modeling, and system integration work.",
      icon: "assets/logos/msg.svg",
      logoStyle: "brand",
    },
    {
      role: "Associate Software Engineer",
      organization: "Trendyol",
      period: "May 2022 - Oct 2023",
      description:
        "Worked on Pandora, Trendyol's internal developer platform. Improved service catalog performance, reduced a cost metrics dashboard from 15.3s to under 900ms, built Go-based plugin scaffolding that cut setup from 25-30 minutes to under 3 minutes, and contributed to team hierarchy integrations, CI validation, and developer onboarding workflows.",
      icon: "assets/logos/trendyol.svg",
      logoStyle: "brand",
    },
    {
      role: "Software Engineer - Working Student",
      organization: "Jotform",
      period: "Sep 2021 - May 2022",
      description:
        "Contributed to a large-scale React product codebase, focusing on accessibility, UI performance, reusable frontend patterns, and product features. Also built JotForum, an npm-published forum package that uses Jotform forms as a lightweight persistence layer.",
      icon: "assets/logos/jotform.svg",
      logoStyle: "brand",
    },
    {
      role: "M.Sc. Informatics",
      organization: "Technical University of Munich",
      period: "Munich, Germany",
      description:
        "Graduate studies in Informatics with a major in Engineering Software-intensive Systems and minors in Databases and Information Systems (DBI) and Scientific Computing and High Performance Computing (HPC).",
      icon: "assets/logos/tum.svg",
      logoStyle: "brand",
    },
    {
      role: "B.Sc. Computer Science",
      organization: "Bilkent University",
      period: "Ankara, Turkey",
      description:
        "Undergraduate studies in Computer Science with a Comprehensive Scholarship. Ranked 859th among 2,265,895 candidates in the university entrance exam and completed software engineering, databases, algorithms, mobile, and full-stack project work.",
      icon: "assets/logos/bilkent.svg",
      logoStyle: "brand",
    },
  ],
};
