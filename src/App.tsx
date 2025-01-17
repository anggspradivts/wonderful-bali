import "./App.css";
import "./font.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about/about";
import Destination from "./pages/destination/destination";
import Contact from "./pages/contact/contact";
import Tour2 from "./pages/tour/tour2";
import TourDetailPage from "./pages/tour/tourId/tourdetail";
import DestinationDetail from "./pages/destination/destinationId/destination-detail";

import { data2 } from "./data/data";
import GotoTopBtn from "./components/ui/gototop-btn";
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="px-5 md:px-20 transition-all duration-300">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={data2} />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour2 />} />
        <Route path="/tour/:id" element={<TourDetailPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination" element={<Destination data={data2} />} />
        <Route
          path="/destination/:id"
          element={<DestinationDetail data={data2} />}
        />
      </Routes>
      {isVisible && (
        <div className="fixed bottom-5 right-5 md:bottom-20 md:right-20 ">
          <GotoTopBtn />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
