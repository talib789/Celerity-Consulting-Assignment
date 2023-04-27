import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import HomeDash from "./components/HomeDash.jsx";
import Checkbox from "./components/Checkout.jsx";

import "./App.scss";
import "./styles/Checkout.scss";
import "./styles/HomePage.scss";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/homedash" element={<HomeDash />} />
        <Route path="/Checkout" element={<Checkbox />} />
      </Routes>
    </Router>
  );
}
