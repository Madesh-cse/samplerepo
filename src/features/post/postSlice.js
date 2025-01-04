import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id:'1',title:'learning about redux toolkit',content:'i have learened good things'},
    {id:'2',title:'learning about redux toolkit',content:'i have learened good things'},
]

const postsSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        Addpost:{
            reducer(state,action){
                state.push(action.payload)
            }, 
            // prepare() it perform a action with payload data
            prepare(title,content,userId){
                // action return payload data
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export const selectallPost = (state) => state.posts

export const {Addpost} = postsSlice.actions

export default postsSlice.reducer
