export const projects = [
  {
    id: "ecommerce-api",
    title: "E-Commerce API",
    shortDescription: "RESTful API for e-commerce platform with full features.",
    description: "A highly scalable and feature-rich RESTful API designed to power modern e-commerce storefronts. This system handles complex product catalogs, secure shopping cart workflows, dynamic pricing, and transactional order management.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Redis", "JWT", "Stripe"],
    githubUrl: "https://github.com/hoangduy-dev/ecommerce-api",
    features: [
      "JWT-based Authentication & Role-Based Access Control (Admin, Seller, Customer)",
      "Product Catalog with filtering, sorting, pagination, and fuzzy search",
      "Real-time Shopping Cart & Wishlist persistence",
      "Stripe payment gateway integration with webhooks for order verification",
      "Inventory management with stock auto-decrement and race-condition safety",
      "Automated invoice generation and email notifications via Nodemailer"
    ],
    architecture: "Clean Architecture (Separation of Concerns between Routes, Controllers, Services, and Repositories). Implemented custom middleware for validation (Joi) and error handling.",
    databaseDesign: "Document-oriented database design using MongoDB. Heavy usage of compound indexing on product attributes (name, category, price) to support fast search queries. References used for orders and users, while product reviews are embedded for optimal read performance.",
    performance: {
      caching: "Redis cache implemented for high-traffic product listings and category queries, reducing database read load by 60%.",
      loadTesting: "Tested with autocannon, maintaining a stable 850 requests/sec with an average response time of 45ms under a load of 10,000 concurrent users."
    },
    endpoints: [
      { method: "POST", path: "/api/v1/auth/register", description: "Register a new user account" },
      { method: "POST", path: "/api/v1/auth/login", description: "Authenticate user and get access token" },
      { method: "GET", path: "/api/v1/products", description: "List products with search, pagination, and filter queries" },
      { method: "POST", path: "/api/v1/orders", description: "Create an order and initiate payment session" },
      { method: "GET", path: "/api/v1/orders/my-orders", description: "Fetch logged-in user order history" }
    ]
  },
  {
    id: "blog-platform-api",
    title: "Blog Platform API",
    shortDescription: "API for blog platform with comments and auth.",
    description: "A robust backend engine for a blogging community platform. It features structured post creation, nested comment threads, user relationships (followers), and real-time interaction capabilities.",
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "Swagger", "Socket.io"],
    githubUrl: "https://github.com/hoangduy-dev/blog-platform-api",
    features: [
      "Modular design structure with NestJS modules, controllers, and services",
      "Full CRUD operations for articles with rich text content support",
      "Nested tree comments utilizing PostgreSQL CTEs (Common Table Expressions) for unlimited depth",
      "Follower system where users can follow others and receive a customized feed",
      "Real-time notifications using WebSockets (Socket.io) when posts receive likes or comments",
      "Auto-generated interactive API documentation with OpenAPI/Swagger"
    ],
    architecture: "Domain-Driven Design (DDD) principles implemented inside NestJS framework. Utilizing Guard for JWT authentication, Interceptors for response formatting, and Exception Filters for structured error responses.",
    databaseDesign: "Relational database schema with PostgreSQL. Proper relational mappings (One-to-Many, Many-to-Many) for posts, users, tags, and comments. Optimized querying using TypeORM Query Builder and database views for aggregate metrics (like total reads/likes).",
    performance: {
      caching: "Redis utilized to store user activity feed streams. New posts are pushed to follower feeds using a Fan-out write strategy.",
      loadTesting: "Achieved sub-15ms response times for feed lookups from Redis, handling up to 1,200 RPS during read heavy simulations."
    },
    endpoints: [
      { method: "GET", path: "/api/v1/posts", description: "Get global feed or filtered posts list" },
      { method: "POST", path: "/api/v1/posts", description: "Create a new article (requires Creator role)" },
      { method: "POST", path: "/api/v1/posts/:id/comments", description: "Post a comment or reply to an existing comment" },
      { method: "POST", path: "/api/v1/users/:id/follow", description: "Follow or unfollow another author" },
      { method: "GET", path: "/api/v1/feed", description: "Get personalized feed of followed authors" }
    ]
  },
  {
    id: "task-management-api",
    title: "Task Management API",
    shortDescription: "API for task management system with clean structure.",
    description: "An enterprise-ready task scheduling and project tracking API. Designed to support collaboration, workflow automation, deadline management, and team productivity tracking.",
    techStack: ["Node.js", "Express.js", "MySQL", "Sequelize", "Docker", "Jest", "BullMQ"],
    githubUrl: "https://github.com/hoangduy-dev/task-management-api",
    features: [
      "Workspace creation with team membership and user invitation workflows",
      "Task management with custom statuses (To Do, In Progress, In Review, Done)",
      "Asynchronous background task scheduling for automatic email alerts on approaching deadlines",
      "Activity logs tracking who updated what task, and when",
      "File attachment management linking with cloud storage (mocked/configured for local upload)",
      "Comprehensive unit and integration test suite writing using Jest"
    ],
    architecture: "Layered MVC Architecture focusing on decoupling data models, business logic (Services), and controllers. BullMQ used with Redis to run heavy worker tasks in the background.",
    databaseDesign: "MySQL relational database. Set up cascading deletes, foreign keys, and indexes on workspace_id, assignee_id, and due_date. Transactions implemented for operations involving multiple queries (e.g. archiving a workspace and its tasks).",
    performance: {
      caching: "Database connection pooling configured for optimal thread reuse. Heavy queries (such as analytics reports) pre-calculated hourly and stored in caching layers.",
      loadTesting: "Dockerized load tests showed consistent throughput with memory leaks prevented via rigorous request cycle garbage collection monitoring."
    },
    endpoints: [
      { method: "POST", path: "/api/v1/workspaces", description: "Create a workspace for team collaboration" },
      { method: "POST", path: "/api/v1/tasks", description: "Create a task and assign to team member" },
      { method: "PATCH", path: "/api/v1/tasks/:id/status", description: "Update task status (Triggers background event)" },
      { method: "GET", path: "/api/v1/workspaces/:id/analytics", description: "Generate team task completion reports" },
      { method: "POST", path: "/api/v1/workspaces/:id/members", description: "Add a member to workspace with specific role" }
    ]
  }
];
