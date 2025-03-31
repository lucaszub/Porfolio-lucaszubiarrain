import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import FrontendServicePage from "./pages/FrontendServicePage";
import BackendServicePage from "./pages/BackendServicePage";
import AutomationServicePage from "./pages/AutomationServicePage";
import { loadMarkdownFiles, BlogPost } from "./utils/loadMarkdown";

function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await loadMarkdownFiles();
      setBlogPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogPosts={blogPosts} />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/services/frontend" element={<FrontendServicePage />} />
        <Route path="/services/backend" element={<BackendServicePage />} />
        <Route
          path="/services/automation"
          element={<AutomationServicePage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
