import React,{useState, useEffect}  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {fetchSinglePeople, fetchSpecificStarship} from '../api/axios';
import { useParams } from 'react-router-dom';

const Starships = () => {
    const {id} = useParams()
    const [user, setUser] = useState([]);
    const [starships, setstarships] = useState([]);

  const getUser = async () =>{
      setUser(await fetchSinglePeople(id))
  }

  const getFilmUrl = (list) => {
    const url = list;

  }

  const getStarship = async () => {
   setstarships(await fetchSpecificStarship(13));
    
  }

  
  useEffect(()=>{
    getUser();
    getStarship();
  }, [])

console.log(starships)
 
  return (
    <section className='filmscontainer'>
      <h2>Starhip Details</h2>
      <div className='films_wrapper'>
        {}
      {user.starships && user.starships.map((list, key) => (
          <Card key={key}sx={{ maxWidth: 345, marginTop: "25px" }}>
            <CardActionArea>
              <CardMedia style={{ backgroundColor: "blueviolet"}}
                component="img"
                height="140"
              
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Link: {list}
                  {getFilmUrl(list)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p><strong>Name:</strong> {starships.name} </p>
                  <p><strong>Model:</strong> {starships.model} </p>
                  <p><strong>Manufacturer: {starships.manufacturer}</strong></p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> 
       ))}
      </div>
     </section>

  )
}

export default Starships;

