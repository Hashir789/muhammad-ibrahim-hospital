import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const imagesDir = path.join(rootDir, 'public', 'assets', 'images');

// Ensure directories exist
const directories = {
  hero: path.join(imagesDir, 'hero'),
  departments: path.join(imagesDir, 'departments'),
  doctors: path.join(imagesDir, 'doctors'),
  technologies: path.join(imagesDir, 'technologies'),
  services: path.join(imagesDir, 'services'),
  facilities: path.join(imagesDir, 'facilities'),
  blog: path.join(imagesDir, 'blog'),
  contact: path.join(imagesDir, 'contact'),
};

Object.values(directories).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Image download function using fetch
async function downloadImage(url, filepath) {
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    fs.writeFileSync(filepath, buffer);
    return true;
  } catch (error) {
    throw new Error(`Download failed: ${error.message}`);
  }
}

// Images to download
const imagesToDownload = [
  // Hero
  {
    url: 'https://loremflickr.com/1600/900/hospital,medical',
    path: path.join(directories.hero, 'hospital-hero.jpg'),
    name: 'Hero Image',
  },
  
  // Departments (6 images)
  {
    url: 'https://loremflickr.com/400/300/hospital,cardiology',
    path: path.join(directories.departments, 'cardiology.jpg'),
    name: 'Cardiology Department',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,neurology',
    path: path.join(directories.departments, 'neurology.jpg'),
    name: 'Neurology Department',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,orthopedics',
    path: path.join(directories.departments, 'orthopedics.jpg'),
    name: 'Orthopedics Department',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,pediatrics',
    path: path.join(directories.departments, 'pediatrics.jpg'),
    name: 'Pediatrics Department',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,oncology',
    path: path.join(directories.departments, 'oncology.jpg'),
    name: 'Oncology Department',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,emergency',
    path: path.join(directories.departments, 'emergency.jpg'),
    name: 'Emergency Department',
  },
  
  // Doctors (12 images)
  ...Array.from({ length: 12 }, (_, i) => ({
    url: `https://loremflickr.com/400/400/doctor,physician?random=${i + 1}`,
    path: path.join(directories.doctors, `doctor-${i + 1}.jpg`),
    name: `Doctor ${i + 1}`,
  })),
  
  // Technologies (8 images)
  ...Array.from({ length: 8 }, (_, i) => ({
    url: `https://loremflickr.com/600/400/medical-equipment,hospital?random=${i + 1}`,
    path: path.join(directories.technologies, `technology-${i + 1}.jpg`),
    name: `Technology ${i + 1}`,
  })),
  
  // Facilities (9 images)
  {
    url: 'https://loremflickr.com/400/300/hospital,entrance',
    path: path.join(directories.facilities, 'hospital-entrance.jpg'),
    name: 'Hospital Entrance',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,emergency',
    path: path.join(directories.facilities, 'emergency-department.jpg'),
    name: 'Emergency Department',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,surgery',
    path: path.join(directories.facilities, 'operating-theater.jpg'),
    name: 'Operating Theater',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,room',
    path: path.join(directories.facilities, 'patient-rooms.jpg'),
    name: 'Patient Rooms',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,laboratory',
    path: path.join(directories.facilities, 'laboratory.jpg'),
    name: 'Laboratory',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,radiology',
    path: path.join(directories.facilities, 'radiology-department.jpg'),
    name: 'Radiology Department',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,reception',
    path: path.join(directories.facilities, 'reception-area.jpg'),
    name: 'Reception Area',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,icu',
    path: path.join(directories.facilities, 'icu.jpg'),
    name: 'ICU',
  },
  {
    url: 'https://loremflickr.com/400/300/hospital,pediatric',
    path: path.join(directories.facilities, 'pediatric-ward.jpg'),
    name: 'Pediatric Ward',
  },
  
  // Blog/News (3 images)
  ...Array.from({ length: 3 }, (_, i) => ({
    url: `https://loremflickr.com/500/300/healthcare,medical?random=${i + 1}`,
    path: path.join(directories.blog, `news-${i + 1}.jpg`),
    name: `News ${i + 1}`,
  })),
];

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...\n');
  
  for (let i = 0; i < imagesToDownload.length; i++) {
    const image = imagesToDownload[i];
    try {
      await downloadImage(image.url, image.path);
      console.log(`[${i + 1}/${imagesToDownload.length}] ${image.name}`);
    } catch (error) {
      console.error(`Failed to download ${image.name}:`, error.message);
    }
    
    // Small delay to avoid overwhelming the server
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\nDownload complete!');
}

downloadAllImages().catch(console.error);

