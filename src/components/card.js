import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { margin } from '@mui/system';

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 ,margin: 5}}>
      <CardMedia
        sx={{ height: 180 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Movie Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, provident in!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Watch</Button>
        <Button size="small">Download</Button>
      </CardActions>
    </Card>
  );
}