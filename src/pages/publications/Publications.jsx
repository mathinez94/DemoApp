import React from 'react'
import './Publications.css'
import cloudearthview from '../../images/cloud earth view.jpg'

const Publications = () => {
  return (
    <div className='publications'>
        <div className="w-full h-72 flex items-center justify-center">
        <img src={cloudearthview} alt="atmosphere view" className='w-full relative'/>
        <div className="z-10 absolute flex items-center justify-center">
          <span className='font-serif text-5xl font-extrabold text-red-700 border-b-4 border-b-red-700'>PUBLICATIONS </span>
        </div>
      </div>
      <div>
        <ul className="w-[80%] m-auto h-auto flex flex-col gap-3 mt-28 mb-16">
          <li>
            [6] <b>Dixon.</b> and E. Audu, 2024: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur
            adipiscing elit, 119, 5767–5786,
          </li>{" "}
          <li>
            [5] <b>Dixon.</b> and E. Audu, 2023: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur
            adipiscing elit, 119, 5767–5786,
          </li>{" "}
          <li>
            [4] <b>Dixon.</b> and E. Audu, 2022: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur
            adipiscing elit, 119, 5767–5786,
          </li>
          <li>
            [3] <b>Dixon.</b> and E. Audu, 2024: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur
            adipiscing elit, 119, 5767–5786,
          </li>{" "}
          <li>
            [2] <b>Dixon.</b> and E. Audu, 2023: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur
            adipiscing elit, 119, 5767–5786,
          </li>{" "}
          <li>
            [1] <b>Dixon.</b> and E. Audu, 2022: Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, lorem ipsum dolor sit amet, consectetur
            adipiscing elit, 119, 5767–5786,
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Publications