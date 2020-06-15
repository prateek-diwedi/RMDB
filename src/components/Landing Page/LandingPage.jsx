import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'

function LandingPage() {

  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`

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
    return <MovieCard key={moviesData.id} title={moviesData.title} rating={moviesData.vote_average * 10 } poster = {moviesData.poster_path} />
  })

  return (
    <div>
      <h1 id='prateek'>
        Movie Database
      </h1>
      
        <h2 style = {{ paddingLeft: '14%'}}> Popular Movies </h2>
      <div className="card-columns" style= {{ padding:'5%', marginLeft: '9%' }} >
        { movieCardData }
      </div>

    </div>
  )
}

export default LandingPage
