import React from 'react'
import {useSelector} from 'react-redux'
import Post from './Post'
import EditComponent from './EditComponent.jsx'

const AllPost = () => {
    const posts = useSelector(state => state.postReducer)
    return(
        <div>
            <h1>All Posts</h1>
            {
                posts.map(post => (
                    post.editing ?
                        (<EditComponent key={post.id} post = {post}/>)
                        :
                        (<Post key={post.id} post = {post}/>)
                ))
            }
        </div>
    )
}

export default AllPost;