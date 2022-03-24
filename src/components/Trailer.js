import React from 'react'
import { useParams } from 'react-router-dom'
import { MovieData } from './Data'

const Trailer = () => {
    const params=useParams()
    const foundMovie=MovieData.find(el=>el.id==params.id)
  return (
    <div>
        <h1>Title : {foundMovie.title}</h1>

        <iframe width="560" height="315" src={foundMovie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Trailer