import Hero from "./assets/components/Hero";
import Nav from "./assets/components/Nav";

function App() {
  const bgImg = {
    backgroundImage: "url(/image/2.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height:100vh
  };
  return (
    <div style={bgImg} className="overflow-x-hidden">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
