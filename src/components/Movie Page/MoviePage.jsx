import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieInfoCard from './MovieScreenCard'

function MoviePage(props) {

  const [data, setData] = useState([])
  
  // movie id we get from params
  const movieId = props.match.params.id

  // type of the data movie or tv
  const type = props.match.params.type
  // link added infront of the image data we are getting from api
  const imagelink = 'https://image.tmdb.org/t/p/w440_and_h660_face/'

  // link adde before background url
  const backgroundLink = 'https://image.tmdb.org/t/p/w1280/'

  //default image if there is no image
  const defaultImage = 'https://images.all-free-download.com/images/graphiclarge/creative_cinema_art_backgrounds_vectors_581202.jpg';

  // default background image
  const defaultBackground = 'https://www.pptgrounds.com/wp-content/uploads/2012/08/Blue-movie-film-strip-backgrounds.jpg'

  // url to ketch movie data
  const url = `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`

  //  fetching the movie data
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        const movieData = res.data;
        setData(movieData)
      }, err => {
        console.log('error while fetching movie data', err)
      })
  }, [])

  let imagePath = ''
  if (data.poster_path == null || data.poster_path == "") {
    imagePath = defaultImage;
  } else {
    imagePath = imagelink + data.poster_path;
  }

  let backgroundPath = ''
  if (data.backdrop_path == null || data.backdrop_path == '') {
    backgroundPath = defaultBackground;
  } else {
    backgroundPath = backgroundLink + data.backdrop_path
  }

  return (
    <div>
      <div className='movieInfoCard'>
        {/* {movieData} */}
        <MovieInfoCard
          key={data.id}
          id={data.id}
          background={backgroundPath}
          image={imagePath}
          title={data.title || data.name}
          overview={data.overview || 'N/A'}
          releaseDate={data.release_date || 'N/A'}
          revenue={data.revenue || 'N/A'}
          tagLine={data.tagline || 'N/A'}
          rating={data.vote_average * 10 || 0}
          homePage={data.homepage}
          releaseDate={data.release_date || data.first_air_date}
        />
      </div>
    </div>
  )
}

export default MoviePage
