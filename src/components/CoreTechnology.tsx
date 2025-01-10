import { RotateCw, Zap, Ruler, Minimize2 } from "lucide-react";

const features = [
  {
    title: "Superior Production Speed",
    description: "Continuous rotary operation with up to 120,000 pieces per hour output.",
    icon: RotateCw,
  },
  {
    title: "Unmatched Energy Efficiency",
    description: "Only 0.2 kWh energy consumption with 83,300 pieces per kWh.",
    icon: Zap,
  },
  {
    title: "Precision Engineering",
    description: "±0.5g weight accuracy with burr-free cutting and clear marking system.",
    icon: Ruler,
  },
  {
    title: "Compact Design",
    description: "Space-efficient footprint with vibration-free operation and flexible installation.",
    icon: Minimize2,
  },
];

const CoreTechnology = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Revolutionary Rotary Punch Technology
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A New Standard in Wheel Weight Manufacturing
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="inline-flex p-3 bg-accent rounded-lg text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="pt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreTechnology;