import React, { useEffect, useState } from 'react';
import Post from './Post';
import UpdateModal from './UpdateModal';

const AllPost = () => {

    const [posts, setPosts] = useState([]);
    const [updateId, setUpdateId] = useState();
    const [show, setShow] = useState(false);


    const handleDelete = id => {

        const url = `https://crud-iaju.onrender.com/posts/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }


    const handleUpdate = id => {
        setShow(true)
        setUpdateId(id);
    }

    const update = e => {
        e.preventDefault();
        const title = e.target.title.value
        const contact = e.target.contact.value
        const address = e.target.address.value
        const pincode = e.target.pincode.value

        const data = { title, contact ,contact,address,pincode}
        console.log(updateId);

        fetch(`https://crud-iaju.onrender.com/postUpdate/${updateId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then((data) => {
                console.log('Success:', data);
            })
    }

    useEffect(() => {
        fetch('https://crud-iaju.onrender.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [posts])



  

    return (
        <div class="container d-grid justify-content-center">
            
            {
                posts.map(post => <Post
                    key={post._id}
                    post={post}
                    handleDelete={handleDelete}
                    handleUpdate={handleUpdate}
                />)
            }
               {show && <UpdateModal show={show} setShow={setShow} update={update} />}
         
           

         
        </div>
    );
};

export default AllPost;