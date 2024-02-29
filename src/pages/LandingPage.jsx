import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigate = useNavigate()
  
  const handleNavigate = ()=>{
    //navigate to home page
    navigate('/home')
    
  }
  return (
   <>
      <div className='container mt-5'>
        <div className='header row align-items-center'>
          <div className='col-lg-5'>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}}>is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols</p>
            <button onClick={handleNavigate}  className='btn btn-info'>Get Started</button>
          </div>
          <div className='col-lg-1'></div>
          <div className='col-lg-6'>
            <img style={{width:'440px'}} src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="Landing Page" />
          </div>
        </div>
        <div className='features'>
          <h3 className='text-center'>Features</h3>
          <div className='row'>
            <div className="col-lg-4">
            <Card>
      <Card.Img style={{height:'300px'}} variant="top" src="https://www.icegif.com/wp-content/uploads/2024/01/icegif-109.gif" />
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

            </div>
            <div className="col-lg-4">
            <Card>
      <Card.Img style={{height:'300px'}} variant="top" src="https://miro.medium.com/v2/resize:fit:996/0*E-5SYoiM4ey4Enf4" />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
            <Card>
      <Card.Img style={{height:'300px'}} variant="top" src="https://i.gifer.com/embedded/download/KOc7.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
          </div>
        </div>
        <div className='row video border p-5 mt-5 rounded mb-5'>
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple,Fast and Powerful</h3>
            <h5>Play Everything: <span style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti voluptatem inventore.</span></h5>
            <br />
            <h5>Categorize videos: <span style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti voluptatem inventore.</span></h5>
            <br />

            <h5>Watch History: <span style={{fontSize:'16px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid deleniti voluptatem inventore.</span></h5>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="688" height="366" src="https://www.youtube.com/embed/WWr9086eWtY" title="LEO - Ordinary Person Lyric | Thalapathy Vijay, Anirudh Ravichander, Lokesh Kanagaraj, NikhitaGandhi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </div>
        </div>
  
      </div>
      <hr />
   </>
    
  )
}

export default LandingPage