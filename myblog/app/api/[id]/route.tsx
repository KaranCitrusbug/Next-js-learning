import { posts } from "@/database/db";

export async function GET( _request : Request ,{params} : {params: {id: string}}){
    const blog = posts.find((post) => post.id === parseInt(params.id))
    return Response.json(blog)
}
export async function DELETE(_request : Request ,{params} : {params : {id:string}}) {
    const index = posts.findIndex((post)=>post.id === parseInt(params.id))
    const deleteBlog = posts[index];
    posts.splice(index,1);
    return Response.json(deleteBlog)
}
