# E-commerce Template with TrustlessWork Integration

A modern e-commerce template powered by ScaffoldRust, featuring seamless integration with TrustlessWork's blockchain-powered Escrow-as-a-Service platform. This template enables secure, milestone-based payments with zero custodians and maximum flexibility for your e-commerce platform.

## 🚀 Features

- **TrustlessWork Integration**: Secure, milestone-based payments with zero custodians
- **E-commerce Essentials**: Product management, cart system, and order processing
- **Passkey Authentication**: Secure, passwordless authentication
- **Rust & Soroban Smart Contracts**: Scalable payment processing on Stellar
- **Next.js 14** with App Router for modern web development
- **Supabase SSR** for authentication and data storage
- **Tailwind CSS & shadcn/ui** for modern UI components
- **Optimized Build** using Bun for fast dependency management

## 🏗 Tech Stack

- **Frontend:** Next.js 14 + App Router
- **Backend:** Supabase (Database & Auth)
- **Styling:** Tailwind CSS & shadcn/ui
- **Package Management:** Bun
- **Smart Contracts:** Rust & Soroban (Stellar integration)
- **Security:** Passkeys, protected routes, input validation, rate limiting

---

## 📂 Project Structure

```
ecommerce-trustlesswork-template/
├── .husky/                 # Pre-commit hooks
├── apps/
│   ├── admin/              # Admin panel
│   ├── contracts/          # Smart contracts
│   ├── webapp/             # Main Next.js application
│   │   ├── .next/          # Build artifacts
│   │   ├── app/            # Next.js App Router pages
│   │   ├── hooks/          # React hooks
│   │   ├── lib/            # Utility functions and helpers
│   │   ├── public/         # Static assets
│   │   ├── .env            # Environment variables
│   │   ├── .env.sample     # Example environment file
│   │   ├── components.json # shadcn/ui components
│   │   ├── eslint.config.mjs  # Linter configuration
│   │   ├── next.config.ts  # Next.js configuration
│   │   ├── package.json    # Dependencies
│   │   ├── tailwind.config.ts # Tailwind CSS configuration
│   │   ├── tsconfig.json   # TypeScript configuration
│   │   └── README.md       # Webapp documentation
├── docs/                   # Documentation
├── node_modules/           # Dependencies
├── services/               # Backend services
│   ├── supabase/           # API services
│   └── README.md           # Services documentation
├── .gitignore              # Git ignored files
├── bun.lock                # Bun package lock file
├── commitlint.config.js    # Commit message rules
├── README.md               # Project documentation
└── package.json            # Root package dependencies
```

---

## 🏃 Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js (v18 or higher)](https://nodejs.org/)
- [Bun](https://bun.sh/)
- [Git](https://git-scm.com/)

### Clone and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-trustlesswork-template.git
   cd ecommerce-trustlesswork-template
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun dev
   ```

4. Rename `.env.sample` to `.env.local` and update the following:
   ```
   NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
   NEXT_PUBLIC_TRUSTLESSWORK_API_KEY=[INSERT TRUSTLESSWORK API KEY]
   ```
   You can find these values in [Supabase API settings](https://app.supabase.com/project/_/settings/api) and your TrustlessWork dashboard.

---

## 🏗 Architecture Overview

### Frontend

- Uses **Next.js 14** with the **App Router**
- Modular structure with reusable components
- Optimized with **shadcn/ui** and **Tailwind CSS**

### Backend

- Built with **Supabase** for database and authentication
- API services managed under `services/`

### Key Features

#### 🛍️ E-commerce Features

- Product catalog management
- Shopping cart functionality
- Order processing and tracking
- Customer account management

#### 💰 TrustlessWork Integration

- Secure milestone-based payments
- Escrow service integration
- Payment status tracking
- Automated payment releases

#### 🔐 Security & Authentication

- Passkeys for secure, passwordless access
- Protected payment routes
- Secure order processing

---

## 🔒 Security & Best Practices

- **Passkey Authentication**: Secure, phishing-resistant login
- **Protected Routes**: Prevents unauthorized access
- **Input Validation**: Reduces security risks
- **Rate Limiting**: Protects against abuse
- **Secure Payments**: TrustlessWork escrow integration

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 🚀 Contributing

We welcome contributions! Feel free to submit pull requests or open issues.

---

Made with ❤️ by ScaffoldRust Team
