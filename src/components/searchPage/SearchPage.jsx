import React, { useState, useEffect } from 'react'
import MovieCard from '../GeneralComponent/MovieCard'
import axios from 'axios'
import SearchBox from '../GeneralComponent/SearchBox'

function SearchPage(props) {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1)

  const [totalPages, setTotalPages] = useState(null)

  // link added infront of the image data we are getting from api
  const imagelink = 'https://image.tmdb.org/t/p/w440_and_h660_face/'

  //default image if there is no image
  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWAFqXrJQ-ZGNDEA0AVJXXF2p55MWpuHRujST0xH9qFjiFNpln&usqp=CAU';

  // popular movies url
  const url = `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${props.match.params.movie}&page=${page}&include_adult=false`

  // fetching data for popular movies
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        const apiData = res.data;
        setData(apiData.results);
        setTotalPages(apiData.total_pages)
      }, (err) => {
        console.log('Error while fetching data ---->', err)
      })
  }, [page])

  const searchedMovieData = data.map((moviesData, index) => {
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


      <h2 style={{ paddingLeft: '14%', paddingTop: '2%' }}> Showing Results For {props.match.params.movie} </h2>
      <div className="card-columns" style={{ padding: '5%', marginLeft: '9%' }} >
        {searchedMovieData}
      </div>

      <div className='paginationButton' style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '5%' }}>
        <button onClick={previousPage} className='button' ><i class="fa  fa-chevron-left"></i> Previous </button>
        <button onClick={nextPage} className='button'> Next <i class="fa  fa-chevron-right"></i></button>
      </div>

    </div>
  )
}

export default SearchPage
