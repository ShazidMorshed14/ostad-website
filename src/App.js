import "./App.css";
import CareerGuideline from "./components/CareerGuideline/CareerGuideline";
import CareerHelp from "./components/CareerHelp/CareerHelp";
import HeroSection from "./components/HeroSection/HeroSection";
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
    </div>
  );
}

export default App;
