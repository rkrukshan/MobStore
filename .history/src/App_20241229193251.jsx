import Hero from "./assets/components/Hero"
import Nav from "./assets/components/Nav"

function App() {
const bgImg={
  backgroundImage:'(${/image/2.jpg})',
  backgroundRepeat:'no-repeat',
}
  return (
    <div className="overflow-x-hidden">
      <Nav/>
      <Hero/>
    </div>
  )
}

export default App
