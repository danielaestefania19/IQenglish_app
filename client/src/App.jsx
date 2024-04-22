import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./landing/Navbar"
import Body from "./landing/Body"
//import Form from "./landing/Form"
import Footer from "./landing/Footer"
// import Carousel from "./landing/Carousel"
import Card from "./landing/Card" 
import Blog from "./landing/Blog"
import Teachers from "./landing/Teachers"






function App() {
  return (
    <Router>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Body />
            <Blog />
            <Card/>
            <Footer />
          </>
        }
      />
      <Route path="/teachers" element={<Teachers />} />
    </Routes>
    </Router>
  )
}


export default App
