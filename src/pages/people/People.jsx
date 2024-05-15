import React from 'react'
import'./People.css';
// import Background from '../header/Background';
import earthview1 from '../../images/earth view1.jpg'
import earthview2 from '../../images/earth view2.webp'
import earthview3 from '../../images/earth view3.jpg'
import cumulus from '../../images/cumulus.jpg'

const People = () => {
  return (
    <div className="intern">
       <div className="header">
      <img src={earthview1} alt="grassy city view" />
        <span className='image_text' >OUR INTERNS
        </span>
      </div>
      <div className="intern_content">
        <div className="intern_bio one">
          <div className="intern_pic">
            <img src={earthview1} alt="" className="intern_img" />
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
            <img src={earthview2} alt="" className="intern_img" />
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
            <img src={earthview3} alt="" className="intern_img" />
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
            <img src={cumulus} alt="" className="intern_img" />
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

export default People