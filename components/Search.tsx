'use client'

import { getPostsBySearch } from "@/functions/GetPosts"
import { useState, FormEventHandler } from "react"

type Props = {
    onSearch: (value: string[]) => void
}

const Search = ({onSearch}:Props) => {

    const [search, SetSearch] = useState('')
    const HandleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const posts = await getPostsBySearch(search)
        onSearch(posts)
    }
    return(
        <form onSubmit={HandleSubmit}>
            <input type="search" placeholder="search" value={search} onChange={(e) => {
                SetSearch(e.target.value)
            }} />
            <button type="submit">Search</button>
        </form>
    )
}
export {Search} 