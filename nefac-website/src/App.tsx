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
import EducationInitiativePage from "./app/components/education-initiative-page/EducationInitiativePage";
import InitiativeDescription from "./app/components/education-initiative-page/InitiativeDescription";

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
        <Route path="/education-initiative" element={
            <EducationInitiativePage>
              <InitiativeDescription 
                header = "This is the Header Portion"
                description="Testing text for the First Amendment and Free Press Education Initiative.
                Testing text for the First Amendment and Free Press Education Initiative.
                Testing text for the First Amendment and Free Press Education Initiative.
                Testing text for the First Amendment and Free Press Education Initiative.
                Testing text for the First Amendment and Free Press Education Initiative.
                Testing text for the First Amendment and Free Press Education Initiative.
                Testing text for the First Amendment and Free Press Education Initiative.
                Testing text for the First Amendment and Free Press Education Initiative."
                thumbnailUrl="https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign_image/name/6220f528cabcde2023b2a543/8d7e7465-97b6-461a-a141-66ddeb535b7b.jpeg"
              />
              {/* Sample placeholders for the UpcomingPresSect and PastPresSect (for a component in which it would have these 3 elements) */}
              <div className="w-full text-[32px]">
                  Upcoming Presentations Section Display Text.
                  Upcoming Presentations Section Display Text.
                  Upcoming Presentations Section Display Text.
                  Upcoming Presentations Section Display Text.
                  Upcoming Presentations Section Display Text.
              </div>
              
              <div className="w-full text-[32px]">
                  Past Presentations Section Display Text
              </div>
            </EducationInitiativePage>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
