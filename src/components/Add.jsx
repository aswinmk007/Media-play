import React from 'react'
import { useState } from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { uploadVideoAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
  const [uploadvideo,setUploadVideo] = useState({
    caption:"",imageURL:"",youtubeLink:""
  })

    const [show, setShow] = useState(false);

    const handleClose = () =>{
      setShow(false);
      setUploadVideo({...uploadvideo,caption:"",imageURL:"",youtubeLink:""})


    } 
    const handleShow = () => setShow(true)
    console.log(uploadvideo);
    const getYoutubeEmbedLink = (link)=>{
      if(link.includes('v=')){
        let videoId = link.split("v=")[1].slice(0.11)
        setUploadVideo({...uploadvideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})

      }else{
        setUploadVideo({...uploadvideo,youtubeLink:""})
        alert("input proper youtube link!!!")

      }
      //
    
  }

  const handleupload = async ()=>{
    //store upload video in http://localhost:3000/allVideos
    const {caption,imageURL,youtubeLink} = uploadvideo
    if(caption && imageURL && youtubeLink){
    //proceed to store video from http://localhost:5173/home to http://localhost:3000/allVideos
  // alert('proceed to store video')
  const result = await uploadVideoAPI(uploadvideo)
  console.log(result);
  if(result.status>=200 && result.status<300){
    alert(`video ${result.data.caption} upload syccessfylly`)
    setUploadVideoResponse(result.data)
    handleClose()
  }else{
    alert('api called failed... please try after some time!!!')
  }
}else{
  alert('please fill the form completely!!!')
}

  }
  return (
    <>
    <div className='d-flex'>
        <h5>Upload A Video</h5>
        <button onClick={handleShow} style={{width:'40px',height:'40px'}} className='btn bg-secondary ms-1'><i className="fa-solid fa-plus"></i></button>
    </div>

    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

       <div className='border rounded border-secondary p-3'>
            <FloatingLabel
            controlId="floatingInput"
            label="video Caption"
            className="mb-3"
          >
            <Form.Control value={uploadvideo.caption} onChange={e=>setUploadVideo({...uploadvideo,caption:e.target.value})} type="text" placeholder="Video Caption" className='mb-3' />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Image url"
            className="mb-3"
          >
            <Form.Control value={uploadvideo.imageURL} onChange={e=>setUploadVideo({...uploadvideo,imageURL:e.target.value})}  type="text" placeholder="Image url" className='mb-3' />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Youtube video Link"
            className="mb-3"
          >
            <Form.Control value={uploadvideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube video Link" className='mb-3' />
          </FloatingLabel>


       </div>

          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleupload} className='btn btn-info' variant="primary">Uplod</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add 