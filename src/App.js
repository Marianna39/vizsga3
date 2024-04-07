import { BrowserRouter, Routes, Route } from "react-router-dom"
import Fooldal from './Fooldal'
import Scifi from './Scifi'
import Humor from './Humor'
import Nav from './Nav'




function App() {

  return (
    <div>
    
        <Nav />
        <Routes>
          <Route path="/" element={<Fooldal />} />
          <Route path="/scifi" element={<Scifi />} />
          <Route path="/humor" element={<Humor />} />
        </Routes>
     
    </div>
  )
}

export default App
