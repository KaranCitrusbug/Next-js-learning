import { posts } from "@/database/db";

export async function POST(request : Request){
    const blog = await request.json()
    console.log(blog)
    const newBlog = {
        id : posts.length + 1,
        title : blog.title,
        body : blog.body,
        image : `https://picsum.photos/id/${posts.length + 1}/200/300`,
        tags : blog.tags,
        reactions : { likes : 0 , dislikes : 0},
        views : 0,
        userId : Date.now()
    }
    console.log(newBlog)
    posts.push(newBlog);
    return new Response(JSON.stringify(newBlog),{
        headers :{
            "Content-Type" : "application/json"
        },
        status : 201,
    })
}