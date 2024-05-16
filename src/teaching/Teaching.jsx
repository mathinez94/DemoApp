import React from 'react'
import './Teaching.css'
import cloudearthview from '../../src/images/cloud earth view.jpg'

const Teaching = () => {
  return (
    <div className='teaching'>
       <div className="Teachingheader">
      <img src={cloudearthview} alt="grassy city view" />
        <span className='image_text' >TEACHING
        </span>
    </div>
      <div className="teaching-content">
        <div>
          <span>University of Nebraska</span>
          <p>NMT 001: Climate Precipitation</p>
          <p>NMT 002: Weather Changes</p>
          <p>NMT 003: Climate Changes</p>
        </div>
        <div>
          <span>Chicago metro univ</span>
          <p>BTR 001: Climate Precipitation</p>
          <p>BTR 002: Weather Changes</p>
          <p>BTR 003: Climate Changes</p>
          <p>BTR 001: Climate Precipitation</p>
          <p>BTR 002: Weather Changes</p>
          <p>BTR 003: Climate Changes</p>
        </div>
      </div>
    </div>
  )
}

export default Teaching