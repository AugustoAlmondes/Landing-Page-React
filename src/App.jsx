import './styles/App.css'
import './styles/Responsive.css'
import About from './Components/About'
import Home from './Components/Home'
import Work from './Components/Work'
import Testemonial from './Components/Testemonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

// import Testemonial from './Components/Testemonial'
// import Work from './Components/Work.jsx'

function App() {
  return (
    <>
      <div className="App"> 
        <Home />
        <About />
        <Work />
        <Testemonial />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
