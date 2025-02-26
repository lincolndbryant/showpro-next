import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Home.tsx";
import { Capabilities } from "./Capabilities.tsx";
import { Careers } from "./Careers.tsx";
import { SpecialEvents } from "./SpecialEvents.tsx";

const App = () => {
  return (
    <BrowserRouter basename="/showpro-next">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/contact" element={<Capabilities />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Home />} />
        <Route path="/special-events" element={<SpecialEvents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
