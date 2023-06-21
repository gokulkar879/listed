import React from 'react';  

function Card({icon, bg_color, info, value}) {
  return (
    <div className='card' style={{"background" : `${bg_color}`}}>
        <p className='card-icon'>{icon}</p>
        <p className='card-info'>{info}</p>
        <p className='card-value'>{value}</p>
    </div>
  )
}

export default Card