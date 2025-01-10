import { DollarSign, CheckCircle, Award, Rocket } from "lucide-react";

const benefits = [
  {
    title: "Cost Efficiency",
    description: "Lower energy consumption and reduced maintenance needs for optimal production flow.",
    icon: DollarSign,
  },
  {
    title: "Quality Assurance",
    description: "Precise weight control with consistent marking and automated quality checks.",
    icon: CheckCircle,
  },
  {
    title: "Operational Excellence",
    description: "Simple operation with minimal training required and real-time monitoring.",
    icon: Award,
  },
  {
    title: "Future-Ready Production",
    description: "Scalable capacity with modern control systems and Industry 4.0 compatibility.",
    icon: Rocket,
  },
];

const Benefits = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Maximize Your Manufacturing Efficiency
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="inline-flex p-3 bg-accent/10 rounded-full text-accent mb-4">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;