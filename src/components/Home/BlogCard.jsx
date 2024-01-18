import { Link } from "react-router-dom";

export default function BlogCard(post) {
  console.log(post.post);
  console.log(post.post.title);

  return (
    <Link to={`/blog/${post.post.title}`} className="border-2 p-4">
      <span className="font-medium">{post.post.title}</span>
      <p className="text-sm text-zinc-400">
        {post.post.content.substr(0, 55)}...
      </p>
    </Link>
  );
}
