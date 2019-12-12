import React, {useEffect, useState} from 'react';
import axios from 'axios'; 

import Post from './post.js'

export default function FeedComponent({ uid }) { 
    const [posts, setPosts] = useState({});
    const [user, setUser] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        GetFeed();
    }, [])


    useEffect(() => { 
        const userData = posts.data ? posts.data[0].UserID : 'oh no';
        const titleData = posts.data ? posts.data[0].Title : 'oh no';
        setUser(userData);
        setTitle(titleData);  
    }, [posts])

    function GetFeed() {
        axios.get(`https://dwa-final-server.herokuapp.com/get-all-posts/${uid}`) 
            .then(function (response) {
                setPosts(response);
                console.log(response);
                return response;
            })
            .catch(err => {
                console.log("error", err);
            });

        console.log(posts);
    }
    return (
        <div>
            <Post uid = { user } title = { title }/>            
        </div>
    );
}