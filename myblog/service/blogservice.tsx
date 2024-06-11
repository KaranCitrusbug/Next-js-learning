import { blogs } from "@/types/blogs";

const api = process.env.NEXT_APP_BLOG_API_ENDPOINT || "";

export async function getBlogs() {
  const response = await fetch(api);
  const blogs = await response.json();
  return blogs as blogs;
}
