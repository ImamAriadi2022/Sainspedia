import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import QuizPage from "./pages/QuizPage";

// game page
import GameBelajar from "./pages/Game";

import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/kuis" element={<QuizPage />} />
          <Route path="/gamebelajar" element={<GameBelajar />} />
          {/* Tambahkan rute lain sesuai kebutuhan */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;