You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
react-tailwind-image-gallery.tsx
// components.js

import React from 'react';

export function Gallery({ data, onImageClick }) {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((img) => (
            <div
              key={img.id}
              className={`group cursor-pointer relative overflow-hidden rounded-lg ${img.span}`}
              onClick={() => onImageClick(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-img w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  {img.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ImageModal({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      id="imageModal"
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 opacity-100"
      onClick={onClose}
    >
      <img
        src={src}
        alt="Enlarged view"
        className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        className="absolute top-5 right-5 text-white text-4xl font-bold"
        onClick={onClose}
      >
        &times;
      </button>
    </div>
  );
}


demo.tsx

import React, { useState, useEffect } from 'react';
import { Gallery, ImageModal } from "@/components/ui/react-tailwind-image-gallery";

const galleryData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1470&auto=format&fit=crop",
    alt: "Cityscape at dusk",
    title: "Cityscape at dusk",
    span: "col-span-1"
  },
  {
    id: 2,
    src: "https://ix-marketing.imgix.net/focalpoint.png?q=80&w=1470&auto=format&fit=crop",
    alt: "Portrait",
    title: "Portrait",
    span: "sm:col-span-2"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1470&auto=format&fit=crop",
    alt: "Sunlight through a forest",
    title: "Forest Path",
    span: "col-span-1"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1364&auto=format&fit=crop",
    alt: "Portrait of a person",
    title: "Portrait",
    span: "col-span-1"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1470&auto=format&fit=crop",
    alt: "Wildlife photography",
    title: "Wildlife",
    span: "sm:col-span-2"
  },
  {
    id: 6,
    src: "https://ix-marketing.imgix.net/bg-remove_after.png?q=80&w=1470&auto=format&fit=crop",
    alt: "Modern architecture",
    title: "Architecture",
    span: "col-span-1"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1488866022504-f2584929ca5f?q=80&w=1470&auto=format&fit=crop",
    alt: "Starry night sky",
    title: "Night Sky",
    span: "col-span-1"
  },
  {
    id: 8,
    src: "https://ix-marketing.imgix.net/autocompress.png?q=80&w=1287&auto=format&fit=crop",
    alt: "Street art",
    title: "Street Art",
    span: "col-span-1"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1470&auto=format&fit=crop",
    alt: "Mountain Range",
    title: "Mountain Range",
    span: "sm:col-span-2"
  },
];

export default function DemoOne() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <Gallery data={galleryData} onImageClick={openModal} />
      <ImageModal src={modalImage} onClose={closeModal} />
    </>
  );
}
```

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
