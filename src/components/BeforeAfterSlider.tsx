import { useState, useRef } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  suburb: string;
  service: string;
  beforePosition?: string;
  afterPosition?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  suburb,
  service,
  beforePosition = "top",
  afterPosition = "top",
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl cursor-ew-resize select-none shadow-lg border border-border"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt={`After ${service} - ${suburb}, Latrobe Valley roofing project`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: afterPosition }}
          loading="lazy"
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt={`Before ${service} - ${suburb}, Gippsland roof restoration`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: beforePosition }}
            loading="lazy"
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex items-center gap-0.5">
              <svg className="w-3 h-3 text-primary rotate-180" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7V5z"/>
              </svg>
              <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7V5z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
          {beforeLabel}
        </div>
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-sm font-semibold">
          {afterLabel}
        </div>
      </div>

      {/* Caption */}
      <div className="mt-3 text-center">
        <p className="font-semibold text-foreground">{suburb}</p>
        <p className="text-sm text-muted-foreground">{service}</p>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
