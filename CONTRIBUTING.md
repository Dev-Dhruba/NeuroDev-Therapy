# 🤝 How to Contribute to Neurodev Therapy

Thank you for considering contributing to **Neurodev Therapy**!  
We welcome UI developers, designers, educators, and accessibility advocates.

---

## 🚀 Quickstart

### 1. Fork & Clone
```bash
git clone https://github.com/Dev-Dhruba/NeuroDev-Therapy.git
cd NeuroDev-Therapy
```

### 2. Install dependencies
```bash 
npm install
```

### 3. Start the development server
```bash
npm run dev
```
The app will typically run at http://localhost:3000

## 📁 Project Structure
```
neurodev-therapy/
├── public/             # Static files (images, favicon, etc.)
├── src/
│   ├── app/            # Next.js app router pages and layouts
│   │   ├── about/      # About page
│   │   ├── autism/     # Autism page
│   │   ├── detection/  # Detection test page
│   │   ├── dyslexia/   # Dyslexia page
│   │   ├── layout.tsx  # Root layout component
│   │   └── page.tsx    # Landing page
│   ├── components/     # Reusable UI components
│   │   └── ui/         # Shadcn UI components
│   └── lib/            # Utility functions and helpers
├── .eslintrc.json      # ESLint configuration
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## 💡 Contribution Ideas
🧩 Add animated therapy cards or modules

🧠 Build quiz/detection UIs for autism or dyslexia

🎨 Improve accessibility (colors, contrast, screen reader support)

📱 Add mobile responsiveness and transitions

✨ Enhance user engagement with motion (Framer Motion)

🧪 Add mock data or testing layouts for modules

## 🧼 Conventions
Use PascalCase for components (TherapyCard.jsx)

Use lowercase-naming for assets (hero-bg.png)

Follow Tailwind CSS utility-first style

Place icons, gifs, and images in src/assets/

## 🛡 Code of Conduct
By contributing, you agree to follow our Code of Conduct.
This ensures we maintain a respectful, inclusive environment for all contributors.

## 🙌 Thank You!
Your contributions help make this project inclusive, educational, and impactful.
Feel free to share ideas in our Discord server or create an issue with feature suggestions.

Let’s build something that empowers neurodiverse learners! 💙
