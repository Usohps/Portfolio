import Blog from "./pages/Blog";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
function App() {
  // npm i aos for smooth animations here
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });
  return (
    <>
      <BrowserRouter>
        <div className="bg-[#111827] min-h-screen">
          <PageHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/blog" element={<Blog />} />
            <Route path="/pages/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
