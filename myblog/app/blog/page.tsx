"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

import debounce from "lodash.debounce";

import { blogDetailProps } from "@/types/blogType";
import { getBlogs } from "@/service/blogService";
import EyeIcon from "@/components/eye-icon";
import EditIcon from "@/components/edit-icon";
import SearchBar from "@/components/serchbar";
import Loading from "@/components/loading";

import "@/style/blog.css";

export default function BlogListing() {
  const [blogs, setBlogs] = useState<blogDetailProps[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<blogDetailProps[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const debouncedFilterBlogs = useCallback(
    debounce((searchTerm: string) => {
      if (searchTerm.trim() === "") {
        setFilteredBlogs(blogs);
      } else {
        const lowercasedValue = searchTerm.toLowerCase();
        const filtered = blogs.filter((blog) =>
          blog.tags.some((tag) => tag.toLowerCase().includes(lowercasedValue))
        );

        setFilteredBlogs(filtered);
      }
    }, 1000),
    [blogs]
  );

  const handleSearch = (searchTerm: string) => {
    setSearchValue(searchTerm);
    debouncedFilterBlogs(searchTerm);
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const allBlogs = await getBlogs();
      setBlogs(allBlogs);
      setFilteredBlogs(allBlogs);
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <div className="sticky top-24">
        <SearchBar value={searchValue} onSearch={handleSearch} />
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid lg:grid-cols-4 gap-5 my-5 blagPage md:grid-cols-3 sm:grid-cols-2 ">
          {filteredBlogs.length !== 0 ? (
            filteredBlogs.map((blog: blogDetailProps) => (
              <div
                className="max-w-md rounded overflow-hidden p-3 mx-auto shadow-lg bg-white"
                key={blog.id}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={350}
                  height={700}
                  priority
                />
                <div className="flex flex-col my-auto">
                  <div className="px-6 py-4 ">
                    <Link href={`/blog/${blog.id}`}>
                      <div className="font-bold text-xl mb-2  line-clamp-1">{blog.title}</div>
                    </Link>
                    <p className="text-gray-700 text-base line-clamp-3">
                      {blog.body}
                    </p>
                    <Link href={`/blog/${blog.id}`}>
                    <span className="inline-block text-sm font-semibold text-gray-700">
                      Read more
                    </span>
                    </Link>
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
                    <div className="flex h-fit ms-2 my-2">
                      <EyeIcon />
                      <span className="inline-block py-1 text-sm font-semibold text-gray-700 text-center">
                        {blog.views}
                      </span>
                    </div>
                    <div className="flex h-fit justify-items-center my-auto">
                      <EditIcon blogId={blog.id} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className=" grid auto-cols-max">
              <h1 className="text-center text-2xl text-[#dad7cd]">
                Sorry, we not have Search related blogs.
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
