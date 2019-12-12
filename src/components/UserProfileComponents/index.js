import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function UserInformation({ uid, email }) {
    const [posts, setUserPosts] = useState({});

    useEffect(()=>{
        getUserPosts();
    }, [uid])
    function getUserPosts() {
        axios.get(`https://dwa-final-server.herokuapp.com/get-all-posts/${uid}`) 
            .then(function (response) {
                setUserPosts(response);
                console.log(response);
                return response;
            })
            .catch(err => {
                console.log("error", err);
            });
        console.log(posts)

    }

    return (
        <div>
           <h3>User Posts</h3>
        </div>
    );

}