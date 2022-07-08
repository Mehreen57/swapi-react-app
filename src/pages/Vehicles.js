import React,{useState, useEffect}  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {fetchSinglePeople, fetchSpecificVehicle} from '../api/axios';
import { useParams } from 'react-router-dom';

const Films = () => {
    const {id} = useParams()
    const [user, setUser] = useState([]);
    const [vehicles, setVehicles] = useState([]);

  const getUser = async () =>{
      setUser(await fetchSinglePeople(id))
  }

  const getFilmUrl = (list) => {
    const url = list;

  }

  const getVehicle = async () => {
   setVehicles(await fetchSpecificVehicle(14));
    
  }

  
  useEffect(()=>{
    getUser();
    getVehicle();
  }, [])

console.log(vehicles)
 
  return (
    <section className='filmscontainer'>
      <h2>Vehicle Details</h2>
      <div className='films_wrapper'>
        {}
      {user.vehicles && user.vehicles.map((list, key) => (
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
                  <p><strong>Name:</strong> {vehicles.name} </p>
                  <p><strong>Model:</strong> {vehicles.model} </p>
                  <p><strong>Manufacturer: {vehicles.manufacturer}</strong></p>
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

