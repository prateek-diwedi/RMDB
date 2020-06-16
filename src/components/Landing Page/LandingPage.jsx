import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import SearchBox from '../GeneralComponent/SearchBox'

function LandingPage() {

  const [data, setData] = useState([]);


  // link added infront of the image data we are getting from api
  const imagelink = 'https://image.tmdb.org/t/p/w440_and_h660_face/'

  //default image if there is no image
  const defaultImage = 'https://images.all-free-download.com/images/graphiclarge/creative_cinema_art_backgrounds_vectors_581202.jpg';

  // popular movies url
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

  // fetching data for popular movies
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        // console.log(res.data.results[0].id)
        const apiData = res.data.results
        setData(apiData);
      }, (err) => {
        console.log('Error while fetching data ---->', err)
      })
  }, [])

  const movieCardData = data.map((moviesData, index) => {
    return <MovieCard key={moviesData.id} title={moviesData.title || moviesData.name} rating={moviesData.vote_average * 10 } poster = { 
      `${imagelink}${moviesData.poster_path}` || defaultImage } />
  })

  return (
    <div>
      <h1 id='prateek'>
        Movie Database
      </h1>

      <SearchBox />
      
        <h2 style = {{ paddingLeft: '14%'}}> Popular Movies </h2>
      <div className="card-columns" style= {{ padding:'5%', marginLeft: '9%' }} >
        { movieCardData }
      </div>

    </div>
  )
}

export default LandingPage
