import react from "react";
import Herosection from "./Components/herosection";
import Header from "./Components/header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Herosection />
      <About />
      <Projects />
      <Contact />

      <div className="h-20 bg-gray-950 flex items-center justify-center text-white">
        <p className="text-sm">&copy; 2024 Maheen Farhat. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;