import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ClanPage from "./pages/Clan/ClanPage";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <Router>
      <div className="banner-container">
        <div className="banner"></div>
      </div>
      <Navbar />

      <div style={{ position: "relative", zIndex: 10, background: "#1e1e1e" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clan" element={<ClanPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;