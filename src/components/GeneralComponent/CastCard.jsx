import React from 'react'
import { Link } from 'react-router-dom';

function CastCard(props) {
  return (
       <Link to={`/person/${props.id}/${props.name}`} style={{ textDecoration: 'none'}} >
    <div>
    <div>
      <div className="card" id='castCardId' style = {{ width: '270px', border: 'none', paddingBottom: '10%', textDecoration:'none' }}>
  
          <img src={ props.image } alt='movieImage' style = {{ height:'400px', borderRadius: '5%' }} />

        </div>
        <div className="castName" style = {{ paddingTop:'14%', paddingLeft: '2%' }} > 
          <h5> {props.name} </h5>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CastCard
