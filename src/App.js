import "./App.css";
import { Branding } from "./components/Branding/Branding";
import CareerCreation from "./components/CareerCreation/CareerCreation";
import CareerGuideline from "./components/CareerGuideline/CareerGuideline";
import CareerGuiding from "./components/CareerGuiding/CareerGuiding";
import CareerHelp from "./components/CareerHelp/CareerHelp";
import Footer from "./components/Footer/Footer";
import FreeVideoResource from "./components/FreeVideoResource/FreeVideoResource";
import HeroSection from "./components/HeroSection/HeroSection";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity";
import Navbar from "./components/Navbar/Navbar";
import SlickSection from "./components/SlickSection/SlickSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* <SlickSection /> */}
      <CareerGuideline />
      <CareerHelp />
      <FreeVideoResource />
      <JoinCommunity />
      <CareerCreation />
      <Branding />
      <CareerGuiding />
      <Footer />
    </div>
  );
}

export default App;
