import { blogDetailProps } from "@/types/blogType";

const api = process.env.NEXT_APP_BLOG_API_ENDPOINT || "";

export async function getBlogs(){
  const response = await fetch(api);
  const blogs = await response.json();
  return blogs;
}

export async function getSingleBlog(id:string){
  const response = await fetch(api);
  const blogs = await response.json();
  const singleBlog = blogs.find((blog : blogDetailProps)=> (blog.id) === id)
  return singleBlog
}