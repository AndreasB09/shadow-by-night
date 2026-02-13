import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ClanPage from "./pages/Clan/ClanPage";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import CityBlue from "./assets/images/city_blue.jpg";


function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="banner-container">
        <div className="banner"><img src={CityBlue} alt="City skyline at night" /></div>
      </div>
      <Navbar />

      <div style={{ position: "relative", zIndex: 10, background: "#1e1e1e" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clan" element={<ClanPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;