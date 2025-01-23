import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { Col,Row } from 'react-bootstrap';
import {getALLuploadedVideosAPI, getCategoryAPI, updateCategoryAPI} from '../../service/allAPI'

// export default function View(uploadVideoResponse,setDropVideoResponse) {
  export default function View({ uploadVideoResponse, setDropVideoResponse }) {


  const [allVideos,setAllVideos]=useState([])

  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)


  useEffect(()=>{
    getAllUploadVideos()
    setDeleteVideoResponse(false)
  },[uploadVideoResponse,deleteVideoResponse])


  const getAllUploadVideos= async()=>{
    const result = await getALLuploadedVideosAPI()
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data)
    }else{
      setAllVideos([])
      console.log("API Failed");
      
    }
  }
  const VideodragOver =(e)=>{
    e.preventDefault()
  }

  const videoDrop=async (e)=>{
    const {VideoId,categoryId}= JSON.parse(e.dataTransfer.getData("data"))
    console.log(VideoId,categoryId);
    const {data}= await getCategoryAPI()
    console.log(data);
    const selectedCategory=data.find(item=>item.id==categoryId)
    let result=selectedCategory.allVideos.filter(video=>video.id!==VideoId)
    console.log(result);
    let {id,categoryName}=selectedCategory
    let newCategory={id,categoryName,allVideos:result}
    console.log(newCategory);
    const res = await  updateCategoryAPI(categoryId,newCategory)
    setDropVideoResponse(res)
    
    

    
    
  }

  // console.log(allVideos);
  

  return (
    <div>
      <Row droppable ="true" onDragOver={(e)=>VideodragOver(e)}onDrop={e=>videoDrop(e)}>
        {
          allVideos?.length>0?allVideos.map(video=>(

            <Col sm={12} md={6} lg={4} xl={3} >
            <VideoCard video={video}
            setDeleteVideoResponse={setDeleteVideoResponse}/>
            </Col>
          )): <p>Nothing to display</p>
        }
      </Row>  
    </div>
  );
}