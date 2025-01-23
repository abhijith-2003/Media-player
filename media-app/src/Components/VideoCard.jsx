import React, { useState } from 'react';
import { Card, Modal } from 'react-bootstrap';
import { addHistoryAPI, deleteVideoAPI } from '../../service/allAPI';

export default function Video({ video, setDeleteVideoResponse, insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    if (video) {
      const { caption, link } = video;

      let today = new Date();
      let timeStamp = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(today);

      let videoHistory = { caption, link, timeStamp };
      await addHistoryAPI(videoHistory);
    }
  };

  const deleteVideo = async (id) => {
    await deleteVideoAPI(id);
    setDeleteVideoResponse(true);
  };

  const dragStarted = (e, id) => {
    console.log('Drag started .... videoid:' + id);
    e.dataTransfer.setData('videoid', id);
  };

  if (!video || !video.url) {
    return <p>Video not available</p>;
  }

  return (
    <div className="ml-3 mb-4 mt-5">
      <Card
        style={{ width: '15rem' }}
        draggable
        onDragStart={(e) => dragStarted(e, video?.id)}
      >
        <Card.Img variant="top" src={video.url} onClick={handleShow} />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h5>{video.caption}</h5>
            {!insideCategory && (
              <button
                onClick={() => deleteVideo(video.id)}
                className="btn"
              >
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            )}
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="315"
            src={`${video.link}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
}