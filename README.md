# EXPO Website - Complete Multi-Page Site

## Overview

This is a professional, production-ready multi-page website for EXPO, a strategic operations studio for hospitality. The website features a distinctive industrial-refined aesthetic that blends culinary precision with technical sophistication.

## File Structure

```
expo-website/
├── index.html          # Homepage
├── about.html          # Company story and values
├── services.html       # Detailed service offerings
├── case-studies.html   # Client work showcase
├── resources.html      # Free templates, guides, FAQ
├── contact.html        # Contact form and info
├── styles.css          # Comprehensive stylesheet
└── main.js             # Interactive functionality
```

## Pages Overview

### 1. Homepage (index.html)
- **Hero Section**: Bold introduction with logo animation
- **Problem Statement**: Four key challenges EXPO solves
- **How We Help**: Four core pillars (Systems, Culture, Security, Optimization)
- **Why EXPO**: Differentiators and unique value proposition
- **Who We Serve**: Target market segments
- **CTA Section**: Call-to-action for consultation

### 2. About Page (about.html)
- **Origin Story**: How EXPO was founded
- **Mission & Values**: Core principles and commitments
- **What Sets Us Apart**: Six key differentiators
- **Philosophy**: The "pass" metaphor and operational approach
- **How We Work**: Five-step engagement process

### 3. Services Page (services.html)
- **Services Overview**: Quick navigation to four pillars
- **Systems Section**: SOPs, workflows, documentation
- **Culture Section**: Training, onboarding, service standards
- **Security Section**: POS audits, network hardening, staff training
- **Optimization Section**: Workflow analysis, tech stack, labor management
- **Engagement Models**: Project-based, retainer, fractional operations
- **Pricing Philosophy**: Transparent, value-based approach

### 4. Case Studies Page (case-studies.html)
- **Coming Soon Notice**: Explains proof-of-concept phase
- **What to Expect**: Framework for future case studies
- **Sample Framework**: Seven-part documentation structure
- **Pilot Program**: Invitation to become early partner
- **Testimonials Preview**: Early operator feedback

### 5. Resources Page (resources.html)
- **Free Templates**: Six downloadable operational tools
- **Guides Section**: Placeholder for future content
- **FAQ Section**: Comprehensive Q&A with accordion functionality
- **Glossary**: Common hospitality operations terms
- **Newsletter Signup**: Email capture for updates

### 6. Contact Page (contact.html)
- **Contact Methods**: Email, location, response time
- **Contact Form**: Comprehensive intake form with:
  - Personal information
  - Business details
  - Service interests
  - Project timeline
  - Challenge description
- **What Happens Next**: Clear expectations for engagement process
- **Quick Links**: Easy access to templates, services, FAQ

## Design System

### Color Palette
- **Cream**: `#F5F1E8` - Primary background
- **Black**: `#1a1a1a` - Primary text
- **Charcoal**: `#2d2d2d` - Secondary elements
- **Red**: `#D64545` - Primary accent
- **Grey**: `#6a6a6a` - Tertiary text

### Typography
- **Display Font**: Anybody (headings, emphasis)
- **Monospace Font**: IBM Plex Mono (body text, UI)
- **Serif Font**: Instrument Serif (quotes, taglines)

### Design Principles
1. **Industrial-Refined**: Chef's expo station meets tech control center
2. **Bold Geometry**: Strong lines, clear hierarchy
3. **Purposeful Animation**: Subtle, meaningful micro-interactions
4. **Accessibility**: High contrast, keyboard navigation
5. **Mobile-First**: Responsive across all devices

## Key Features

### Navigation
- Fixed navigation bar with smooth scroll
- Mobile-responsive hamburger menu
- Active state indicators
- Primary CTA button in nav

### Interactive Elements
- **FAQ Accordion**: Click to expand/collapse answers
- **Contact Form**: Full validation with success states
- **Smooth Scrolling**: Anchor links with offset for fixed nav
- **Hover Effects**: Subtle animations on cards and buttons
- **Mobile Menu**: Slide-down navigation for small screens

### Performance Optimizations
- CSS animations (no JavaScript needed for most)
- Lazy loading ready (commented in JS)
- Debounced scroll events
- Minimal external dependencies

### Accessibility Features
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels on interactive elements
- Keyboard navigation for FAQ
- High contrast ratios
- Alt text ready for images

## Customization Guide

### Updating Content

1. **Change Logo**: Replace `/mnt/user-data/uploads/EXPOLOGO.png` reference in index.html
2. **Update Colors**: Modify CSS variables in `styles.css` (lines 1-20)
3. **Edit Contact Info**: Update email in contact.html and footer
4. **Add Case Studies**: Replace placeholder content in case-studies.html
5. **Publish Templates**: Link actual files in resources.html

### Adding New Pages

1. Copy structure from existing page (e.g., about.html)
2. Update navigation in all pages to include new link
3. Add page-specific styles to styles.css
4. Test mobile responsiveness

### Connecting Forms

Replace form submission handlers in main.js with your backend:

```javascript
// Example: Send to server
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    // Show success message
});
```

### Analytics Integration

Uncomment and configure analytics in main.js (line 320+):

```javascript
// Google Analytics 4
gtag('event', action, {
    'event_category': category,
    'event_label': label
});
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (latest)

## Deployment

### Option 1: Static Hosting
Upload all files to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

### Option 2: Traditional Web Host
Upload via FTP to any web hosting provider

### Configuration Needed
1. Update all email links with actual email address
2. Configure form endpoint for submissions
3. Add analytics tracking code
4. Set up favicon and meta tags
5. Configure domain and SSL

## Future Enhancements

### Suggested Additions
- Blog/articles section for thought leadership
- Client login/portal area
- Live chat integration
- Video testimonials
- Interactive service estimator
- Project proposal generator

### Technical Improvements
- Progressive Web App (PWA) support
- Advanced image optimization
- Content Management System integration
- A/B testing framework
- Advanced analytics and heat mapping

## Development Notes

### CSS Architecture
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- CSS custom properties for theming
- BEM-style naming conventions
- Print stylesheet included

### JavaScript Approach
- Vanilla JavaScript (no frameworks)
- Event delegation for performance
- Graceful degradation
- Progressive enhancement
- Modular utility functions

### Performance Targets
- First Contentful Paint: <1.5s
- Time to Interactive: <3s
- Lighthouse Score: 90+
- Mobile PageSpeed: 80+

## Support & Maintenance

### Regular Updates Needed
- FAQ answers as common questions emerge
- New templates as they're created
- Case studies as projects complete
- Blog posts for SEO and thought leadership
- Testimonials as they're collected

### Security Considerations
- Keep contact form endpoint secure
- Validate all user inputs
- Use HTTPS in production
- Implement CAPTCHA if spam becomes issue
- Regular dependency updates

## Credits

Design and development by Claude for EXPO Operations Studio.

### Resources Used
- Google Fonts (Anybody, IBM Plex Mono, Instrument Serif)
- Custom illustrations and patterns
- Proprietary EXPO logo

## License

All rights reserved © 2026 EXPO Operations Studio

## Contact

For questions about this website:
- Email: hello@expo-consulting.co
- Location: Missoula, Montana

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Status**: Production Ready
