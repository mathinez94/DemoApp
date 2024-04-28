import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import { FaInstagram, FaTelegramPlane, FaWhatsapp, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='contact'>
     <Link to='https://t.me/MatheeMathinez' target='blank'><div className='contact-icons'><FaTelegramPlane className='icons'/><p>Telegram</p></div> </Link>
     <Link  to='https://wa.me/2348104849150' target='blank'><div className='contact-icons'><FaWhatsapp className='icons'/><p>Whatsapp</p></div></Link>
    <Link to='https://www.instagram.com/mathinez94?igsh=dmd2MXE3Z3Y0bTJ5&utm_source=qr' target='blank'><div className='contact-icons'><FaInstagram className='icons'/><p>Instagram</p></div></Link> 
     <Link><div className='contact-icons'><FaFacebook className='icons'/><p>Facebook</p></div></Link>
     <Link to='https://x.com/mathibliz' target='blank'><div className='contact-icons'><FaXTwitter className='icons'/><p></p></div></Link> 
   </div>
  )
}

export default Contact