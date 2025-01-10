import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
}

export const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const fallbackBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize YouTube player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player('youtube-player', {
        videoId: 'CUrBRxySXI8',
        playerVars: {
          autoplay: 1,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          iv_load_policy: 3,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          start: 202,
          playlist: 'CUrBRxySXI8', // Required for looping
          vq: 'hd1080' // Request highest quality
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsVideoLoaded(true);
            }
          }
        }
      });
    };
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Fallback background that shows until video loads */}
      <div 
        ref={fallbackBgRef}
        className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* YouTube video background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          id="youtube-player"
          className={`absolute w-[300%] h-[300%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-accent/10 text-accent">
            Industry Leading Manufacturing Equipment
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Transform Your Wheel Weights Production
          </h1>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Leading the wheel weights industry with cutting-edge rotary punch technology and integrated production solutions. Our complete manufacturing systems deliver unmatched efficiency, precision, and ROI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn btn-primary w-full sm:w-auto">
              Get Equipment Specification
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="btn btn-secondary w-full sm:w-auto">
              Calculate ROI
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            {[
              { metric: "100,000", label: "pcs/hour production capacity" },
              { metric: "83,300", label: "pcs/kWh energy efficiency" },
              { metric: "±0.5g", label: "weight accuracy" },
              { metric: "10+", label: "years industry experience" },
            ].map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="text-3xl font-bold mb-2">{item.metric}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};