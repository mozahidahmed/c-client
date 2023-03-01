import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostModal from './PostModal';

const CreatePost = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    return (
        <div>
            <div className='d-flex justify-content-center m-4'>
                <h3>Create a Post</h3>
                <button onClick={() => setShow(true)} className='btn btn-info text-white ms-4'> Create a post</button>
            </div>
            {show && <PostModal show={show} setShow={setShow}/>}
        </div>
    );
};

export default CreatePost;