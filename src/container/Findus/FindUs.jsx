import React from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'


const FindUs = () => {
  return (
  <div className="app__bg app__wrapper section__padding" id = "contact">
    <div className="app__wrapper_info">
      <SubHeading title = "Contact"/>
      <div className="headtext__cormorant" style={{marginBottom:'3rem'}}>Find us</div>
      <div className="app__wrapper-content">
      <p className="p__opensans">Ngong Lane, Off Ngong Road, Nairobi, Kenya</p>
      <p className="p__cormorant" style={{color:"#DCCA87", margin:"2rem 0"}}>Opening Hours</p>
      <p className="p__opensans"></p>
      <p className="p__opensans">Open Daily: 10:00 AM – 02:00 AM</p>
      <p className="p__opensans">Sat-Sun: 10:00 AM – 03:00 AM</p>

        </div>

        <button className="custom__button" style={{marginTop:"2rem"}}>Visit Us</button>

    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
     
    </div>
  </div>
 
  )
}

export default FindUs
