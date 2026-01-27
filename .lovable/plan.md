
# Wedding Website Implementation Plan

## Overview
A modern, minimal wedding website for a celebration in Lucknow with mobile-first design, featuring four main sections: Home, Explore Lucknow, Photo Uploads, and Contact.

## Design System

### Color Palette
- **Primary**: Warm sage/olive green (`#7D8471`) - elegant, natural accent
- **Secondary**: Soft champagne/cream (`#F5F0E8`) - warm background tones  
- **Neutral**: Soft charcoal (`#2D2D2D`) - readable text
- **Background**: Off-white (`#FDFBF7`) - warm, inviting base

### Typography
- **Headings**: Playfair Display (serif) - elegant, romantic
- **Body**: Inter (sans-serif) - clean, highly readable

### Spacing Philosophy
- Generous padding (py-16 to py-24 for sections)
- Ample margins between elements
- Card-based layouts with subtle shadows

---

## File Structure

```text
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky navigation
│   │   └── Footer.tsx          # Simple footer
│   ├── home/
│   │   └── HeroSection.tsx     # Hero with names, date
│   ├── explore/
│   │   ├── PlaceCard.tsx       # Individual place card
│   │   └── CategoryFilter.tsx  # Filter tabs
│   ├── photos/
│   │   └── PhotoUploadCTA.tsx  # Google Photos CTA
│   └── contact/
│       └── ContactForm.tsx     # Contact form with validation
├── data/
│   └── places.ts               # Lucknow recommendations data
├── pages/
│   ├── Index.tsx               # Home page (updated)
│   ├── Explore.tsx             # Explore Lucknow page
│   ├── Photos.tsx              # Photo uploads page
│   └── Contact.tsx             # Contact page
└── index.css                   # Updated with custom fonts
```

---

## Implementation Details

### 1. Design System Updates (index.css)

Update CSS variables to the wedding color palette:
- New warm color scheme with sage green accent
- Import Google Fonts (Playfair Display + Inter)
- Add custom utility classes for the design

### 2. Header Component

A sticky, minimal navigation:
- Logo/couple names on the left
- Mobile hamburger menu (sheet/drawer)
- Desktop horizontal nav links
- Smooth scroll for same-page navigation
- Transparent on hero, solid on scroll (optional enhancement)

### 3. Home Page (Hero Section)

Clean, centered hero layout:
- Couple names in elegant serif font (Playfair Display)
- Wedding date formatted beautifully
- City name (Lucknow)
- Optional short welcome message
- Subtle decorative elements (thin lines, small flourish)
- Navigation CTA buttons or scroll indicator

### 4. Explore Lucknow Page

Card-based recommendation system:
- Filter tabs by category (All, Food, Culture, Shopping, Attractions)
- Responsive grid (1 column mobile, 2 tablet, 3 desktop)
- Each card includes:
  - Place name (title)
  - Short description
  - Category badge
  - Optional "View on Maps" button
- Data stored in a separate file for easy editing

### 5. Photo Uploads Page

Simple, focused section:
- Warm heading and description
- Large, prominent CTA button
- Button opens Google Photos album in new tab
- Helper text explaining the process
- Optional decorative camera/photo icon

### 6. Contact Page

Minimal contact form using react-hook-form + zod:
- Name field (required)
- Email field (required, validated)
- Message textarea (required)
- Submit button with loading state
- Success toast notification on submit
- Form validation with helpful error messages

### 7. Footer Component

Simple footer:
- Couple names or initials
- Wedding date
- Optional "Made with love" text

---

## Routing Setup

Update App.tsx with routes:
- `/` - Home page
- `/explore` - Explore Lucknow
- `/photos` - Photo uploads
- `/contact` - Contact form

---

## Data Structure for Places

Easy-to-edit format in `src/data/places.ts`:

```typescript
type Place = {
  id: string;
  title: string;
  description: string;
  category: 'food' | 'culture' | 'shopping' | 'attractions';
  mapsLink?: string;
};
```

Pre-populated with sample Lucknow recommendations that can be easily modified.

---

## Mobile-First Approach

- All components designed mobile-first with Tailwind breakpoints
- Touch-friendly button sizes (min 44px tap targets)
- Readable font sizes (16px+ body text)
- Collapsible mobile navigation
- Single-column layouts on small screens, expanding to multi-column on larger devices

---

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy (h1 > h2 > h3)
- ARIA labels on interactive elements
- Focus visible states on all interactive elements
- Color contrast meeting WCAG AA standards
- Alt text placeholders for any images

---

## Technical Details

### Dependencies Already Available
- React + TypeScript
- Tailwind CSS with animations
- shadcn/ui components (Button, Card, Input, Textarea, Form, Sheet)
- react-hook-form + zod for validation
- react-router-dom for routing
- Sonner/Toast for notifications
- Lucide React for icons

### No Additional Dependencies Needed
All required UI components and utilities are already installed.

---

## Customization Points

After implementation, you can easily customize:
1. **Couple names and date** - In HeroSection.tsx
2. **Color palette** - In index.css CSS variables
3. **Lucknow places** - In data/places.ts file
4. **Google Photos link** - In PhotoUploadCTA.tsx
5. **Contact email** - In ContactForm.tsx

---

## Summary

This plan creates a clean, elegant wedding website with:
- 4 pages with clear navigation
- Mobile-first responsive design
- Warm, romantic color palette
- Easy-to-maintain data structure for recommendations
- Accessible and fast-loading

