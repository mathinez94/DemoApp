import React from 'react'
import './Background.css'
import cloudearthview from '../../images/cloud earth view.jpg'

const Background = () => {
  return (
    <div className="header">
      <img src={cloudearthview} alt="grassy city view" />
        <span className='image_text' >Understanding the Zonal Variability 
        in CMIP6 Projections of Sahelian Precipitation
        </span>
    </div>
  )
}

export default Background