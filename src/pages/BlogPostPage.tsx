import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { loadMarkdownFiles, BlogPost } from "../utils/loadMarkdown";
import rehypeRaw from "rehype-raw";

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = React.useState<BlogPost | null>(null);

  React.useEffect(() => {
    const fetchPost = async () => {
      const posts = await loadMarkdownFiles();
      const foundPost = posts.find((p) => p.id === parseInt(id || "", 10));
      if (foundPost) {
        foundPost.content = foundPost.content.replace(/\r/g, "");
      }
      setPost(foundPost || null);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div className="text-center py-20">Article introuvable.</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{post.title}</h1>

      <p className="text-gray-600 mb-4">
        <strong>Publié le :</strong> {post.date}
      </p>
      <p className="text-gray-600 mb-4">
        <strong>Auteur :</strong> {post.author}
      </p>
      <div className="prose max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ node, ...props }) => (
              <img
                {...props}
                className="w-full max-h-80 object-cover mb-6 mx-auto rounded-lg shadow-lg"
              />
            ),
            h1: ({ node, ...props }) => (
              <h1
                className="text-3xl font-bold text-gray-900 mb-6"
                {...props}
              />
            ),
            h2: ({ node, ...props }) => (
              <h2
                className="text-3xl font-bold text-gray-800 mb-4"
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3
                className="text-2xl font-semibold text-gray-700 mb-3"
                {...props}
              />
            ),
            p: ({ node, ...props }) => (
              <p className="text-gray-800 leading-relaxed mb-4" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul
                className="list-disc list-inside text-gray-600 mb-4"
                {...props}
              />
            ),
            li: ({ node, ...props }) => (
              <li className="ml-6 text-lg leading-relaxed" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPostPage;
