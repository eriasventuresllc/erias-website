import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import Index from "./pages/Index";
import About from "./pages/About";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const App = () => (
  <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/benefits" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </MotionConfig>
);

export default App;
