import { posts } from "@/database/db"

export async function GET(){
    return Response.json(posts)
}


export async function POST(request : Request){
    const blog = await request.json()
    const newBlog = {
        id : posts.length + 1,
        title : blog.title,
        body : blog.body,
        image : "https://picsum.photos/id/57/200/300",
        tags : blog.tags,
        reactions : { likes : 0 , dislikes : 0},
        views : 0,
        userId : Date.now()
    }
    posts.push(newBlog);
    return new Response(JSON.stringify(newBlog),{
        headers :{
            "Content-Type" : "application/json"
        },
        status : 201,
    })
}

export async function DELETE({params} : {params : {id:string}}) {
    const index = posts.findIndex((post)=>post.id === parseInt(params.id))
    const deleteBlog = posts[index];
    posts.splice(index,1);
    return Response.json(deleteBlog)
}