import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function SearchBox() {
  const [state, setState] = useState({ input: '' })

  const history = useHistory();

  let updateInput = input => {
    setState({ input })
  }

  const handleClick = () => {
    setState({ input: '' })
    history.push(`/search/${state.input}`)
    window.location.reload();
  }

  return (
    <div className='row'>
      <div className='col-sm-3 col-md-3 col-xs-3'></div>
      <div className='col-sm-6 col-md-6 col-xs-6'>
        <div className="input-group mb-3">
          <input type="text" className="form-control"
            placeholder="Search..." aria-label="Search"
            aria-describedby="button-addon2"
            onChange={e => updateInput(e.target.value)}
            value={state.input}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onClick={() => handleClick()} type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </div>
      <div className='col-sm-3 col-md-3 col-xs-3'></div>
    </div>
  )
}



export default SearchBox
