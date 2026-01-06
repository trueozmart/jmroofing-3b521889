import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

// Import images
import before1 from "@/assets/gallery/before-1.webp";
import after1 from "@/assets/gallery/after-1.webp";
import before2 from "@/assets/gallery/before-2.webp";
import after2 from "@/assets/gallery/after-2.webp";
import pressureCleaning from "@/assets/gallery/pressure-cleaning.webp";
import colorbondRoof from "@/assets/gallery/colorbond-roof.webp";
import brickHouseRoof from "@/assets/gallery/brick-house-roof.webp";
import metalRoofSolar from "@/assets/gallery/metal-roof-solar.webp";

interface BeforeAfterPair {
  before: string;
  after: string;
  suburb: string;
  service: string;
}

interface GalleryImage {
  src: string;
  suburb: string;
  service: string;
}

const beforeAfterPairs: BeforeAfterPair[] = [
  {
    before: before1,
    after: after1,
    suburb: "Yinnar",
    service: "Full Roof Restoration",
  },
  {
    before: before2,
    after: after2,
    suburb: "Moe",
    service: "Roof Tile Replacement",
  },
];

const galleryImages: GalleryImage[] = [
  {
    src: pressureCleaning,
    suburb: "Traralgon",
    service: "Pressure Cleaning & Moss Removal",
  },
  {
    src: colorbondRoof,
    suburb: "Morwell",
    service: "Colorbond Re-roofing",
  },
  {
    src: brickHouseRoof,
    suburb: "Churchill",
    service: "Complete Roof Restoration",
  },
  {
    src: metalRoofSolar,
    suburb: "Newborough",
    service: "Metal Roofing & Gutters",
  },
  {
    src: after1,
    suburb: "Yinnar",
    service: "Roof Restoration Complete",
  },
  {
    src: after2,
    suburb: "Moe",
    service: "Tile Roof Restoration",
  },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <section id="gallery" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            See the Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our completed roofing projects across the Latrobe Valley. 
            Drag the slider to compare before and after results.
          </p>
        </div>

        {/* Before/After Sliders */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {beforeAfterPairs.map((pair, index) => (
            <BeforeAfterSlider
              key={index}
              beforeImage={pair.before}
              afterImage={pair.after}
              suburb={pair.suburb}
              service={pair.service}
            />
          ))}
        </div>

        {/* Gallery Grid Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            More Completed Projects
          </h3>
          <p className="text-muted-foreground">
            Click any image to view in full size
          </p>
        </div>

        {/* Masonry-style Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative mb-4 md:mb-6 break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-md border border-border transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30">
                <img
                  src={image.src}
                  alt={`${image.suburb} - ${image.service}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Hover Overlay with Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 md:p-5 w-full">
                    <p className="text-white font-bold text-lg">{image.suburb}</p>
                    <p className="text-white/90 text-sm">{image.service}</p>
                  </div>
                </div>

                {/* Always visible caption on mobile */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 md:hidden">
                  <p className="text-white font-semibold text-sm">{image.suburb}</p>
                  <p className="text-white/80 text-xs">{image.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <div
              className="max-w-[90vw] max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[currentImageIndex].src}
                alt={`${galleryImages[currentImageIndex].suburb} - ${galleryImages[currentImageIndex].service}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                <p className="text-white font-bold text-lg text-center">
                  {galleryImages[currentImageIndex].suburb}
                </p>
                <p className="text-white/90 text-sm text-center">
                  {galleryImages[currentImageIndex].service}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
