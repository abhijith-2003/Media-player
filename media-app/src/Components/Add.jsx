import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadVideoAPI } from '../../service/allAPI'

function Add({ setUploadVideoResponse }) {

  const [uploadVideo, setUploadVideo] = useState({
    id: "", caption: "", url: "", link: ""
  })
  console.log(uploadVideo);


  const getYoutubeLink = (e) => {
    const { value } = e.target
    if (value.includes("v=")) {
      let vID = value.split("v=")[1].slice(0, 11)
      console.log(`https://www.youtube.com/embed/${vID}`);
      setUploadVideo({ ...uploadVideo, link: `https://www.youtube.com/embed/${vID}` })
    } else {
      setUploadVideo({ ...uploadVideo, link: "" })
    }
  }

  const handleAdd = async () => {
    const { id, caption, url, link } = uploadVideo

    if (!id || !caption || !url || !link) {
      alert("Fill the missing fields")
    } else {
      //store video details to the json server
      const result = await uploadVideoAPI(uploadVideo)
      console.log(result);

      if (result.status >= 200 && result.status <= 300) {
        // sucess
        handleClose()
        // Alert
        alert("uploaded successfully")
        // after getting sucess response filed should be empty
        setUploadVideo({
          id: "", caption: "", url: "", link: ""
        })
        setUploadVideoResponse(result.data)
      } else {
        console.log(result.message);
      }
    }
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload Videos</h5>
        <Button onClick={handleShow} className='ms-2'><i class="fa-solid fa-arrow-up-from-bracket"></i></Button>
      </div>
      {/* modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel className='opt1'
            controlId="floatingInput"
            label=" Video Id"

          >
            <Form.Control type="text" placeholder="Video Id" onChange={(e) => setUploadVideo({ ...uploadVideo, id: e.target.value })} />
          </FloatingLabel>
          <FloatingLabel className='opt1' controlId="floatingTitle" label="Video Title">
            <Form.Control type="text" placeholder="Video Title" onChange={(e) => setUploadVideo({ ...uploadVideo, caption: e.target.value })} />
          </FloatingLabel>

          <FloatingLabel className='opt1'
            controlId="floatingInput"
            label="Image Url"
          >
            <Form.Control type="text" placeholder="Image Url" onChange={(e) => setUploadVideo({ ...uploadVideo, url: e.target.value })} />
          </FloatingLabel>
          <FloatingLabel className='opt1' controlId="floatingPassword" label="Video Url">
            <Form.Control type="text" placeholder="Video Url" onChange={getYoutubeLink} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
export default Add