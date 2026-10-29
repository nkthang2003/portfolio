export const content = {
  en: {
    nav: {
      overview: 'Overview',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
      copyEmail: 'Copy Email',
      copied: 'Copied',
      getInTouch: 'Get in Touch',
      title: 'Full-stack Software Engineer',
      roleBadge: 'Full-stack'
    },
    hero: {
      statusBadge: 'Open to Software Engineering Roles',
      location: 'Ho Chi Minh City, Vietnam',
      headlineStart: 'Full-stack Software Engineer experienced in',
      headlineAccent: 'manufacturing systems',
      headlineEnd: 'and client-facing delivery.',
      summary: 'Proven track record leading delivery for an industrial production management system serving 200+ factory workers. Comprehensive lifecycle ownership spanning requirement discovery, QR-code traceability architectures, system stabilization, and client handover.',
      slogan: 'The best software is software that serves people.',
      viewProjectsBtn: 'View Enterprise Projects',
      contactBtn: 'Contact Me',
      downloadCvBtn: 'Download CV (PDF)',
      printCvBtn: 'Print CV',
      emailLabel: 'Email:',
      phoneLabel: 'Phone:',
      linkedinLabel: 'LinkedIn:',
      githubLabel: 'GitHub:',
      profileTitle: 'Full-stack Software Engineer',
      companySub: 'Innotech Vietnam',
      schoolSub: 'UIT VNU-HCM Student / Alumnus',
      expandPhoto: 'Expand',
      coreFocusHeader: 'Core Delivery Focus',
      focusTags: [
        'Manufacturing Systems (MES)',
        'QR Traceability',
        'PHP / CodeIgniter',
        'TypeScript & React',
        'Node.js & Express',
        'Docker & SQL'
      ],
      modalTitle: 'Profile Picture'
    },
    metrics: [
      {
        value: '200+',
        label: 'Factory Workers Served',
        description: 'Shop-floor production management & traceability in continuous operation'
      },
      {
        value: 'Phase 3',
        label: 'Delivery Lead',
        description: 'Led delivery, client handover, and core stabilization at Innotech Vietnam'
      },
      {
        value: '100%',
        label: 'Lifecycle Ownership',
        description: 'Requirements gathering, design, coding, stabilization, and on-site support'
      },
      {
        value: 'UIT',
        label: 'Software Engineering',
        description: 'University of Information Technology (VNU-HCM)'
      }
    ],
    experience: {
      badge: 'Career Milestones',
      title: 'Work Experience',
      subtitle: 'Hands-on software engineering at Innotech Vietnam, delivering high-stakes manufacturing and SaaS solutions for enterprise clients and internal teams.',
      deliverablesHeader: 'Key Deliverables & Responsibilities',
      stackLabel: 'Stack:',
      items: [
        {
          role: 'Software Engineer',
          company: 'Innotech Vietnam',
          period: 'Oct 2025 – Aug 2026',
          type: 'Full-time',
          location: 'Ho Chi Minh City, Vietnam',
          summary: 'Spearheaded enterprise manufacturing and study-abroad software products. Owned delivery cycles, designed QR traceability workflows, and stabilized mission-critical production systems.',
          achievements: [
            'Led Phase 3 delivery of the Cao Phat Manufacturing & Traceability System serving 200+ factory workers across raw material handling, pallet consolidation, and finished goods.',
            'Engineered end-to-end QR-code tracking modules enabling instant historical lookup and rapid recall capabilities.',
            'Redesigned production scheduling and machine resource allocation algorithms, resolving critical production defects prior to formal client handover.',
            'Engineered core modules for Ellacy study-abroad CRM, including applicant tracking pipelines, custom dynamic forms, and RESTful API integrations.'
          ],
          skills: ['PHP (CodeIgniter)', 'TypeScript', 'ReactJS', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'Docker']
        },
        {
          role: 'Software Engineer Intern',
          company: 'Innotech Vietnam',
          period: 'Jul 2025 – Oct 2025',
          type: 'Internship',
          location: 'Ho Chi Minh City, Vietnam',
          summary: 'Contributed to internal HRM and enterprise client systems by maintaining code quality, implementing features, and standardizing Git collaborative workflows.',
          achievements: [
            'Resolved bugs and delivered customer-requested features for internal HR and operational tools.',
            'Maintained structured Git branching strategies, pull requests, and unit testing routines.',
            'Quickly adapted to enterprise coding conventions and collaborative code review processes.'
          ],
          skills: ['TypeScript', 'JavaScript', 'Git', 'REST APIs', 'Debugging']
        }
      ]
    },
    projects: {
      badge: 'Production Systems',
      title: 'Featured Enterprise Projects',
      subtitle: 'Direct engineering contributions covering industrial manufacturing execution (MES), QR traceability workflows, and international education platforms.',
      allCategory: 'All',
      deepDiveBtn: 'Deep Dive System Architecture & Impact',
      verifiedTag: 'Phase 3 Delivery',
      categories: ['All', 'Manufacturing / MES', 'Web & CRM', 'Internal Systems'],
      items: [
        {
          id: 'cao-phat',
          title: 'Cao Phat — Manufacturing Management & Traceability System',
          category: 'Manufacturing / MES',
          role: 'Phase 3 Delivery Lead & Full-stack Engineer',
          client: 'Cao Phat Paper Manufacturing',
          company: 'Innotech Vietnam',
          period: 'Oct 2025 – Aug 2026',
          shortDesc: 'Enterprise MES & end-to-end QR traceability system supporting 200+ factory workers with real-time shop-floor tracking and instant recall capabilities.',
          overview: 'Cao Phat is an industrial paper manufacturing management system. The platform digitizes paper manufacturing operations, providing end-to-end traceability from raw material intake to pallet consolidation and finished goods dispatch.',
          impact: [
            'Serves 200+ factory workers in daily production environment.',
            'Reduced traceability audit and historical recall lookup time significantly.',
            'Eliminated manual scheduling bottlenecks through redesigned resource allocation workflows.',
            'Led Phase 3 delivery and conducted on-site user support and training.'
          ],
          highlights: [
            {
              title: 'Multi-tier QR Code Traceability',
              desc: 'Designed and implemented QR tracking for raw material batches, pallet packing, and warehouse storage to allow instant production history lookups and surgical recall operations.'
            },
            {
              title: 'Phase 3 Delivery Leadership',
              desc: 'Owned the delivery of Phase 3, coordinating across all project phases, gathering factory requirements directly from plant managers, and conducting on-site operator support.'
            },
            {
              title: 'Scheduling & Resource Allocation',
              desc: 'Redesigned production scheduling algorithms to match machine line capacities, resolving legacy defects to ensure rock-solid stability before final client handover.'
            }
          ],
          techStack: ['PHP (CodeIgniter)', 'TypeScript', 'MySQL', 'Docker', 'QR / Barcode Hardware Integration', 'RESTful APIs'],
          icon: 'Factory',
          deliveryTag: 'Phase 3 Delivery'
        },
        {
          id: 'ellacy',
          title: 'Ellacy — Study Abroad Service Platform',
          category: 'Web & CRM',
          role: 'Full-stack Developer',
          client: 'Ellacy Education',
          company: 'Innotech Vietnam',
          period: '2025 – 2026',
          shortDesc: 'End-to-end education consulting CRM featuring applicant tracking, dynamic forms, marketing campaigns, and counselor pipeline management.',
          overview: 'Ellacy is an enterprise management platform built for overseas study consulting services. It unifies lead ingestion, applicant progression, counselor assignment, and marketing campaign attribution into an intuitive web application.',
          impact: [
            'Streamlined candidate progression tracking across multiple admissions phases.',
            'Accelerated response times for internal education consultants and managers.',
            'Built resilient RESTful APIs with clean separation of concerns and robust data validation.'
          ],
          highlights: [
            {
              title: 'Applicant Pipeline & Tracking',
              desc: 'Built full applicant lifecycle tracking with custom progression stages, note attachments, and automated status notifications.'
            },
            {
              title: 'Dynamic Application Forms',
              desc: 'Engineered responsive multi-step forms handling international student documentation, visa status, and academic background.'
            },
            {
              title: 'Campaign & Lead Management',
              desc: 'Designed lead ingestion APIs connecting ad channels to counselors with automatic attribution and conversion rate tracking.'
            }
          ],
          techStack: ['ReactJS', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'RESTful APIs'],
          icon: 'GraduationCap'
        },
        {
          id: 'enterprise-hrm',
          title: 'Innotech Internal HRM & Enterprise Client Systems',
          category: 'Internal Systems',
          role: 'Software Engineer Intern',
          client: 'Internal Innotech Operations',
          company: 'Innotech Vietnam',
          period: 'Jul 2025 – Oct 2025',
          shortDesc: 'Internal human resource management system and enterprise client platforms focused on process automation, bug triage, and Git collaboration.',
          overview: 'Contributed to company-wide internal HRM platform and client customer portals, enhancing stability, writing modular components, and practicing disciplined software lifecycle management.',
          impact: [
            'Diagnosed and resolved critical software issues, increasing internal team productivity.',
            'Adhered to enterprise Git branching conventions and automated review workflows.'
          ],
          highlights: [
            {
              title: 'Feature Enhancement',
              desc: 'Implemented user management, attendance tracking, and reporting features for corporate operations.'
            },
            {
              title: 'Quality & Stabilization',
              desc: 'Conducted root-cause analysis on production bug reports, wrote regression patches, and streamlined test cases.'
            }
          ],
          techStack: ['TypeScript', 'JavaScript', 'Git', 'REST APIs', 'SQL'],
          icon: 'Users'
        }
      ]
    },
    modal: {
      roleLabel: 'Role',
      clientLabel: 'Client / Org',
      companyLabel: 'Contractor / Employer',
      overviewHeader: 'Executive Overview',
      highlightsHeader: 'Key Technical Highlights & Modules',
      impactHeader: 'Measurable Impact & Client Handover',
      techStackHeader: 'Technologies & Tools Employed',
      verifiedDelivery: 'Verified production delivery at Innotech Vietnam',
      closeBtn: 'Close Window'
    },
    skills: {
      badge: 'Technical Capabilities',
      title: 'Skills & Engineering Matrix',
      subtitle: 'Solid full-stack engineering proficiency spanning systems architecture, databases, modern web interfaces, and modern AI development tooling.',
      searchPlaceholder: 'Search skill (e.g. React, PHP, SQL)...',
      clearSearch: 'Clear',
      competenciesLabel: 'core competencies',
      productionProven: 'Production proven',
      categories: [
        {
          name: 'Programming Languages',
          icon: 'Code2',
          skills: [
            { name: 'TypeScript', level: 'Advanced', desc: 'Type-safe architectures, modern ESNext, interface modeling' },
            { name: 'JavaScript', level: 'Advanced', desc: 'Async/await, DOM manipulation, functional patterns' },
            { name: 'PHP', level: 'Proficient', desc: 'Enterprise backend development, CodeIgniter framework' },
            { name: 'C#', level: 'Proficient', desc: '.NET ecosystem, object-oriented software engineering' }
          ]
        },
        {
          name: 'Backend & Systems',
          icon: 'Server',
          skills: [
            { name: 'PHP (CodeIgniter)', level: 'Advanced', desc: 'MVC architecture, ORM, batch processing, MES systems' },
            { name: 'Node.js & Express.js', level: 'Advanced', desc: 'RESTful API design, middleware, auth & JWT' },
            { name: 'ASP.NET Core', level: 'Proficient', desc: 'Enterprise Web APIs, dependency injection, C#' },
            { name: 'RESTful APIs', level: 'Advanced', desc: 'Contract design, pagination, caching, status code conventions' }
          ]
        },
        {
          name: 'Frontend & UI Engineering',
          icon: 'Layout',
          skills: [
            { name: 'ReactJS', level: 'Advanced', desc: 'Hooks, state management, performance optimization, reusable components' },
            { name: 'HTML5 & Modern CSS', level: 'Advanced', desc: 'Semantic markup, Tailwind CSS, flexbox/grid, responsive layouts' },
            { name: 'React Native', level: 'Proficient', desc: 'Cross-platform mobile development, native device integrations' }
          ]
        },
        {
          name: 'Databases & Storage',
          icon: 'Database',
          skills: [
            { name: 'MySQL', level: 'Advanced', desc: 'Schema indexing, query optimization, enterprise manufacturing data' },
            { name: 'PostgreSQL', level: 'Advanced', desc: 'Relational modeling, complex joins, JSONB storage' },
            { name: 'SQL Server', level: 'Proficient', desc: 'Enterprise database administration, stored procedures' }
          ]
        },
        {
          name: 'DevOps, Hardware & Tools',
          icon: 'Wrench',
          skills: [
            { name: 'Docker', level: 'Proficient', desc: 'Containerization, docker-compose, reproducible environments' },
            { name: 'Git & GitHub', level: 'Advanced', desc: 'Branching strategies, Gitflow, pull request reviews' },
            { name: 'QR / Barcode Integration', level: 'Advanced', desc: 'Industrial scanner devices, encoding/decoding, traceability' }
          ]
        },
        {
          name: 'AI Tools',
          icon: 'Sparkles',
          skills: [
            { name: 'Google Antigravity', level: 'Advanced', desc: 'Agentic software development, automated testing, modern workflows' },
            { name: 'Claude Code', level: 'Advanced', desc: 'Architecture design, codebase refactoring, code quality audits' },
            { name: 'OpenAI Codex', level: 'Proficient', desc: 'Accelerated scaffolding, test generation, documentation' }
          ]
        }
      ]
    },
    education: {
      badge: 'Academic Background',
      title: 'Education & Foundation',
      subtitle: "Formal software engineering training at one of Vietnam's top engineering universities.",
      institution: 'University of Information Technology (VNU-HCM)',
      degree: 'Bachelor’s Degree in Software Engineering',
      period: 'Since Sep 2021',
      location: 'Ho Chi Minh City, Vietnam',
      activeProgram: 'Active Program',
      majorBadge: 'Software Engineering Major',
      profileHeader: 'Program Profile',
      description: "One of Vietnam's premier national universities for computer science and software engineering. Rigorous curriculum covering software design patterns, enterprise system architecture, database optimization, algorithms, and distributed systems.",
      courseworkHeader: 'Key Coursework & Principles',
      coursework: [
        'Object-Oriented Software Design',
        'Database Management Systems',
        'Software Architecture & Design Patterns',
        'Operating Systems & Distributed Systems',
        'Web Application Engineering',
        'Software Testing & Quality Assurance'
      ]
    },
    contact: {
      badge: 'Recruiter & Manager Inquiries',
      title: 'Get In Touch',
      subtitle: 'Whether you are discussing full-time software engineering roles, enterprise system development, or technical interviews, I would love to connect.',
      emailCardHeader: 'Email Address',
      phoneCardHeader: 'Phone / Zalo',
      locationCardHeader: 'Location & Mobility',
      mobilityNote: 'Available for on-site & hybrid roles',
      formTitle: 'Send a Direct Message',
      formSubtitle: 'Opens your email client with your message pre-formatted.',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Jane Doe',
      emailFieldLabel: 'Your Email *',
      emailPlaceholder: 'e.g. recruiter@company.com',
      companyLabel: 'Company / Organization',
      companyPlaceholder: 'e.g. Acme Corp',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g. Full-stack Software Engineer Position',
      messageLabel: 'Message / Job Scope *',
      messagePlaceholder: 'Tell me about your team, tech stack, or interview availability...',
      responseTime: 'Average response time: < 24h',
      sendBtn: 'Send Message'
    },
    footer: {
      bio: 'Full-stack Software Engineer experienced in manufacturing systems, QR traceability, and client-facing product delivery.',
      affiliations: 'Innotech Vietnam Alumni • UIT VNU-HCM',
      navHeader: 'Navigation',
      connectHeader: 'Recruiter Connect',
      statusNote: 'Open to Software Engineering roles in Vietnam & remote.',
      backToTop: 'Back to top',
      copyright: 'Built with React, Tailwind CSS & Vite.'
    },
    toasts: {
      copiedEmail: 'Copied email to clipboard:',
      copiedPhone: 'Copied phone to clipboard:'
    }
  },

  vi: {
    nav: {
      overview: 'Tổng quan',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      education: 'Học vấn',
      contact: 'Liên hệ',
      copyEmail: 'Sao chép Email',
      copied: 'Đã sao chép',
      getInTouch: 'Kết nối ngay',
      title: 'Kỹ sư Phần mềm Full-stack',
      roleBadge: 'Full-stack'
    },
    hero: {
      statusBadge: 'Sẵn sàng tiếp nhận cơ hội việc làm',
      location: 'TP. Hồ Chí Minh, Việt Nam',
      headlineStart: 'Kỹ sư Phần mềm Full-stack dày dặn kinh nghiệm trong',
      headlineAccent: 'hệ thống sản xuất công nghiệp',
      headlineEnd: 'và bàn giao dự án khách hàng.',
      summary: 'Dẫn dắt thành công bàn giao hệ thống quản trị sản xuất phục vụ hơn 200 công nhân nhà máy. Bao quát toàn bộ vòng đời phần mềm từ khảo sát yêu cầu, kiến trúc truy xuất nguồn gốc bằng mã QR, tối ưu ổn định hệ thống đến bàn giao và hỗ trợ vận hành thực địa.',
      slogan: 'Phần mềm phục vụ được cho con người là phần mềm tốt nhất.',
      viewProjectsBtn: 'Khám phá các Dự án Doanh nghiệp',
      contactBtn: 'Liên hệ với tôi',
      downloadCvBtn: 'Tải CV (PDF)',
      printCvBtn: 'In CV',
      emailLabel: 'Email:',
      phoneLabel: 'Điện thoại:',
      linkedinLabel: 'LinkedIn:',
      githubLabel: 'GitHub:',
      profileTitle: 'Kỹ sư Phần mềm Full-stack',
      companySub: 'Innotech Vietnam',
      schoolSub: 'Sinh viên / Cựu sinh viên UIT ĐHQG-HCM',
      expandPhoto: 'Xem ảnh',
      coreFocusHeader: 'Lĩnh vực Chuyên môn Trọng tâm',
      focusTags: [
        'Hệ thống Quản lý Sản xuất (MES)',
        'Truy xuất nguồn gốc QR Code',
        'PHP / CodeIgniter',
        'TypeScript & React',
        'Node.js & Express',
        'Docker & Cơ sở dữ liệu SQL'
      ],
      modalTitle: 'Ảnh hồ sơ'
    },
    metrics: [
      {
        value: '200+',
        label: 'Công nhân Nhà máy Sử dụng',
        description: 'Vận hành liên tục trên sàn sản xuất và quản trị truy xuất nguồn gốc'
      },
      {
        value: 'Phase 3',
        label: 'Trưởng nhóm Bàn giao',
        description: 'Dẫn dắt giai đoạn 3, bàn giao trực tiếp và ổn định lỗi cốt lõi tại Innotech Vietnam'
      },
      {
        value: '100%',
        label: 'Bao quát Vòng đời Dự án',
        description: 'Khảo sát yêu cầu, thiết kế kiến trúc, lập trình, ổn định và hỗ trợ người dùng'
      },
      {
        value: 'UIT',
        label: 'Kỹ thuật Phần mềm',
        description: 'Trường Đại học Công nghệ Thông tin (ĐHQG-HCM)'
      }
    ],
    experience: {
      badge: 'Cột mốc Sự nghiệp',
      title: 'Kinh nghiệm Làm việc',
      subtitle: 'Kinh nghiệm lập trình thực chiến tại Innotech Vietnam, bàn giao các sản phẩm phần mềm sản xuất và SaaS quan trọng cho khách hàng doanh nghiệp.',
      deliverablesHeader: 'Trách nhiệm & Đóng góp Cốt lõi',
      stackLabel: 'Công nghệ:',
      items: [
        {
          role: 'Kỹ sư Phần mềm (Software Engineer)',
          company: 'Innotech Vietnam',
          period: 'Tháng 10/2025 – Tháng 08/2026',
          type: 'Toàn thời gian (Full-time)',
          location: 'TP. Hồ Chí Minh, Việt Nam',
          summary: 'Đảm nhận phát triển các hệ thống sản xuất công nghiệp và nền tảng dịch vụ du học. Làm chủ các chu kỳ bàn giao, thiết kế quy trình truy xuất nguồn gốc QR và ổn định hệ thống vận hành thực tế.',
          achievements: [
            'Dẫn dắt bàn giao Giai đoạn 3 hệ thống Quản lý Sản xuất & Truy xuất nguồn gốc Cao Phát phục vụ hơn 200 công nhân qua các công đoạn nguyên liệu, pallet và thành phẩm.',
            'Thiết kế và hiện thực mô-đun truy xuất QR-code end-to-end, cho phép tra cứu lịch sử sản xuất tức thì và thu hồi sản phẩm chính xác.',
            'Tái thiết kế quy trình điều độ sản xuất và phân bổ tài nguyên máy móc; giải quyết dứt điểm các lỗi nghiêm trọng để ổn định module cốt lõi trước khi bàn giao.',
            'Phát triển các module trọng tâm cho nền tảng CRM du học Ellacy: quản lý ứng viên, form hồ sơ động, chiến dịch marketing và tích hợp RESTful API.'
          ],
          skills: ['PHP (CodeIgniter)', 'TypeScript', 'ReactJS', 'Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'Docker']
        },
        {
          role: 'Thực tập sinh Kỹ sư Phần mềm',
          company: 'Innotech Vietnam',
          period: 'Tháng 07/2025 – Tháng 10/2025',
          type: 'Thực tập (Internship)',
          location: 'TP. Hồ Chí Minh, Việt Nam',
          summary: 'Đóng góp phát triển hệ thống HRM nội bộ và các sản phẩm phần mềm khách hàng, duy trì chất lượng mã nguồn và chuẩn hóa quy trình làm việc nhóm qua Git.',
          achievements: [
            'Sửa lỗi và phát triển các tính năng hỗ trợ vận hành quản trị nhân sự và nghiệp vụ khách hàng.',
            'Thực hiện nghiêm túc quy trình phân nhánh Git, pull request và kiểm thử tính năng.',
            'Thích ứng nhanh chóng với các quy chuẩn lập trình doanh nghiệp và review mã nguồn theo nhóm.'
          ],
          skills: ['TypeScript', 'JavaScript', 'Git', 'REST APIs', 'Debugging']
        }
      ]
    },
    projects: {
      badge: 'Hệ thống Đã Triển khai',
      title: 'Dự án Doanh nghiệp Nổi bật',
      subtitle: 'Các dự án thực chiến bao quát hệ thống điều hành sản xuất công nghiệp (MES), quy trình truy xuất QR và nền tảng web dịch vụ quốc tế.',
      allCategory: 'Tất cả',
      deepDiveBtn: 'Phân tích Chi tiết Kiến trúc & Đóng góp',
      verifiedTag: 'Bàn giao Giai đoạn 3',
      categories: ['Tất cả', 'Sản xuất / MES', 'Web & CRM', 'Hệ thống Nội bộ'],
      items: [
        {
          id: 'cao-phat',
          title: 'Cao Phát — Hệ thống Quản trị Sản xuất & Truy xuất Nguồn gốc',
          category: 'Sản xuất / MES',
          role: 'Trưởng nhóm Bàn giao Giai đoạn 3 & Kỹ sư Full-stack',
          client: 'Công ty Sản xuất Giấy Cao Phát',
          company: 'Innotech Vietnam',
          period: '10/2025 – 08/2026',
          shortDesc: 'Hệ thống MES doanh nghiệp & truy xuất nguồn gốc QR toàn diện phục vụ 200+ công nhân nhà máy, theo dõi sản xuất theo thời gian thực.',
          overview: 'Cao Phát là hệ thống quản trị sản xuất giấy công nghiệp. Nền tảng số hóa toàn bộ dây chuyền sản xuất giấy, cung cấp khả năng truy xuất nguồn gốc từ khâu nhập nguyên liệu thô đến đóng gói pallet và xuất kho thành phẩm.',
          impact: [
            'Phục vụ ổn định hơn 200 công nhân nhà máy trong vận hành sản xuất hàng ngày.',
            'Rút ngắn đáng kể thời gian tra cứu lịch sử sản xuất và thực hiện nghiệp vụ thu hồi.',
            'Loại bỏ tắc nghẽn lập lịch thủ công nhờ quy trình phân bổ tài nguyên tối ưu.',
            'Trực tiếp phụ trách bàn giao Giai đoạn 3 và đào tạo, hỗ trợ người dùng tại xưởng.'
          ],
          highlights: [
            {
              title: 'Truy xuất nguồn gốc bằng mã QR đa cấp',
              desc: 'Thiết kế và triển khai quy trình gắn mã QR cho lô nguyên liệu, kiện pallet và kho thành phẩm, cho phép tra cứu phả hệ sản xuất tức thì.'
            },
            {
              title: 'Dẫn dắt bàn giao Giai đoạn 3',
              desc: 'Làm chủ tiến độ Phase 3, phối hợp liên phòng ban, trực tiếp khảo sát nghiệp vụ tại xưởng cùng quản lý nhà máy và hỗ trợ công nhân sử dụng.'
            },
            {
              title: 'Điều độ sản xuất & Phân bổ máy móc',
              desc: 'Thiết kế lại luồng phân bổ công suất máy, khắc phục triệt để các lỗi logic tồn đọng để hệ thống đạt độ tin cậy cao nhất trước khi nghiệm thu.'
            }
          ],
          techStack: ['PHP (CodeIgniter)', 'TypeScript', 'MySQL', 'Docker', 'Tích hợp Máy quét QR/Barcode', 'RESTful APIs'],
          icon: 'Factory',
          deliveryTag: 'Bàn giao Giai đoạn 3'
        },
        {
          id: 'ellacy',
          title: 'Ellacy — Nền tảng Dịch vụ Tư vấn Du học',
          category: 'Web & CRM',
          role: 'Kỹ sư Full-stack',
          client: 'Tổ chức Giáo dục Ellacy',
          company: 'Innotech Vietnam',
          period: '2025 – 2026',
          shortDesc: 'Nền tảng CRM tư vấn du học khép kín: theo dõi tiến trình ứng viên, form nộp hồ sơ động, quản lý chiến dịch tiếp thị và phễu tư vấn.',
          overview: 'Ellacy là hệ thống quản trị nghiệp vụ dành riêng cho dịch vụ tư vấn du học quốc tế. Phần mềm hợp nhất tiếp nhận khách hàng tiềm năng, theo dõi hồ sơ visa, phân bổ chuyên viên và đo lường hiệu quả chiến dịch tiếp thị.',
          impact: [
            'Chuẩn hóa và đẩy nhanh tiến trình xử lý hồ sơ ứng viên qua từng giai đoạn tuyển sinh.',
            'Tăng tốc độ phản hồi và năng suất làm việc của đội ngũ tư vấn viên.',
            'Xây dựng hệ thống RESTful API an toàn, phân tách kiến trúc rõ ràng và xác thực dữ liệu chặt chẽ.'
          ],
          highlights: [
            {
              title: 'Theo dõi & Quản lý hồ sơ ứng viên',
              desc: 'Xây dựng quy trình theo dõi ứng viên toàn diện với các trạng thái tuyển sinh tùy biến, đính kèm ghi chú và thông báo tự động.'
            },
            {
              title: 'Hệ thống Form hồ sơ động',
              desc: 'Phát triển form thông tin đa bước responsive, xử lý tài liệu du học, hồ sơ visa và quá trình học tập của học viên.'
            },
            {
              title: 'Quản trị Chiến dịch & Phân bổ Lead',
              desc: 'Thiết kế API tiếp nhận lead từ các kênh quảng cáo, tự động phân bổ cho chuyên viên tư vấn kèm thống kê tỷ lệ chuyển đổi.'
            }
          ],
          techStack: ['ReactJS', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'RESTful APIs'],
          icon: 'GraduationCap'
        },
        {
          id: 'enterprise-hrm',
          title: 'Hệ thống Quản trị Nhân sự & Khách hàng Nội bộ Innotech',
          category: 'Hệ thống Nội bộ',
          role: 'Thực tập sinh Kỹ sư Phần mềm',
          client: 'Khối Vận hành Nội bộ Innotech',
          company: 'Innotech Vietnam',
          period: '07/2025 – 10/2025',
          shortDesc: 'Hệ thống quản lý nhân sự nội bộ và các cổng thông tin khách hàng, tập trung vào tự động hóa quy trình, xử lý lỗi và phối hợp Git.',
          overview: 'Đóng góp phát triển nền tảng HRM toàn công ty và các cổng hỗ trợ khách hàng, tối ưu độ ổn định, viết các component dùng lại và rèn luyện kỷ luật quản trị vòng đời mã nguồn.',
          impact: [
            'Phân tích nguyên nhân gốc rễ và sửa chữa các lỗi hệ thống, nâng cao hiệu suất làm việc nội bộ.',
            'Tuân thủ quy chuẩn phân nhánh Git và quy trình review tự động của công ty.'
          ],
          highlights: [
            {
              title: 'Phát triển tính năng',
              desc: 'Hiện thực module quản lý tài khoản người dùng, theo dõi chấm công và kết xuất báo cáo vận hành.'
            },
            {
              title: 'Đảm bảo chất lượng & Ổn định',
              desc: 'Truy vết và vá lỗi các sự cố được báo cáo từ môi trường staging, củng cố test cases cho hệ thống.'
            }
          ],
          techStack: ['TypeScript', 'JavaScript', 'Git', 'REST APIs', 'SQL'],
          icon: 'Users'
        }
      ]
    },
    modal: {
      roleLabel: 'Vai trò đảm nhiệm',
      clientLabel: 'Khách hàng / Đơn vị thụ hưởng',
      companyLabel: 'Đơn vị thực hiện',
      overviewHeader: 'Tổng quan Dự án',
      highlightsHeader: 'Điểm nổi bật Kỹ thuật & Các Phân hệ',
      impactHeader: 'Hiệu quả Đo lường & Bàn giao Thực tế',
      techStackHeader: 'Công nghệ & Công cụ Sử dụng',
      verifiedDelivery: 'Dự án bàn giao thực tế tại Innotech Vietnam',
      closeBtn: 'Đóng Cửa sổ'
    },
    skills: {
      badge: 'Năng lực Kỹ thuật',
      title: 'Ma trận Kỹ năng Chuyên môn',
      subtitle: 'Năng lực kỹ thuật Full-stack vững chắc bao quát kiến trúc hệ thống, cơ sở dữ liệu, giao diện web hiện đại và công cụ lập trình AI thế hệ mới.',
      searchPlaceholder: 'Tìm kiếm kỹ năng (ví dụ: React, PHP, SQL, Docker)...',
      clearSearch: 'Xóa tìm kiếm',
      competenciesLabel: 'năng lực cốt lõi',
      productionProven: 'Đã ứng dụng thực tế',
      categories: [
        {
          name: 'Ngôn ngữ Lập trình',
          icon: 'Code2',
          skills: [
            { name: 'TypeScript', level: 'Nâng cao', desc: 'Kiến trúc kiểu chặt chẽ, modern ESNext, thiết kế interface' },
            { name: 'JavaScript', level: 'Nâng cao', desc: 'Lập trình bất đồng bộ, thao tác DOM, functional patterns' },
            { name: 'PHP', level: 'Thành thạo', desc: 'Lập trình backend doanh nghiệp, kiến trúc MVC CodeIgniter' },
            { name: 'C#', level: 'Thành thạo', desc: 'Hệ sinh thái .NET, lập trình hướng đối tượng chuyên sâu' }
          ]
        },
        {
          name: 'Backend & Kiến trúc Hệ thống',
          icon: 'Server',
          skills: [
            { name: 'PHP (CodeIgniter)', level: 'Nâng cao', desc: 'Kiến trúc MVC, xử lý batch dữ liệu, hệ thống điều hành sản xuất MES' },
            { name: 'Node.js & Express.js', level: 'Nâng cao', desc: 'Thiết kế RESTful API, middleware, xác thực người dùng JWT' },
            { name: 'ASP.NET Core', level: 'Thành thạo', desc: 'Xây dựng Web API doanh nghiệp, Dependency Injection, C#' },
            { name: 'RESTful APIs', level: 'Nâng cao', desc: 'Chuẩn hóa thiết kế API contract, phân trang, caching, HTTP status' }
          ]
        },
        {
          name: 'Frontend & Giao diện Người dùng',
          icon: 'Layout',
          skills: [
            { name: 'ReactJS', level: 'Nâng cao', desc: 'React Hooks, quản trị state, tối ưu hiệu năng render, component tái sử dụng' },
            { name: 'HTML5 & Modern CSS', level: 'Nâng cao', desc: 'Semantic markup, Tailwind CSS, flexbox/grid, thiết kế responsive' },
            { name: 'React Native', level: 'Thành thạo', desc: 'Phát triển ứng dụng di động đa nền tảng, tích hợp tính năng thiết bị' }
          ]
        },
        {
          name: 'Cơ sở Dữ liệu & Lưu trữ',
          icon: 'Database',
          skills: [
            { name: 'MySQL', level: 'Nâng cao', desc: 'Đánh index tối ưu truy vấn, xử lý dữ liệu dây chuyền sản xuất lớn' },
            { name: 'PostgreSQL', level: 'Nâng cao', desc: 'Mô hình hóa quan hệ, complex query joins, lưu trữ JSONB' },
            { name: 'SQL Server', level: 'Thành thạo', desc: 'Quản trị cơ sở dữ liệu doanh nghiệp, stored procedures' }
          ]
        },
        {
          name: 'DevOps, Phần cứng & Công cụ',
          icon: 'Wrench',
          skills: [
            { name: 'Docker', level: 'Thành thạo', desc: 'Đóng gói container, docker-compose, môi trường phát triển đồng nhất' },
            { name: 'Git & GitHub', level: 'Nâng cao', desc: 'Chiến lược phân nhánh Gitflow, review mã nguồn qua pull request' },
            { name: 'Tích hợp Máy quét QR / Barcode', level: 'Nâng cao', desc: 'Tích hợp thiết bị đọc mã công nghiệp, mã hóa/giải mã truy xuất' }
          ]
        },
        {
          name: 'Công cụ AI',
          icon: 'Sparkles',
          skills: [
            { name: 'Google Antigravity', level: 'Nâng cao', desc: 'Phát triển phần mềm dạng agentic, kiểm thử tự động, workflow hiện đại' },
            { name: 'Claude Code', level: 'Nâng cao', desc: 'Thiết kế kiến trúc, tái cấu trúc codebase, kiểm tra chất lượng mã nguồn' },
            { name: 'OpenAI Codex', level: 'Thành thạo', desc: 'Tăng tốc viết boilerplate, tạo unit test, chuẩn hóa tài liệu kỹ thuật' }
          ]
        }
      ]
    },
    education: {
      badge: 'Nền tảng Học vấn',
      title: 'Đào tạo & Học vấn Chính quy',
      subtitle: 'Được đào tạo chính quy ngành Kỹ thuật Phần mềm tại một trong những trường đại học công nghệ hàng đầu Việt Nam.',
      institution: 'Trường Đại học Công nghệ Thông tin (ĐHQG-HCM)',
      degree: 'Cử nhân Kỹ thuật Phần mềm (Software Engineering)',
      period: 'Từ tháng 09/2021',
      location: 'TP. Hồ Chí Minh, Việt Nam',
      activeProgram: 'Đang theo học',
      majorBadge: 'Chuyên ngành Kỹ thuật Phần mềm',
      profileHeader: 'Hồ sơ Chương trình Đào tạo',
      description: 'Trường đại học trọng điểm quốc gia về công nghệ thông tin và kỹ thuật phần mềm. Chương trình đào tạo chuẩn quốc tế với nền tảng toán học, giải thuật, kiến trúc hệ thống doanh nghiệp, cơ sở dữ liệu nâng cao và hệ thống phân tán.',
      courseworkHeader: 'Môn học Trọng tâm & Nền tảng Chuyên môn',
      coursework: [
        'Thiết kế Phần mềm Hướng đối tượng (OOD)',
        'Hệ Quản trị Cơ sở Dữ liệu',
        'Kiến trúc Phần mềm & Design Patterns',
        'Hệ điều hành & Hệ thống Phân tán',
        'Kỹ thuật Phát triển Ứng dụng Web',
        'Kiểm thử & Đảm bảo Chất lượng Phần mềm'
      ]
    },
    contact: {
      badge: 'Dành cho Nhà Tuyển dụng & Quản lý Kỹ thuật',
      title: 'Kết nối Trực tiếp',
      subtitle: 'Tôi luôn sẵn sàng trao đổi về các cơ hội nghề nghiệp kỹ sư phần mềm, phát triển hệ thống doanh nghiệp hoặc phỏng vấn kỹ thuật.',
      emailCardHeader: 'Địa chỉ Email',
      phoneCardHeader: 'Số Điện thoại / Zalo',
      locationCardHeader: 'Khu vực & Hình thức Làm việc',
      mobilityNote: 'Sẵn sàng làm việc trực tiếp tại văn phòng (On-site) hoặc Hybrid',
      formTitle: 'Gửi Tin nhắn Trực tiếp',
      formSubtitle: 'Tự động mở trình gửi email với nội dung tin nhắn được định dạng sẵn.',
      nameLabel: 'Họ và Tên của bạn *',
      namePlaceholder: 'Ví dụ: Nguyễn Văn A',
      emailFieldLabel: 'Email liên hệ *',
      emailPlaceholder: 'Ví dụ: recruiter@company.com',
      companyLabel: 'Công ty / Tổ chức',
      companyPlaceholder: 'Ví dụ: Acme Corp',
      subjectLabel: 'Tiêu đề Thư',
      subjectPlaceholder: 'Ví dụ: Cơ hội việc làm Kỹ sư Phần mềm Full-stack',
      messageLabel: 'Nội dung Tin nhắn / Phạm vi Công việc *',
      messagePlaceholder: 'Chia sẻ thông tin về vị trí tuyển dụng, tech stack của team hoặc lịch hẹn phỏng vấn...',
      responseTime: 'Thời gian phản hồi thông thường: < 24 giờ',
      sendBtn: 'Gửi Tin nhắn'
    },
    footer: {
      bio: 'Kỹ sư Phần mềm Full-stack giàu kinh nghiệm trong hệ thống sản xuất công nghiệp, truy xuất nguồn gốc QR và bàn giao sản phẩm khách hàng.',
      affiliations: 'Thành viên Innotech Vietnam • Cựu sinh viên/Sinh viên UIT ĐHQG-HCM',
      navHeader: 'Điều hướng',
      connectHeader: 'Kênh Kết nối',
      statusNote: 'Sẵn sàng tiếp nhận các cơ hội Kỹ sư Phần mềm tại Việt Nam và Remote.',
      backToTop: 'Về đầu trang',
      copyright: 'Xây dựng với React, Tailwind CSS & Vite.'
    },
    toasts: {
      copiedEmail: 'Đã sao chép email vào clipboard:',
      copiedPhone: 'Đã sao chép số điện thoại vào clipboard:'
    }
  }
};

export const personalInfo = {
  name: "Nguyen Khac Thang",
  email: "nkthang2003@gmail.com",
  phone: "033 507 4482",
  phoneFormatted: "033 507 4482",
  location: "Ho Chi Minh City, Vietnam",
  linkedin: "https://www.linkedin.com/in/nguyen-khac-thang-8b60ba1b8/",
  linkedinDisplay: "linkedin.com/in/nguyen-khac-thang-8b60ba1b8",
  github: "https://github.com/nkthang2003",
  githubDisplay: "github.com/nkthang2003",
  avatar: "./images/avatar-square.webp",
  avatarJpg: "./images/avatar-square.jpg",
  avatarPortrait: "./images/avatar-portrait.webp",
  uitLogo: "./images/uit-logo.png",
  cvPdf: "./CV_Nguyen_Khac_Thang.pdf"
};
