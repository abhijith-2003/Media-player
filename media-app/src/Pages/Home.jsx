import React, { useState } from 'react';
import Add from '../Components/Add';
import View from '../Components/View';
import Category from '../Components/Category'

import { Link } from 'react-router-dom';

export default function Home() {

  const [uploadVideoResponse, setUploadVideoresponse] = useState({})
  const [dropVideiResponse, setDropVideoResponse] = useState({})


  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between">
        <div className='add-video'>
          <Add setUploadVideoresponse={setUploadVideoresponse} />
        </div>
        <Link to={'/watch-history'} style={{ textDecoration: 'none',  fontSize: '25px' }}
        >Watch-History <i class="fa-solid fa-arrow-right-to-bracket"></i>
        </Link>
      </div>

      <div className='container-fluid w-100 mt-5 mb-5 row'>
        <div className='all-video col-lg-9'>
          <h1>All-videos</h1>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />
        </div>
        <div className='category col-lg-3'>
          <Category dropVideiResponse={dropVideiResponse} />
        </div>
      </div>



    </>
  );
}