import React from "react"
import Typography from '@material-ui/core/Typography';
import ReactTypingEffect from 'react-typing-effect';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import CodeIcon from '@material-ui/icons/Code';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Tooltip from '@material-ui/core/Tooltip';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import IconButton from '@material-ui/core/IconButton';
import Box from "@material-ui/core/Box"

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        flexGrow: 1,
        color: "#fff",    
    },
    grid: {
        minHeight: "100vh",
    } ,
    roundedButtons: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 50,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 55,
        width: 55,
        margin: "20px",
        //padding: '0 30px',
       
    },
    buttonsBox: {
        position: "absolute",
        display:"flex",
        flexDirection:"row",
        top: "85%",
        left : "0%",  
        [theme.breakpoints.up('sm')]: {           
            top: "30%",
            left : "90%",            
            flexDirection:"column",
          },
        
    }

}));
const theme = createMuiTheme();

theme.typography.h2 = {
  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};
theme.typography.h3 = {
    fontSize: '2rem',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  };
export default function Home() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid className={classes.grid}  container  direction="row"  justify="space-around"  alignItems="center">
            <Grid item sm={8} xs={12} >
                <ThemeProvider theme={theme}>
                    <Typography color="inherit" variant="h2" component="h2">
                        Hello, 
                    </Typography>
                    <Typography color="inherit" variant="h2" component="h2">
                        I'm Serhii Smyk
                    </Typography>
                    <Typography variant="h3" component="h3">
                        <ReactTypingEffect speed={150}
                            text={["Front End Developer.", "Software Engineer"]}
                        />
                    </Typography>
                </ThemeProvider>
               
            </Grid>
            <Grid item sm={4} xs={12}/>           
        </Grid>
        <Box className={classes.buttonsBox}  >
            <Tooltip title="ABOUT ME" aria-label="add" placement="left">
                <IconButton className={classes.roundedButtons} href="/about" >
                    <FaceIcon fontSize="large"/>
                </IconButton>                      
            </Tooltip> 
            <Tooltip title="MY PROJECTS" aria-label="add" placement="left">
                <IconButton className={classes.roundedButtons} href="/projects">
                    <CodeIcon fontSize="large"/>
                </IconButton>                      
            </Tooltip> 
            <Tooltip title="MY RESUME" aria-label="add" placement="left">
                <IconButton className={classes.roundedButtons} onClick={()=>console.log("Resume clicked")}>
                    <AssignmentReturnedIcon fontSize="large"/>
                </IconButton>                      
            </Tooltip> 
            <Tooltip title="CONTACT ME" aria-label="add" placement="left">
                <IconButton className={classes.roundedButtons} href="/contact">
                    <MailOutlineRoundedIcon fontSize="large"/>
                </IconButton>                      
            </Tooltip> 
        </Box>
        
        
    </div>
    )

}



