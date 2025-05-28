import Hero from "../components/Hero";
import Products from "../components/Products";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import People from "../components/People"; // 👈 import it

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <WhyChoose />
      <Services />
      <People /> {/* 👈 add here */}
    </>
  );
}

export default Home;
