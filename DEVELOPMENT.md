# 📚 Development Guide - FitPulse Fitness Landing

Complete guide for developing, customizing, and extending the Fitness Coaching Landing Page.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Setup & Installation](#setup--installation)
3. [Development Workflow](#development-workflow)
4. [Customization Guide](#customization-guide)
5. [Component Architecture](#component-architecture)
6. [Styling & Tailwind](#styling--tailwind)
7. [Animations](#animations)
8. [Adding Features](#adding-features)
9. [Performance Optimization](#performance-optimization)
10. [Testing](#testing)

## Project Structure

```
fitness-landing/
├── public/
│   ├── favicon.svg           # Fitness dumbbell icon
│   ├── index.html            # Main HTML
│   ├── manifest.json         # PWA manifest
│   └── robots.txt            # SEO file
├── src/
│   ├── components/
│   │   └── FitnessLanding.jsx    # Main component
│   ├── images/               # All fitness images
│   │   ├── crossfit.jpg
│   │   ├── yoga.jpg
│   │   ├── boxing.jpg
│   │   ├── nutrition.jpg
│   │   ├── trainer1.jpg
│   │   ├── trainer2.jpg
│   │   ├── trainer3.jpg
│   │   ├── pricing-*.jpg
│   │   └── hero-bg.jpg
│   ├── animations.css        # Animation keyframes
│   ├── App.css               # Global styles
│   ├── App.js                # App wrapper
│   ├── index.css             # Base styles
│   └── index.js              # Entry point
├── .env.example              # Environment template
├── .gitignore                # Git ignore rules
├── .npmrc                     # npm configuration
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind config
├── postcss.config.js         # PostCSS config
├── DEPLOYMENT.md             # Deployment guide
├── DEVELOPMENT.md            # This file
└── README.md                 # Project docs
```

## Setup & Installation

### Prerequisites
- Node.js 16+ ([nodejs.org](https://nodejs.org))
- npm 8+ (included with Node.js)
- VS Code (recommended)

### Quick Start

```bash
# Clone and setup
git clone <your-repo-url>
cd fitness-landing
npm install

# Create environment file
cp .env.example .env.local

# Start development
npm start
```

App opens at `http://localhost:3000`

### Verify Installation

Checklist:
- ✅ App loads without errors
- ✅ No console errors
- ✅ Images display correctly
- ✅ Animations trigger on scroll
- ✅ Contact form is interactive

## Development Workflow

### Development Server

```bash
npm start
```

Features:
- Hot module reloading
- Auto-refresh on changes
- Development tools enabled
- Console error messages

### Production Build

```bash
npm run build
```

Optimizes:
- JavaScript minification
- CSS optimization
- Image optimization
- Asset hashing

### Testing & Linting

```bash
npm test              # Run tests in watch mode
npm audit             # Security check
npm audit fix         # Auto-fix vulnerabilities
```

## Customization Guide

### 1. Update Business Information

**In `public/index.html`:**
```html
<title>Your Fitness Studio - Professional Coaching</title>
<meta name="description" content="Your studio description">
```

**In `src/components/FitnessLanding.jsx`:**
```javascript
const businessInfo = {
  name: "Your Studio Name",
  phone: "+1 (555) 123-4567",
  email: "info@yourfitness.com",
  address: "123 Fitness St, City, State 12345"
};
```

### 2. Update Pricing Plans

Find pricing section in `FitnessLanding.jsx`:

```javascript
const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "2 Sessions per week",
      "Basic nutrition guide",
      "Email support"
    ],
    image: pricingBasic
  },
  {
    name: "Pro",
    price: "$79",
    period: "/month",
    features: [
      "4 Sessions per week",
      "Custom meal plans",
      "Priority support",
      "Progress tracking"
    ],
    image: pricingPro
  },
  {
    name: "Elite",
    price: "$129",
    period: "/month",
    features: [
      "Unlimited sessions",
      "1-on-1 coaching",
      "Personalized nutrition",
      "24/7 support",
      "Supplement recommendations"
    ],
    image: pricingElite
  }
];
```

Edit `features` arrays and prices.

### 3. Update Trainer Profiles

```javascript
const trainers = [
  {
    name: "Trainer Name",
    specialty: "CrossFit / HIIT",
    image: trainer1,
    bio: "10+ years of experience..."
  },
  // Edit and add trainers
];
```

### 4. Change Color Scheme

**In `tailwind.config.js`:**

```javascript
theme: {
  extend: {
    colors: {
      // Current: Emerald & Cyan
      primary: '#10b981',   // Emerald
      secondary: '#06b6d4', // Cyan
      accent: '#ef4444'     // Red accent
    }
  }
}
```

**Other schemes:**
- Athletic: Blue, Red, White
- Modern: Purple, Pink, Black
- Energetic: Orange, Yellow, Green
- Minimalist: Gray, Black, White

**Update in components:**
```javascript
<div className="bg-emerald-500 hover:bg-emerald-600">
  Your content
</div>
```

### 5. Customize Services Section

```javascript
const services = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase power..."
  },
  {
    icon: Heart,
    title: "Cardio & Conditioning",
    description: "Improve endurance and fitness..."
  },
  // Add/edit services
];
```

### 6. Update Client Testimonials

```javascript
const testimonials = [
  {
    name: "Client Name",
    text: "Great experience! Highly recommend...",
    image: client1
  },
  // Add testimonials
];
```

### 7. Change Favicon

Replace `public/favicon.svg`:
```html
<link rel="icon" type="image/svg+xml" href="%PUBLIC_URL%/favicon.svg" />
```

## Component Architecture

### Main Component: FitnessLanding.jsx

```
FitnessLanding
├── Hero Section (with parallax background)
├── Services Section (grid of services)
├── Pricing Section (3 pricing tiers)
├── Trainer Section (team profiles)
├── Testimonials Section (client reviews)
├── CTA Section (call to action)
├── Contact Form
└── Footer
```

### Creating New Sections

```javascript
export default function FitnessLanding() {
  return (
    <div>
      {/* Existing sections */}
      
      {/* New Section with Animation */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Your New Section
          </h2>
          {/* Content here */}
        </div>
      </section>
    </div>
  );
}
```

### Reusable Components

Create component files:

**`src/components/Card.jsx`:**
```javascript
export default function Card({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
```

## Styling & Tailwind

### Core Utilities

```javascript
// Spacing (4px increments)
p-4         // padding: 1rem
m-2         // margin: 0.5rem
gap-6       // gap: 1.5rem

// Layout
flex        // display: flex
grid        // display: grid
w-full      // width: 100%
h-screen    // height: 100vh

// Colors (current scheme)
bg-emerald-500      // Background emerald
text-cyan-600       // Text cyan
border-gray-300     // Border gray

// Typography
text-lg             // font-size
font-bold           // font-weight
text-center         // text-align

// Effects
shadow-lg           // box-shadow
rounded-xl          // border-radius
opacity-75          // transparency
transition-all      // smooth transitions
```

### Responsive Design

```javascript
<div className="
  w-full              // mobile
  md:w-1/2            // tablet
  lg:w-1/3            // desktop
  grid-cols-1         // mobile: 1 column
  md:grid-cols-2      // tablet: 2 columns
  lg:grid-cols-3      // desktop: 3 columns
">
  Responsive grid
</div>
```

### Gradient Backgrounds

```javascript
// Gradient utilities
className="bg-gradient-to-r from-emerald-500 to-cyan-500"
className="bg-gradient-to-b from-transparent to-black"
className="hover:bg-gradient-to-r from-purple-500 to-pink-500"
```

## Animations

### Built-in Animations

From `src/animations.css`:

```css
@keyframes fadeInUp      /* Fade in + move up */
@keyframes fadeInDown    /* Fade in + move down */
@keyframes fadeInLeft    /* Fade in + move from left */
@keyframes fadeInRight   /* Fade in + move from right */
@keyframes scaleIn       /* Zoom in */
@keyframes slideInUp     /* Slide in from bottom */
```

### Using Animations

```javascript
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function Component() {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      style={{
        animation: isVisible ? 'fadeInUp 0.6s ease-out' : 'none'
      }}
    >
      Content
    </div>
  );
}
```

### Staggered Animations

For multiple items:
```javascript
{items.map((item, index) => (
  <div
    key={item.id}
    style={{
      animation: isVisible 
        ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
        : 'none'
    }}
  >
    {item.content}
  </div>
))}
```

### Custom Animations

In `src/animations.css`:
```css
@keyframes customAnimation {
  0% {
    opacity: 0;
    transform: translateX(-20px) rotate(-5deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(0deg);
  }
}
```

Use with:
```javascript
style={{ animation: 'customAnimation 0.8s ease-out' }}
```

## Adding Features

### Add Booking System

1. Install calendar library:
```bash
npm install react-big-calendar
```

2. Create booking form:
```javascript
import Calendar from 'react-big-calendar';

export default function BookingForm() {
  const [date, setDate] = useState(new Date());
  
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        onSelectSlot={(slot) => handleBooking(slot)}
      />
    </div>
  );
}
```

### Add Email Notifications

1. Install email library:
```bash
npm install emailjs-com
```

2. Send emails:
```javascript
import emailjs from 'emailjs-com';

const sendEmail = (formData) => {
  emailjs.send('service_id', 'template_id', formData, 'public_key');
};
```

### Add Newsletter Signup

```javascript
const [email, setEmail] = useState('');

const handleNewsletter = async (e) => {
  e.preventDefault();
  await fetch('/api/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email })
  });
  setEmail('');
};

return (
  <form onSubmit={handleNewsletter}>
    <input 
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
    />
    <button type="submit">Subscribe</button>
  </form>
);
```

## Performance Optimization

### 1. Lazy Loading

```javascript
const TrainersSection = React.lazy(() => 
  import('./sections/TrainersSection')
);

<Suspense fallback={<div>Loading...</div>}>
  <TrainersSection />
</Suspense>
```

### 2. Image Optimization

- Compress before uploading
- Use appropriate sizes
- Consider WebP format

```javascript
<img 
  src={image}
  alt="Description"
  loading="lazy"
  srcSet={`${image_small} 640w, ${image} 1280w`}
/>
```

### 3. Memoization

```javascript
const TrainerCard = React.memo(({ trainer }) => {
  return <div>{trainer.name}</div>;
});
```

### 4. Bundle Analysis

```bash
npm install -D webpack-bundle-analyzer
npm run build -- --analyze
```

### 5. Code Splitting by Route

```javascript
const Home = React.lazy(() => import('./pages/Home'));
const Services = React.lazy(() => import('./pages/Services'));
```

## Testing

### Run Tests

```bash
npm test
```

### Write Tests

**Example: `FitnessLanding.test.js`**

```javascript
import { render, screen } from '@testing-library/react';
import FitnessLanding from './FitnessLanding';

test('renders pricing plans', () => {
  render(<FitnessLanding />);
  expect(screen.getByText(/Basic/)).toBeInTheDocument();
  expect(screen.getByText(/Pro/)).toBeInTheDocument();
  expect(screen.getByText(/Elite/)).toBeInTheDocument();
});

test('displays trainer profiles', () => {
  render(<FitnessLanding />);
  expect(screen.getAllByRole('img')).toHaveLength(7); // 3 trainers + others
});
```

## Troubleshooting

### Images Not Loading
```javascript
// Check import path
import image from './images/trainer1.jpg';
<img src={image} alt="Trainer" />
```

### Styles Not Working
- Verify Tailwind config has `content: ["./src/**/*.{js,jsx}"]`
- Restart dev server
- Check class name spelling

### Animations Not Triggering
- Ensure element scrolls into view
- Check animation name matches CSS
- Verify observer hook is used

### Port Already in Use
```bash
PORT=3001 npm start
```

### Dependencies Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## Best Practices

### Code Organization
- Keep components small
- Extract repeated code
- Use descriptive names
- Add comments for complex logic

### Performance
- Compress images before adding
- Use lazy loading for heavy components
- Test bundle size
- Monitor Core Web Vitals

### Accessibility
- Include `alt` text for images
- Use semantic HTML tags
- Ensure color contrast
- Test keyboard navigation

### Version Control
```bash
git add .
git commit -m "Add pricing tier customization"
git push origin main
```

## Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [MDN Web Docs](https://developer.mozilla.org)
- [Fitness Industry Trends](https://www.fitb.com)

---

**Last Updated**: April 2026  
**Status**: Production Ready ✅
