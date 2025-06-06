# E-commerce Template with TrustlessWork Integration

This is a modern e-commerce template powered by ScaffoldRust, featuring seamless integration with TrustlessWork's blockchain-powered Escrow-as-a-Service platform. This template enables secure, milestone-based payments with zero custodians and maximum flexibility for your e-commerce platform.

## 🚀 Features

- **Next.js 14** with App Router for modern web development
- **TrustlessWork Integration** for secure, milestone-based payments
- **Supabase SSR** for authentication and data storage
- **Passkey Integration** for secure, passwordless authentication
- **Rust & Soroban** smart contracts for on-chain payment processing
- **AI Automation** to streamline order management and customer support
- **Tailwind CSS & shadcn/ui** for modern UI components
- **Optimized Build** using Bun for fast dependency management

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
   cd ecommerce-trustlesswork-template/apps/webapp
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

## 🏗 Architecture

The web application follows a structured component-based approach:

- **Layout Components**: Base layout structure (`components/layout/`)
- **Shared Components**: Reusable UI elements (`components/shared/`)
- **Section Components**: Page-specific sections (`components/sections/`)
- **UI Components**: Basic UI building blocks (`components/ui/`)
- **TrustlessWork Components**: Integration components for escrow services (`components/trustlesswork/`)

### Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

## 🚀 Contributing

We welcome contributions! Feel free to submit pull requests or open issues.

---

Made with ❤️ by ScaffoldRust Team
