import { ArrowRight } from "lucide-react";

const machines = [
  {
    title: "Wire Flattening Machine",
    specs: ["Direct M8 wire processing", "11.5 x 3 mm output", "50% raw material cost reduction"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Chopping and Marking Machine",
    specs: ["100,000 pcs/hour capacity", "Rotary punch technology", "Precision marking system"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Taping and Packaging Machine",
    specs: ["5g+5g and 5g+10g configurations", "Real-time monitoring", "15 boxes/hour output"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Decoiler Machine",
    specs: ["2000 kg coil capacity", "Hydraulic mandrel system", "Advanced tension control"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
  },
];

export const ProductionLine = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold rounded-full bg-accent/10 text-accent">
            Complete Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Complete Wheel Weights Production Line
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From Raw Material to Finished Product - Integrated Manufacturing Solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {machines.map((machine, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] flex flex-col"
            >
              <img
                src={machine.image}
                alt={machine.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-4">{machine.title}</h3>
                <ul className="space-y-2 mb-6 flex-grow">
                  {machine.specs.map((spec, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {spec}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-secondary w-full mt-auto">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};