import { useEffect, useRef, useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

interface QuelpAIChatbotProps {
  botId?: string;
}

const QuelpAIChatbot = ({ botId = 'YOUR_BOT_ID' }: QuelpAIChatbotProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isLoaded.current) return;
    isLoaded.current = true;

    // Load QuelpAI script
    const script = document.createElement('script');
    script.src = 'https://quelp.ai/widget.js';
    script.async = true;
    script.defer = true;
    
    script.setAttribute('data-bot-id', botId);
    script.setAttribute('data-container', 'quelp-container');
    
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [botId]);

  return (
    <>
      {/* Chat Widget Container - Only visible when open */}
      {isOpen && (
        <div
          id="quelp-container"
          ref={containerRef}
          className="
            fixed z-50
            bottom-[70px] right-3
            w-[90vw] max-w-[400px]
            h-[50vh] max-h-[50vh]
            rounded-2xl
            overflow-hidden
            shadow-2xl
            bg-background
            border border-border
            md:bottom-4 md:right-4 md:w-[380px]
          "
        >
          {/* Custom Close Button - Top Right */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute top-2 right-2 z-[60]
              w-8 h-8
              flex items-center justify-center
              bg-destructive text-destructive-foreground
              rounded-full
              shadow-lg
              hover:bg-destructive/90
              transition-colors
            "
            aria-label="Close chat"
          >
            <X size={18} />
          </button>

          {/* Custom Close Button - Bottom Center (Mobile backup) */}
          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute bottom-2 left-1/2 -translate-x-1/2 z-[60]
              px-4 py-2
              flex items-center gap-2
              bg-destructive text-destructive-foreground
              rounded-full
              shadow-lg
              hover:bg-destructive/90
              transition-colors
              text-sm font-medium
              md:hidden
            "
            aria-label="Close chat"
          >
            <X size={16} />
            Close Chat
          </button>

          {/* QuelpAI widget target */}
          <div 
            id="quelp-widget-target"
            className="w-full h-full"
          />
        </div>
      )}

      {/* Launcher Button - Always visible when chat is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed z-50
            bottom-[80px] right-4
            w-14 h-14
            flex items-center justify-center
            bg-primary text-primary-foreground
            rounded-full
            shadow-xl
            hover:bg-primary/90
            transition-all
            hover:scale-105
            md:bottom-6 md:right-6
          "
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </>
  );
};

export default QuelpAIChatbot;
