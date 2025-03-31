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

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section id="blog" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
            >
              <img
                src={post.imageSrc}
                alt={`[Image pour ${post.title}]`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 hover:text-accent-600 transition duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
