// dynamic component

type Post ={
    params:{
        id: string
    }
}
export default async function Posts( {params: {id}}:Post ){

    async function getData(id:string) {// переписать под node js 
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          next: {
            revalidate: 60,
          },
        });
      
        if (!response.ok) throw new Error("Unable to fetch posts!");
      
        return response.json();
    }
    const post = await getData(id)


    return(
        <section className="container">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </section>
    )
}