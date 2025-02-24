import Banner from "./assets/components/Banner";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Hero from "./assets/components/Hero";
import Mobilemenu from "./assets/components/Mobilemenu";
import Nav from "./assets/components/Nav";
import Service from "./assets/components/Service";
import Toplist from "./assets/components/Toplist";

function App() {
  const bgImg = {
    backgroundImage: "url(/image/2.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };
  return (
    <div style={bgImg} className="overflow-x-hidden">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Nav />
        <Mobilemenu />
        <Hero />
        <Toplist />
        <Banner />
        <Service />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
