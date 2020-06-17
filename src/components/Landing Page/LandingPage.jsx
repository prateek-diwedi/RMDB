import React, { useEffect, useState } from 'react'
import MovieCard from '../GeneralComponent/MovieCard'
import axios from 'axios'
import SearchBox from '../GeneralComponent/SearchBox'

function LandingPage() {

  const [data, setData] = useState([]);

  const [page, setPage] = useState(1)

  const [totalPages, setTotalPages] = useState(null)

  console.log('page in searchpoage ---->', page)
  console.log('totla in searchpoage ---->', totalPages)

  // link added infront of the image data we are getting from api
  const imagelink = 'https://image.tmdb.org/t/p/w440_and_h660_face/'

  //default image if there is no image
  const defaultImage = 'https://images.all-free-download.com/images/graphiclarge/creative_cinema_art_backgrounds_vectors_581202.jpg';

  // popular movies url
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`

  // fetching data for popular movies
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        console.log(res.data)
        const apiData = res.data
        setData(apiData.results);
        setTotalPages(apiData.total_pages)
      }, (err) => {
        console.log('Error while fetching data ---->', err)
      })
  }, [page])

  const movieCardData = data.map((moviesData, index) => {
    var imagePath;
    if (moviesData.poster_path == null || moviesData.poster_path == "") {
      imagePath = defaultImage;
    } else {
      imagePath = imagelink + moviesData.poster_path;
    }
    
    return <MovieCard key={moviesData.id || Math.random() * 100} title={moviesData.title || moviesData.name} rating={moviesData.vote_average * 10 || 0} poster={imagePath} />
  })

  //next page funbction for pagination
  const nextPage = () => {
    console.log('next page')
    if (data && page !== totalPages) {
      setPage(page + 1)
    }
  }

  //  previous page function for pagination
  const previousPage = () => {
    console.log('previous page')
    if (data && page !== 1) {
      setPage(page - 1)
    }
  }

  return (
    <div>
      <h1 id='prateek'>
        Movie Database
      </h1>

      <SearchBox />

      {data.length === 0 ? (
        <img src='https://i.imgur.com/FmYeL3j.gif' alt='loading Image' />
      ) : (
          <div>
            <h2 style={{ paddingLeft: '14%' }}> Popular Movies </h2>
            <div className="card-columns" style={{ padding: '5%', marginLeft: '9%' }} >
              {movieCardData}
            </div>
            <button onClick={previousPage} > Previous </button>
            <button onClick={nextPage} > Next </button>
          </div>
        )}

    </div>
  )
}

export default LandingPage
