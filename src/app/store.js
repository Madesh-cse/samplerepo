import { configureStore } from "@reduxjs/toolkit";
import postreducer from '../features/post/postSlice'
import userReducer from '../features/users/UserSlice'

export const store = configureStore({

    reducer:{
        posts:postreducer,
        users:userReducer
    }
})