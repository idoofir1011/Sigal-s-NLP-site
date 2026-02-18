# NLP Coaching Website - Instructions

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git (optional, for version control)

### Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
Sigalsite/
├── public/              # Static assets (images, favicon, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Footer.jsx
│   │   ├── ContactForm.jsx
│   │   └── BookingWidget.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   └── Contact.jsx
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles (Tailwind imports)
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

---

## 🎨 Customization Guide

### Changing Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
        accent: '#your-color',
      }
    }
  }
}
```

### Updating Content

1. **Homepage Hero Section**: Edit `src/components/Hero.jsx`
2. **Services**: Edit `src/pages/Services.jsx`
3. **About Page**: Edit `src/pages/About.jsx`
4. **Contact Info**: Edit `src/pages/Contact.jsx`

### Adding Images

1. Place images in `public/images/` folder
2. Reference them in components: `<img src="/images/your-image.jpg" alt="description" />`

### Changing Navigation

Edit the navigation links in `src/components/Navbar.jsx`

---

## 🔌 Integrations

### Contact Form Setup

The contact form uses **EmailJS** (free tier available):

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update `src/components/ContactForm.jsx` with your credentials

### Booking System Integration

**Option 1: Calendly (Recommended)**
1. Sign up at [calendly.com](https://calendly.com/)
2. Get your scheduling link
3. Embed in `src/components/BookingWidget.jsx`:
   ```jsx
   <iframe 
     src="https://calendly.com/your-link"
     width="100%" 
     height="700px"
   />
   ```

**Option 2: Cal.com (Open Source)**
- Similar process to Calendly
- Self-hostable option available

---

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. **Via Netlify CLI**
   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod
   ```

2. **Via Netlify Dashboard**
   - Push code to GitHub
   - Connect repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `dist`

### Option 2: Vercel

1. **Via Vercel CLI**
   ```bash
   npm install -g vercel
   npm run build
   vercel --prod
   ```

2. **Via Vercel Dashboard**
   - Import GitHub repository
   - Framework preset: Vite
   - Build command: `npm run build`
   - Output directory: `dist`

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/repository-name/'
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## 🛠️ Development Tips

### Hot Reload
Vite provides instant hot module replacement (HMR). Changes appear immediately without full page reload.

### Tailwind CSS IntelliSense
Install the "Tailwind CSS IntelliSense" VS Code extension for autocomplete.

### React Developer Tools
Install React DevTools browser extension for debugging.

---

## 📱 Responsive Design

The site is built mobile-first using Tailwind's responsive utilities:

- `sm:` - Small devices (640px+)
- `md:` - Medium devices (768px+)
- `lg:` - Large devices (1024px+)
- `xl:` - Extra large devices (1280px+)

Example:
```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use a different port
npm run dev -- --port 3000
```

### Tailwind Styles Not Working
1. Ensure `index.css` imports Tailwind:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
2. Restart dev server

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Use absolute paths from `public/`: `/images/photo.jpg`
- Not relative paths: `./images/photo.jpg`

---

## 📦 Key Dependencies

- **React** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** (optional) - Contact form backend
- **Framer Motion** (optional) - Animations

---

## 🔒 Environment Variables

Create `.env` file for sensitive data:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Access in code:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

**Important**: Add `.env` to `.gitignore`

---

## 📈 Performance Optimization

1. **Image Optimization**
   - Use WebP format
   - Compress images before uploading
   - Use appropriate sizes

2. **Code Splitting**
   - Vite automatically splits code
   - Use lazy loading for routes:
     ```javascript
     const About = lazy(() => import('./pages/About'));
     ```

3. **Production Build**
   - Minified and optimized automatically
   - Tree-shaking removes unused code

---

## 🎯 SEO Basics

1. **Meta Tags**: Update in `index.html`
2. **Page Titles**: Use React Helmet or similar
3. **Sitemap**: Generate after deployment
4. **Analytics**: Add Google Analytics to `index.html`

---

## 📞 Support & Resources

- **React Docs**: https://react.dev
- **Vite Docs**: https://vitejs.dev
- **Tailwind Docs**: https://tailwindcss.com
- **React Router**: https://reactrouter.com

---

## ✅ Checklist Before Launch

- [ ] Test all pages and links
- [ ] Verify contact form works
- [ ] Test booking system integration
- [ ] Check mobile responsiveness
- [ ] Optimize images
- [ ] Update meta tags and SEO
- [ ] Set up analytics
- [ ] Test on multiple browsers
- [ ] Set up custom domain (optional)
- [ ] Enable HTTPS (automatic on Netlify/Vercel)

---

**Built with ❤️ for NLP Coaching**
