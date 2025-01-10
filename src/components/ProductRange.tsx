import { Button } from "./ui/button";

const products = [
  {
    title: "Chopping and Marking Machine",
    model: "LBA0120",
    specs: [
      "Production Speed: 100,000 pcs/hr",
      "Energy Cost: 0.2 kWh",
      "Dimensions: 600mm x 800mm x 1300mm",
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
  },
  {
    title: "Taping Machine",
    model: "TM2000",
    specs: [
      "Applications: 5g+5g and 5g+10g",
      "Production Speed: 90 kg/hr",
      "Synchronized operation",
    ],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800",
  },
  {
    title: "Packaging Unit",
    model: "PU150",
    specs: [
      "Capacity: 15 boxes/hr",
      "Seamless integration",
      "Automated sorting",
    ],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
  },
];

const ProductRange = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Complete Wheel Weight Production Solutions
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-accent mb-4">Model: {product.model}</p>
                <ul className="space-y-2 mb-6">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="text-gray-600 text-sm">
                      • {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Download Complete Technical Documentation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductRange;