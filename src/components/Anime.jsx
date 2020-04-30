import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
const Anime = (props) => {
  return (<Card style={{ height: '100%', display: 'flex', flexDirection:"column"}}
  >
    <CardContent>
    <CardMedia
        component="img"
        src={props.image_url}
        title="Paella dish"
      />
      <Typography  color="textPrimary" variant="h5" component="h5" gutterBottom>
        {props.title}
      </Typography>
      <Typography >
      Date Aired: {props.aired}
      </Typography>
      <Typography  color="textSecondary">
        Score: {props.score} of 10
      </Typography>
    </CardContent>

    <CardActions style={{marginTop:"auto"}}>
      <Button size="small" href={props.url} target="_blank">Learn More</Button>
    </CardActions>
  </Card>);
}

export default Anime;