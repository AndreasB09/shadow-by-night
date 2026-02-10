import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ClanPage from "./pages/Clan/ClanPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clan" element={<ClanPage />} />
      </Routes>
    </Router>
  );
}

export default App;