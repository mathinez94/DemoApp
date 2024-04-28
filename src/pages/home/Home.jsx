import React from 'react'
import './Home.css'
import office from '../../images/office.JPG'
// import Background from '../header/Background'


const Home = () => {
  return (
    <>
    <div className="home">
      <div className="header_details">
        {/* <Background /> */}
        <h1 className='home_hearder_text'>Sanhila Precipitation</h1>
      </div>
    <div className="content">
      <div className="content_pic">
        <img src={office} alt="founder imag" className='img'/>
      </div>
      <div className="content_text">
        <h2>Founder's Biography</h2><br/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corporis praesentium explicabo 
          maxime, magni animi error commodi veritatis temporibus! Provident?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corporis praesentium explicabo 
          maxime, magni animi error commodi veritatis temporibus! Provident?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
    <div className="about">
      <h2>About us</h2><hr/>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quod in provident 
        veniam deleniti quas labore magnam. Alias deserunt fugit<br/>
         omnis exercitationem aspernatur 
        cum possimus voluptates, repellendus aliquam, harum culpa <br/>
        totam at iusto tempore nobis provident ullam, explicabo nostrum? Obcaecati!</p>
    </div>
    </div>
    </>
  )
}

export default Home 