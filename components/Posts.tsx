import Link from "next/link"

type Post = {
    posts: string[],
}
const Posts = ({posts}:Post) => {

    return(
        <ul>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}
export {Posts}