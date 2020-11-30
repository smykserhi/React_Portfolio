import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import JobSteper from "../../Elements/JobsSteper"
import EducationSteper from "../../Elements/EducationSteper"

const useStyles = makeStyles((theme) =>({
  root: {
    color: "#fff",    
    background: "rgba(255,255,255,0.2)",
    borderRadius: "15px",
    width : "95vw",
    margin: "10vh auto",
    [theme.breakpoints.up('md')]: {           
        width: "60vw"
      },
  },
  skills: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 50,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 55,
    minWidth: "100px",
    margin: "20px",
    //padding: '0 30px',
  }

}))

export default function About() {
  const classes = useStyles();
  const skills = ["React", "JavaScript", "Node.js", "CSS3", "HTML5", "SQL", "Firebase", "Airtable", "Java", "C/C++", "Material UI", "BootStrap", "Express", "Pug", "Selenium", "Postman", "JMeter"]
  return (
    <Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={4} >
        {/* <Grid xs={12} item >
            <Typography color="inherit" variant="h2" component="h2">
                Serhii Smyk
            </Typography>
        </Grid>        */}
        <Grid xs={12} item >
            <Typography color="inherit" variant="h4" component="h4">
                Professionl Summary
            </Typography>
        </Grid>
        <Grid xs={12} md={8} item >
            <Typography color="inherit" variant="h6" component="h6">
                Front-End Developer  with experience in UI development applications with modern front end 
                technologies using simple solutions for complicated problems. Skilled in different languages, 
                Github version control, unit testing and integration testing, strong computer science knowledge.
            </Typography>
        </Grid>
        <Grid xs={12} item >
            <Typography color="inherit" variant="h4" component="h4">
                Skills
            </Typography>
        </Grid>
        <Grid xs={12} item >
            {skills.map((el,index)=>{
                return(
                    <Button key={index} className={classes.skills}>{el}</Button>
                )
            })}
        </Grid>
        <Grid xs={12} item >
            <Typography color="inherit" variant="h4" component="h4">
                Professional Experience
            </Typography>
        </Grid>
        <Grid xs={12} item >
            <JobSteper/>
        </Grid>
        <Grid xs={12} item >
            <Typography color="inherit" variant="h4" component="h4">
                Education
            </Typography>
        </Grid>
        <Grid xs={12} item >
            <EducationSteper/>
        </Grid>
    </Grid>
  )
}