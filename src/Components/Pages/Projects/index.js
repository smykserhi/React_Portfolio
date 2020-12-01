import React,{useState, useEffect} from "react"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectCards from "../../Elements/ProjectCard"
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Box from "@material-ui/core/Box"
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width : "95vw",
      background: "rgba(255,255,255,0.4)",
      borderRadius: "15px",
      color:"#fff",      
      margin: "20vh auto 5vh",
      padding: "0 1vw",
      [theme.breakpoints.up('md')]: {           
          width: "80vw"
        }, 
    [theme.breakpoints.up('lg')]: {           
        width: "60vw"
        },     
    },    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',      
      color: theme.palette.text.secondary,  
      minWidth : 360,   
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
    loading:{
        marginTop: "500px"
    }   
  }));

export default function Projects(){    

    const classes = useStyles();
    const [projects, setProjects] = useState()
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        if(loading){
            const apiKey = process.env.REACT_APP_API
            fetch(`https://api.airtable.com/v0/app8ZAX7h2saMhNWq/projects?api_key=${apiKey}`)
                .then(res=>{
                    if (res.ok) {
                        return Promise.resolve(res);
                    } else {
                        return Promise.reject(new Error(res.statusText));
                    }
                })
                .then(res=>res.json())
                .then(res=>createProjects(res))                
                .catch((error) => {
                    console.error('Error:', error);
                });   
        }
    })
    const createProjects =(data)=>{
        //console.log("Projects",data.records)
        let project = []
        data.records.map(el=>{
            let projectElement = {
                id: el.id,
                discription: el.fields.Discription,
                pageUrl: el.fields.Link,
                imgUrl: el.fields.Image[0].url&&el.fields.Image[0].url,
                title: el.fields.Title,
                gitUrl: el.fields.gitUrl,
                position: el.fields.position
            }
            project.push(projectElement) 
        })        
        setProjects(project.sort((a, b) => (a.position > b.position) ? 1 : -1))
        setLoading(false)  
    }
    return (
        <>
        {loading ? <CircularProgress className={classes.loading} color="primary"/> : 
        <div className={classes.root}>            
            <Grid container   direction="row"  justify="center"  alignItems="center" spacing={3}>
                <Grid item md={8} >
                    <Typography color="inherit" variant="h4" component="h4">
                        My recent projects                     
                    </Typography>
                </Grid>
                {projects.map((el, index)=>{
                    return(
                        <Grid key={index} item md={6} xs={12} container  direction="row"  justify="center"  alignItems="center">                            
                            <Paper className={classes.paper}>
                               <ProjectCards className={classes.card} data={el} />
                            </Paper>                                                  
                        </Grid>   
                    )
                })}                            
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
    }
    </>
    );
    
}