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
    <>
      <head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website where I showcase my skills and projects." />
        <meta name="keywords" content="portfolio, web development, skills, projects, contact" />
        <meta name="author" content="Mayur Bhoyar" />
        <link rel="canonical" href="https://mayurbhoyar.vercel.app/" />
      </head>
      <Suspense fallback={<LoadingFallback />}>
        <Navbar />
        <main>
          <HeroSection />
          <section id="aboutSection">
            <AboutSection />
          </section>
          <section id="skillSection">
            <SkillSection />
          </section>
          <section id="experienceSection">
            <ExperienceSection />
          </section>
          <section id="projectSection">
            <ProjectSection />
          </section>
          <section id="contactSection">
            <Contactus />
          </section>
        </main>
        <FooterSection />

        <Analytics />
        <SpeedInsights />
      </Suspense>
    </>
  );
}

export default App;
