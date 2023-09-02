// blog component
'use client'
import { getAllPosts } from "@/functions/GetPosts"
import { Metadata } from "next"
import {useEffect, useState} from 'react'
import {Posts} from "@/components/Posts"
import { Search } from "@/components/Search"

export const metadata:Metadata = {
    title: "Blog | Next app"
} 

export default function Blog(){

    const [posts, setPosts] = useState<any[]>([])
    const [loading, SetLoading] = useState(true)
    useEffect(()=> {   
        getAllPosts()
            .then(setPosts)
            .finally(()=> SetLoading(false))
    },[])

    return (
        <section className="container">
            <h1>This blog page</h1>
            <Search onSearch={setPosts}/>
            {loading ? (
                <h2>Loading...</h2>
            ):(
                <Posts posts={posts} />
            )}
            
        </section>
    )
}