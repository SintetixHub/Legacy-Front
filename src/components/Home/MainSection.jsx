import { useState, useEffect } from "react";
import { getAll } from "../../api/blog";
import BlogCard from "./BlogCard";

export default function MainSection() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAll();
      setBlogs(response.data);
    })();
  }, []);

  return (
    <>
      {blogs === null ? (
        <span>No hay entradas al blog aún</span>
      ) : (
        <>
          <h2 className="text-2xl my-6 font-bold">Tendencias</h2>
          <div className="grid grid-cols-4 gap-4">
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
