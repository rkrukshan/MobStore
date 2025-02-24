import Hero from "./assets/components/Hero"
import Nav from "./assets/components/Nav"

function App() {
const bgImg={
  backgroundImage:'(${/image/2.jpg})',
  backgroundRepeat:'no-repeat',
  backfroundSize:'cover'
}
  return (
    <div className="overflow-x-hidden">
      <Nav/>
      <Hero/>
    </div>
  )
}

export default App
