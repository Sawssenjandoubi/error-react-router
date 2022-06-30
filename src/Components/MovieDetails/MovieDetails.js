import React from 'react'
import {Link} from 'react-router-dom'
import { data } from '../../data'
import { useParams } from 'react-router-dom'
export default function MovieDetails() {
  
   let {id}=useParams()
   let mouvies = data.find((mouvie)=>mouvie.id===id);
   console.log(mouvies)
   let {topic}=mouvies
 
  return (
    <div>
         
        <h1>Movie Details</h1>
      <p>{topic}</p>
        <Link to='/'>  Go Back</Link>
    </div>
  )
}
