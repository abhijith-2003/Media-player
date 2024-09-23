import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Form, FloatingLabel } from 'react-bootstrap';


export default function Category() {

  const [categoryName, setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="d-grid">
        <button onClick={handleShow} className='btn btn-info'>Add Category</button>
      </div>

      <div className="border round mt-5">
        <div className='d-flex justify-content-between align-item-center' >
          <h5>Category Name</h5>
          <button className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
        </div>
      </div>



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingName" label="" className="mb-3 p-3">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)} />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>



  );
}