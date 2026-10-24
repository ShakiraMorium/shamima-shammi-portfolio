export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, accessible, and dynamic user interfaces with clean component architectures.",
    skills: [
      { name: "HTML5", status: "Comfortable using", description: "Semantic markup, accessibility, modern standards" },
      { name: "CSS3", status: "Comfortable using", description: "Flexbox, Grid, keyframe animations, media queries" },
      { name: "JavaScript", status: "Comfortable using", description: "ES6+, DOM manipulation, asynchronous programming, fetch API" },
      { name: "React", status: "Comfortable using", description: "Functional components, hooks (useState, useEffect, useMemo), state flow" },
      { name: "JSX", status: "Comfortable using", description: "Component-driven rendering, conditional logic, props typing" },
      { name: "Responsive Web Design", status: "Comfortable using", description: "Mobile-first layouts, flexible breakpoints, fluid typography" },
      { name: "Tailwind CSS", status: "Currently learning", description: "Utility-first design systems, responsive utilities, dark mode styling" },
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Architecting modular server-side logic, secure RESTful APIs, and database interactions.",
    skills: [
      { name: "Python", status: "Comfortable using", description: "Object-oriented scripting, clean syntax, data manipulation" },
      { name: "Django", status: "Comfortable using", description: "MTV architecture, ORM queries, routing, middleware, admin panel" },
      { name: "Django REST Framework", status: "Comfortable using", description: "Serializers, ViewSets, API views, pagination, permissions" },
      { name: "REST API Development", status: "Comfortable using", description: "HTTP methods, status codes, JSON response standards, CRUD workflows" },
      { name: "Authentication & Authorization", status: "Currently learning", description: "JWT tokens, session-based auth, role-based permission gates" },
    ]
  },
  {
    id: "databases",
    title: "Databases & Data Modeling",
    description: "Designing structured relational schemas and managing data consistency.",
    skills: [
      { name: "PostgreSQL", status: "Comfortable using", description: "Relational tables, foreign keys, indexing, query execution" },
      { name: "SQL", status: "Comfortable using", description: "JOINs, aggregation, filtering, constraints, transactional integrity" },
      { name: "Database Design", status: "Comfortable using", description: "Entity-relationship diagrams, normalization, schema optimization" },
      { name: "MongoDB", status: "Currently learning", description: "Document-oriented schemas, collections, BSON documents, aggregation" },
    ]
  },
  {
    id: "tools",
    title: "Development Tools & Workflow",
    description: "Industry-standard tooling for collaborative version control, debugging, and deployment.",
    skills: [
      { name: "Git", status: "Comfortable using", description: "Branching, merging, commit hygiene, conflict resolution" },
      { name: "GitHub", status: "Comfortable using", description: "Pull requests, code reviews, issue tracking, remote workflows" },
      { name: "Visual Studio Code", status: "Comfortable using", description: "Extensions, linting, integrated terminal, debugging tools" },
      { name: "Swagger / OpenAPI", status: "Currently learning", description: "Interactive API documentation, schema contracts, endpoint testing" },
      { name: "Deployment & Environment Config", status: "Currently learning", description: "Environment variables, production settings, static files, PaaS hosting" },
    ]
  },
  {
    id: "cs",
    title: "Computer Science Fundamentals",
    description: "Algorithmic thinking and programmatic problem solving.",
    skills: [
      { name: "Object-Oriented Programming (OOP)", status: "Comfortable using", description: "Encapsulation, inheritance, polymorphism, modular class architecture" },
      { name: "Data Structures & Algorithms", status: "Currently learning", description: "Arrays, linked lists, stacks, queues, trees, searching & sorting" },
      { name: "C", status: "Comfortable using", description: "Procedural programming, pointers, manual memory concepts, loops" },
      { name: "C++", status: "Comfortable using", description: "Classes, standard template library (STL), algorithmic problem solving" },
    ]
  },
  {
    id: "additional",
    title: "Additional Interests & Growth",
    description: "Forward-looking technical domains and business growth disciplines.",
    skills: [
      { name: "Machine Learning", status: "Exploring", description: "Foundational ML concepts, supervised learning algorithms, Python libraries" },
      { name: "AI-Assisted Development", status: "Exploring", description: "Prompt engineering, modern AI coding agents, workflow acceleration" },
      { name: "Cloud Computing", status: "Exploring", description: "Cloud storage fundamentals, serverless computing, deployment pipelines" },
      { name: "Digital Marketing", status: "Exploring", description: "Acquisition funnels, user personas, brand positioning, audience segmentation" },
      { name: "Meta Ads Manager", status: "Exploring", description: "Campaign structure, targeting criteria, budgeting, conversion tracking principles" },
    ]
  }
];

export const skillStatusLegend = [
  { label: "Comfortable using", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30", description: "Actively applied in built projects and familiar with daily workflows." },
  { label: "Currently learning", color: "bg-sky-500/10 text-sky-400 border-sky-500/30", description: "Actively practicing, expanding conceptual depth, and applying in prototypes." },
  { label: "Exploring", color: "bg-purple-500/10 text-purple-400 border-purple-500/30", description: "Studying foundational concepts and future-focused growth technologies." },
];
