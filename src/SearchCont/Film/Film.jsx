import { getByTitle } from '@testing-library/react';
import React from 'react'
import './Film.css'
function Film(props) {
  return (
    <div className='film_div'>
        <h3>{props.title}</h3>
        <img src={props.img_src} alt="poster" />
    </div>
  )
}

export default Film;
