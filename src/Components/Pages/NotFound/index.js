import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Box from "@material-ui/core/Box"
import HomeIcon from '@material-ui/icons/Home';
import ReactTypingEffect from 'react-typing-effect';
import Typography from '@material-ui/core/Typography';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:"#fff",      
    margin: "20vh auto",
    padding: "0 1vw",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonsBox: {     
    [theme.breakpoints.up('md')]: {           
        top: "30%",
        left : "90%",        
        display:"flex",       
        flexDirection:"column",
        position: "fixed",            
      },    
    },
  roundedButtons: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 50,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 55,
    width: 55,
    margin: "20px",
    },
    icon:{
        fontSize: 300,
    }
}));

export default function NotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography color="inherit" variant="h1" component="h2">
                <ReactTypingEffect speed={150} eraseDelay={200}
                    text={["Page Not Found", "Error 404 "]}
                />
            </Typography>            
        </Grid>
        <Grid item xs={12}>
          <RemoveCircleOutlineIcon className={classes.icon}/>
        </Grid>        
      </Grid>
      <Box className={classes.buttonsBox}  >            
        <Tooltip title="Home" aria-label="add" placement="left">
          <IconButton className={classes.roundedButtons} href="/">
              <HomeIcon fontSize="large"/>
          </IconButton>                      
        </Tooltip> 
        <Tooltip title="MY RESUME" aria-label="add" placement="left">
          <IconButton className={classes.roundedButtons} href="/static/Serhii_Smyk_Resume.docx">
            <AssignmentReturnedIcon fontSize="large"/>
          </IconButton>                      
        </Tooltip>             
        </Box>     
    </div>
  );
}