import React from 'react'
import MovieRating from './MovieCircularPercentage'
import { Link } from 'react-router-dom';

function MovieCard(props) {
  let type = ''
  if (props.type == undefined) {
    type = 'movie'
  } else {
    type = props.type
  }
  return (
    <div>
      <Link to={`/movie/${props.id}/${type}/${props.title}`} style={{ textDecoration: 'none' }} >

        <div className="card" id='movieCardId' style={{ width: '270px', border: 'none', paddingBottom: '10%', textDecoration: 'none', cursor: 'pointer' }}>
          <div className="MovieImage" >
            <div className="movieRating" style={{
              position: 'absolute',
              paddingLeft: '10px',
              paddingTop: '370px',
              zIndex: 10
            }}>
              <div className='movierating' style={{ width: '60px' }}>
                <MovieRating rating={props.rating} />
              </div>
            </div>
            <img src={props.poster} alt='movieImage' style={{ height: '400px', borderRadius: '5%' }} />

          </div>
          <div className="movieTitle" style={{ paddingTop: '14%', paddingLeft: '2%' }} >
            <h4> {props.title} </h4>
            <h6> {props.character} </h6>
          </div>
        </div>

      </Link>
    </div>
  )
}

export default MovieCard
