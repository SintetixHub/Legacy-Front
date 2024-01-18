/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { getAll } from "../../api/blog";
import BlogCard from "./BlogCard";
import SkeletonCard from "./SkeletonCard";
import { Link } from "react-router-dom";

export default function FiveCardsSection({ name }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAll();
      setBlogs(response.data);
    })();
  }, []);

  return (
    <section>
      <div className="flex justify-between items-end ">
        <h2 className="text-2xl mt-12 mb-2 font-bold">{name}</h2>
        <Link
          to={`/blog/${name.toLowerCase()}`}
          className="bg-blue-600 py-1 px-4 hover:bg-blue-500"
        >
          Ver más
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {blogs?.length === 0 ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
            {blogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </>
        )}
      </div>
    </section>
  );
}
