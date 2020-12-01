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
import CodeIcon from '@material-ui/icons/Code';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import BugReportIcon from '@material-ui/icons/BugReport';

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

export default function JobSteper() {
  const classes = useStyles();
  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            06/2020 – Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts} >
            <CodeIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                Front-End Developer, Internship and Training
            </Typography>
            <Typography align="center">Code the Dream,  Durham, NC </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            01/2019 - 01/2020 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <BugReportIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                QA Automation Engineer	
            </Typography>
            <Typography align="center">CHI Software, Sacramento, CA</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            02/2013 - 09/2018 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <AutorenewIcon fontSize="large"/>
          </TimelineDot>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                Head of Customs Broker Department	
            </Typography>
            <Typography align="center">Ferrytransservis LLC, Chernomorsk, Ukraine</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.dates}>
          <Typography variant="subtitle1" color="inherit">
            09/2008 - 02/2013 
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.elemnts}>
            <AssignmentTurnedInIcon fontSize="large"/>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography align="center" variant="h6" component="h1">
                Customs Broker	
            </Typography>
            <Typography align="center" >EATC-Ukraine LLC, Chernomorsk, Ukraine</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
