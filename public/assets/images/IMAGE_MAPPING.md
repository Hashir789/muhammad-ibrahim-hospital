# Image Mapping Reference

This document maps all image paths used in the application to help with image asset management.

## Home Page (`src/pages/Home.jsx`)

### Hero Section
- **Path**: `/assets/images/hero/hospital-hero.jpg`
- **Dimensions**: 800x600 (4:3 aspect ratio)
- **Usage**: Hero banner image
- **Alt**: "Muhammad Ibrahim Hospital - Modern healthcare facility providing world-class medical services"

### Doctors Section
- **Pattern**: `/assets/images/doctors/dr-{name}.jpg`
- **Examples**:
  - `/assets/images/doctors/dr-ahmed-khan.jpg`
  - `/assets/images/doctors/dr-fatima-ali.jpg`
  - `/assets/images/doctors/dr-hassan-malik.jpg`
  - `/assets/images/doctors/dr-ayesha-sheikh.jpg`
- **Dimensions**: 200x200 (square, 1:1)
- **Usage**: Doctor profile photos in Home page

### Technologies Section
- **Pattern**: `/assets/images/technologies/{tech-id}.jpg`
- **Examples**:
  - `/assets/images/technologies/ai-diagnostics.jpg`
  - `/assets/images/technologies/robotic-surgery.jpg`
  - `/assets/images/technologies/precision-medicine.jpg`
  - `/assets/images/technologies/telemedicine.jpg`
  - `/assets/images/technologies/lab-automation.jpg`
  - `/assets/images/technologies/neuro-navigation.jpg`
- **Dimensions**: 400x180 (flexible height, maintain aspect ratio)
- **Usage**: Technology card images

### News Section
- **Pattern**: `/assets/images/blog/news-{index}.jpg`
- **Examples**:
  - `/assets/images/blog/news-1.jpg`
  - `/assets/images/blog/news-2.jpg`
  - `/assets/images/blog/news-3.jpg`
- **Dimensions**: 400x200 (2:1 aspect ratio)
- **Usage**: News article thumbnails

## Doctors Page (`src/pages/Doctors.jsx`)

- **Pattern**: `/assets/images/doctors/{doctor-id}.jpg`
- **Examples**:
  - `/assets/images/doctors/ahmed-khan.jpg`
  - `/assets/images/doctors/fatima-ali.jpg`
  - `/assets/images/doctors/hassan-malik.jpg`
  - `/assets/images/doctors/ayesha-sheikh.jpg`
  - `/assets/images/doctors/muhammad-ibrahim.jpg`
  - `/assets/images/doctors/sara-ahmed.jpg`
  - `/assets/images/doctors/ali-hassan.jpg`
  - `/assets/images/doctors/zainab-khan.jpg`
  - `/assets/images/doctors/omar-malik.jpg`
  - `/assets/images/doctors/nadia-ahmed.jpg`
  - `/assets/images/doctors/bilal-hassan.jpg`
  - `/assets/images/doctors/amina-sheikh.jpg`
- **Dimensions**: 200x200 (square, 1:1)
- **Usage**: Doctor profile photos in listing

## Doctor Profile Page (`src/pages/DoctorProfile.jsx`)

- **Pattern**: `/assets/images/doctors/{doctorId}.jpg`
- **Same as Doctors page**
- **Dimensions**: 150x150 (main avatar), 64x64 (sidebar)
- **Usage**: Doctor profile photo

## Technology Page (`src/pages/Technology.jsx`)

- **Pattern**: `/assets/images/technologies/{tech-id}.jpg`
- **Examples**:
  - `/assets/images/technologies/mri-3t.jpg`
  - `/assets/images/technologies/ct-64-slice.jpg`
  - `/assets/images/technologies/da-vinci.jpg`
  - `/assets/images/technologies/pet-ct.jpg`
  - `/assets/images/technologies/linear-accelerator.jpg`
  - `/assets/images/technologies/ecmo.jpg`
  - `/assets/images/technologies/robotic-pharmacy.jpg`
  - `/assets/images/technologies/telemedicine.jpg`
- **Dimensions**: 400x200 (2:1 aspect ratio)
- **Usage**: Technology card images

## About Page (`src/pages/About.jsx`)

### Leadership Team
- **Pattern**: `/assets/images/doctors/{leader-name}.jpg`
- **Examples**:
  - `/assets/images/doctors/dr-aisha-khan.jpg`
  - `/assets/images/doctors/mr-bilal-ahmed.jpg`
  - `/assets/images/doctors/dr-sara-ali.jpg`
  - `/assets/images/doctors/ms-fatima-hassan.jpg`
- **Dimensions**: 120x120 (card), 64x64 (modal)
- **Usage**: Leadership team photos

### Photo Gallery
- **Pattern**: `/assets/images/facilities/{title}.jpg`
- **Examples**:
  - `/assets/images/facilities/hospital-entrance.jpg`
  - `/assets/images/facilities/emergency-department.jpg`
  - `/assets/images/facilities/operating-theater.jpg`
  - `/assets/images/facilities/patient-rooms.jpg`
  - `/assets/images/facilities/laboratory.jpg`
  - `/assets/images/facilities/radiology-department.jpg`
  - `/assets/images/facilities/reception-area.jpg`
  - `/assets/images/facilities/icu.jpg`
  - `/assets/images/facilities/pediatric-ward.jpg`
- **Dimensions**: 400x300 (4:3 aspect ratio)
- **Usage**: Hospital facility gallery images

## Image Requirements Summary

### Technical Specifications
- **Format**: JPG (preferred) or WebP
- **Optimization**: Compressed for web (aim for <200KB per image)
- **Color Space**: sRGB
- **Progressive**: Yes (for JPG)

### Accessibility
- All images have descriptive `alt` attributes
- Decorative images use `aria-hidden="true"`
- Images below fold use `loading="lazy"`
- Hero images use `loading="eager"`

### Performance
- Width and height attributes included to prevent CLS
- `objectFit: "cover"` used to maintain aspect ratios
- Fixed container heights where applicable
- Responsive images with proper src paths

### Fallback Behavior
- Avatar components show initials if image fails to load
- CardMedia components maintain background color if image missing
- No layout shift occurs if images are missing

