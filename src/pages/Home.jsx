import Hero from "../components/Hero";
import Products from "../components/Products";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import People from "../components/People";
import Feedback from "../components/Feedback";
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Alpana Computers | Custom PCs & Services</title>
        <meta name="description" content="Get your dream PC, laptop, and accessories at Alpana Computers. Serving West Bengal with custom builds and IT support." />
        <meta name="keywords" content="Custom PC, Computers, West Bengal, Laptop Service, PC Builds, Alpana Computers" />
        <meta name="author" content="Alpana Computers" />
        <link rel="canonical" href="https://alpanacomp.shop/" />
      </Helmet>
      <Hero />
      <Products />
      <WhyChoose />
      <Services />
      <People />
      <Feedback />
    </>
  );
}

export default Home;
