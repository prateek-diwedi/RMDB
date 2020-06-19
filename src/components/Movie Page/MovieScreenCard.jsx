import React from 'react'
import MovieRating from '../GeneralComponent/MovieCircularPercentage'
import { year } from './helper'
import './movieinfo.scss'

function MovieScreenCard(props) {
  console.log('props in movie screen card--->', props.homePage)

  const released = year(props.releaseDate);
  return (
    <div>
      <div className="card bg-dark text-white">
        <img className="card-img" src={props.background} alt="Card image" />
       <div className="title">
         <p> { props.title } ( {released} ) </p>
       </div>
       <div className="tagline">
         <p> { props.tagLine } </p>
       </div>
       <div className="discription">
         <p> { props.overview} </p>
       </div>
          <div className='movieCardRating'>
            <MovieRating rating={props.rating} />
          </div>
        <div className="card-img-overlay">
          <div className='posterDiv'>
            <img className='moviePoster' src={props.image} alt='movie poster' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default MovieScreenCard
