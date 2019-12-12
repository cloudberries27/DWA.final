import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function PostForm({ uid }) {    
    const [postData, setPostData] = useState({});

    function makePost(e) {
        e.preventDefault(e); 
        
        let title = e.currentTarget.title.value;
        let bodyText = e.currentTarget.bodyText.value;
        axios.get(`https://dwa-final-server.herokuapp.com/make-post?title=${title}&bodyText=${bodyText}&userID=${uid}`)
            .then(function (response) {
                setPostData(response);
                return response;
            })
            .catch(err => {
                console.log("error", err);
            });

        console.log(postData);
    }
    
    
    
    return (
        <div>
            <form onSubmit={e=>makePost(e)}name="post-form" method="GET">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" placeholder="Title"/>
                <label htmlFor="bodyText">Text</label>
                <input type="text" name="bodyText" placeholder="What do you have to say..." />
                <button>Post</button>
            </form>
        </div>
    );
}