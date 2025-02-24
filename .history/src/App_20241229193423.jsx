import Hero from "./assets/components/Hero"
import Nav from "./assets/components/Nav"

function App() {
const bgImg={
  backgroundImage:'(${})',
  backgroundRepeat:'no-repeat',
  backfroundSize:'cover',
  backgroundPosition:'center'
}
  return (
    <div style={bgImg} className="overflow-x-hidden">
      <Nav/>
      <Hero/>
    </div>
  )
}

export default App
