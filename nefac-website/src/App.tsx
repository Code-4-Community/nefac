import React from "react";
import Bubble from "./components/Bubble";
import "./globals.css";
import SustainingMembershipsPage from "./pages/sustaining-memberships/page";
import NewsPage from "./pages/nefac-news/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/nefac-news" element={<NewsPage />} />
        <Route path="/sustaining-memberships" element={<SustainingMembershipsPage />} />
      </Routes>
    </Router>
  );


};

export default App;
