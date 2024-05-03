import React from 'react'
import './News.css'
// import Background from '../header/Background'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import CircleLoader from "react-spinners/CircleLoader";

const News = () => {
  
  const options = {
    method: 'GET',
    url: 'https://google-news13.p.rapidapi.com/science',
    params: {lr: 'en-US'},
    headers: {
      'X-RapidAPI-Key': '9a6c81044bmshd1b5d03d345b732p1ef8f8jsn6f444d93d598',
      'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
    }
  };
  
  const dataFetcher = () => {
    return  axios.request(options);
  }

  const { data, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: () => dataFetcher()
  })
  console.log(data?.data.items)
  if(isLoading){
    return <div className='loader'><h2>Loading</h2><CircleLoader 
    width='200'
    color="#000"
  /> </div>
  }
  return (
    <div className="stories">
      <div className="header_details">
        {/* <Background /> */}
        <h1 className='stories_hearder_text'>News/Updates</h1>
        <div className="story_content">
          {
            data?.data.items.map(news => {
              return <div className="news">
                <span className='title'>{news.title}</span>
                <Link to={news.newsUrl} target='blank' className='body'><p>{news.snippet}</p></Link>
                <p className='publisher'>publisher: {news.publisher}</p>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default News