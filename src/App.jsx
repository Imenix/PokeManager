import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Team from "./components/Team";
import Pokemon from "./components/Pokemon";
import NavBar from "./components/NavigationBar";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [team, setTeam] = useState([]);

  return (
    <Router className="App">
      <div className="App">
        <header className="header">
          <h1>Pokemon Manager</h1>
        </header>
        <NavBar />
        <main>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Pokemon" element={<Pokemon setTeam={setTeam} />} />
            <Route
              path="/Team"
              element={<Team team={team} setTeam={setTeam} />}
            />
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
