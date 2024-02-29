import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPI } from '../services/allAPI';


function VideoCard({displayData,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //get video details
    const {caption,youtubeLink} = displayData
    let timeData = new Date()
    let  timeStamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'

    }).format(timeData)
    console.log(timeStamp);
    await saveHistoryAPI({caption,youtubeLink,timeStamp})

  }

  //remove video
  const removeVideo = async (vId)=>{
    //api call
    await removeVideoAPI(vId)
    setDeleteVideoResponse(result.data)




  }
  //dragstarted
  const dragStarted = (e,vId)=>{
    console.log(`Dragging started with video id : ${vId}`);
    e.dataTransfer.setData("videoId",vId)
  }


  return (
    <>
        <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} className='shadow'>
      <Card.Img style={{cursor:'pointer'}} onClick={handleShow} variant="top" height={'200px'} src={displayData?.imageURL} />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between'>
            <p>{displayData?.caption}</p>
            {!insideCategory && <button onClick={()=>removeVideo(displayData?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>}
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${displayData?.youtubeLink}?autoplay=1`} title="Caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>


    </>
  )
}

export default VideoCard