/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  // console.log(post.post);

  return (
    <Link to={`/blog/${post.title}`} className="p-2 hover:bg-zinc-800">
      <img src={post.urlImage} alt={post.title} className="h-32 object-cover" />
      <span className="font-medium text-sm">{post.title}</span>
      <p className="text-xs text-zinc-400">{post.content.substr(0, 55)}...</p>
    </Link>
  );
}
