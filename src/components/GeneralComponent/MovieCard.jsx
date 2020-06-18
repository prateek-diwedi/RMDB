import React, { useState } from 'react'
import MovieRating from './MovieCircularPercentage'
import { Link } from 'react-router-dom';

function MovieCard(props) { 

  return (
    <Link to={`/movie/${props.id}/${props.title}`}>
    <div>
      <div className="card" id='movieCardId' style = {{ width: '270px', border: 'none', paddingBottom: '10%' }}>
        <div className="MovieImage" >
          <div className="movieRating" style={{
            position: 'absolute',
            paddingLeft: '10px',
            paddingTop: '370px',
            zIndex: 10
          }}>
            <MovieRating rating={props.rating} />
          </div>
          <img src={ props.poster } alt='movieImage' style = {{ height:'400px', borderRadius: '5%' }} />

        </div>
        <div className="movieTitle" style = {{ paddingTop:'14%', paddingLeft: '2%' }} > 
          <h5> {props.title} </h5>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default MovieCard
