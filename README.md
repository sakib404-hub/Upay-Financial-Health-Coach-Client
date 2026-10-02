<div align="center">
  <h1>🌱 Upay Financial Coach</h1>
  <p><strong>A modern financial-coaching web app concept designed for managing money in Bangladesh.</strong></p>

  <!-- Badges -->
  <img src="https://img.shields.io/badge/Next.js-16.3.8-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-black?style=flat-square&logo=framer" alt="Framer Motion" />
</div>

<br />

Upay is a conceptual financial coaching platform tailored for the Bangladeshi market. It features a public-facing product site and an interactive financial assessment prototype, calculating financial health scores, estimated surpluses, and savings timelines using Bangladeshi Taka (BDT).

---

## ✨ Features Implemented

*   **🏠 Home Page (`/`)**: A responsive, motion-enhanced product landing page featuring:
    *   Hero section & Trust indicators
    *   Problem framing & Core product pillars
    *   AI-coaching showcase & Workflow overview
    *   Feature grid, security messaging, and clear CTAs
*   **📖 About Page (`/about`)**: Comprehensive product overview, operational concepts, FAQs, and engagement CTAs.
*   **🎯 Onboarding Assessment (`/onboarding`)**: A dynamic 5-step financial assessment capturing:
    *   Primary goals & Income
    *   Essential commitments & Savings targets
    *   *Real-time calculations:* Financial-health score, estimated surplus, suggested savings, and goal timeline (data held in browser session).
*   **🎨 Shared UI/UX**: Reusable navigation, footer, responsive layouts, smooth scrolling, and Framer Motion-enhanced interactive components.

## ⚠️ Current Scope & Limitations

> **Note:** This project is currently a **Frontend Prototype**.

*   **Client-Side Only**: Assessment calculations run directly in the browser.
*   **No Persistence**: User profiles, databases, and authentication are not yet implemented.
*   **No Live Integrations**: Live bank/mobile-wallet connections and production AI coaching services are conceptual claims presented in the UI, not verified production integrations.

## 🛠️ Technology Stack

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Next.js** | `16.3.8` | React framework (App Router) |
| **React** | `19` | UI Library |
| **TypeScript** | Latest | Static typing for robust code |
| **Tailwind CSS** | `4` | Utility-first styling |
| **Framer Motion** | Latest | UI animations and page transitions |
| **Lucide React** | Latest | Iconography |
| **Lenis** | Latest | Smooth scrolling dependency |

## 📂 Project Structure

```text
upay-financial-coach/
├── public/                 # Static assets (images, fonts)
├── src/                    # Source code
│   ├── app/                # Next.js App Router (pages & colocated components)
│   │   └── _components/    # Home page specific sections
│   └── components/         # Shared UI (Nav, Footer, Animations)
├── .gitignore
├── AGENTS.md               # AI Agent instructions/guidelines
├── CLAUDE.md               # Claude-specific context
├── GEMINI.md               # Gemini-specific context
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project metadata & scripts
├── postcss.config.mjs      # PostCSS configuration
└── README.md
```
🚀 Getting Started
Prerequisites
Ensure you have Node.js and npm installed on your machine.

Run Locally
Clone the repository and navigate into the project directory.

Install dependencies using a clean install:

Bash
npm ci
Start the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to view the application.

🧪 Project Checks
Ensure code quality and test the production build before committing:

Bash
# Run ESLint to check for code issues
npm run lint

# Create a production build
npm run build

## 👨‍💻 Meet the Author

<div align="center">
  <a href="https://github.com/sakib404-hub">
  </a>
  
  <h3><b>Md. Sakib Hossen</b></h3>
  <p><i>Full-Stack Web Developer | B.Sc. CSE Student @ Daffodil International University</i></p>

  <p>
    Specializing in modern web architectures and crafting scalable, user-centric applications.
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/React-blue?style=flat-square&logo=react" alt="React" />
    <img src="https://img.shields.io/badge/Express.js-black?style=flat-square&logo=express" alt="Express.js" />
    <img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" />
  </p>

  <br />

  <a href="https://github.com/sakib404-hub">
    <img src="https://img.shields.io/badge/GitHub-Profile-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Profile" />
  </a>
</div>
