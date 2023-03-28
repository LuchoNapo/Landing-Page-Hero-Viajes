import React from 'react'
import "./ArticuloSmall.css"

export const ArticuloSmall = ({articleOf, image, time, clock}) => {
  return (
    <div className='articuloSmall'>
        <img className='image' src={image} alt="articulo" />
        <p className='fw-bold articleOf2'>Artículo de {articleOf}</p>
        <div className="time2 gap-2">
            <img src={clock} alt="icon" />
            <p>Hace {time}</p>
        </div>

    </div>
  )
}
