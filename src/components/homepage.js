

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react'
import MovieData from '../constants/movieData';
import MediaCard from './card';
import Footer from './common/footer';
import Header from './common/header';
import { Grid, Rating } from '@mui/material';
import axios from 'axios';



const Homepage = () => {

const [moviedata, setMoviedata] = useState();

  const options = {
    method: 'GET',
    url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    headers: {
      'X-RapidAPI-Key': '4a367ab4f2msh536a790c36b40d3p1e01fbjsn9d91238f482a',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    }
  };
  
async function getMovieData(){
  try {
    const response =  await axios.request(options);
    console.log(response.data);
    setMoviedata(response.data);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {  //we are using this because we want that the data only loads when the page is loaded, otherwise it will be called repeteadly
  
  getMovieData();
 
}, []);


  

console.log("moveie",moviedata)
  

  return (
    <div className="main">
    <Header/>
    {/* <div className="sec1"> */}

    
    <Grid container spacing={2}>
    {moviedata && moviedata.map ((movie, index) => (

      
      // <Grid item xs={12} sm={6} md={4}>
      <Card >
        <CardMedia
        component="img"
        height="380"
        image={movie.image}
        alt={movie.title}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Rating 
        name="movie-rating"
        value={Number(movie.rating)/2}
        precision={0.5}
        readOnly
        />
      </CardContent>
      <CardActions>
        <Button size="small">Watch</Button>
        <Button size="small">Download</Button>
      </CardActions>
      </Card>
      //</Grid>
    )
    )
  }
  </Grid>

    {/* </div> */}

    <Footer/>
    </div>
  )
}

export default Homepage;