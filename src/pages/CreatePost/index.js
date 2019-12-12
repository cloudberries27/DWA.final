import React from "react";

import CreatePostForm from "../../components/CreatePostForm/index"


export default function CreatePost({ user }) {
    return( 
        <div>
            <CreatePostForm uid = {user.uid ? user.uid: "no user ID"}/>
        </div>
    );
}