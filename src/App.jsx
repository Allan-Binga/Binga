import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SelectedWork from "./components/SelectedWork.jsx";
import EngineeringApproach from "./components/EngineeringApproach.jsx";
import AIWorkflow from "./components/AIWorkflow.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 w-full max-w-[1240px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl space-y-24"
      >
        <Hero />
        <SelectedWork />
        <EngineeringApproach />
        <AIWorkflow />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
