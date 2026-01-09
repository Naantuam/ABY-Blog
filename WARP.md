# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React-based blog application built with Vite, featuring a modern component-based architecture. The project uses React 19 with Tailwind CSS for styling and includes multiple UI component libraries.

## Technology Stack

- **Frontend Framework**: React 19 with JSX
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (custom extended configuration)
- **UI Libraries**: Material Tailwind, Headless UI, React Bootstrap
- **Icons**: Heroicons, React Icons, Bootstrap Icons, Lucide React
- **Animation**: Framer Motion
- **Charts**: ApexCharts, Recharts
- **Routing**: React Router DOM v7
- **HTTP Client**: Axios
- **Internationalization**: i18next with React integration

## Development Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint code with ESLint
npm run lint
```

## Code Architecture

### Component Structure
- **`src/BlogPage/`**: Blog-specific components and pages
  - **`LandingPage/`**: Landing page components (HeroSection, Topbar, Footer, OurServices, etc.)
- **`src/Pages/`**: General application pages (Dashboard, alternative LandingPage)
- **`src/Reusable/`**: Shared/reusable components across the application
- **`src/UserDetail/`**: User authentication and profile components
  - **`AuthComponents/`**: Authentication UI primitives (AuthButton, AuthCard, AuthLayout, etc.)

### Application Entry Points
- **`main.jsx`**: Application bootstrap with React Router setup
- **`App.jsx`**: Main application component (currently renders LandingPage directly)

### Styling Configuration
- **Custom Tailwind Config**: Extensive customization with custom colors, animations, and spacing
- **Custom Animations**: `spin-slow`, `spin-medium`, `spin-slower` for enhanced UI effects
- **Responsive Design**: Standard Tailwind breakpoints (sm, md, lg, xl)

### Key Dependencies
- **Multiple Icon Libraries**: Heroicons, React Icons, Bootstrap Icons, Lucide React for comprehensive icon coverage
- **Chart Libraries**: Both ApexCharts and Recharts available for data visualization
- **Animation Framework**: Framer Motion for advanced animations
- **Carousel**: Swiper for interactive slideshows
- **Internationalization**: Full i18n setup with language detection and HTTP backend

## Development Notes

### Component Organization
The application follows a modular component structure with clear separation between:
- Blog-specific components (`BlogPage/`)
- General application pages (`Pages/`)
- Reusable UI components (`Reusable/`)
- User authentication flows (`UserDetail/`)

### Routing Setup
React Router DOM v7 is configured in `main.jsx`, though the current `App.jsx` renders a single component. The architecture supports expansion to multiple routes.

### Styling Approach
The project uses an extensively customized Tailwind configuration with:
- Custom color palettes beyond default Tailwind colors
- Custom animation utilities for enhanced user experience
- Comprehensive spacing and typography scales

### State Management
The application appears to use React's built-in state management (no external state management library detected in current configuration).