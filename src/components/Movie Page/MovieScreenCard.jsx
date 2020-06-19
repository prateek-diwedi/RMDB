import React from 'react'
import MovieRating from '../GeneralComponent/MovieCircularPercentage'
import CastCard from '../GeneralComponent/CastCard'
import { year } from './helper'
import './movieinfo.scss'

function MovieScreenCard(props) {
  console.log('props in movie screen card--->', props)

  // link added infront of the image data we are getting from api
  const imagelink = 'https://image.tmdb.org/t/p/w276_and_h350_face/'

  //default image if there is no image
  const defaultImage = 'https://images.all-free-download.com/images/graphiclarge/creative_cinema_art_backgrounds_vectors_581202.jpg';

  const cast = props.cast.cast
  console.log('cast in movie screen', cast)
  
  //maping the cast
  // const castInfo = cast.map((castData, index) => {
  //   var imagePath;
  //   if (castData.profile_path == null || castData.profile_path == "") {
  //     imagePath = defaultImage;
  //   } else {
  //     imagePath = imagelink + castData.profile_path;
  //   }

  //   return <CastCard key= {castData.id} id={castData.id} character={castData.character} name={castData.name}  image={imagePath} />
  // })

  const released = year(props.releaseDate);
  return (
    <div>
      <div className="card bg-dark text-white">
        <img className="card-img" src={props.background} alt="Card image" />
       <div className="title">
         <p> { props.title } ( {released} ) </p>
         <p className='tagline'> { props.tagLine } </p>
         <p className='discription'> { props.overview} </p>
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
