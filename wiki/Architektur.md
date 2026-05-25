## Architektur

### System-Architektur

```
┌─────────────────────────────────────────────────┐
│                  Client Layer                    │
│              (Next.js Frontend)                  │
│        React Components + Tailwind CSS           │
└─────────────────────────────────────────────────┘
                       │
                       │ HTTP/REST
                       ▼
┌─────────────────────────────────────────────────┐
│              API Gateway Layer                   │
│           (Next.js API Routes)                   │
└─────────────────────────────────────────────────┘
                       │
                       │ REST API
                       ▼
┌─────────────────────────────────────────────────┐
│             Backend Layer                        │
│          (Spring Boot REST API)                  │
│   ┌─────────────────────────────────────┐       │
│   │     Controller Layer                │       │
│   └─────────────────────────────────────┘       │
│   ┌─────────────────────────────────────┐       │
│   │     Service Layer                   │       │
│   └─────────────────────────────────────┘       │
│   ┌─────────────────────────────────────┐       │
│   │     Repository Layer (JPA)          │       │
│   └─────────────────────────────────────┘       │
└─────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────┐
│              Database Layer                      │
│              (PostgreSQL)                        │
└─────────────────────────────────────────────────┘
```

### Frontend-Architektur (Next.js)

```
frontend/
├── app/                        # Next.js App Router
│   ├── (auth)/                # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── products/              # Product pages
│   │   ├── page.tsx          # Product list
│   │   └── [id]/             # Product detail
│   ├── orders/                # Order management
│   ├── profile/               # User profile
│   └── layout.tsx            # Root layout
├── components/                # React components
│   ├── ui/                   # Reusable UI components
│   ├── forms/                # Form components
│   └── layouts/              # Layout components
├── lib/                       # Utility functions
│   ├── api/                  # API client functions
│   └── utils/                # Helper functions
├── hooks/                     # Custom React hooks
├── types/                     # TypeScript types
├── styles/                    # Global styles
│   └── globals.css           # Tailwind imports
├── public/                    # Static assets
└── tailwind.config.js        # Tailwind configuration
```

**Komponenten-Hierarchie:**

- **Page Components**: Route-spezifische Seiten
- **Layout Components**: Wiederverwendbare Layouts (Header, Footer, Sidebar)
- **Feature Components**: Geschäftslogik-spezifische Komponenten
- **UI Components**: Atomare, wiederverwendbare Komponenten (Buttons, Cards, Inputs)

---
