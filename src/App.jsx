import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import ClanPage from "./pages/Clan/ClanPage";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/clan">Clan</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clan" element={<ClanPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;