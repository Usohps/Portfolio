import Blog from "./pages/Blog";
import PageHeader from "./components/PageHeader";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-[#111827]">
          <PageHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/blog" element={<Blog/>} />
            <Route path="/pages/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
