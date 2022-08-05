// react imports
import * as React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

// component imports
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
