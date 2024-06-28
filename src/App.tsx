

import "./App.css";
import "./font.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./routes/about/about";
import Destination from "./routes/destination/destination";

import { data } from "./data/data";
import Tour from "./routes/tour/tour";
import Contact from "./routes/contact/contact";

function App() {

  return (
    <div className="px-5 md:px-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/destination" element={<Destination data={data} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
