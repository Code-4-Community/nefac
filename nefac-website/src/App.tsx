import React from "react";
import "./globals.css";
import SustainingMembershipsPage from "./app/pages/sustaining-memberships/page";
import NewsPage from "./app/pages/nefac-news/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./app/components/header";
import Footer from "./app/components/footer";
import MissionPage from "./app/pages/mission/page";
import Home from "./app/page";
import LeadershipPage from "./app/pages/leadership/leader-page";
import SubscribePage from "./app/pages/subscribe/page";
import HomePage from "./app/pages/home/page";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nefac-news" element={<NewsPage />} />
        <Route path="/sustaining-memberships" element={<SustainingMembershipsPage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
