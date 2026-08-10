export const projectsData = [
  {
    id: "ecommerce-api",
    title: {
      en: "E-Commerce API",
      vi: "E-Commerce API"
    },
    shortDescription: {
      en: "RESTful API for e-commerce platform with full features.",
      vi: "RESTful API cho nền tảng thương mại điện tử với đầy đủ tính năng."
    },
    description: {
      en: "A highly scalable and feature-rich RESTful API designed to power modern e-commerce storefronts. This system handles complex product catalogs, secure shopping cart workflows, dynamic pricing, and transactional order management.",
      vi: "Hệ thống RESTful API có khả năng mở rộng cao và giàu tính năng được thiết kế cho các trang thương mại điện tử hiện đại. Hệ thống xử lý danh mục sản phẩm phức tạp, quy trình giỏ hàng bảo mật, tính giá linh hoạt và quản lý đơn hàng giao dịch."
    },
    techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Redis", "JWT", "Stripe"],
    githubUrl: "https://github.com/dinhthang-dev/ecommerce-api",
    features: {
      en: [
        "JWT-based Authentication & Role-Based Access Control (Admin, Seller, Customer)",
        "Product Catalog with filtering, sorting, pagination, and fuzzy search",
        "Real-time Shopping Cart & Wishlist persistence",
        "Stripe payment gateway integration with webhooks for order verification",
        "Inventory management with stock auto-decrement and race-condition safety",
        "Automated invoice generation and email notifications via Nodemailer"
      ],
      vi: [
        "Xác thực qua JWT & Phân quyền chi tiết (Quản trị viên, Người bán, Khách hàng)",
        "Danh mục sản phẩm với bộ lọc, sắp xếp, phân trang và tìm kiếm mờ (fuzzy search)",
        "Giỏ hàng & Danh sách yêu thích được đồng bộ và lưu trữ thời gian thực",
        "Tích hợp cổng thanh toán Stripe với webhook xác minh đơn hàng tự động",
        "Quản lý kho hàng tự động trừ tồn kho và phòng chống xung đột giao dịch (race-condition)",
        "Tự động xuất hóa đơn và gửi email thông báo qua Nodemailer"
      ]
    },
    architecture: {
      en: "Clean Architecture (Separation of Concerns between Routes, Controllers, Services, and Repositories). Implemented custom middleware for validation (Joi) and error handling.",
      vi: "Kiến trúc Clean Architecture (Phân tách rõ ràng giữa Routes, Controllers, Services và Repositories). Triển khai middleware tùy chỉnh để validate dữ liệu (Joi) và xử lý lỗi tập trung."
    },
    databaseDesign: {
      en: "Document-oriented database design using MongoDB. Heavy usage of compound indexing on product attributes (name, category, price) to support fast search queries. References used for orders and users, while product reviews are embedded for optimal read performance.",
      vi: "Thiết kế cơ sở dữ liệu hướng tài liệu sử dụng MongoDB. Sử dụng chỉ mục hỗn hợp (compound indexing) trên các thuộc tính sản phẩm (tên, danh mục, giá) để tối ưu tốc độ tìm kiếm. Liên kết tham chiếu cho đơn hàng và người dùng, trong khi đánh giá sản phẩm được nhúng trực tiếp để đạt hiệu năng đọc tốt nhất."
    },
    performance: {
      caching: {
        en: "Redis cache implemented for high-traffic product listings and category queries, reducing database read load by 60%.",
        vi: "Triển khai bộ nhớ đệm Redis cho danh sách sản phẩm truy cập cao và truy vấn danh mục, giảm 60% tải đọc vào cơ sở dữ liệu."
      },
      loadTesting: {
        en: "Tested with autocannon, maintaining a stable 850 requests/sec with an average response time of 45ms under a load of 10,000 concurrent users.",
        vi: "Kiểm thử tải bằng Autocannon, duy trì ổn định 850 yêu cầu/giây với thời gian phản hồi trung bình 45ms dưới mức tải 10,000 người dùng đồng thời."
      }
    },
    endpoints: [
      { method: "POST", path: "/api/v1/auth/register", description: { en: "Register a new user account", vi: "Đăng ký tài khoản người dùng mới" } },
      { method: "POST", path: "/api/v1/auth/login", description: { en: "Authenticate user and get access token", vi: "Xác thực người dùng và nhận access token" } },
      { method: "GET", path: "/api/v1/products", description: { en: "List products with search, pagination, and filter queries", vi: "Lấy danh sách sản phẩm kết hợp tìm kiếm, phân trang và bộ lọc" } },
      { method: "POST", path: "/api/v1/orders", description: { en: "Create an order and initiate payment session", vi: "Tạo đơn hàng và khởi tạo phiên thanh toán" } },
      { method: "GET", path: "/api/v1/orders/my-orders", description: { en: "Fetch logged-in user order history", vi: "Lấy lịch sử đơn hàng của người dùng đang đăng nhập" } }
    ]
  },
  {
    id: "blog-platform-api",
    title: {
      en: "Blog Platform API",
      vi: "Blog Platform API"
    },
    shortDescription: {
      en: "API for blog platform with comments and auth.",
      vi: "API cho nền tảng blog với tính năng bình luận phân cấp và xác thực."
    },
    description: {
      en: "A robust backend engine for a blogging community platform. It features structured post creation, nested comment threads, user relationships (followers), and real-time interaction capabilities.",
      vi: "Hệ thống backend mạnh mẽ cho nền tảng cộng đồng viết blog. Hệ thống hỗ trợ tạo bài viết chuẩn cấu trúc, bình luận lồng nhau đa cấp, mối quan hệ người dùng (theo dõi) và tương tác thời gian thực."
    },
    techStack: ["NestJS", "TypeScript", "PostgreSQL", "TypeORM", "Redis", "Swagger", "Socket.io"],
    githubUrl: "https://github.com/dinhthang-dev/blog-platform-api",
    features: {
      en: [
        "Modular design structure with NestJS modules, controllers, and services",
        "Full CRUD operations for articles with rich text content support",
        "Nested tree comments utilizing PostgreSQL CTEs (Common Table Expressions) for unlimited depth",
        "Follower system where users can follow others and receive a customized feed",
        "Real-time notifications using WebSockets (Socket.io) when posts receive likes or comments",
        "Auto-generated interactive API documentation with OpenAPI/Swagger"
      ],
      vi: [
        "Cấu trúc thiết kế dạng module với NestJS modules, controllers và services",
        "Đầy đủ thao tác CRUD cho bài viết hỗ trợ định dạng nội dung rich text",
        "Bình luận cây lồng nhau sử dụng PostgreSQL CTEs cho độ sâu vô hạn",
        "Hệ thống theo dõi giúp người dùng theo dõi tác giả khác và nhận trang tin tùy chỉnh",
        "Thông báo thời gian thực qua WebSockets (Socket.io) khi bài viết nhận lượt thích hoặc bình luận",
        "Tự động tạo tài liệu API tương tác bằng OpenAPI/Swagger"
      ]
    },
    architecture: {
      en: "Domain-Driven Design (DDD) principles implemented inside NestJS framework. Utilizing Guard for JWT authentication, Interceptors for response formatting, and Exception Filters for structured error responses.",
      vi: "Áp dụng nguyên lý Domain-Driven Design (DDD) trong framework NestJS. Sử dụng Guard cho xác thực JWT, Interceptor để định dạng phản hồi và Exception Filter để xử lý phản hồi lỗi chuẩn hóa."
    },
    databaseDesign: {
      en: "Relational database schema with PostgreSQL. Proper relational mappings (One-to-Many, Many-to-Many) for posts, users, tags, and comments. Optimized querying using TypeORM Query Builder and database views for aggregate metrics (like total reads/likes).",
      vi: "Cơ sở dữ liệu quan hệ với PostgreSQL. Mối quan hệ chuẩn (Một-Nhiều, Nhiều-Nhiều) cho bài viết, người dùng, thẻ tag và bình luận. Tối ưu truy vấn bằng TypeORM Query Builder và Database Views cho các chỉ số tổng hợp (lượt đọc/lượt thích)."
    },
    performance: {
      caching: {
        en: "Redis utilized to store user activity feed streams. New posts are pushed to follower feeds using a Fan-out write strategy.",
        vi: "Sử dụng Redis để lưu trữ luồng tin hoạt động của người dùng. Bài viết mới được đẩy đến bảng tin người theo dõi bằng chiến lược ghi Fan-out."
      },
      loadTesting: {
        en: "Achieved sub-15ms response times for feed lookups from Redis, handling up to 1,200 RPS during read heavy simulations.",
        vi: "Đạt thời gian phản hồi dưới 15ms cho các truy vấn bảng tin từ Redis, xử lý tới 1,200 RPS trong các thử nghiệm mô phỏng đọc tải cao."
      }
    },
    endpoints: [
      { method: "GET", path: "/api/v1/posts", description: { en: "Get global feed or filtered posts list", vi: "Lấy danh sách bài viết toàn cục hoặc theo bộ lọc" } },
      { method: "POST", path: "/api/v1/posts", description: { en: "Create a new article (requires Creator role)", vi: "Tạo bài viết mới (yêu cầu quyền Creator)" } },
      { method: "POST", path: "/api/v1/posts/:id/comments", description: { en: "Post a comment or reply to an existing comment", vi: "Bình luận hoặc phản hồi lại bình luận có sẵn" } },
      { method: "POST", path: "/api/v1/users/:id/follow", description: { en: "Follow or unfollow another author", vi: "Theo dõi hoặc hủy theo dõi một tác giả khác" } },
      { method: "GET", path: "/api/v1/feed", description: { en: "Get personalized feed of followed authors", vi: "Lấy bảng tin cá nhân hóa từ các tác giả đang theo dõi" } }
    ]
  },
  {
    id: "task-management-api",
    title: {
      en: "Task Management API",
      vi: "Task Management API"
    },
    shortDescription: {
      en: "API for task management system with clean structure.",
      vi: "API cho hệ thống quản lý công việc với cấu trúc sạch và xử lý bất đồng bộ."
    },
    description: {
      en: "An enterprise-ready task scheduling and project tracking API. Designed to support collaboration, workflow automation, deadline management, and team productivity tracking.",
      vi: "Hệ thống API theo dõi dự án và lập lịch công việc cấp doanh nghiệp. Được thiết kế để hỗ trợ làm việc nhóm, tự động hóa quy trình, quản lý hạn chót và theo dõi năng suất đội ngũ."
    },
    techStack: ["Node.js", "Express.js", "MySQL", "Sequelize", "Docker", "Jest", "BullMQ"],
    githubUrl: "https://github.com/dinhthang-dev/task-management-api",
    features: {
      en: [
        "Workspace creation with team membership and user invitation workflows",
        "Task management with custom statuses (To Do, In Progress, In Review, Done)",
        "Asynchronous background task scheduling for automatic email alerts on approaching deadlines",
        "Activity logs tracking who updated what task, and when",
        "File attachment management linking with cloud storage (mocked/configured for local upload)",
        "Comprehensive unit and integration test suite writing using Jest"
      ],
      vi: [
        "Tạo không gian làm việc (Workspace) với quy trình mời thành viên và phân quyền nhóm",
        "Quản lý công việc với các trạng thái tùy chỉnh (Cần làm, Đang làm, Đang duyệt, Hoàn thành)",
        "Lập lịch công việc chạy ngầm (Background Task) để tự động gửi email nhắc nhở khi sắp đến hạn",
        "Nhật ký hoạt động (Activity Log) ghi nhận lịch sử thay đổi công việc chi tiết",
        "Quản lý tệp đính kèm kết nối lưu trữ đám mây (cấu hình tải lên địa phương)",
        "Bộ kiểm thử đơn vị (Unit Test) và kiểm thử tích hợp toàn diện viết bằng Jest"
      ]
    },
    architecture: {
      en: "Layered MVC Architecture focusing on decoupling data models, business logic (Services), and controllers. BullMQ used with Redis to run heavy worker tasks in the background.",
      vi: "Kiến trúc Layered MVC tập trung tách biệt giữa Data Model, Business Logic (Services) và Controllers. Sử dụng BullMQ kết hợp Redis để chạy các công việc nặng ở hàng chờ nền."
    },
    databaseDesign: {
      en: "MySQL relational database. Set up cascading deletes, foreign keys, and indexes on workspace_id, assignee_id, and due_date. Transactions implemented for operations involving multiple queries (e.g. archiving a workspace and its tasks).",
      vi: "Cơ sở dữ liệu quan hệ MySQL. Thiết lập xóa liên hoàn (cascading deletes), khóa ngoại và chỉ mục trên workspace_id, assignee_id và due_date. Triển khai Transaction cho các thao tác chứa nhiều truy vấn."
    },
    performance: {
      caching: {
        en: "Database connection pooling configured for optimal thread reuse. Heavy queries (such as analytics reports) pre-calculated hourly and stored in caching layers.",
        vi: "Cấu hình Database Connection Pooling để tái sử dụng luồng tối ưu. Các truy vấn nặng (như báo cáo phân tích) được tính toán trước hàng giờ và lưu vào tầng cache."
      },
      loadTesting: {
        en: "Dockerized load tests showed consistent throughput with memory leaks prevented via rigorous request cycle garbage collection monitoring.",
        vi: "Kiểm thử tải trong môi trường Docker cho thấy băng thông nhất quán, ngăn ngừa rò rỉ bộ nhớ nhờ theo dõi vòng đời thu gom rác (garbage collection)."
      }
    },
    endpoints: [
      { method: "POST", path: "/api/v1/workspaces", description: { en: "Create a workspace for team collaboration", vi: "Tạo không gian làm việc cho nhóm" } },
      { method: "POST", path: "/api/v1/tasks", description: { en: "Create a task and assign to team member", vi: "Tạo công việc và giao cho thành viên" } },
      { method: "PATCH", path: "/api/v1/tasks/:id/status", description: { en: "Update task status (Triggers background event)", vi: "Cập nhật trạng thái công việc (Kích hoạt sự kiện chạy ngầm)" } },
      { method: "GET", path: "/api/v1/workspaces/:id/analytics", description: { en: "Generate team task completion reports", vi: "Xuất báo cáo tiến độ hoàn thành công việc của nhóm" } },
      { method: "POST", path: "/api/v1/workspaces/:id/members", description: { en: "Add a member to workspace with specific role", vi: "Thêm thành viên vào không gian làm việc với vai trò cụ thể" } }
    ]
  }
];

export const getLocalizedProjects = (lang = 'en') => {
  const currentLang = lang.startsWith('vi') ? 'vi' : 'en';
  return projectsData.map(project => ({
    id: project.id,
    title: project.title[currentLang] || project.title.en,
    shortDescription: project.shortDescription[currentLang] || project.shortDescription.en,
    description: project.description[currentLang] || project.description.en,
    techStack: project.techStack,
    githubUrl: project.githubUrl,
    features: project.features[currentLang] || project.features.en,
    architecture: project.architecture[currentLang] || project.architecture.en,
    databaseDesign: project.databaseDesign[currentLang] || project.databaseDesign.en,
    performance: {
      caching: project.performance.caching[currentLang] || project.performance.caching.en,
      loadTesting: project.performance.loadTesting[currentLang] || project.performance.loadTesting.en
    },
    endpoints: project.endpoints.map(ep => ({
      method: ep.method,
      path: ep.path,
      description: ep.description[currentLang] || ep.description.en
    }))
  }));
};

export const projects = getLocalizedProjects('en');
