import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import FrontendServicePage from "./pages/FrontendServicePage";
import BackendServicePage from "./pages/BackendServicePage";
import AutomationServicePage from "./pages/AutomationServicePage";

function App() {
  const blogPosts = [
    {
      id: 1,
      imageSrc:
        "https://placehold.co/600x400/e2e8f0/94a3b8?text=Automatisation",
      title: "Automatiser les tâches répétitives dans mon business",
      excerpt:
        "Comment j'utilise des scripts et outils pour gagner du temps au quotidien...",
      content:
        "Voici le contenu détaillé de l'article sur l'automatisation. Vous pouvez inclure des paragraphes, des images, et bien plus.",
      date: "30 Mars 2025",
      author: "Lucas Zubiarrain",
      category: "Automatisation",
    },
    {
      id: 2,
      imageSrc: "https://placehold.co/600x400/e2e8f0/94a3b8?text=Dev+Web",
      title: "Les dernières tendances en développement Web Front-end",
      excerpt:
        "Un aperçu des frameworks et techniques qui me passionnent actuellement...",
      content:
        "Voici le contenu détaillé de l'article sur le développement Web Front-end. Vous pouvez inclure des exemples de code, des graphiques, etc.",
      date: "25 Mars 2025",
      author: "Lucas Zubiarrain",
      category: "Développement Web",
    },
    {
      id: 3,
      imageSrc: "https://placehold.co/600x400/e2e8f0/94a3b8?text=IA",
      title: "Intégrer l'IA dans vos applications web : par où commencer ?",
      excerpt:
        "Quelques pistes et réflexions sur l'utilisation de l'IA dans le développement moderne...",
      content:
        "Voici le contenu détaillé de l'article sur l'intégration de l'IA. Vous pouvez inclure des cas d'utilisation, des outils, et bien plus.",
      date: "20 Mars 2025",
      author: "Lucas Zubiarrain",
      category: "IA",
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-800 antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogPosts={blogPosts} />} />
        <Route path="/blog" element={<BlogPage posts={blogPosts} />} />
        <Route path="/blog/:id" element={<BlogPostPage posts={blogPosts} />} />
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
