import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroPage from "./pages/HeroPage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Hero page as landing page */}
        <Route path="/" element={<HeroPage />} />
        {/* News page route with dynamic category */}
        <Route path="/news/:category" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

