import React, { useEffect, useState } from 'react'
 import VideoCard from './VideoCard'
 import { Col, Row } from 'react-bootstrap'
 import {getALLuploadVideoAPI} from '../../service/allAPI';



function View({uploadVideoResponse}) {

  const [allVideos,setAllVideos]=useState([])
  const[deleteVideoResponse,setDeleteVideoResponse]=useState(false)
useEffect(()=>{
  getAllUploadedVideos()
  setDeleteVideoResponse(false)
},[uploadVideoResponse,deleteVideoResponse])

  const getAllUploadedVideos= async()=>{
    const result = await getALLuploadVideoAPI()
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data)

    }else{
      setAllVideos([])
      console.log("API Failed");
      
    }
  }
  console.log(allVideos);
  return (
    <div>
    <Row>      
      {
        allVideos?.length>0?allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard video={video}
        setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
        )): <p>Nothing To Display</p>
}
      </Row> 
    </div>
  ) 
}
export default View