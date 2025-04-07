import { useEffect, useState } from "react"; // Import React si nécessaire
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
import { Routes, Route, useLocation } from "react-router-dom"; // <-- AJOUT DE useLocation ICI
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import FrontendServicePage from "./pages/FrontendServicePage";
import BackendServicePage from "./pages/BackendServicePage";
import AutomationServicePage from "./pages/AutomationServicePage";
import { loadMarkdownFiles, BlogPost } from "./utils/loadMarkdown";

// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// Optionnel mais recommandé pour TypeScript : Déclarer gtag globalement
declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params: object) => void;
  }
}
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

function App() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  const location = useLocation(); // <-- AJOUT DU HOOK useLocation
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  // Effet pour charger les articles de blog (votre code existant)
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await loadMarkdownFiles();
      setBlogPosts(posts);
    };
    fetchPosts();
  }, []); // S'exécute une seule fois au montage

  // VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
  // ---- NOUVEL EFFET POUR LE SUIVI GOOGLE ANALYTICS (gtag.js) ----
  useEffect(() => {
    // Vérifie si la fonction gtag (chargée depuis le script dans index.html) existe
    if (typeof window.gtag === "function") {
      // Envoie un événement 'page_view' à Google Analytics
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search + location.hash, // Chemin complet
        page_location: window.location.href, // URL complète
      });
      // Décommentez la ligne suivante pour vérifier dans la console du navigateur si ça se déclenche
      // console.log(`GA Pageview Triggered: ${location.pathname + location.search + location.hash}`);
    }
  }, [location]); // Se déclenche à chaque changement de 'location' (donc à chaque navigation)
  // ---- FIN DU NOUVEL EFFET ----
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

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
