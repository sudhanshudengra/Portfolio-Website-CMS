# 💎 Premium Developer Portfolio & Headless CMS Ecosystem

[![Live Site](https://img.shields.io/badge/Live%20Demo-sudhanshudengra.vercel.app-cyan?style=for-the-badge&logo=vercel)](https://sudhanshudengra.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Sanity](https://img.shields.io/badge/Sanity-v3-F03E2F?style=for-the-badge&logo=sanity)](https://www.sanity.io/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A minimalist, monochrome, dark-mode-first developer portfolio engineered with **Next.js (App Router)** and **Sanity Headless CMS**. This project is built for professional presentation, smooth performance, and robust security.

🔗 **Live Deployment:** [https://sudhanshudengra.vercel.app/](https://sudhanshudengra.vercel.app/)

---

## 🌟 Key Features

*   **⚡ Next.js App Router & Turbopack:** Supercharged build compilation and extremely fast client transitions utilizing React Server Components.
*   **🗄️ Headless Sanity CMS Integration:** Dynamic management of Project Case Studies, Skills, Experiences, and site-wide metadata using a cloud-hosted, real-time database with zero maintenance.
*   **🛡️ Secure Hybrid Contact Form Pipeline:**
    *   **Secure CMS Writes:** Contact submissions are securely validated and logged into the Sanity DB via a secure Next.js backend API Route (`/api/contact`), protecting the database write tokens from browser exposure.
    *   **Bypassing Server Blocks (Web3Forms):** Email notifications are dispatched directly from the client's browser context to Web3Forms, completely bypassing serverless headless network blockers and Cloudflare challeges.
*   **🎭 Dynamic Scroll-Reveal Navigation:**
    *   The primary **"Download Resume"** button is displayed inside the Hero section.
    *   To prevent UI redundancy, the navigation header hides the resume action on load. Once the user scrolls past the Hero fold (>200px), a custom Framer Motion transition **dynamically reveals a secondary Resume button in the sticky navigation header**, providing persistent utility.
*   **🧭 Flawless Smooth Anchoring:** Standard HTML anchors coupled with native CSS scroll-smooth configurations ensure 100% reliable, zero-bug on-page jump scrolling.
*   **🎨 Premium Monochrome Aesthetics:** Designed around a dark-mode-first aesthetic, utilizing sleek CSS card borders, elegant serif typography pairings (Playfair & Geist), and subtle hover-glowing micro-animations.

---

## 💻 Tech Stack

*   **Framework:** Next.js (TypeScript)
*   **CMS / DB:** Sanity.io
*   **Styling:** Tailwind CSS (with Vanilla CSS tokens)
*   **Animations:** Framer Motion
*   **Email Gateway:** Web3Forms
*   **Icons:** Lucide React

---

## 🔧 Environment Variables Setup

Create a `.env` file in the root directory and configure the following parameters:

```env
# Sanity Client Config (Public keys)
NEXT_PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="yyyy-mm-dd"

# Sanity Write Authorization (Private Server-Only Token)
SANITY_API_WRITE_TOKEN="your_private_sanity_write_token"

# Web3Forms API Gateway (Public Key)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY="your_web3forms_access_key"
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Boot Up Local Dev Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your local portfolio and [http://localhost:3000/studio](http://localhost:3000/studio) to access your local Headless CMS manager.

### 3. Build for Production
```bash
npm run build
```

---

## 🛡️ Git & Security Guidelines
To protect sensitive private tokens (like `SANITY_API_WRITE_TOKEN`), this project restricts administrative setup scripts within the `/scripts/` folder from being tracked. The `.gitignore` has been updated to ignore this directory. Never commit write-capable tokens to public GitHub repositories.

---

## ⚖️ License & Copyright

© 2026 **Sudhanshu Dengra**. All rights reserved.
This repository and its codebase are personal works. Feel free to explore and use the code for educational purposes.

