import React, { useEffect, useState } from 'react'
import MovieCard from '../GeneralComponent/MovieCard'
import axios from 'axios'
import SearchBox from '../GeneralComponent/SearchBox'
import '../GeneralComponent/button.scss'

function LandingPage() {

  const [data, setData] = useState([]);

  const [page, setPage] = useState(1)

  const [totalPages, setTotalPages] = useState(null)


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
    if (data && page !== totalPages) {
      setPage(page + 1)
    }
  }

  //  previous page function for pagination
  const previousPage = () => {
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
            <div className='paginationButton' style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '5%' }}>
              <button onClick={previousPage} className='button' ><i class="fa  fa-chevron-left"></i> Previous </button>
              <button onClick={nextPage} className='button'> Next <i class="fa  fa-chevron-right"></i></button>
            </div>
          </div>
        )}

    </div>
  )
}

export default LandingPage
