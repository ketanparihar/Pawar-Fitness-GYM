# PAWAR FITNESS - Official Website

> **Transform Your Body. Transform Your Life.**

A modern, high-performance, fully functional fitness gym website built for **Pawar Fitness**, located in **Badora, Betul, Madhya Pradesh – 460001, India**.

Inspired by the visual energy and premium UX of leading fitness brands like Cult Fitness, tailored uniquely for Pawar Fitness.

---

## 🌟 Features Overview

- **Hero Section**: High-impact athletic visual design with bold typography, animated callouts, and dual CTAs (*Join Now* and *View Membership Plans*).
- **Quick Statistics**: 4 statistics cards with animated counters for starting price (₹700), annual plan (₹6,000), commitment (100%), and location (*Badora, Betul*).
- **About Section**: Brand philosophy, mission statement, gym facility preview, and 5 "Why Choose Us" cards.
- **Membership Plans**: 4 pricing tiers:
  - **Monthly**: ₹700 / month
  - **Quarterly**: ₹1,800 / 3 months (*Save More* badge, ₹600/mo effective)
  - **Half-Yearly**: ₹3,500 / 6 months (₹583/mo effective)
  - **Annual**: ₹6,000 / year (*Best Value* badge, highlighted visual design, only ₹500/mo)
  - Every *Join Now* button automatically pre-selects that plan in the registration form.
- **Interactive Join & Registration Form**:
  - Validates Full Name, 10-digit mobile number, email, age, gender, plan, fitness goals, and preferred start date.
  - Client-side validation with instant inline errors.
  - Stores submissions in `localStorage` and provides a backend-ready API dispatch function.
  - Instant WhatsApp follow-up link generated on submission.
- **8 Comprehensive Facilities**: Strength Training, Cardio Equipment, Free Weights, Weight Training, Functional Training, Workout Area, Changing Area, and Clean Environment.
- **Trainers Section**: Professional trainer cards with specializations and transparent placeholder notices for easy replacement with actual Pawar Fitness trainers.
- **Photo Gallery & Lightbox**:
  - Filterable by category (*All, Gym, Equipment, Training, Fitness, Environment*).
  - Responsive lightbox modal with Previous/Next controls, Close button, and keyboard navigation (Left/Right arrow, Escape).
- **Testimonial Carousel**:
  - 5-star customer ratings, authentic reviews, auto-slide every 5s (pauses on hover), and touch swipe support on mobile.
- **Contact & Location**:
  - Phone number with direct `tel:1234567890` trigger.
  - Verified Google Maps search query link for *Pawar Fitness, Badora, Betul, Madhya Pradesh*.
  - Interactive map preview frame.
  - Fully validated Contact Form.
- **Floating Quick Contact**:
  - WhatsApp Us button with dynamically encoded telephone number and pre-filled inquiry text.
  - Direct Call Us button.
  - Minimizable toggle so it never blocks content on smaller screens.
- **Interactive FAQ Accordion**:
  - Smooth animated answers for all 8 common questions regarding pricing, location, beginner friendliness, and registration.
- **Legal Modals**:
  - Privacy Policy modal detailing data collection (name, phone, email, inquiries).
  - Terms & Conditions modal covering membership dues, hygiene rules, re-racking weights, and gym safety.
- **Centralized Admin Configuration (`gymConfig.ts`)**:
  - Update gym name, phone, pricing, facilities, trainers, or social media links in one single file.
- **Admin Leads Inspector Drawer**:
  - Discrete tool (bottom-left badge) to inspect stored leads, test form submissions, and export entries to JSON.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Animations**: CSS keyframes, GPU-accelerated transitions, requestAnimationFrame counters
- **Storage**: Backend-ready abstraction layer (`src/utils/storage.ts`)

---

## 📁 Project Structure

