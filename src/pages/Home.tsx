import React from "react";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Contact from "../sections/Contact";

interface BlogPost {
  id: number;
  imageSrc: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

interface HomeProps {
  blogPosts: BlogPost[];
}

const Home: React.FC<HomeProps> = ({ blogPosts }) => {
  if (blogPosts.length === 0) {
    return <div className="text-center py-20">Chargement des articles...</div>;
  }

  return (
    <main>
      <Hero />
      <Services />
      <section id="latest-articles" className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Derniers articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <a
                href={`/blog/${post.id}`}
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
              >
                <img
                  src={post.imageSrc}
                  alt={`Image pour ${post.title}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-accent-600 transition duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <p className="text-sm text-gray-500">Publié le {post.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default Home;
