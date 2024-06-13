import { blogAddProps } from "@/types/blogAddprops";
import { blogDetailProps } from "@/types/blogType";

const api = process.env.NEXT_PUBLIC_NEXT_APP_BLOG_API_ENDPOINT as string;


export async function getBlogs() {
  const response = await fetch(api);
  const blogs = await response.json();
  return blogs;
}

export async function getSingleBlog(id: string) {
  const response = await fetch(`${api}/${id}`);
  return response.json();
}

export async function addBlogs(data: blogDetailProps) {
  return await fetch(`${api}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function editBlogs(values: blogDetailProps) {

  return await fetch(`edit`,{
    method:"PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),

  }
  )
  
}