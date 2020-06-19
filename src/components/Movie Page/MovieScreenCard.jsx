import React from 'react'
import MovieRating from '../GeneralComponent/MovieCircularPercentage'
import CastCard from '../GeneralComponent/CastCard'
import { year } from './helper'
import './movieinfo.scss'

function MovieScreenCard(props) {


  const released = year(props.releaseDate);
  return (
    <div>
      <div className="card bg-dark text-white">
        <img className="card-img" src={props.background} alt="Card image" />
        <div className="title">
          <p> {props.title} ( {released} ) </p>
          <p className='tagline'> {props.tagLine} </p>
          <p className='discription'> {props.overview} </p>
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
