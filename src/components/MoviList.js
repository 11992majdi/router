import React,{useState} from 'react';
import { MovieData } from './Data';
import MovieCard from './MovieCard';
import Add from './Add';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const MoviList = ({input}) => {
  let navigate = useNavigate()
    const [movies,setMovies] =useState(MovieData)
const addMovie = (newMovie) =>{
  setMovies ([...movies,newMovie])
}
  return (
    <>
    <Add addMovie= {addMovie} />
    <br/>
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
   {movies.filter((el)=>el.title.toUpperCase().includes(input.toUpperCase()) || el.rate>=input).map((film)=>(<MovieCard list={film}/>))}
    </div>
    <Button onClick={()=> navigate(-1)}>Retour</Button>
    </>
  );
}; 

export default MoviList;