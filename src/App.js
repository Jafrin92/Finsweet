import Home from "./pages/Home";
import About from "./pages/About";
import "./style.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pricing from "./pages/Pricing";
import Feature from "./pages/Feature";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/feature" element={<Feature />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/fqa" element={<Privacy />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
