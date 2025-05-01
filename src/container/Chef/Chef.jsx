import React from 'react'
import "./Chef.scss"
import { images } from '../../constants'
import { SubHeading } from '../../components'


const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title= "Chef's word"/>
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">A great dish doesn’t just feed the body—it tells a story, stirs the soul, and lingers long after the last bite.” — Chef Laurent B.</p>
          </div>

          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet saepe, similique, optio error deleniti voluptatibus minus labore illum deserunt ab, eligendi dolorum inventore vel hic obcaecati nihil. Praesentium, accusamus odit.</p>
        </div>

        <div className="app__chef-sign">
          <p>Kevin Luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Chef
