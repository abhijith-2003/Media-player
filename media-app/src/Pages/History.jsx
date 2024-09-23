import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../../service/allAPI'

export default function History() {
  const [history, setHistory] = useState([])
  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const result = await getHistoryAPI()
    console.log(result);
    if (result.status == 200) {
      setHistory(result.data)
    } else {
      console.log("api failed");
      console.log(result.message);
    }
  }

  const deleteHistory = async (id) => {
    await deleteHistoryAPI(id)
    getHistory()
  }

  return (
    <div>
      <div className='container mt-3  t-5 mb-5 d-flex justify-content-between'>
        <h2>Watch-history</h2>
        <Link style={{ textDecoration: 'none', fontSize: '25px' }} to={'/home'}><i className="fa-solid fa-arrow-rotate-left "></i></Link>
      </div>
      <table className='table mb-5 container shadow w-100'>
        <thead>
          <tr>
            <th>No:</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            history?.length > 0 ? history.map((video, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{video.caption}</td>
                <td><a href={video.link} target='_blank'>{video.link}</a></td>
                <td>{video.timestamp}</td>
                <td><button onClick={() => deleteHistory(video?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
              </tr>
            )) : <p className='text-danger'>nothing to display</p>

          }
        </tbody>
      </table>
    </div>
  )
}
