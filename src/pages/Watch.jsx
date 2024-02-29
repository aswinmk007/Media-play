import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'

function Watch() {
  const [history,setHistory] = useState([])
 const getAllHistory = async()=>{
  const result = await getHistoryAPI()
  if(result.status>=200 && result.status<300){
    setHistory(result.data)
  }
    
  }
  useEffect(()=>{
    getAllHistory()
  },[])

  const deleteHistory = async (vId)=>{
    //api call
    await removeHistoryAPI(vId)
    getAllHistory()
  }
  return (
    <>
    <div className='d-flex justify-content-between'>
      <h3>Watch History</h3>
      <Link to={'/home'}>Back to <i className='fa-solid fa-home'></i></Link>
    </div>
    <table className='table mt-5 mb-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>Video Link</th>
          <th>Time stamp</th>
          <th><i className='fa-solid fa-elipsis-vertical'></i></th>
    
        </tr>
      </thead>
      <tbody>
       { history?.length>0? history?.map((video,index)=>(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{video?.caption}</td>
          <td><a href={video?.youtubeLink} target='_blank'>https://www.youtube.com/watch?v=hVCYwwFwGEE</a></td>
          <td>{video?.timeStamp}</td>
          <td><button onClick={()=>deleteHistory(video?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
        </tr>

       ))
      
        :
        <tr className='text-danger fw-bolder'>Your watch history is empty!!!</tr>

}
      </tbody>

    </table>
    </>
  ) 
}

export default Watch