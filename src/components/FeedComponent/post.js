import React from 'react';


export default function Post({ uid, title}){
    return (
        <div> 
            <p> Post by {uid}</p>
            <p> Title: {title}</p>
        </div>
    );
}