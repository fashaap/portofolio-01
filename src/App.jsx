import { Route, Routes } from "react-router-dom";
import "./App.css";

//pages
import Homepage from "./pages/home/Homepage";

//components
import { NavbarComp } from "./components/ui/NavbarComp";
import { FooterComp } from "./components/ui/FooterComp";

import Maintenance from "./pages/maintenance/Maintenance";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blog/BlogDetail";

const App = () => {
  return (
    <div className=" flex flex-col justify-between bg-neutral-900 bg-[url('/src/assets/grid.svg')]  bg-repeat  font-mono">
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="aboutme" element={<Maintenance />} />
        </Route>
        <Route path="/aboutme" element={<Maintenance />} />
        <Route path="/contactme" element={<Maintenance />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />

        <Route path="/project" element={<Maintenance />} />

        <Route path="*" element={<Maintenance />} />
      </Routes>
      <FooterComp />
    </div>
  );
};

export default App;
