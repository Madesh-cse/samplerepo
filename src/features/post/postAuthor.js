import { useSelector } from "react-redux";
import { selectallUser } from "../users/UserSlice";

export default function PostAuthor({userId}){

    const users = useSelector(selectallUser)

    const author = users.find((user)=>user.id === userId)

    return( 
        <>
        <span> by {author ? author.name : 'unKnow Author'}</span>
        </>
    )
}