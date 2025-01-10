import { ArrowRight } from "lucide-react";

interface HeroProps {
}

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center bg-gradient-to-b from-secondary to-white relative">
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/0594474b-2696-461c-bbc2-fe30fe7699f4.png" 
          alt="Manufacturing Equipment Lineup" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-white/90" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-accent/10 text-accent">
            Industry Leading Manufacturing Equipment
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Transform Your Wheel Weights Production
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
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