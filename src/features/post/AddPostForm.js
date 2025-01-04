import { useState } from "react";
import { Addpost } from "./postSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectallUser } from "../users/UserSlice";

export default function AddPost(){

    const dispatch = useDispatch()

    const [title,settitle] = useState('')
    const[content,setcontent] = useState('')
    const[userId,setuserId] = useState('')

    const users = useSelector(selectallUser)

    const onTitleChange = (e) =>settitle(e.target.value)
    const onContentChanged = (e) => setcontent(e.target.value)
    const onUserChange = (e) =>setuserId(e.target.value)

    const onSaveClick = ()=>{
        if(title&&content){
            //dispatch => peform action
            dispatch(Addpost(title,content,userId))
            settitle('')
            setcontent('')
        }
    }

    const userOptions = users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    return(
        <section>
            <h2>Add new post </h2>
            <form>
             <label htmlFor="postTitle">Post Title:</label>
             <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChange}/>
             <label htmlFor="postAuthor">User Name:</label>
             <select id="postAuthor" value={userId} onChange={onUserChange}>
                <option value=''></option>
                {userOptions}
             </select>
             <label htmlFor="postContent">Content:</label>
             <textarea  id="postContent"name="postContent"value={content} onChange={onContentChanged}/>
             <button type="button" onClick={onSaveClick} disabled = {!canSave}>Save Post</button>
            </form>
        </section>
    )
}