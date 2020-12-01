import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { FaReact } from 'react-icons/fa';
import { DiJavascript1} from 'react-icons/di';
import { VscBug} from 'react-icons/all';
import { ImHtmlFive2} from 'react-icons/all';
import { DiJava} from 'react-icons/all';
import { SiCplusplus} from 'react-icons/all';
import { AiFillMediumCircle} from 'react-icons/all';
import { DiBootstrap} from 'react-icons/all';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',    
    alignItems:"center",
    justifyContent: "center"
  },
  
  elemnts: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  dates:{
      margin: "15px 0 0 0"
  }

}));

export default function EducationSteper() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
        <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            In Progress
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts} >
            <FaReact fontSize="50px" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                React Native
            </Typography>
            <Typography align="center">Treehouse Island Inc, Portland, OR </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts} >
            <FaReact fontSize="50px" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                Front-End Developer
            </Typography>
            <Typography align="center">Code the Dream,  Durham, NC </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            2020 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <DiJavascript1 fontSize="50px"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                JavaScript Developer
            </Typography>
            <Typography align="center">Udemy, San Francisco, CA</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            2019 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <VscBug fontSize="50px"/>
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                SQA Automation with Selenium WebDriver	
            </Typography>
            <Typography align="center">Udemy, San Francisco, CA</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            2019 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <ImHtmlFive2 fontSize="40px"/>
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                HTML5 + CSS3	
            </Typography>
            <Typography align="center" >Udemy, San Francisco, CA</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            2018 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <DiJava fontSize="50px"/>
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                JAVA Developer
            </Typography>
            <Typography align="center">Hillel Computer School, Odessa, UA</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            2017 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <SiCplusplus fontSize="50px"/>
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                C/C++ Developer	
            </Typography>
            <Typography align="center" >Hillel Computer School, Odessa, UA</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            2008 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <AiFillMediumCircle fontSize="50px"/>
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                Master of Science (MS), Electronic Engineering
            </Typography>
            <Typography align="center">Odessa National Polytechnic University, Odessa, UA</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            2007 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <DiBootstrap fontSize="50px"/>
          </TimelineDot>          
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                Bachelor of Science (BS), Electronic Engineering	
            </Typography>
            <Typography align="center" >Odessa National Polytechnic University, Odessa, UA</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
