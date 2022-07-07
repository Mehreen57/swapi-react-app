import React,{useState, useEffect}  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Films = ({tableData}) => {

  return (
    <div className='films_wrapper'>
        <h2>Film Details</h2>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia style={{backgroundColor: "blueviolet"}}
                component="img"
                height="140"
                
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>

  )
}

export default Films;