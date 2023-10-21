import React from 'react';

const Post = ({post}) => {
    return(
        <div>
            <h1>Hello world</h1>
            <p>{post.title}</p>
            <br /><br />
            <p>{post.message}</p>
            <button>Edit</button> <button>Delete</button>
        </div>
    )
}

export default Post