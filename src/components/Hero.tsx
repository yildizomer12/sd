import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroProps {}

export const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative pt-32 pb-20 min-h-screen flex items-center">
      {/* Background gradient shown until video loads */}
      <div className={`absolute inset-0 bg-gradient-to-b from-secondary to-white transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`} />
      
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="relative w-full h-full">
          <iframe
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-40' : 'opacity-0'}`}
            src="https://www.youtube.com/embed/CUrBRxySXI8?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=CUrBRxySXI8&playsinline=1&enablejsapi=1&origin=http://localhost:5173&widgetid=1&hd=1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onLoad={() => setIsVideoLoaded(true)}
            style={{ pointerEvents: 'none' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-accent/10 text-accent">
            Industry Leading Manufacturing Equipment
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
            Transform Your Wheel Weights Production
          </h1>
          <p className="text-lg text-gray-800 mb-8 leading-relaxed">
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
              <div key={index} className="glass-card p-6 rounded-xl backdrop-blur-lg">
                <div className="text-3xl font-bold mb-2 text-gray-900">{item.metric}</div>
                <div className="text-sm text-gray-800">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};