import { redirect } from "next/navigation";
import { comments } from "../data";

export function GET(_request : Request,{params} : {params : {id: string}}){
    const comment =  comments.find(comment => comment.id == parseInt(params.id))
    if(!comment){
        redirect('/')
        
    }
    return Response.json(comment)
}
export async function PATCH(request : Request ,{params} : {params :{id:string}}){
    const newComment = await request.json()
    const index = comments.findIndex(comment => comment.id == parseInt(params.id))
    comments[index].comment = newComment.text
    return Response.json(comments[index])
}

export async function DELETE(request : Request ,{params} : {params :{id:string}}){
    const index = comments.findIndex(comment => comment.id == parseInt(params.id))
    const deleteComment = comments[index]
    comments.splice(index ,1)
    return Response.json(deleteComment)
}