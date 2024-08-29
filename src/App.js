import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Event from "./pages/Event.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/event" element={<Event />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
