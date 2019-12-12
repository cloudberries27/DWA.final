import React from "react";

import CreatePostForm from "../../components/CreatePostForm ";


export default function CreatePost({ user }) {
    return( 
        <div className='post-form'>
            <CreatePostForm uid = {user.uid ? user.uid: "no user ID"}/>
        </div>
    );
}