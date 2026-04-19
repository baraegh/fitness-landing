# 💪 FitPulse - Professional Fitness Coaching Landing Page

A dynamic, modern React landing page for FitPulse, a personal fitness coaching business. Features professional trainer portfolios, animated pricing tiers, client testimonials, and a contact system for booking training sessions.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Scroll Animations**: Smooth fade-in, slide, and scale animations triggered on scroll
- **Image Gallery**: 10+ professional fitness and training images
- **Services Section**: Detailed fitness coaching offerings
- **Pricing Tiers**: 3 customizable pricing plans with features
- **Testimonials**: Real client reviews with avatars
- **Trainer Profiles**: Professional coaching team showcase
- **Contact Form**: User-friendly inquiry and booking system
- **Production Build**: Optimized build folder ready for deployment
- **Custom Favicon**: Fitness-themed SVG dumbbell icon
- **Parallax Effects**: Dynamic background scrolling

## 🚀 Quick Start

### Prerequisites
- Node.js (v16+)
- npm (v8+)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd fitness-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📦 Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with hot reload.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

### Testing
```bash
npm test
```
Runs the test suite in interactive watch mode.

## 🏗️ Project Structure

```
fitness-landing/
├── public/
│   ├── favicon.svg          # Fitness dumbbell icon
│   ├── index.html           # Main HTML file
│   ├── manifest.json        # PWA manifest
│   └── logo192.png          # App icons
├── src/
│   ├── components/
│   │   └── FitnessLanding.jsx    # Main component
│   ├── images/              # All fitness & trainer images
│   ├── animations.css       # Scroll animation definitions
│   ├── App.css              # Global styles
│   ├── App.js               # App wrapper
│   └── index.js             # Entry point
├── package.json             # Dependencies & scripts
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## 🎨 Customization

### Colors
Edit Tailwind colors in `tailwind.config.js`:
```javascript
theme: {
  colors: {
    emerald: { ... }  // Primary color
    cyan: { ... }     // Secondary color
  }
}
```

### Animations
Modify animation timing and styles in `src/animations.css`.

### Images
Replace images in `src/images/` folder. Make sure to update imports in `FitnessLanding.jsx`.

### Pricing & Services
Edit pricing tiers, features, and service descriptions in `FitnessLanding.jsx`.

### Testimonials
Update client testimonials and reviews in the component.

## 📚 Technologies Used

- **React** 19.2.5 - UI library
- **Tailwind CSS** 3.4.1 - Utility-first CSS
- **PostCSS** 8.5.10 - CSS processing
- **Lucide React** 1.8.0 - Icon library
- **React Scripts** 5.0.1 - Build tooling

## 🔧 Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration with emerald/cyan theme
- `postcss.config.js` - PostCSS plugins (autoprefixer, tailwindcss)
- `package.json` - Dependencies and npm scripts

## 📱 Responsive Design

The site is fully responsive and tested on:
- Desktop (1920px and up)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-deploy on every push

### Deploy to Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build/`

### Deploy to AWS S3
```bash
aws s3 sync build/ s3://your-bucket-name/
```

## 📸 Image Assets

- **Total Images**: 10+ high-quality professional images
- **Format**: JPG optimized for web
- **Total Size**: ~800KB
- **Sources**: Pexels, Unsplash (free to use)

## ✨ Animation Features

- Fade-in animations on scroll
- Slide animations for service cards
- Scale animations for pricing plans
- Staggered testimonial entrance animations
- Parallax hero background scrolling
- Smooth hover transitions
- Count-up animations for statistics

## 🏋️ Service Tiers

1. **Basic Plan** - Beginner workout guidance
2. **Pro Plan** - Monthly training + meal plans
3. **Elite Plan** - Full transformation program

## 🐛 Troubleshooting

**Port 3000 already in use:**
```bash
PORT=3001 npm start
```

**Dependencies issues:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build issues:**
```bash
npm run build -- --reset-cache
```

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Support

For issues or questions, please contact the development team.

---

**Status**: ✅ Production Ready  
**Last Updated**: April 2026

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
