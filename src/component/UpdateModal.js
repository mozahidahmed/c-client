import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';  

const UpdateModal = ({show, setShow, update}) => {
   
    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Update your post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={update}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name='title'
                            placeholder="title"
                            autoFocus
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Contact</Form.Label>
                        <Form.Control as="textarea" name='contact' rows={3} />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Address</Form.Label>
                        <Form.Control as="textarea" name='address' rows={3} />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control as="textarea" name='pincode' rows={3} />
                    </Form.Group>
                    <input className='btn btn-info text-white' type="submit" value="Update" />
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateModal;