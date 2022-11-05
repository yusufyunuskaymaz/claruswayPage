import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Services from "./pages/Services"
import Html from "./pages/Html"
import Css from "./pages/Css"
import Design from "./pages/GraphicDesign"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/graphic-design" element={<Design />} />

        {/* <Home /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
