import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

// Import images
import before1 from "@/assets/gallery/before-1.webp";
import after1 from "@/assets/gallery/after-1.webp";
import before2 from "@/assets/gallery/before-2.webp";
import after2 from "@/assets/gallery/after-2.webp";
import pressureCleaning from "@/assets/gallery/pressure-cleaning.webp";
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

const beforeAfterPairs: (BeforeAfterPair & { beforePosition?: string; afterPosition?: string })[] = [
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
    beforePosition: "center 60%",
    afterPosition: "center 45%",
  },
];

const galleryImages: GalleryImage[] = [
  {
    src: pressureCleaning,
    suburb: "Traralgon",
    service: "Pressure Cleaning & Moss Removal",
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
              beforePosition={pair.beforePosition}
              afterPosition={pair.afterPosition}
            />
          ))}
        </div>

        {/* Gallery Carousel Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            More Completed Projects
          </h3>
          <p className="text-muted-foreground">
            Swipe or use arrows to browse
          </p>
        </div>

        {/* Single Image Carousel */}
        <div className="relative max-w-2xl mx-auto">
          {/* Main Image */}
          <div 
            className="relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl shadow-lg border border-border cursor-pointer"
            onClick={() => openLightbox(currentImageIndex)}
          >
            <img
              src={galleryImages[currentImageIndex].src}
              alt={`${galleryImages[currentImageIndex].suburb} - ${galleryImages[currentImageIndex].service}`}
              className="w-full h-full object-cover transition-opacity duration-300"
              loading="lazy"
            />
            
            {/* Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-5">
              <p className="text-white font-bold text-lg">{galleryImages[currentImageIndex].suburb}</p>
              <p className="text-white/90 text-sm">{galleryImages[currentImageIndex].service}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-2 md:-left-14 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg hover:bg-muted rounded-full transition-colors border border-border"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 md:-right-14 top-1/2 -translate-y-1/2 z-10 p-3 bg-white shadow-lg hover:bg-muted rounded-full transition-colors border border-border"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? "bg-primary w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <p className="text-center text-sm text-muted-foreground mt-2">
            {currentImageIndex + 1} of {galleryImages.length}
          </p>
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
