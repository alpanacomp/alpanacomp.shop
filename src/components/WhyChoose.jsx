import { Player } from "@lottiefiles/react-lottie-player";

const features = [
  {
    title: "Affordable Pricing",
    description: "Get top-notch desktops at unbeatable prices perfect for every budget.",
    animation: "/assets/lottie/affordable.json",
  },
  {
    title: "Reliable Performance",
    description: "Each PC is optimized for smooth, lag-free daily usage or office work.",
    animation: "/assets/lottie/performance.json",
  },
  {
    title: "Quick Support",
    description: "We ensure fast response and solutions to your technical issues.",
    animation: "/assets/lottie/support.json",
  },
  {
    title: "Custom Builds",
    description: "Custom-built solutions tailored to your needs — home, office, or server.",
    animation: "/assets/lottie/custom.json",
  },
];

function WhyChoose() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 text-center px-6 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Why Choose <span className="text-blue-600 dark:text-blue-400">Alpana Computers?</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          We’re committed to delivering performance, quality, and trust.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <Player
                autoplay
                loop
                src={feature.animation}
                style={{ height: "200px", width: "200px" }}
              />
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
