import React from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addHistoryAPI, deleteVideoAPI } from '../../service/allAPI';

function VideoCard({ video, setDeleteVideoResponse }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { caption, link } = video

    let today = new Data()

    let timestamp = new Intl.DateTimeFormat('en-US', { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(today)

    let videoHistory = { caption, link, timestamp }

    await addHistoryAPI(videoHistory)
  }
  const deleteVideo = async (id) => {
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  return (
    <div>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src={video.url} onClick={handleShow} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h5 style={{ fontWeight: 'bold', fontSize: 'medium', }}>{video.caption}</h5>
            <button onClick={() => deleteVideo(video.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${video.link}?autoplay=1`} title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay;
         clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        </Modal.Body>
      </Modal>
    </div>
  )
}
export default VideoCard