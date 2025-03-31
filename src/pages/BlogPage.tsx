import React from "react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  imageSrc: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
}

interface BlogPageProps {
  posts: BlogPost[];
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  return (
    <section id="blog-page" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Tous les articles
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
