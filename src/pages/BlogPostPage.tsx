import React from "react";
import { useParams } from "react-router-dom";

interface BlogPost {
  id: number;
  imageSrc: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
}

interface BlogPostPageProps {
  posts: BlogPost[];
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id === parseInt(id || "", 10));

  if (!post) {
    return (
      <div className="text-center text-gray-600">Article introuvable.</div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>
      <img
        src={post.imageSrc}
        alt={`Image pour ${post.title}`}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-600 mb-4">
        <strong>Publié le :</strong> {post.date}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Auteur :</strong> {post.author}
      </p>
      <p className="text-gray-800 leading-relaxed">{post.content}</p>
    </div>
  );
};

export default BlogPostPage;
