# Carolina Quality Sales Website

A professional, responsive multi-page website for Carolina Quality Sales - an automotive wholesale company serving dealers across the Carolinas. Built with a modern design system inspired by TrueCar's clean, scannable interface.

## Features

- **TrueCar-Inspired Design System**: Professional automotive industry aesthetic with clean typography and intuitive layouts
- **Comprehensive Design Tokens**: CSS custom properties for colors, typography, spacing, shadows, and motion
- **Responsive Design**: Mobile-first approach optimized for all device sizes
- **Benefit-Led Content**: Clear, action-oriented messaging focused on dealer success
- **Enhanced Micro-Interactions**: Subtle animations, hover effects, and tactile button feedback
- **Professional Component Library**: Cards, badges, filters, and forms following automotive industry standards
- **Accessibility Focused**: Proper contrast ratios, focus states, and keyboard navigation
- **Lightweight Performance**: Vanilla HTML, CSS, and JavaScript with optimized loading

## Pages

1. **Home** (`index.html`) - Hero section, features, stats, and call-to-action
2. **Inventory** (`pages/inventory.html`) - Vehicle listings with filtering and search
3. **About Us** (`pages/about.html`) - Company story, team, mission & values
4. **Services** (`pages/services.html`) - Comprehensive service offerings
5. **Contact** (`pages/contact.html`) - Contact form, information, and FAQ
6. **Dealer Portal** (`pages/dealers.html`) - Login and partnership application

## Design System

Based on TrueCar's professional automotive interface patterns:

### Color Palette
- **Primary**: `#2554B8` (TrueCar Blue) for CTAs and key actions
- **Secondary**: `#2D68C4` for secondary elements and icons
- **Success**: `#2EAD58` for positive states and deal badges
- **Warning**: `#F28C2B` for promotional elements
- **Neutrals**: Carefully selected grays for text hierarchy and backgrounds

### Typography Scale
- **Display**: 44px/36px for hero headlines
- **Headlines**: 28px/22px for section titles
- **Body**: 18px/16px for readable content
- **Labels**: 12px uppercase for metadata and tags

### Component System
- **Buttons**: Primary, secondary, and tertiary variants with proper focus states
- **Cards**: Consistent elevation, radius, and hover interactions
- **Badges**: Success, info, and warning variants for vehicle status
- **Forms**: Professional input styling with enhanced focus states

## Technology Stack

- **HTML5**: Semantic markup with proper meta tags and accessibility
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: Interactive features and enhanced micro-interactions
- **Google Fonts**: Inter font family for humanist sans-serif typography
- **Design Tokens**: CSS custom properties for consistent theming

## File Structure

```
carolina-quality-sales/
├── index.html              # Homepage
├── css/
│   ├── main.css            # Main stylesheet
│   └── inventory.css       # Inventory-specific styles
├── js/
│   └── main.js             # JavaScript functionality
├── pages/
│   ├── inventory.html      # Vehicle inventory page
│   ├── about.html          # About us page
│   ├── contact.html        # Contact page
│   ├── services.html       # Services page
│   └── dealers.html        # Dealer portal page
├── images/                 # Image assets directory
└── README.md              # This file
```

## Getting Started

1. **View the Website**: Open `index.html` in any modern web browser
2. **Local Development**: Use a local server for best experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```
3. **Navigate**: Use the navigation menu to explore all pages

## Features Highlights

### Responsive Design
- Mobile-first approach with breakpoints at 768px and 480px
- Collapsible navigation menu for mobile devices
- Flexible grid layouts that adapt to screen size
- Touch-friendly interface elements

### Interactive Elements
- Smooth scrolling navigation
- Animated statistics counters
- Hover effects on cards and buttons
- Form validation with real-time feedback
- Vehicle inventory filtering and search

### Professional Styling
- Consistent color scheme (blues, grays, whites)
- Typography using Inter font family
- Subtle shadows and rounded corners
- Professional placeholder images
- Consistent spacing and alignment

## Browser Support

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Customization

To customize the website:

1. **Colors**: Update CSS custom properties in `main.css`
2. **Content**: Modify HTML content in respective page files
3. **Images**: Replace placeholder images in the `images/` directory
4. **Styling**: Customize CSS in `main.css` and `inventory.css`
5. **Functionality**: Extend JavaScript in `main.js`

## Contact

For questions about this website implementation:
- Email: info@carolinaqualitysales.com
- Phone: (555) 123-4567

---

© 2024 Carolina Quality Sales. All rights reserved.
