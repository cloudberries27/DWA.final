import React from "react";

//this is a component that we're pushing here
import { Feed } from './components/FeedComponent/index.js';

export default function displayFeed({ user }){
    console.log(user);
    return (
        <div>
            <Feed uid = {user.uid ? user.uid: "can't find uid"}/> 
        </div>
    )
}