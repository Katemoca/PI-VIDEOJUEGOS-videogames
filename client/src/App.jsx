import { Route, Routes } from "react-router-dom";
import { Landing, Home, Create, DetailVideogame } from "../src/views/index";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/videogames/:idVideogame" element={<DetailVideogame />} />
      </Routes>
    </div>
  );
}

export default App;