```text
pawar-fitness/
├── public/
│   └── favicon.svg              # Gym dumbbell SVG brand favicon
├── src/
│   ├── components/
│   │   ├── About.tsx            # About Pawar Fitness & Why Choose Us
│   │   ├── AdminDrawer.tsx      # Leads & inquiries local inspector
│   │   ├── Contact.tsx          # Contact info, contact form, Google Maps
│   │   ├── Facilities.tsx       # 8 facility showcase cards
│   │   ├── FAQSection.tsx       # 8 interactive accordion FAQs
│   │   ├── FloatingContact.tsx  # Floating WhatsApp & Call button
│   │   ├── Footer.tsx           # Footer with links, address, legal modals
│   │   ├── Gallery.tsx          # Categorized gallery with lightbox modal
│   │   ├── Hero.tsx             # Full-screen athletic hero section
│   │   ├── LegalModals.tsx      # Privacy Policy and Terms & Conditions
│   │   ├── Membership.tsx       # 4 membership pricing cards
│   │   ├── MembershipModal.tsx  # Registration / Join Now modal form
│   │   ├── Navbar.tsx           # Sticky nav with hamburger drawer
│   │   ├── QuickStats.tsx       # 4 animated stat counters
│   │   ├── Testimonials.tsx     # 5-star customer review carousel
│   │   └── Trainers.tsx         # Coach cards with placeholder markers
│   ├── config/
│   │   └── gymConfig.ts         # ⭐ SINGLE SOURCE OF TRUTH (business info, pricing, phone)
│   ├── types/
│   │   └── lucide-react.d.ts    # TypeScript definitions for icons
│   ├── utils/
│   │   └── storage.ts           # Local lead storage & backend API hooks
│   ├── App.tsx                  # Main application orchestrator
│   ├── index.css                # Base Tailwind + fitness glow utility classes
│   └── main.tsx                 # React DOM root entry
├── index.html                   # SEO metadata, Open Graph, schema.org JSON-LD
├── package.json                 # Project dependencies & scripts
├── tailwind.config.js           # Theme colors, gym brand palette, keyframes
└── vite.config.ts               # Vite configuration
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v18.0.0 or later, v20+ recommended)
- npm or pnpm

### 2. Installation
```bash
cd pawar-fitness
npm install --legacy-peer-deps
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
This generates an optimized production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```
Runs a local preview of the production distribution on [http://localhost:4173](http://localhost:4173).

---

## ⚙️ Customization Guide

### 1. Central Configuration (`src/config/gymConfig.ts`)
To update any business detail, simply edit `src/config/gymConfig.ts`. **All changes propagate throughout the entire website automatically!**

- **Phone Number**: Change `phone: "1234567890"` to your real mobile number. The website's phone displays, telephone links (`tel:`), and WhatsApp links (`wa.me`) will automatically update.
- **Address & Pin Code**: Update `locationText`, `fullAddress`, or `pincode`.
- **Membership Prices**: Change `price: 700`, `1800`, `3500`, or `6000`. The pricing cards, stats section, FAQ answers, and join dropdowns will update automatically.
- **Operating Hours**: Update `operatingHours` for weekdays and weekends.
- **Social Media Links**: Replace the URL in `socialLinks` with your real Instagram, Facebook, and YouTube links.

### 2. Adding Real Gym Photos
Placeholder images from Unsplash are currently used. To replace them with real Pawar Fitness photos:

1. **Option A (Local Assets)**:
   - Place your photos inside `public/images/`.
   - In `src/config/gymConfig.ts`, update image paths to `/images/your-photo.jpg`.

2. **Option B (Hosted Cloud URLs)**:
   - Upload photos to Cloudinary, AWS S3, Imgur, or Google Drive.
   - Paste the direct image URL into `gymConfig.gallery`, `gymConfig.facilities`, or `gymConfig.trainers`.

### 3. Adding Real Trainer Profiles
In `src/config/gymConfig.ts`, locate the `trainers` array:
- Update `name`, `specialization`, `experience`, `description`, and `image`.
- Set `isPlaceholder: false` to remove the "Sample Coach" marker tag.

---

## 🔌 Connecting to a Real Backend or Email Service

Currently, submissions are saved locally via `src/utils/storage.ts` so no inquiries are lost during testing. To send inquiries directly to your email or database:

### Option 1: Web3Forms (No Backend Needed, 2-minute setup)
1. Sign up for free at [https://web3forms.com](https://web3forms.com) and get an Access Key.
2. In `src/utils/storage.ts`, add an HTTP POST inside `saveMembershipRequest` and `saveContactMessage`:
```typescript
await fetch("https://api.web3forms.com/submit", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    access_key: "YOUR_WEB3FORMS_ACCESS_KEY",
    subject: "New Pawar Fitness Membership Inquiry",
    ...data
  })
});
```

### Option 2: EmailJS
1. Sign up at [https://emailjs.com](https://emailjs.com).
2. Install EmailJS: `npm install @emailjs/browser`.
3. Call `emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_PUBLIC_KEY")`.

### Option 3: Custom REST API (Node / Express / Supabase / Firebase)
Replace the simulated promise in `saveMembershipRequest` with your own API endpoint:
```typescript
const response = await fetch("https://api.pawarfitness.com/api/inquiries", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
});
return await response.json();
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this project to GitHub.
2. Go to [https://vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `pawar-fitness` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your website will be live with free SSL in under a minute!

### Deploy to Netlify
1. Connect your repository at [https://app.netlify.com](https://app.netlify.com).
2. Set Build Command: `npm run build`.
3. Set Publish Directory: `dist`.
4. Click **Deploy Site**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/pawar-fitness/'`.
2. Run `npm run build`.
3. Deploy the `dist` folder using the `gh-pages` package or GitHub Actions.

---

## 📄 License & Ownership
Created for **Pawar Fitness, Badora, Betul, Madhya Pradesh – 460001, India**.
All rights reserved.
