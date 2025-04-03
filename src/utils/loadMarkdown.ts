import matter from "gray-matter";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageSrc: string;
  content: string;
}
export const loadMarkdownFiles = async (): Promise<BlogPost[]> => {
  const postFiles = ["article1.md", "article2.md", "article1 copy.md"];
  const posts: BlogPost[] = [];

  for (const file of postFiles) {
    const response = await fetch(`/post/${file}`);
    const text = await response.text();
    const { data, content } = matter(text);

    posts.push({
      id: data.id,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      category: data.category,
      imageSrc: data.imageSrc,
      content,
    });
  }

  return posts;
};
