import ecoluckImg from '../assets/ecoluck.jpg';
import jobgogoImg from '../assets/jobgogo.jpg';
import travelImg from '../assets/travel.jpg';
import tinocmsImg from '../assets/tinocms.jpg';
import biolinkImg from '../assets/biolink.jpg';

export const projectsData = [
  {
    id: "ecoluck-platform",
    image: ecoluckImg,
    title: {
      en: "EcoLuck — Fullstack E-Commerce & Rewards Platform",
      vi: "EcoLuck — Nền Tảng Mua Sắm & Nhận Thưởng Fullstack"
    },
    shortDescription: {
      en: "Fullstack E-Commerce Zalo Mini App with multi-store backend engine.",
      vi: "Hệ thống mua sắm Zalo Mini App tích hợp Backend quản trị đa cửa hàng."
    },
    description: {
      en: "A comprehensive fullstack e-commerce and reward ecosystem. Built with Zalo Mini App SDK (React + TypeScript + TanStack Query) on the frontend and a high-performance Laravel + Redis + MySQL engine on the backend. Features multi-store context switching, flash sales, affiliate registration, lucky ticket draws, and real-time inventory management.",
      vi: "Hệ sinh thái mua sắm và nhận thưởng fullstack toàn diện. Sử dụng Zalo Mini App SDK (React + TypeScript + TanStack Query) phía Frontend và nền tảng Laravel + Redis + MySQL phía Backend. Tích hợp chuyển đổi đa cửa hàng, chương trình Flash Sale, affiliate giới thiệu, vòng quay may mắn và quản lý kho hàng thời gian thực."
    },
    techStack: ["React 18", "TypeScript", "ZMP SDK", "TanStack Query", "Laravel", "MySQL", "Redis", "Tailwind CSS"],
    githubUrl: "https://github.com/dinhthang-dev/ecoluck-fullstack",
    features: {
      en: [
        "Cross-platform Zalo Mini App client with native hardware and authentication integration",
        "Multi-Store Admin CRM with store context switching and operating hours control",
        "Real-time Inventory & Variant Stock management with atomic lock safety",
        "Flash Sale homepage engine with countdown timer and stock reservation",
        "Affiliate Partner registration and automated tier commission tracking",
        "Lucky Ticket gift draws & reward ticket distribution module"
      ],
      vi: [
        "Client Zalo Mini App mượt mà kết hợp xác thực và phần cứng thiết bị",
        "Trang quản trị CRM đa cửa hàng (Multi-store) linh hoạt thay đổi ngữ cảnh cửa hàng",
        "Quản lý tồn kho biến thể thời gian thực chống xung đột đơn hàng (Race condition)",
        "Engine Flash Sale trang chủ với bộ đếm ngược và giữ hàng tạm thời",
        "Hệ thống đăng ký Affiliate đối tác và tự động tính hoa hồng phân cấp",
        "Vòng quay vé may mắn và mô-đun phát quà thưởng tự động"
      ]
    },
    architecture: {
      en: "Decoupled Architecture: Client layer built with React, Jotai, and TanStack Query connecting via RESTful JSON APIs to a modular Laravel Service-Repository backend. Caching strategy powered by Redis.",
      vi: "Kiến trúc tách biệt (Decoupled): Tầng Client viết bằng React, Jotai và TanStack Query giao tiếp qua RESTful JSON API với hệ thống Laravel Service-Repository phía máy chủ. Caching tối ưu bằng Redis."
    },
    databaseDesign: {
      en: "Relational MySQL database schema with multi-tenant store_id indexing, compound indexes on product variants, transactional SLA order logs, and risk/rejection auditing tables.",
      vi: "Schema MySQL quan hệ lưu trữ chỉ mục store_id đa cửa hàng, chỉ mục hỗn hợp cho biến thể sản phẩm, nhật ký SLA đơn hàng và bảng kiểm duyệt rủi ro hủy đơn."
    },
    performance: {
      caching: {
        en: "Redis caching applied to flash sale home listings and store status, maintaining sub-30ms response times for high-concurrency requests.",
        vi: "Bộ nhớ đệm Redis lưu trữ danh sách Flash Sale và trạng thái cửa hàng, duy trì độ trễ phản hồi dưới 30ms cho các truy vấn tải cao."
      },
      loadTesting: {
        en: "Tested under heavy traffic, sustaining 1,200 requests/sec with seamless ZMP client state revalidation.",
        vi: "Thử nghiệm tải cao đạt 1,200 yêu cầu/giây với cơ chế đồng bộ dữ liệu mượt mà trên Zalo Mini App Client."
      }
    },
    endpoints: [
      { method: "GET", path: "/api/v1/customer/flash-sales/home", description: { en: "Fetch active flash sale campaigns for homepage", vi: "Lấy danh sách chiến dịch Flash Sale trang chủ" } },
      { method: "POST", path: "/api/v1/customer/affiliate/register", description: { en: "Register new affiliate customer account", vi: "Đăng ký tài khoản đối tác Affiliate mới" } },
      { method: "GET", path: "/api/v1/store-admin/crm/orders", description: { en: "Admin order management with SLA & status filter", vi: "Quản lý đơn hàng CRM theo SLA và trạng thái" } },
      { method: "POST", path: "/api/v1/customer/orders/cancel-realtime", description: { en: "Real-time order cancellation with stock roll-back", vi: "Hủy đơn hàng thời gian thực và hoàn kho tự động" } }
    ]
  },
  {
    id: "jobgogo-recruitment",
    image: jobgogoImg,
    title: {
      en: "JobGogo — Fullstack Recruitment Platform",
      vi: "JobGogo — Nền Tảng Tuyển Dụng & Việc Làm Fullstack"
    },
    shortDescription: {
      en: "Cross-platform mobile/web job recruitment application and REST API.",
      vi: "Ứng dụng tuyển dụng việc làm đa nền tảng Mobile/Web kết hợp REST API."
    },
    description: {
      en: "A robust recruitment and job application platform. The frontend client is built with Ionic Framework + Angular + TypeScript, delivering native mobile apps (iOS/Android) and responsive web. The backend API is powered by Laravel, handling job posting workflows, recruiter verification, applicant tracking, and automated email notifications.",
      vi: "Nền tảng tìm kiếm việc làm và tuyển dụng nhân sự toàn diện. Frontend Client phát triển bằng Ionic Framework + Angular + TypeScript mang lại ứng dụng Mobile (iOS/Android) và Web mượt mà. Backend REST API xây dựng bằng Laravel xử lý quy trình đăng tin, duyệt nhà tuyển dụng, theo dõi hồ sơ và tự động gửi thông báo email."
    },
    techStack: ["Ionic", "Angular", "TypeScript", "Laravel", "MySQL", "Capacitor", "Tailwind CSS"],
    githubUrl: "https://github.com/dinhthang-dev/jobgogo-recruitment",
    features: {
      en: [
        "Cross-platform Ionic Angular mobile & web client with Capacitor native integration",
        "Job search engine with dynamic filters by category, salary, location, and experience",
        "Applicant resume builder & online job application submission",
        "Employer recruiter portal for managing job posts, applicants, and candidate status",
        "Email change & verification workflow with secure token hashing",
        "Role-based access control for Admins, Recruiters, and Job Seekers"
      ],
      vi: [
        "Client Mobile & Web đa nền tảng viết bằng Ionic Angular kết hợp Capacitor",
        "Bộ tìm kiếm việc làm linh hoạt theo ngành nghề, mức lương, địa điểm và kinh nghiệm",
        "Tạo hồ sơ ứng viên online và ứng tuyển việc làm trực tiếp trên ứng dụng",
        "Trang nhà tuyển dụng quản lý tin tuyển dụng, danh sách ứng viên và trạng thái duyệt",
        "Quy trình thay đổi và xác thực Email bảo mật với mã hóa Token",
        "Phân quyền hệ thống chi tiết cho Quản trị viên, Nhà tuyển dụng và Người tìm việc"
      ]
    },
    architecture: {
      en: "Mobile Hybrid Architecture: Angular Modular Frontend using RxJS services communicating with a Laravel RESTful JSON API backend with JWT token authentication.",
      vi: "Kiến trúc Mobile Hybrid: Frontend dạng Module Angular sử dụng RxJS Service giao tiếp với Backend RESTful API Laravel qua cơ chế xác thực JWT Token."
    },
    databaseDesign: {
      en: "Normalized MySQL relational database storing jobs, categories, applications, user profiles, and company profiles with cascading constraints and efficient query indexing.",
      vi: "Cơ sở dữ liệu quan hệ MySQL lưu trữ công việc, danh mục, ứng tuyển, hồ sơ người dùng và nhà tuyển dụng với khóa ngoại liên hoàn và đánh index tối ưu."
    },
    performance: {
      caching: {
        en: "Fast category lookup and job feed query caching with Redis, reducing backend database response time to under 25ms.",
        vi: "Cache danh mục và danh sách việc làm nổi bật với Redis, giảm thời gian phản hồi máy chủ xuống dưới 25ms."
      },
      loadTesting: {
        en: "Mobile client bundle optimized with Angular lazy loading for instant app startup times.",
        vi: "Dung lượng Bundle Mobile được tối ưu nhờ kỹ thuật Lazy Loading trong Angular giúp khởi động ứng dụng tức thì."
      }
    },
    endpoints: [
      { method: "GET", path: "/api/v1/jobs", description: { en: "Fetch paginated jobs with search and filter parameters", vi: "Lấy danh sách việc làm có phân trang và bộ lọc" } },
      { method: "POST", path: "/api/v1/jobs/apply", description: { en: "Submit job application with CV attachment", vi: "Nộp hồ sơ ứng tuyển kèm tệp CV" } },
      { method: "POST", path: "/api/v1/recruiter/jobs", description: { en: "Post a new job opening (Requires Recruiter role)", vi: "Đăng tin tuyển dụng mới (Yêu cầu quyền Recruiter)" } },
      { method: "POST", path: "/api/v1/user/change-email", description: { en: "Initiate secure email change verification workflow", vi: "Khởi tạo quy trình xác thực thay đổi Email bảo mật" } }
    ]
  },
  {
    id: "travel-booking-2025",
    image: travelImg,
    title: {
      en: "Travel Booking 2025 — Tour Management System",
      vi: "Travel Booking 2025 — Hệ Thống Đặt & Quản Lý Tour Du Lịch"
    },
    shortDescription: {
      en: "Fullstack travel booking platform with dynamic navigation engine.",
      vi: "Hệ thống đặt tour du lịch fullstack tích hợp bộ điều hướng linh hoạt."
    },
    description: {
      en: "A modern travel booking and tour operator management system built with Laravel, PHP, Tailwind CSS, and MySQL. Features dynamic header menu builders, tour package customization, booking schedule calendars, seat allocation, and automated invoice processing.",
      vi: "Hệ thống đặt tour du lịch và quản lý điều hành tour hiện đại xây dựng trên nền tảng Laravel, PHP, Tailwind CSS và MySQL. Tích hợp bộ tùy chỉnh Menu Header động, tùy biến gói tour, lịch khởi hành, quản lý chỗ ngồi và tự động xuất hóa đơn."
    },
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Blade"],
    githubUrl: "https://github.com/dinhthang-dev/travel-booking-2025",
    features: {
      en: [
        "Dynamic Header Menu Builder with nested multi-level navigation management",
        "Tour package management with pricing tiers, itineraries, and inclusions",
        "Online booking calendar with real-time seat availability tracking",
        "Customer booking CRM panel for tracking payment status and vouchers",
        "Automated booking confirmation emails and PDF invoice generation",
        "SEO-optimized landing pages for featured travel destinations"
      ],
      vi: [
        "Trình quản trị Menu Header động hỗ trợ điều hướng đa cấp linh hoạt",
        "Quản lý gói tour với các mức giá, lịch trình chi tiết và dịch vụ đi kèm",
        "Lịch đặt tour trực tuyến với khả năng theo dõi số chỗ trống theo thời gian thực",
        "Bảng CRM quản lý đơn đặt tour, trạng thái thanh toán và mã giảm giá",
        "Tự động gửi email xác nhận đặt tour và xuất hóa đơn PDF",
        "Tối ưu SEO cho các trang hạ cánh (Landing page) điểm đến du lịch nổi bật"
      ]
    },
    architecture: {
      en: "Monolithic Model-View-Controller (MVC) architecture with Laravel Blade templates, Tailwind CSS styling, and custom Service classes for booking business logic.",
      vi: "Kiến trúc Model-View-Controller (MVC) với Laravel Blade, Tailwind CSS và các Service Class xử lý nghiệp vụ đặt tour chuyên biệt."
    },
    databaseDesign: {
      en: "Relational MySQL schema structuring tours, schedules, bookings, passengers, payments, and dynamic menu nodes with foreign key constraints.",
      vi: "Schema MySQL quan hệ lưu trữ thông tin tour, lịch trình, đơn đặt, hành khách, thanh toán và cây menu động với ràng buộc khóa ngoại."
    },
    performance: {
      caching: {
        en: "Menu structure and destination guides cached in memory for sub-10ms page renders.",
        vi: "Cấu trúc Menu và thông tin điểm đến được cache trong bộ nhớ cho tốc độ tải trang dưới 10ms."
      },
      loadTesting: {
        en: "Optimized SQL queries using Eloquent eager loading to prevent N+1 query problems.",
        vi: "Tối ưu hóa các truy vấn SQL với Eager Loading trong Eloquent ngăn triệt để lỗi N+1 query."
      }
    },
    endpoints: [
      { method: "GET", path: "/tours", description: { en: "Display active tour packages with filter options", vi: "Hiển thị danh sách tour du lịch cùng bộ lọc" } },
      { method: "POST", path: "/booking/checkout", description: { en: "Process tour booking request and payment session", vi: "Xử lý yêu cầu đặt tour và khởi tạo thanh toán" } },
      { method: "GET", path: "/admin/header-menus", description: { en: "Admin panel for building dynamic navigation menus", vi: "Trang quản trị cấu hình menu điều hướng động" } }
    ]
  },
  {
    id: "tino-page-cms",
    image: tinocmsImg,
    title: {
      en: "Tino Page — CMS & Landing Page Builder",
      vi: "Tino Page — Hệ Thống CMS & Tạo Trang Landing Page"
    },
    shortDescription: {
      en: "Modular content management system and landing page generator.",
      vi: "Hệ thống quản trị nội dung module và tạo trang Landing Page."
    },
    description: {
      en: "A customized CMS and landing page builder framework. Allows administrators to dynamically compose landing pages, manage marketing forms, collect customer leads, configure SMTP email notifications, and optimize page SEO settings.",
      vi: "Hệ thống quản trị nội dung CMS và xây dựng trang Landing Page tùy biến. Cho phép quản trị viên sắp xếp khối nội dung linh hoạt, quản lý biểu mẫu tiếp thị, thu thập thông tin khách hàng (Leads), cấu hình email SMTP và tối ưu SEO."
    },
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/dinhthang-dev/tino-page-cms",
    features: {
      en: [
        "Modular block-based CMS for assembling custom landing pages",
        "Form lead capture engine with automated email alert notifications",
        "Built-in SEO management for meta titles, descriptions, and OpenGraph tags",
        "Admin user management with granular access control",
        "Custom media upload manager for images and assets",
        "SMTP email server configuration & test email suite"
      ],
      vi: [
        "Hệ thống CMS dạng khối (Block-based) ghép trang Landing Page linh hoạt",
        "Engine thu thập Lead biểu mẫu kèm thông báo Email tự động về quản trị viên",
        "Tích hợp công cụ quản lý SEO (Meta Title, Description, OpenGraph)",
        "Quản lý tài khoản Admin và phân quyền người dùng chi tiết",
        "Quản lý tải lên tệp tin media (hình ảnh, tài liệu) chuyên nghiệp",
        "Cấu hình máy chủ Email SMTP và công cụ kiểm thử gửi thư"
      ]
    },
    architecture: {
      en: "Modular Architecture powered by Laravel, using dynamic component rendering and custom Blade directives for block composition.",
      vi: "Kiến trúc Module hóa phát triển trên nền Laravel, render component động và Blade Directives để thiết kế các khối trang."
    },
    databaseDesign: {
      en: "Flexible MySQL database storing page blocks, layout templates, lead submissions, and system options.",
      vi: "Cơ sở dữ liệu MySQL lưu trữ các khối trang, mẫu giao diện, thông tin Lead đăng ký và cấu hình hệ thống."
    },
    performance: {
      caching: {
        en: "Generated landing page HTML blocks pre-rendered and cached for lightning-fast page loading.",
        vi: "Các khối HTML Landing Page được render sẵn và cache giúp tốc độ tải trang cực nhanh."
      },
      loadTesting: {
        en: "Zero database overhead for static cached landing page views under high campaign traffic.",
        vi: "Tải trang Landing Page gần như không tốn tài nguyên cơ sở dữ liệu khi chạy chiến dịch marketing."
      }
    },
    endpoints: [
      { method: "GET", path: "/p/:slug", description: { en: "Render public dynamic landing page", vi: "Hiển thị trang Landing Page công khai theo slug" } },
      { method: "POST", path: "/leads/submit", description: { en: "Capture customer lead form submission", vi: "Ghi nhận thông tin biểu mẫu tư vấn từ khách hàng" } },
      { method: "GET", path: "/admin/pages", description: { en: "Admin dashboard to manage pages and layouts", vi: "Trang quản trị danh sách trang và bố cục" } }
    ]
  },
  {
    id: "biolink-app",
    image: biolinkImg,
    title: {
      en: "BioLink — Personal Profile & Link Builder",
      vi: "BioLink — Ứng Dụng Tạo Trang Link Cá Nhân & Profile"
    },
    shortDescription: {
      en: "Cross-platform mobile & web bio link generator app.",
      vi: "Ứng dụng tạo trang liên kết cá nhân và Bio Link đa nền tảng."
    },
    description: {
      en: "A modern cross-platform application for creating personalized bio link landing pages. Built with Ionic Framework, Angular, TypeScript, Tailwind CSS, and Transloco for multi-language support (i18n). Features custom link buttons, QR code generator, dynamic theme styling, and social media integration.",
      vi: "Ứng dụng đa nền tảng hiện đại giúp tạo trang danh thiếp điện tử và Bio Link cá nhân. Phát triển với Ionic Framework, Angular, TypeScript, Tailwind CSS và Transloco hỗ trợ đa ngôn ngữ (i18n). Tích hợp tùy chỉnh nút liên kết, tạo mã QR Code, đổi giao diện (theme) và liên kết mạng xã hội."
    },
    techStack: ["Ionic", "Angular", "TypeScript", "Tailwind CSS", "Transloco (i18n)", "Capacitor"],
    githubUrl: "https://github.com/dinhthang-dev/biolink-profile-app",
    features: {
      en: [
        "Interactive bio link builder with customizable link buttons & social icons",
        "Dynamic theme switching (Dark mode, Gradient themes, Minimalist cards)",
        "Instant custom QR Code generator for quick profile sharing",
        "Multi-language localization using Transloco (English & Vietnamese)",
        "Cross-platform responsive design for Mobile, Tablet, and Desktop views",
        "Fast local asset building with Tailwind CSS optimization"
      ],
      vi: [
        "Trình tạo trang Bio Link tương tác tùy chỉnh các nút liên kết và icon mạng xã hội",
        "Chuyển đổi giao diện linh hoạt (Dark mode, Gradient, Phong cách tối giản)",
        "Tự động tạo mã QR Code tức thì hỗ trợ chia sẻ trang cá nhân",
        "Hỗ trợ đa ngôn ngữ với Transloco (Tiếng Việt & Tiếng Anh)",
        "Thiết kế Responsive tương thích mượt mà trên Mobile, Tablet và Desktop",
        "Tối ưu dung lượng Build sản phẩm nhờ Tailwind CSS"
      ]
    },
    architecture: {
      en: "Single Page Application (SPA) architecture built with Angular standalone components, RxJS state management, and Transloco i18n module.",
      vi: "Kiến trúc Ứng dụng đơn trang (SPA) phát triển bằng Angular Standalone Components, quản lý luồng dữ liệu RxJS và bộ đa ngôn ngữ Transloco."
    },
    databaseDesign: {
      en: "Client-side JSON schema model with LocalStorage persistence and RESTful sync capabilities.",
      vi: "Mô hình dữ liệu JSON phía Client với cơ chế lưu trữ LocalStorage và đồng bộ RESTful API."
    },
    performance: {
      caching: {
        en: "Instant page rendering with zero server latency using Angular client routing.",
        vi: "Tốc độ tải trang tức thì không có độ trễ máy chủ nhờ Angular Client Routing."
      },
      loadTesting: {
        en: "Lighthouse Performance score of 98/100 on mobile devices.",
        vi: "Điểm số hiệu năng Lighthouse đạt 98/100 trên thiết bị di động."
      }
    },
    endpoints: [
      { method: "GET", path: "/bio/:username", description: { en: "Render public bio profile page", vi: "Hiển thị trang Bio cá nhân công khai" } },
      { method: "POST", path: "/api/bio/update", description: { en: "Save bio profile settings and links", vi: "Lưu cấu hình trang Bio và danh sách liên kết" } }
    ]
  }
];

export const getLocalizedProjects = (lang = 'en') => {
  const currentLang = lang.startsWith('vi') ? 'vi' : 'en';
  return projectsData.map(project => ({
    id: project.id,
    image: project.image,
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
