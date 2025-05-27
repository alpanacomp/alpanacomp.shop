const products = [
  {
    id: 1,
    name: "Alpana Home PC",
    image: "/assets/product2.png",
    price: "₹8,499",
    description: "Perfect for home & daily tasks. Intel i3, 8GB RAM, 256GB SSD and 19inch display.",
  },
  {
    id: 2,
    name: "Alpana Productivity Pro",
    image: "/assets/product1.png",
    price: "₹10,499",
    description: "Optimized for productivity. Intel i5, 8GB RAM, 128GB SSD and 19inch display.",
  },
  {
    id: 3,
    name: "Alpana Server Pro",
    image: "/assets/product3.png",
    price: "₹13,499",
    description: "Designed for creating home server. Intel i5, 16GB RAM, 128+128 GB SSD and 19 inch display.",
  },
];

function Products() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          High-quality desktops tailored for every need
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
              <p className="font-bold text-blue-600 dark:text-blue-400">{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 dark:bg-blue-500 text-white py-2 rounded hover:opacity-90 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
