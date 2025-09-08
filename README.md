# Kovendan Jason Raman - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalistic design with smooth animations
- **Responsive**: Fully responsive across all device sizes
- **Smooth Animations**: Framer Motion powered scroll-triggered animations
- **Dark Mode Support**: Automatic dark mode detection
- **SEO Optimized**: Comprehensive meta tags and Open Graph support
- **Performance**: Optimized for speed and Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (ready)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Sticky navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Resume.tsx          # Resume section
│   ├── Contact.tsx         # Contact information
│   ├── Footer.tsx          # Footer component
│   ├── ProjectCard.tsx     # Individual project card
│   └── RevealWrapper.tsx   # Animation wrapper component
└── data/
    └── projects.ts         # Project data and types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd kovendan-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name and tagline
   - Social media links

2. **About Section** (`src/components/About.tsx`):
   - Personal description
   - Education and experience details

3. **Projects** (`src/data/projects.ts`):
   - Add your projects
   - Update GitHub and demo URLs

4. **Contact** (`src/components/Contact.tsx`):
   - Email address
   - Social media links

5. **Resume** (`public/resume.pdf`):
   - Replace with your actual resume PDF

### Styling

- **Colors**: Update the color scheme in `tailwind.config.ts`
- **Fonts**: Change fonts in `src/app/layout.tsx`
- **Animations**: Modify animation settings in components

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Sections

### 1. Hero
- Full-screen introduction
- Name and tagline
- Call-to-action buttons
- Social media links

### 2. About
- Personal description
- Education and experience highlights
- Skills and interests

### 3. Projects
- Grid layout of project cards
- GitHub and demo links
- Technology tags

### 4. Resume
- Download and view resume buttons
- LinkedIn profile link
- Education and experience summary

### 5. Contact
- Contact information
- Social media links
- Call-to-action for collaboration

## 🎨 Design Features

- **Smooth Scrolling**: Between sections
- **Reveal Animations**: Elements animate in on scroll
- **Hover Effects**: Interactive elements with hover states
- **Mobile-First**: Responsive design for all devices
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Contact

Kovendan Jason Raman
- Email: kovendan.raman@yahoo.co.za
- GitHub: [@kovendan](https://github.com/kovendan)
- LinkedIn: [kovendan-raman](https://linkedin.com/in/kovendan-raman)
