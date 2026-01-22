# Trina Joan Lynus - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing MERN stack development expertise and professional experience.

## 🚀 Features

- **Modern Design**: Clean, minimal aesthetic with professional color palette
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: System preference detection with manual toggle
- **Smooth Animations**: Subtle Framer Motion animations for enhanced UX
- **SEO Optimized**: Meta tags and semantic HTML for better search visibility
- **Accessible**: WCAG-compliant design with proper contrast and navigation
- **JSON-Driven Content**: Easy content management through JSON data files
- **Production Ready**: Optimized build process for deployment

## 🛠️ Tech Stack

- **Frontend**: React.js (Functional Components)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Deployment**: Netlify/Vercel ready

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header with dark mode toggle
│   ├── Hero.js         # Landing section with CTA buttons
│   ├── About.js        # Professional summary
│   ├── Skills.js       # Technical skills grid
│   ├── Projects.js     # Project showcase with filtering
│   ├── Experience.js   # Work experience timeline
│   ├── Certifications.js # Professional certifications
│   ├── Contact.js      # Contact form and information
│   └── Footer.js       # Site footer with social links
├── data/               # JSON data files
│   ├── projects.json   # Project information
│   ├── skills.json     # Technical skills
│   ├── experience.json # Work experience
│   └── certifications.json # Certifications
├── hooks/              # Custom React hooks
│   └── useDarkMode.js  # Dark mode state management
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/TrinaLynus011/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## 📝 Content Management

All content is managed through JSON files in the `src/data/` directory:

- **projects.json**: Add/edit project information
- **skills.json**: Update technical skills by category
- **experience.json**: Modify work experience entries
- **certifications.json**: Update professional certifications

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.js`. Main colors:
- **Primary**: Slate gray scale for text and backgrounds
- **Accent**: Blue scale for highlights and CTAs

### Typography

Using Inter font family with JetBrains Mono for code elements.

### Animations

Framer Motion animations are subtle and purposeful:
- Fade-in effects for sections
- Hover animations for interactive elements
- Smooth page transitions

## 🚀 Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain (optional)

### Vercel

1. Connect your GitHub repository
2. Vercel will automatically detect React and deploy
3. Configure environment variables if needed

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio project. However, if you find bugs or have suggestions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Trina Joan Lynus**
- Email: trinajoanlynus@gmail.com
- GitHub: [@TrinaLynus011](https://github.com/TrinaLynus011)
- LinkedIn: [trina-joan-lynus](https://linkedin.com/in/trina-joan-lynus)

---

*Building calm, reliable, user-centric web systems.*