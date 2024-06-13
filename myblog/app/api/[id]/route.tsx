import { posts } from "@/database/db";

export async function GET( _request : Request ,{params} : {params: {id: string}}){
    const blog = posts.find((post) => post.id === parseInt(params.id))
    return Response.json(blog)
}