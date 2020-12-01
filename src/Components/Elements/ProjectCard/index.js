import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import { RiPagesLine } from 'react-icons/ri';

const useStyles = makeStyles({
  root: {    
    maxWidth: 350,
  },
  media: {
    height: 200,
    backgroundPosition: "center"
  },
  buttons:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    width: "50%",  
  },
  icons:{
      fontSize:"50px"
  }

});

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea href={props.data.gitUrl}>
        <CardMedia
          className={classes.media}
          image={props.data.imgUrl}
          title={props.data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.data.discription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" className={classes.buttons} startIcon={<GitHubIcon  />} href={props.data.gitUrl}>
          More
        </Button>
        <Button variant="contained" className={classes.buttons} startIcon={<RiPagesLine />} href={props.data.pageUrl}>
          Page
        </Button>
      </CardActions>
    </Card>
  );
}
