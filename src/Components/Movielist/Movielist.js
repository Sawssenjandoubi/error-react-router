import React from 'react'
import Movieitem from '../Movieitem/Movieitem'
import './Movielist.css';

function Movielist(props) {
  
  return (
    <div className='Movielist'>
      {props.movies
       .filter((movie) =>
        props.rate && !props.search
            ?movie.rate === props.rate
            : props.search && !props.rate
            ?movie.title.toLowerCase().includes(props.search)
            : props.rate && props.search
            ?movie.title
                  .toLowerCase()
                  .includes(props.search) &&
                  movie.rate === props.rate
            : movie.title.toLowerCase().includes(props.search)
            
    )
    .map((movie) => {
        return <Movieitem key={movie.id} {...movie} />;
    })}

       
       
    </div>
  );
}

export default Movielist