import { blogAddProps } from "@/types/blogAddprops";
import { blogDetailProps } from "@/types/blogType";

const api = process.env.NEXT_PUBLIC_NEXT_APP_BLOG_API_ENDPOINT as string;


export async function getBlogs() {
  const response = await fetch(api,{
    cache:"no-store"
  });
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

  console.log(JSON.stringify(values))
  return await fetch(`${api}/${values.id}/edit`,{
    method:"PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),

  }
  )
  
}

export async function deleteBlogs(id :string){
  const response=  await fetch(`${api}/${id}`,{
    method:"DELETE",
  })
  return response.json()
}

export async function queryBlog(values : string){
  const allBlogs = await getBlogs();
  const searchBlog = allBlogs.filter((blog:blogDetailProps)=> blog.tags.includes(values))
  return searchBlog
  
}