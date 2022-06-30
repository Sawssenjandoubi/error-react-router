import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import './Movieitem.css'

export default function Movieitem({title,description,imgUrl,rate,bt,id}) {
  return (
    <Card sx={{ maxWidth: 345 }} className="Movieitem">
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt="dark"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <h4 style={{color:"purple"}}>{title}</h4> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h5>{description}</h5>
          <p>rate:{rate}</p>

        </Typography>
      </CardContent>
      <CardActions>
        
      <Button size="small"  >
        <Link to={`moviedetails/${id}`}>
        {bt}
        </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
Movieitem.defaultProps = {
  title: "Movie Title",
   imgUrl: "https://i.pinimg.com/originals/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg",
   description:"N/A",
  rate: "N/A",
   
 };
 Movieitem.propTypes = {
 title: PropTypes.string.isRequired,
 imgUrl:PropTypes.string.isRequired,
 description:PropTypes.string.isRequired,
 rate:PropTypes.number.isRequired

};

