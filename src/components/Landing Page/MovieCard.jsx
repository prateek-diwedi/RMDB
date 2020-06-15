import React from 'react'
import MovieRating from '../GeneralComponent/MovieCircularPercentage'

function MovieCard(props) {

  return (
    <div>
      <div className="card" style = {{ width: '270px', border: 'none' }}>
        <div className="MovieImage" >
          <div className="movieRating" style={{
            position: 'absolute',
            paddingLeft: '10px',
            paddingTop: '370px',
            zIndex: 10
          }}>
            <MovieRating rating={props.rating} />
          </div>
          <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${props.poster}`} alt='movieImage' style = {{ height:'400px'}} />

        </div>
        <div className="movieTitle" style = {{ paddingTop:'14%', paddingLeft: '2%' }} > 
          <h5> {props.title} </h5>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
