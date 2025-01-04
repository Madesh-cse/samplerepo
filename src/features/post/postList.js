import { useSelector } from "react-redux";
import { selectallPost } from "./postSlice";
import PostAuthor from "./postAuthor";

export default function PostList(){

    const posts = useSelector(selectallPost)

    const renderedPosts =  posts.map(post=> (
        <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0,100)}</p>
        <p className="postCredit">
            <PostAuthor userId={post.id}/>
        </p>
        </article>
    ))
    return(
        <section>
            <h2>posts</h2>
            {renderedPosts}
        </section>
    )
}