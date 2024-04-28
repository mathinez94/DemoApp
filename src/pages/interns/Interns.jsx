import React from 'react'
import'./Interns.css';
// import Background from '../header/Background';
import arsenal from '../../images/arsenal.JPG'
import car from '../../images/car.JPG'
import hoddie from '../../images/hoddie.JPG'
import tzt from '../../images/tzt.JPG'

const Interns = () => {
  return (
    <div className="intern">
      <div className="header_details">
        {/* <Background /> */}
        <h1 className='interns_hearder_text'>Our Interns</h1>
      </div>
      <div className="intern_content">
        <div className="intern_bio one">
          <div className="intern_pic">
            <img src={arsenal} alt="" className="intern_img" />
          </div>
          <div className="bio">
            <p className='head'>Emecson Ghost</p>
            <p><span>Institute:</span> Universal University</p>
            <p><span>Major:</span> Muziqal Engineering</p>
            <p><span>Research:</span> Effect of Sound on Muziq</p>
            <p><span>Deduction:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis, ipsam rerum velit molestias earum officia non labore 
               possimus porro tempora! Consectetur laborum qui fuga soluta nihil 
               consequatur facilis nostrum eos, quos sapiente harum cum maxime dignissimos,
                officiis aliquam voluptates quibusdam.
            </p>
          </div>
        </div>
        <div className="intern_bio two">
        <div className="intern_pic">
            <img src={car} alt="" className="intern_img" />
          </div>
          <div className="bio ">
            <p className='head'>Marox Gandi</p>
            <p><span>Institute:</span> Universal University</p>
            <p><span>Major:</span> Muziqal Engineering</p>
            <p><span>Research:</span> Effect of Sound on Muziq</p>
            <p><span>Deduction:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis, ipsam rerum velit molestias earum officia non labore 
               possimus porro tempora! Consectetur laborum qui fuga soluta nihil 
               consequatur facilis nostrum eos, quos sapiente harum cum maxime dignissimos,
                officiis aliquam voluptates quibusdam.
            </p>
          </div>
        </div>
        <div className="intern_bio one">
        <div className="intern_pic">
            <img src={hoddie} alt="" className="intern_img" />
          </div>
          <div className="bio ">
            <p className='head'>Royalty Enterprise</p>
            <p><span>Institute:</span> Universal University</p>
            <p><span>Major:</span> Muziqal Engineering</p>
            <p><span>Research:</span> Effect of Sound on Muziq</p>
            <p><span>Deduction:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis, ipsam rerum velit molestias earum officia non labore 
               possimus porro tempora! Consectetur laborum qui fuga soluta nihil 
               consequatur facilis nostrum eos, quos sapiente harum cum maxime dignissimos,
                officiis aliquam voluptates quibusdam.
            </p>
          </div>
        </div>
        <div className="intern_bio two">
        <div className="intern_pic">
            <img src={tzt} alt="" className="intern_img" />
          </div>
          <div className="bio">
            <p className='head'>Junior Mathinez</p>
            <p><span>Institute:</span> Universal University</p>
            <p><span>Major:</span> Muziqal Engineering</p>
            <p><span>Research:</span> Effect of Sound on Muziq</p>
            <p><span>Deduction:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perferendis, ipsam rerum velit molestias earum officia non labore 
               possimus porro tempora! Consectetur laborum qui fuga soluta nihil 
               consequatur facilis nostrum eos, quos sapiente harum cum maxime dignissimos,
                officiis aliquam voluptates quibusdam.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <h1>All Rights Reserved. Last updated  2024</h1>
      </div>
    </div>
  )
}

export default Interns