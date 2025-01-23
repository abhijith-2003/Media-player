import React, { useEffect, useState } from 'react';
import {Button,Modal} from 'react-bootstrap';
import { Form,FloatingLabel } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../../service/allAPI';
import {Row,Col} from 'react-bootstrap';
import VideoCard from '../../src/Components/VideoCard'

export default function Category(dropVideiResponse) {

  const [allCategories,setAllCategories]=useState('')
  const[ categoryName, setCategoryName]=useState('')
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAdd=async()=>{
    if(categoryName){
      const result =await addCategoryAPI({categoryName,allVideos:[]})  
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getCategories()
      }else{
        alert(result.message)
      }
      
    }else{
      alert("please add a category name")
    }
  }



  const getCategories=async()=>{
    const {data}=await getCategoryAPI()
    setAllCategories(data)
  }

  useEffect(()=>{
    getCategories()
  },[dropVideiResponse])

  // console.log(allCatergories);

  const removeCategory=async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }

  const dragOver=(e)=>{
    console.log("videocard dragging over the catrgory");
    e.preventDefault()
    
  }


  const videoDropped=async(e,categoryId)=>{
    const VideoId =e.dataTransfer.getData("VideoId")
    console.log(" video id:" + VideoId +" video dropped category id:" +categoryId);
    const {data}=await getAVideoAPI(VideoId)
    // console.log(data);

    const selectedCategory = allCategories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    // console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getCategories()
  }

   


    const videoDragStarted = (e, VideoId, categoryId) => {
  const datashare = { VideoId, categoryId };
  e.dataTransfer.setData("data", JSON.stringify(datashare));
};


  
  
 

  return (
    <div>
      <div className="d-grid">
        <button className='btn btn-info'onClick={handleShow} >Add Category</button>
      </div>

     {
      allCategories?.length>0?allCategories.map(Category=>(
       <div className="border rounded mt-5 p-3" droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={e=>videoDropped(e,Category.id)} >
       <div className='d-flex justify-content-between align-item-center' >
         <h5>{Category.categoryName}</h5>
         <button className='btn' onClick={()=>removeCategory(Category.id)}><i className='fa-solid fa-trash text-danger'></i></button>
       </div>

       <Row>
        {
          Category?.allVideos?.length>0?Category?.allVideos.map(card=>(
            <Col sm={12} draggable onDragStart={e => videoDragStarted(e, card.id, Category.id)}>

              <VideoCard video={card} insideCategory={true}/>
            </Col>
          )):null
        }
       </Row>

     </div>
     )): <p className='p-3 fw-bolder text-danger'>Nothing to display</p>
     }






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
            <FloatingLabel controlId="floatingName" className="mb-3 p-2">
              <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="secondary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}