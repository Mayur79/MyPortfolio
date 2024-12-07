import React, { lazy, Suspense } from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import ExperienceSection from "./Components/ExperienceSection";
const Navbar = lazy(() => import("./Components/Navbar"));
const Contactus = lazy(() => import("./Pages/Contactus"));
const FooterSection = lazy(() => import("./Pages/FooterSection"));
const HeroSection = lazy(() => import("./Pages/HeroSection"));
const ProjectSection = lazy(() => import("./Pages/ProjectSection"));
const AboutSection = lazy(() => import("./Pages/AboutSection"));
const SkillSection = lazy(() => import("./Pages/SkillSection"));

const LoadingFallback = () => <div>Loading...</div>;

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Navbar />
      <HeroSection />
      <div id="aboutSection">
        <AboutSection />
      </div>
      <div id="skillSection">
        <SkillSection />
      </div>
      <div id="experienceSection">
        <ExperienceSection />
      </div>
      <div id="projectSection">
        <ProjectSection />
      </div>
      <div id="contactSection">
        <Contactus />
      </div>
      <FooterSection />

      <Analytics />
      <SpeedInsights />
    </Suspense>
  );
}

export default App;
