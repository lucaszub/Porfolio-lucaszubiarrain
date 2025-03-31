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
      <div className="prose max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            img: ({ node, ...props }) => (
              <img {...props} className="max-w-3xl mx-auto rounded-lg my-4" />
            ),
            h1: ({ node, ...props }) => (
              <h1 className="text-3xl font-bold mb-4" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-semibold mb-3" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-medium mb-2" {...props} />
            ),
            p: ({ node, ...props }) => <p className="mb-4" {...props} />,
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside mb-4" {...props} />
            ),
            li: ({ node, ...props }) => <li className="ml-4" {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPostPage;
