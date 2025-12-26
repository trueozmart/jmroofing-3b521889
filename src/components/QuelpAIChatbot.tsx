import { useEffect, useRef } from 'react';

interface QuelpAIChatbotProps {
  botId?: string;
}

const QuelpAIChatbot = ({ botId = 'YOUR_BOT_ID' }: QuelpAIChatbotProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLoaded = useRef(false);

  useEffect(() => {
    if (isLoaded.current) return;
    isLoaded.current = true;

    // Load QuelpAI script
    const script = document.createElement('script');
    script.src = 'https://quelp.ai/widget.js'; // Replace with actual QuelpAI script URL
    script.async = true;
    script.defer = true;
    
    // Set data attributes for QuelpAI configuration
    script.setAttribute('data-bot-id', botId);
    script.setAttribute('data-container', 'quelp-container');
    
    // Append to the container instead of body
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
      {/* Chat Widget Container */}
      <div
        id="quelp-container"
        ref={containerRef}
        className="
          fixed z-50
          bottom-[70px] right-3
          w-[90vw] max-w-[400px]
          max-h-[50vh]
          rounded-2xl
          overflow-hidden
          shadow-2xl
          bg-background
          border border-border
          md:bottom-4 md:right-4 md:w-[380px]
        "
        style={{
          /* Fallback inline styles for maximum specificity */
          position: 'fixed',
          bottom: '70px',
          right: '12px',
          maxHeight: '50vh',
          width: '90vw',
          maxWidth: '400px',
          borderRadius: '16px',
          overflow: 'hidden',
          zIndex: 50,
        }}
      >
        {/* QuelpAI widget will be injected here */}
        <div 
          id="quelp-widget-target"
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Launcher Button - Stays visible above sticky bars */}
      <div
        id="quelp-launcher"
        className="
          fixed z-50
          bottom-[80px] right-4
          md:bottom-6 md:right-6
        "
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '16px',
          zIndex: 50,
        }}
      >
        {/* QuelpAI launcher button will be injected here or you can create custom */}
      </div>
    </>
  );
};

export default QuelpAIChatbot;
