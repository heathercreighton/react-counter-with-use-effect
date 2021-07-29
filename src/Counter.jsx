import React from 'react';

function Counter({count, add, subtract}){
  return(
    <div>
      <p>The value is {count} </p> 
      <button type="submit" value="Add" onClick={add} >Add</button>
      <button type="submit" value="Subtract" onClick={subtract} >Subtract</button>
    </div>

  )
}

export default Counter;