import React from "react";

import Link from "next/link";
import { blogDetailProps } from "@/types/blogType";
import { getBlogs } from "@/service/blogService";
import EyeIcon from "@/components/eye-icon";
import EditIcon from "@/components/edit-icon";
import DeleteIcon from "@/components/delete-icon";

import "@/style/blog.css";

export default async function BlogListing() {
  const blogs = await getBlogs();

  return (
    <div className="grid lg:grid-cols-4  gap-5 my-5 blagPage md:grid-cols-3 sm:grid-cols-2">
      {blogs.map((blog: blogDetailProps) => (
        <div
          className="max-w-md rounded  overflow-hidden mx-auto shadow-lg bg-white"
          key={blog.id}
        >
          <img className="w-full" src={blog.image} alt={blog.title} />

          <div className="px-6 py-4 ">
            <Link href={`/blog/${blog.id}`}>
              <div className="font-bold text-xl mb-2">{blog.title}</div>
            </Link>
            <p className="text-gray-700 text-base line-clamp ">{blog.body}</p>
            <span className="inline-block  text-sm font-semibold text-gray-700 ">
              Read more
            </span>
          </div>
          <div className="px-6 pt-4 pb-2">
            {blog.tags.map((tag, index) => (
              <span
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                key={index}
              >
                <p>#{tag}</p>
              </span>
            ))}
          </div>
          <hr />
          <div className="flex justify-between">
            <div className=" flex h-fit ms-2 my-2">
              <EyeIcon />
              <span className="inline-block  py-1 text-sm font-semibold text-gray-700  text-center">
                {blog.views}
              </span>
            </div>
            <div className="flex h-fit justify-items-center my-auto">
            <EditIcon blogId={blog.id} />
            <DeleteIcon />
  
            </div>
            
          
          </div>
        </div>
      ))}
    </div>
  );
}
