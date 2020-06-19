import React from 'react'
import { Link } from 'react-router-dom';


function CastCard(props) {

  console.log('props in cast ------>', props)
  return (

    <div>
      <Link to={`/person/${props.id}/${props.name}`} style={{ textDecoration: 'none' }} >
        <div>
          <div className="card" id='castCardId' style={{ width: '270px', border: 'none', textDecoration: 'none', background: 'transparent' }}>
            <div className="MovieImage" >
              <img src={props.image} alt='movieImage' style={{ height: '400px', borderRadius: '5%' }} />
            </div>

          <div className="castName" style={{ paddingLeft: '2%' }} >
            <h3> {props.name} </h3>
            <h6>{props.character}</h6>
          </div>
          </div>
          
        </div>
      </Link>
    </div>
  )
}

export default CastCard
