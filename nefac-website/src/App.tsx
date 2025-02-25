import React from "react";
import Bubble from "./app/components/Bubble";
import "./globals.css";
import SustainingMembershipsPage from "./app/pages/sustaining-memberships/page";
import LeadershipPage from "./app/pages/leadership/page";
import NewsPage from "./app/pages/nefac-news/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./app/components/header";

const App = () => {

  return (
    <>
    <Header />
        <Router>
      <Routes>
        <Route path="/nefac-news" element={<NewsPage />} />
        <Route path="/sustaining-memberships" element={<SustainingMembershipsPage />} />
         <Route path="/leadership" element={<LeadershipPage />} />
      </Routes>
    </Router>
    </>
  );


};

export default App;
