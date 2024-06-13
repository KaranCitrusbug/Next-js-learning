"use client"
export default function AddBlogError({error } : {error :any}){
    return (
        <h1>Something went wrong {error.message}</h1>
    )
}