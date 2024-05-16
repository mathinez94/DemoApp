import React from 'react'
import './Opportunities.css'
import cloudearthview from '../../images/cloud earth view.jpg'

const Opportunities = () => {
  return (
    <div className='opportunities'>
       <div className="Oppotunitiiesheader">
      <img src={cloudearthview} alt="grassy city view" />
        <span className='image_text' >OPPORTUNITIES
        </span>
    </div>
   </div>
  )
}

export default Opportunities