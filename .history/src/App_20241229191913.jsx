import Hero from "./assets/components/Hero"
import Nav from "./assets/components/Nav"

function App() {

  return (
    <div className="overflow-x-hidden bg-[url('/image/2.jpg')] bg-no-repeat bg-cover w-full h-auto">
      <Nav/>
      <Hero/>
    </div>
  )
}

export default App
