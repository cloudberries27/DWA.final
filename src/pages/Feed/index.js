import React from "react";

import Feed from '../../components/FeedComponent';

export default function displayFeed({ user }){
    console.log(user);
    return (
        <div>
            <Feed uid = {user.uid ? user.uid: "can't find uid"}/> 
        </div>
    )
}