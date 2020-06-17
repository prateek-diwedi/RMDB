import React, { useState, useEffect } from 'react'
import MovieCard from '../GeneralComponent/MovieCard'
import axios from 'axios'
import SearchBox from '../GeneralComponent/SearchBox'

function SearchPage(props) {
  const [data, setData] = useState([]);
  console.log('props in search page', props.match.params.movie)
  // link added infront of the image data we are getting from api
  const imagelink = 'https://image.tmdb.org/t/p/w440_and_h660_face/'

  //default image if there is no image
  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWAFqXrJQ-ZGNDEA0AVJXXF2p55MWpuHRujST0xH9qFjiFNpln&usqp=CAU';

  // popular movies url
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${props.match.params.movie}&page=1&include_adult=false`

  // fetching data for popular movies
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        console.log(res);
        console.log(res.data.results);
        const apiData = res.data.results;
        setData(apiData);
      }, (err) => {
        console.log('Error while fetching data ---->', err)
      })
  }, [])

  const searchedMovieData = data.map((moviesData, index) => {
    var imagePath;
    if(moviesData.poster_path == null || moviesData.poster_path == ""){
      imagePath = defaultImage;
    }else{
      imagePath = imagelink+moviesData.poster_path;
    }

    return <MovieCard key={moviesData.id||Math.random()*100} title={moviesData.title || moviesData.name} rating={moviesData.vote_average * 10||0} poster={imagePath} />
  })

  return (
    <div>
      <h1 id='prateek'>
        Movie Database
      </h1>

      <SearchBox />

     
            <h2 style={{ paddingLeft: '14%' }}> Showing Results For {props.match.params.movie} </h2>
            <div className="card-columns" style={{ padding: '5%', marginLeft: '9%' }} >
              {searchedMovieData}
            </div>
        
    </div>
  )
}

export default SearchPage
