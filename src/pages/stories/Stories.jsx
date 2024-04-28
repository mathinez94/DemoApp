import React from 'react'
import './Stories.css'
// import Background from '../header/Background'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import CircleLoader from "react-spinners/CircleLoader";

const Stories = () => {
  
  const options = {
    method: 'GET',
    url: 'https://google-news13.p.rapidapi.com/science',
    params: {lr: 'en-US'},
    headers: {
      'X-RapidAPI-Key': 'f0b4169e9cmsh201998d27af28a4p107c0ajsn708e87b389ee',
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

export default Stories