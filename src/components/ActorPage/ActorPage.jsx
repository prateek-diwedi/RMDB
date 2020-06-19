import React, { useState, useEffect } from 'react';
import MovieCard from '../GeneralComponent/MovieCard'
import axios from 'axios';
import './actorPage.scss'

function ActorPage(props) {

  const [data, setData] = useState([]);

  const [credits, setCredits] = useState([]);

  //link for the image
  const imageLink = 'https://image.tmdb.org/t/p/w1280/'

  // link for movie image
  const movieLink = 'https://image.tmdb.org/t/p/w440_and_h660_face/'

  //default image if there is no image
  const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWAFqXrJQ-ZGNDEA0AVJXXF2p55MWpuHRujST0xH9qFjiFNpln&usqp=CAU';

  const actorId = props.match.params.id

  const url = `https://api.themoviedb.org/3/person/${actorId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&append_to_response=credits`

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        const actorInfo = res.data;
        const actorCredits = res.data.credits.cast
        setData(actorInfo);
        setCredits(actorCredits);
      })
  }, [])

  // maping movies of actor 
  const alsoApearedIn = credits.map((film, index) => {
    var pictureImage;
    if (film.poster_path == null || film.poster_path == "") {
      pictureImage = defaultImage;
    } else {
      pictureImage = movieLink + film.poster_path;
    }
    return <MovieCard
      key={film.id}
      id={film.id}
      poster={pictureImage}
      title={film.title}
      character={film.character}
    />
  })

  //actor image
  let imagePath = ''
  if (data.profile_path == null || data.profile_path == "") {
    imagePath = defaultImage;
  } else {
    imagePath = imageLink + data.profile_path;
  }

  //gender 
  let genderOfActor = ''
  if (data.gender === 2) {
    genderOfActor = 'Male'
  } else {
    genderOfActor = 'Female'
  }


  return (
    <div>
      <div className="generalFacts">
        <div className="actorImage">
          <img src={imagePath} alt={data.name} />
        </div>
        <div className="allfacts">
          <div className="actorName">
            <h2>{data.name}</h2>
          </div>
          <div className="knownFor">
            <h5>Known For </h5>
            <h6>{data.known_for_department}</h6>
          </div>
          <div className="biography">
            <h5>Biography </h5>
            <h6>{data.biography}</h6>
          </div>
          <div className="gender">
            <h5>Gender </h5>
            <h6>{genderOfActor}</h6>
          </div>
          <div className="birthday">
            <h5>Birthday </h5>
            <h6>{data.birthday}</h6>
          </div>
          <div className="placeOfBirth">
            <h5>Place of Birth </h5>
            <h6>{data.place_of_birth}</h6>
          </div>

        </div>
      </div>
      <div className="also" >
        <h4> Also known For </h4>
      </div>
      <div className="card-columns"
        style={{ padding: '5%', marginLeft: '5%' }} >
        {alsoApearedIn}
      </div>
    </div>
  )
}

export default ActorPage
