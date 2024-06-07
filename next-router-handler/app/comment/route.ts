import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request :NextRequest){
    const searchParams =  request.nextUrl.searchParams;
    const query = searchParams.get("query")
    const filterComment = query  ? comments.filter(comment => comment.comment.includes(query)):comments;
    return Response.json(filterComment)
}
export async function POST(request : Request){
    const comment = await request.json();
    const newComment = {
        id : comments.length + 1,
        comment :comment.text,
    }
    comments.push(newComment)

    return new Response(JSON.stringify(newComment),{
        headers:{
            "Content-Type": "application/json",
        },
        status :201
    });
}