import { posts } from "@/database/db";

export async function GET( _request : Request ,{params} : {params: {id: string}}){
    const blog = posts.find((post) => post.id === parseInt(params.id))
    return Response.json(blog)
}

export async function PATCH(
    request :Request,
    {params} : {params : {id : string}}
){

    const data = await request.json()
    const {title,body,image,tags} = data
       const index = posts.findIndex((post)=>post.id === parseInt(params.id))
    posts[index].title = title
    posts[index].body = body
    posts[index].tags = tags
    return Response.json(posts[index])
}