import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Tariffs from "./components/Tariffs";
import Sample from "./components/Sample";
import Faq from "./components/Faq";
import CtaFooter from "./components/CtaFooter";
import Onboarding from "./pages/Onboarding";

function Landing() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Tariffs />
        <Sample />
        <Faq />
        <CtaFooter />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/start" element={<Onboarding />} />
    </Routes>
  );
}
