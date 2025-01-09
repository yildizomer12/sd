import { Zap, Battery, Award, Maximize } from "lucide-react";

const advantages = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Higher Production Speed",
    description: "4-8x faster than conventional presses with continuous operation and automated feeding system.",
  },
  {
    icon: <Battery className="h-8 w-8" />,
    title: "Energy Efficiency",
    description: "83,300 pcs/kWh vs competitor's 20,800 pcs/kWh, with smaller motor requirements and lower operational costs.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Superior Quality",
    description: "Burr-free cutting with clear markings and precise weight control for optimal performance.",
  },
  {
    icon: <Maximize className="h-8 w-8" />,
    title: "Space Efficiency",
    description: "Compact design with vibration-free operation and flexible installation options.",
  },
];

export const TechnologyAdvantages = () => {
  return (
    <section id="technology" className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-accent/10 text-accent">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Revolutionary Rotary Punch Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Superior Performance Through Innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl text-center transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{advantage.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};