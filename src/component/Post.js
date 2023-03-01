import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const Post = ({ post, handleDelete, handleUpdate }) => {

    const { _id, title, contact , address,pincode} = post



    return (
       
       <div className="col-6">
       <Card className='mx-auto mb-4' style={{ width: '40rem' }}>
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title className='text-start'>Name:{title}</Card.Title>
                
                    <div>
                        <button onClick={() => handleDelete(_id)} className='btn btn-danger me-3'>Delete</button>
                        <button onClick={() => handleUpdate(_id)} className='btn btn-success'>Update</button>
                       
                    </div>
                </div>
                <h6 className='text-start'>contact-details:  <span class="text-primary">{address}</span></h6>
                <Card.Text className='text-start'>
                <h6 className='text-start'>      Address:  <span class="text-primary">{contact}</span></h6>
                <h6 className='text-start'>   Pincode   <span class="text-primary">{pincode}</span></h6>
             
                </Card.Text>
              
                
                

            </Card.Body>
        </Card>
       </div>
        
  
    );
};

export default Post;