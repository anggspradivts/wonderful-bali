
import "./App.css";
import "./font.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./routes/about/about";
import Destination from "./routes/destination/destination";
import Contact from "./routes/contact/contact";
import Tour2 from "./routes/tour/tour2";
import TourDetailPage from "./routes/tour/tourId/tourdetail";
import DestinationDetail from "./routes/destination/destinationId/destination-detail";

import { data, data2 } from "./data/data";

function App() {

  return (
    <div className="px-5 md:px-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour2 />}/>
          <Route path="/tour/:id" element={<TourDetailPage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/destination" element={<Destination data={data2} />}/>
          <Route path="/destination/:id" element={<DestinationDetail data={data2} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
