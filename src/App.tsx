import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Home.tsx";
import { Capabilities } from "./Capabilities.tsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/showpro-next/" element={<Home />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/contact" element={<Capabilities />} />
        <Route path="/careers" element={<Capabilities />} />
        <Route path="/blog" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
