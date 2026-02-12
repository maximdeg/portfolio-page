# Maxim Degtiarev - Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full Stack Web Developer. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS, featuring dark mode, multilingual support, and a contact form.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent preference storage
- **Multilingual Support**: English and Spanish language switching with persistent language preference
- **Smooth Animations**: Scroll-triggered animations and transitions for enhanced user experience
- **Scroll Progress Indicator**: Visual progress bar showing scroll position
- **Back to Top Button**: Smooth scroll to top functionality

### Sections
- **Hero Section**: Introduction with key statistics and call-to-action buttons
- **About Me**: Personal introduction and professional background
- **Services**: Showcase of web design, mobile development, and API services
- **Portfolio**: Filterable project gallery with live demos and GitHub links
- **Tech Stack**: Interactive display of skills with proficiency levels
- **Contact Form**: Functional contact form with email integration

### Interactive Elements
- **Fixed Navigation Header**: Sticky header with smooth scrolling navigation
- **Mobile Menu**: Responsive hamburger menu for mobile devices
- **Project Filtering**: Filter portfolio projects by category (Web, Mobile, API, Full Stack)
- **Skill Progress Bars**: Visual representation of technical skill levels
- **Social Media Links**: Direct links to LinkedIn and GitHub profiles

## 🛠️ Technologies Used

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library (Heroicons)

### Backend & APIs
- **Next.js API Routes**: Serverless API endpoints
- **Nodemailer**: Email sending functionality
- **Node.js**: JavaScript runtime

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Turbopack**: Fast bundler for development

### Analytics & Deployment
- **Vercel Analytics**: Website analytics integration
- **Vercel**: Deployment platform

### Additional Libraries
- **dotenv**: Environment variable management

## 📁 Project Structure

```
portfolio-page-main/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                 # Root layout with providers
│   ├── page.tsx                   # Main page component
│   └── globals.css                # Global styles
├── components/
│   ├── AboutMe.tsx                # About section component
│   ├── BackToTop.tsx              # Scroll to top button
│   ├── Description.tsx            # Description section
│   ├── Footer.tsx                 # Footer with contact form
│   ├── Header.tsx                 # Navigation header
│   ├── Hero.tsx                   # Hero section
│   ├── Portfolio.tsx              # Portfolio projects section
│   ├── ScrollProgress.tsx         # Scroll progress indicator
│   └── TechStack.tsx              # Technologies showcase
├── contexts/
│   └── LanguageContext.tsx        # Language context provider
├── hooks/
│   └── useScrollAnimation.ts      # Custom scroll animation hook
├── public/
│   ├── icons/                     # Technology icons
│   ├── robots.txt                 # SEO robots file
│   └── sitemap.xml                # SEO sitemap
└── package.json                   # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-page-main.git
cd portfolio-page-main
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

**Note**: For Gmail, you'll need to generate an App Password. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Setting up Gmail App Password
1. Enable 2-Step Verification on your Google Account
2. Go to Google Account settings → Security → App passwords
3. Generate a new app password for "Mail"
4. Use this password as `EMAIL_PASS` in your `.env.local` file

## 🎨 Customization

### Updating Personal Information
- Edit `components/Hero.tsx` for hero section content
- Edit `components/AboutMe.tsx` for about section
- Edit `components/Portfolio.tsx` for portfolio projects
- Edit `components/Footer.tsx` for contact information

### Adding Translations
- Edit `contexts/LanguageContext.tsx` to add new translations or languages

### Styling
- Modify `tailwind.config.ts` for theme customization
- Edit `app/globals.css` for global styles

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy on Vercel
The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

The deployment will automatically detect Next.js and configure the build settings.

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Features in Detail

### Dark Mode
- Automatic theme detection based on system preferences
- Manual toggle button in header
- Theme preference saved in localStorage

### Multilingual Support
- English and Spanish translations
- Language preference saved in localStorage
- Easy to extend with additional languages

### Contact Form
- Client-side validation
- Server-side email sending via Nodemailer
- Success/error message handling
- Form reset after successful submission

### Portfolio Projects
- Filterable by category
- External links to live demos
- GitHub repository links
- Technology tags for each project

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio-page-main/issues).

## 📄 License

This project is private and proprietary. All rights reserved.

## 📧 Contact

Maxim Degtiarev - maxim.degtiarev.dev@gmail.com

Project Link: [https://github.com/yourusername/portfolio-page-main](https://github.com/yourusername/portfolio-page-main)

---

Built with ❤️ using Next.js, React, and TypeScript
