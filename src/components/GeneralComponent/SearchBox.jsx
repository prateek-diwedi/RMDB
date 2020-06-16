import React, { useState } from 'react'

function SearchBox(props) {
  const [state, setState] = useState({ input: null })

  let updateInput = input => {
    setState({ input })
  }

  console.log('props in search box', props)
  

  const handleClick = () => {
    console.log("searching")
    setState({ input: '' })
  }

  return (
    <div>
      <div class="input-group mb-3">
        <input type="text" class="form-control"
          placeholder="Search..." aria-label="Search"
          aria-describedby="button-addon2"
          onChange={e => updateInput(e.target.value)}
          value={state.input}
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" onClick={() => handleClick()} type="button" id="button-addon2">Search</button>
        </div>
      </div>
    </div>
  )
}



export default SearchBox
