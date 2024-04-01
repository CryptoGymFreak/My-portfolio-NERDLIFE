import Nav from './components/nav'
import AboutUs from './pages/about-us'
import Work from './pages/work'
import ContactUs from './pages/contact-us'
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </>
  )
}

export default App
