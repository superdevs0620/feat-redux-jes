import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../actions/PostActions';
const PostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e : any) => {
        e.preventDefault();
        const data = {
            id : new Date(),
            title,
            message,
            editing : false
        }
        dispatch(addPost(data));
        setTitle("")
        setMessage("")
    }

    return(
        <div>
            <h1>Create Post</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    required
                    type='text'
                    value={title}
                    name='title'
                    placeholder='Enter the title'
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <br /><br />
                <textarea
                    required
                    value={message}
                    name='message'
                    rows={5}
                    cols={28}
                    placeholder='Enter Message'
                    onChange={(e)=>{setMessage(e.target.value)}}
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PostForm;