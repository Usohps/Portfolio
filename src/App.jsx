import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Secondary pages are split out so the home page ships the minimum JS.
const loadProjects = () => import("./pages/Projects");
const loadBlog = () => import("./pages/Blog");
const Projects = lazy(loadProjects);
const Blog = lazy(loadBlog);

/** Scrolls to the #hash target when there is one, otherwise back to the top. */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, key]);

  return null;
}

function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-grid absolute inset-0" />
      <div className="orb orb-cyan -left-[20vmax] -top-[25vmax] h-[70vmax] w-[70vmax] animate-drift" />
      <div
        className="orb orb-violet -right-[25vmax] top-[10vmax] h-[75vmax] w-[75vmax] animate-drift"
        style={{ animationDelay: "-11s" }}
      />
    </div>
  );
}

function Pages() {
  const { pathname } = useLocation();

  return (
    // Re-keying on the path replays the fade so route changes feel continuous
    <main id="main" key={pathname} className="animate-fade">
      <Suspense fallback={<div className="min-h-[100dvh]" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/projects" element={<Projects />} />
          <Route path="/pages/blog" element={<Blog />} />
          <Route path="/pages/blogs" element={<Navigate to="/pages/blog" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </main>
  );
}

function App() {
  // Warm the other routes once the browser is idle so navigation is instant
  useEffect(() => {
    const warm = () => {
      loadProjects();
      loadBlog();
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(warm, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(warm, 1500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <BrowserRouter>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-cyan focus:px-4 focus:py-2 focus:text-on-accent"
      >
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true" />
      <Background />
      <ScrollManager />
      <Navbar />
      <Pages />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
