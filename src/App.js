import "./app.scss";
import Expertises from "./sections/expertises-section/Expertises";
import FirstSection from "./sections/main-section/FirstSection";
import HeroSection from "./sections/hero-section/HeroSection";

function App() {
  return (
    <div className="App">
      <FirstSection />
      <HeroSection />
      <Expertises />
    </div>
  );
}

export default App;
