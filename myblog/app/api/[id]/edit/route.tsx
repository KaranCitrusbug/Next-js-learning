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
    const {title,body,image} = data
    console.log(title)
    console.log(body)
    console.log(image)
       const index = posts.findIndex((post)=>post.id === parseInt(params.id))
    posts[index].title = title
    return Response.json(posts[index])
}