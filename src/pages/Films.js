import React,{useState, useEffect}  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {fetchSinglePeople, fetchSpecificFilm} from '../api/axios';
import { useParams } from 'react-router-dom';

const Films = () => {
  const {id} = useParams()
  const [user, setUser] = useState([]);
  const [movies, setMovies] = useState([]);
 

  const getUser = async () =>{
      setUser(await fetchSinglePeople(id))
  }

  // const getFilmUrl = (list) => {
  //   const url = list;
  // }

  const getFilm = async () => {
    setMovies(await fetchSpecificFilm(2))
  }

  
  useEffect(()=>{
    getUser();
    getFilm();
  }, [])


 
  return (
    <section className='filmscontainer'>
      <h2>Film Details</h2>
      <div className='films_wrapper'>
      {user.films && user.films.map((list, key) => (
          <Card key={key} sx={{ maxWidth: 345, marginTop: "25px" }}>
            <CardActionArea>
              <CardMedia style={{ backgroundColor: "blueviolet"}}
                component="img"
                height="140"
              
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Title: {list}
                  {/* {getFilmUrl(list)} */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <strong>Description:</strong> {movies.opening_crawl}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> 
       ))}
      </div>
     </section>

  )
}

export default Films;
