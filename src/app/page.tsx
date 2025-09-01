import Navbar from "./components/navbar";
import Hero from "./components/hero/hero";
// import Carousel from "./components/carousel";
import Features from "./components/features";
import AboutUs from "./components/aboutUs";
import Reviews from "./components/reviews";
import Queries from "./components/queries";
import ContactUs from "./components/contact";
// import Pricing from "./components/pricing";
import Footer from "./components/footer";


export default function Home() {
  return (
      <>
      <div className="flex flex-col gap-12">
        <Navbar />

        <div id="home">
        <Hero />
        </div>
        {/* <Carousel /> */}
        <div id="features">
        <Features />
        </div>

        <div id="about">
        <AboutUs />
        </div>
        {/* <Pricing /> */}
        <div id="reviews">
        <Reviews />
        </div>

        <div id="faq">
        <Queries />
        </div>
        
        <div id="contact">
        <ContactUs />
        </div>
        
        <Footer />
      </div>
      </>
  );
}
