export const projects = [
  {
    id: "movie-theater-platform",
    title: "MovieExplorer — Cinema & TV Discovery Platform",
    subtitle: "A real-time entertainment discovery platform featuring dynamic search, TMDB/OMDb catalog integration, ratings, genre filtering, and modal overviews.",
    category: "Frontend & Entertainment Web App",
    status: "Live on Vercel",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    image: "/assets/project-movie-theater.jpg",
    problem: "Streaming audiences and film enthusiasts face decision fatigue across fragmented catalogs without rapid title search, aggregated ratings, genre tagging, or consolidated trailer and cast summaries.",
    overview: "MovieExplorer is a modern cinema discovery web application built with React, modern JavaScript (ES6+), and Vite, deployed and hosted live on Vercel. It delivers dynamic movie and TV show exploration, debounced title search, genre filters (Action, Drama, Sci-Fi, Comedy, Thriller), IMDB/TMDB rating badges, and rich cinematic modal overviews detailing cast, directors, and runtimes.",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Vite",
      "Tailwind CSS",
      "REST API",
      "Vercel"
    ],
    myContribution: "Architected modular React component hierarchy (SearchHeader, MovieGrid, MovieCard, DetailModal). Integrated external movie REST APIs with debounced search input to minimize network requests. Implemented responsive grid layouts with poster aspect-ratio preservation and custom fallback placeholders. Configured production Vercel deployment with edge CDN caching.",
    githubUrl: "https://github.com/ShakiraMorium",
    demoUrl: "https://movie-theater-umber.vercel.app",
    demoNote: "Live production deployment on Vercel: https://movie-theater-umber.vercel.app (also accessible at https://movie-theater-umber.vercel.com)",
    highlights: [
      "Instant asynchronous movie & TV show search with real-time keyword matching",
      "Multi-genre categorization and discovery (Action, Drama, Sci-Fi, Comedy, Thriller)",
      "Rich media cards featuring IMDB/TMDB ratings, release years, and poster art",
      "Interactive modal view displaying synopsis, director credits, cast, and runtime specifications",
      "Hosted live on Vercel with automated CI/CD and edge CDN optimization"
    ],
    caseStudy: {
      overview: "MovieExplorer is a high-performance web application designed to help cinema enthusiasts discover, evaluate, and track films and television series from international catalogs. It bridges the gap between chaotic multi-source listings and user-friendly discovery with zero latency.",
      problemStatement: "Movie lovers frequently waste time browsing multiple streaming platforms to find basic details like synopsis, genre tags, director credits, and critical ratings. Sluggish search experiences and heavy page reloads exacerbate viewer decision fatigue.",
      projectObjectives: [
        "Deliver a fast, responsive Single Page Application for instant movie & TV discovery.",
        "Implement live search with input debouncing to prevent excessive API requests.",
        "Provide a clean, dark-mode cinematic interface with high-contrast typography.",
        "Deploy to a global production edge environment on Vercel with zero cold-starts."
      ],
      userRequirements: [
        "Users can type any title in the search input and receive immediate matching results.",
        "Users can filter listings by popular genres (Action, Drama, Sci-Fi, Comedy, Horror).",
        "Users can click any movie card to inspect a detailed modal with plot, cast, and rating.",
        "Users on mobile and tablet devices experience identical smooth fluid navigation."
      ],
      technicalArchitecture: "Built as a modern Single Page Application powered by Vite and React 19. The presentation layer uses responsive Tailwind CSS utility classes and modern flexbox/CSS grid. Network requests are handled asynchronously via the Fetch API with custom hook abstraction for caching and error recovery.",
      frontendImplementation: "Structured with functional components and React hooks (useState, useEffect, useMemo, useCallback). Implemented a custom useDebounce hook (350ms delay) for search queries, preventing rate-limiting on external API tiers. Handled loading skeleton states and broken image fallbacks gracefully.",
      backendImplementation: "Consumes RESTful movie metadata APIs (TMDB / OMDb) with client-side error normalization. Configured Vercel rewrites to handle SPA client-side routing smoothly without 404 errors on deep linking.",
      databaseStructure: "Client-side normalized data structures:\n- MovieItem (id, title, poster_path, backdrop_path, release_date, vote_average, overview, genre_ids)\n- MovieDetail (id, title, tagline, runtime, genres, credits [directors, cast], production_companies, imdb_id)\n- GenreList (id, name, slug)",
      apiDesign: "REST API integration endpoints:\n- GET /search/movie?query={keyword}&page={page} (Asynchronous search query)\n- GET /movie/{id}?append_to_response=credits (Detailed entity payload)\n- GET /genre/movie/list (Genre metadata taxonomy)",
      challenges: [
        "Eliminating excessive API requests while users rapidly type search terms.",
        "Handling missing or broken poster image URLs from third-party CDNs.",
        "Preserving modal focus and smooth backdrop scroll-lock on mobile devices."
      ],
      solutions: [
        "Implemented custom useDebounce hook that cancels pending network calls until typing settles.",
        "Created an inline SVG placeholder fallback rendered automatically on img onError events.",
        "Managed document body overflow state dynamically and trapped keyboard focus inside the movie modal."
      ],
      security: [
        "API key abstraction via Vite environment variables (.env) to prevent credential leakage.",
        "HTML entity escaping and sanitization on search queries to eliminate XSS vectors.",
        "Configured secure HTTP headers (Content-Security-Policy, X-Frame-Options) on Vercel edge deployment."
      ],
      testingApproach: "Cross-device responsiveness verified across iPhone, iPad, and desktop viewports. Network throttling tests (3G Fast/Slow) to validate loading skeletons and offline error state messaging.",
      futureImprovements: [
        "Personalized Watchlist and Favorites stored via browser LocalStorage / IndexedDB.",
        "Embedded YouTube official trailer player inside the detail modal.",
        "PWA offline caching for recently viewed movies."
      ],
      repositoryUrl: "https://github.com/ShakiraMorium",
      demoUrlPlaceholder: "https://movie-theater-umber.vercel.app"
    }
  },
  {
    id: "event-management-system",
    title: "Event Management & Registration Platform",
    subtitle: "A comprehensive web application for scheduling events, managing ticket capacities, and handling participant registrations.",
    category: "Full-Stack Web Application",
    status: "Live on Vercel",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    image: "/assets/project-event-mgmt.jpg",
    problem: "Community organizations and educational bodies often rely on expensive third-party ticketing platforms or disorganized manual spreadsheets that fail to provide real-time RSVP capacity caps and role-based permissions.",
    overview: "An event management and registration web application engineered with modern React, JavaScript, and backend REST logic, hosted live on Vercel. Features include role-based permissions (organizer vs. attendee), real-time seat availability tracking, automated registration confirmations, and an organizer metrics dashboard showing attendance trends.",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Python",
      "Django",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel"
    ],
    myContribution: "Engineered responsive React frontend and connected it with event registration APIs. Implemented seat reservation logic preventing event overbooking. Built organizer dashboard components with real-time RSVP tracking and attendee lists. Deployed the frontend live to Vercel.",
    githubUrl: "https://github.com/ShakiraMorium",
    demoUrl: "https://frontend-ochre-nine-71.vercel.app",
    demoNote: "Live production deployment on Vercel: https://frontend-ochre-nine-71.vercel.app",
    highlights: [
      "Role-based permission gates separating organizers from attendees",
      "Capacity enforcement logic preventing event overbooking",
      "Organizer dashboard with real-time RSVP counts and attendee lists",
      "Live production deployment on Vercel with responsive mobile and desktop layouts",
      "Clean decoupled architecture ready for cloud scaling"
    ],
    caseStudy: {
      overview: "The Event Management Platform provides an end-to-end portal for organizers to schedule webinars, workshops, and meetups, while allowing attendees to reserve spots with immediate confirmation. It prioritizes data integrity and concurrency control during high-demand registration windows.",
      problemStatement: "Small organizations and community leaders struggle with manual registration workflows that frequently lead to overbooking, missing participant records, and lack of real-time attendance visibility. Commercial tools charge steep per-ticket transaction fees even for free community events.",
      projectObjectives: [
        "Deliver an accessible cloud-deployable platform for event scheduling and participant registration.",
        "Provide automatic seat reservation limits to enforce venue capacity restrictions.",
        "Implement distinct user roles (Attendee vs. Event Organizer) with customized views.",
        "Offer an exportable attendee roster and clear attendance metrics for organizers."
      ],
      userRequirements: [
        "Attendees can browse upcoming events by date and category.",
        "Attendees can RSVP with a single click after authenticating.",
        "The system disables RSVP buttons immediately when an event reaches maximum capacity.",
        "Organizers can create, edit, reschedule, or cancel events they own.",
        "Organizers can view registered attendee lists with registration timestamps."
      ],
      technicalArchitecture: "Modern decoupled architecture: React Single Page Application frontend hosted on Vercel edge network, interacting with Python / Django backend services. PostgreSQL serves as the relational data layer, enforcing strict foreign key constraints and transactional integrity.",
      frontendImplementation: "Built using React functional components, hooks, and Tailwind CSS. Vanilla JavaScript handles asynchronous fetch calls to registration endpoints, updating available seat counters and RSVP button states dynamically without full page reloads.",
      backendImplementation: "Django views and REST endpoints handle event filtering, form processing, and attendee authentication. Concurrency protection ensures registration counts do not exceed capacity even when multiple users RSVP simultaneously.",
      databaseStructure: "Relational database schema:\n- User (id, username, email, role [Organizer/Attendee])\n- EventCategory (id, name, slug)\n- Event (id, organizer_id, category_id, title, description, venue, event_date, max_capacity, created_at)\n- Registration (id, event_id, user_id, registration_date, status [Confirmed/Cancelled])",
      apiDesign: "Class-based views with JSON endpoints for AJAX actions:\n- GET /events/ (Event listing with category & date filtering)\n- GET /events/<slug>/ (Detailed event view)\n- POST /events/<id>/rsvp/ (Reserve seat - returns JSON status and updated capacity)\n- POST /events/<id>/cancel-rsvp/ (Cancel registration)\n- GET /dashboard/ (Organizer metrics and event management table)",
      challenges: [
        "Handling concurrent registrations when an event has only one seat left (race conditions).",
        "Enforcing role-based security so organizers can only modify their own events.",
        "Structuring an intuitive dashboard interface that remains fast with hundreds of attendee records."
      ],
      solutions: [
        "Used database transactions with select_for_update() to lock the event record during capacity evaluation, eliminating overbooking race conditions.",
        "Created custom permission checks that verify event ownership before granting mutation access.",
        "Implemented database pagination and indexed foreign keys to keep query execution times under 200ms."
      ],
      security: [
        "CSRF protection on all mutating request methods.",
        "Password hashing via PBKDF2 with SHA256.",
        "Strict input validation on date pickers to prevent past-date scheduling.",
        "SQL injection prevention via parameterized ORM queries."
      ],
      testingApproach: "Unit and integration tests covering capacity limits, unauthorized edit attempts, and concurrent registration simulations. Cross-browser testing across Chrome, Safari, and Firefox.",
      futureImprovements: [
        "Automated email notifications with calendar invite attachments (.ics files).",
        "QR code ticket generation for mobile on-site check-ins.",
        "Waitlist queue functionality that automatically promotes attendees when an RSVP cancels."
      ],
      repositoryUrl: "https://github.com/ShakiraMorium",
      demoUrlPlaceholder: "https://frontend-ochre-nine-71.vercel.app"
    }
  },
  {
    id: "pet-adoption-platform",
    title: "Pet Adoption E-Commerce Platform",
    subtitle: "A structured pet catalog and adoption application workflow bridging prospective pet parents with rescue animals.",
    category: "Full-Stack Web Application",
    status: "In Development",
    statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    image: "/assets/project-pet-adoption.jpg",
    problem: "Animal shelters and prospective pet parents struggle with fragmented information across social media, opaque adoption stages, and the lack of a transparent, structured adoption inquiry and approval process.",
    overview: "PetFinder Pro is designed as a hybrid adoption catalog and structured request system. Built with a decoupled architecture featuring a React frontend and a Python / Django REST Framework backend backed by PostgreSQL, it provides intuitive multi-attribute filtering, health badge verification, and a multi-step adoption submission workflow.",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Python",
      "Django REST Framework",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT Authentication"
    ],
    myContribution: "Architected relational database schema in PostgreSQL via Django ORM models. Developed RESTful endpoints for pet listings and adoption applications. Built the responsive React frontend with real-time category filtering and adoption application state management.",
    githubUrl: "https://github.com/ShakiraMorium",
    demoUrl: null,
    demoNote: "Staging prototype in local and test environment. Live cloud deployment coming next.",
    highlights: [
      "Dynamic pet catalog with breed, age, and health status filtering",
      "Structured adoption inquiry workflow with status tracking",
      "Relational database design connecting animals, shelters, and applicants",
      "Decoupled React & Django REST Framework architecture"
    ],
    caseStudy: {
      overview: "PetFinder Pro is an end-to-end web application that streamlines the process of discovering, vetting, and adopting companion animals. It replaces disorganized social posts and spreadsheets with a centralized database, verifiable medical tags, and a transparent multi-step application queue.",
      problemStatement: "Traditional pet adoption channels suffer from significant friction: fragmented pet listings across different informal channels, repetitive paper forms, lack of clarity regarding adoption status, and difficulty for shelters in organizing applicant records. Prospective adopters often face delayed feedback or submit inquiries for pets already adopted.",
      projectObjectives: [
        "Create a centralized, searchable pet registry with clear health and vaccination badges.",
        "Implement a structured adoption application flow that records applicant contact information, living arrangements, and pet experience.",
        "Provide an administrative dashboard for shelter managers to review, accept, or update application statuses.",
        "Ensure full responsiveness across mobile, tablet, and desktop devices."
      ],
      userRequirements: [
        "Adopters can browse and filter pets by species (Dog/Cat), breed, age group, and health badges.",
        "Adopters can view detailed pet profiles including vaccination status, temperament, and adoption fees.",
        "Users can submit a formalized adoption application tied to their authenticated profile.",
        "Shelter staff can log in with role-based permissions to create/update pet records and manage adoption statuses."
      ],
      technicalArchitecture: "The project adopts a decoupled client-server architecture. The frontend is a Single Page Application (SPA) built with React and Tailwind CSS for rapid, accessible UI rendering. The backend is powered by Python and Django REST Framework (DRF), exposing a versioned REST API. PostgreSQL serves as the primary relational database, storing normalized entities with strict foreign key constraints.",
      frontendImplementation: "Implemented using React functional components, custom hooks for data fetching, and state management for search parameters and application steps. Tailwind CSS provides a responsive grid layout. A debounce mechanism on the search input prevents excessive API calls during real-time filtering.",
      backendImplementation: "Structured into modular Django apps: 'pets' for animal cataloging, 'adoptions' for inquiry processing, and 'accounts' for user authentication. Utilized DRF ModelViewSets, serializers with field-level validation, and custom permission classes (IsAdminOrReadOnly).",
      databaseStructure: "Normalized schema in PostgreSQL including:\n- Pet (id, name, species, breed, age_months, health_badges, status [Available/Pending/Adopted], created_at)\n- User (id, username, email, is_shelter_admin)\n- AdoptionApplication (id, pet_id, applicant_id, living_situation, experience_notes, status [Submitted/Under Review/Approved/Rejected], submitted_at)\n- HealthRecord (id, pet_id, vaccine_name, date_administered)",
      apiDesign: "RESTful endpoints following standard HTTP methods:\n- GET /api/v1/pets/ (List pets with query params: species, breed, age_min, age_max)\n- GET /api/v1/pets/{id}/ (Retrieve individual pet details)\n- POST /api/v1/pets/ (Create pet listing - Shelter Admin only)\n- POST /api/v1/adoptions/ (Submit adoption application - Authenticated users)\n- GET /api/v1/adoptions/my-applications/ (View current user's submitted requests)",
      challenges: [
        "Managing multi-parameter filtering without over-fetching or slow database query times.",
        "Preventing duplicate adoption applications from the same user for the same pet while one is currently under review.",
        "Synchronizing UI application state across multi-step adoption forms upon unexpected network disconnects."
      ],
      solutions: [
        "Implemented Django ORM Q objects and indexed key filter columns (species, status) in PostgreSQL to optimize query performance.",
        "Added unique constraints in Django models (UniqueTogetherConstraint on user and pet for pending statuses) and DRF serializer validation.",
        "Structured React multi-step state with persistent sessionStorage fallbacks to prevent data loss on page refresh."
      ],
      security: [
        "JWT-based authentication tokens with short expiration and secure refresh token rotation.",
        "CORS headers strictly configured for verified frontend origins.",
        "Input sanitization and validation on all application forms to prevent XSS and SQL injection.",
        "Role-based permission gates ensuring only verified staff can approve adoption requests."
      ],
      testingApproach: "Unit tests using Django's TestCase for API endpoints and model validations. Manual cross-browser testing for responsive layout integrity and error boundaries on React frontend.",
      futureImprovements: [
        "Integration of real-time WebSocket notifications when an application status updates.",
        "Shelter identity verification workflow and digital document signing for adoption contracts.",
        "Secure payment gateway integration for adoption fee processing (e.g., Stripe sandbox)."
      ],
      repositoryUrl: "https://github.com/ShakiraMorium",
      demoUrlPlaceholder: "https://shamima-petfinder.demo.placeholder"
    }
  },
  {
    id: "modern-ecommerce-website",
    title: "Modern E-Commerce Web Application",
    subtitle: "A responsive online shopping experience with real-time product discovery, multi-attribute filtering, and dynamic cart state.",
    category: "Frontend Web Application",
    status: "Interactive Prototype",
    statusColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    image: "/assets/project-ecommerce.jpg",
    problem: "Modern e-commerce users abandon shopping carts when interfaces feel sluggish, navigation is rigid, or filtering requires slow full-page refreshes.",
    overview: "Nexus Tech is a responsive e-commerce storefront engineered with React, modern JavaScript, and Tailwind CSS. It highlights client-side state management, instant search, price and category filtering, persistent cart storage, and a slide-over checkout drawer.",
    technologies: [
      "React",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Context API / State Hooks",
      "LocalStorage API",
      "REST API Integration"
    ],
    myContribution: "Designed the component hierarchy and UI layout. Implemented client-side filtering algorithms and shopping cart state with localStorage persistence. Structured reusable UI primitives (cards, drawers, modals, buttons) adhering to modern accessibility guidelines.",
    githubUrl: "https://github.com/ShakiraMorium",
    demoUrl: null,
    demoNote: "Interactive prototype codebase in GitHub repository with live mock store state.",
    highlights: [
      "Instant client-side search with multi-category filter pills",
      "Persistent shopping cart state synchronized with localStorage",
      "Slide-over cart drawer with real-time price subtotal calculations",
      "Mobile-responsive grid design with accessible keyboard controls"
    ],
    caseStudy: {
      overview: "Nexus Tech is a high-performance e-commerce prototype built to showcase frontend engineering best practices: fluid state management, fast client-side filtering, and responsive micro-interactions.",
      problemStatement: "Online shoppers frequently encounter clunky e-commerce interfaces where sorting or adding an item triggers a full-page reload. Sluggish cart synchronization and lack of visual feedback lead to high drop-off rates.",
      projectObjectives: [
        "Build a fast, zero-latency product discovery experience.",
        "Maintain accurate shopping cart totals (quantity, tax, discount calculations) in client state.",
        "Persist cart items across browser sessions using local web storage.",
        "Deliver an accessible, mobile-first design that looks premium on all screen sizes."
      ],
      userRequirements: [
        "Users can filter tech products by category (Laptops, Audio, Wearables, Keyboards).",
        "Users can search products dynamically by title or description keyword.",
        "Users can increment, decrement, or remove items in the cart with instant total recalculation.",
        "Users can open and close the slide-out cart drawer smoothly using keyboard Escape or backdrop click."
      ],
      technicalArchitecture: "Component-driven Single Page Application built on React 19. State is structured using React Context for global shopping cart synchronization, complemented by custom hooks for localStorage persistence and search filtering.",
      frontendImplementation: "Clean component modularity: ProductGrid, ProductCard, FilterBar, SearchInput, CartDrawer, and OrderSummary. Tailwind CSS provides consistent spacing, typography scale, and dark mode color tokens.",
      backendImplementation: "Consumes structured REST endpoints / mock product schemas with asynchronous error handling, loading skeleton states, and fallback illustrations for empty search results.",
      databaseStructure: "Client-side normalized data model:\n- Product (id, title, category, price, rating, reviewsCount, inStock, image, specs)\n- CartItem (productId, quantity, unitPrice, lineTotal)\n- CartSummary (itemCount, subtotal, estimatedTax, finalTotal)",
      apiDesign: "Standard REST contract format:\n- GET /api/products?category=:slug&search=:query\n- GET /api/products/:id\n- POST /api/checkout/validate (Validates cart payload before payment processing)",
      challenges: [
        "Preventing cart state desynchronization when multiple tabs are open.",
        "Accurately calculating financial floating-point totals without rounding discrepancies (crucial from an accounting perspective).",
        "Managing mobile performance and layout shifts during image loading."
      ],
      solutions: [
        "Listened to window 'storage' events to keep cart state synchronized across multiple open browser tabs.",
        "Applied integer-cent calculations (Math.round(price * 100)) internally for all currency calculations before formatting as standard decimal currency, ensuring mathematical precision.",
        "Specified explicit image aspect ratios and added low-overhead CSS blur skeleton placeholders to eliminate Cumulative Layout Shift (CLS)."
      ],
      security: [
        "Sanitized search query strings to prevent DOM-based XSS attacks.",
        "Avoided storing sensitive payment or personal information in browser localStorage.",
        "Strict validation of quantity inputs to prevent negative numbers or invalid data types."
      ],
      testingApproach: "Manual functional testing across viewport breakpoints (360px to 1920px), keyboard navigation audits (Tab, Enter, Escape key trap inside drawer), and lighthouse accessibility audits.",
      futureImprovements: [
        "Integration of Stripe Payment Element for complete checkout simulation.",
        "User wishlist and product comparison matrix.",
        "Backend sync with PostgreSQL database via Django REST Framework."
      ],
      repositoryUrl: "https://github.com/ShakiraMorium",
      demoUrlPlaceholder: "https://shamima-nexustech.demo.placeholder"
    }
  }
];
