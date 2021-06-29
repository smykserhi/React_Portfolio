import React,  {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Box from "@material-ui/core/Box"
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) =>({
   root: {
    flexGrow: 1,
    width : "95vw",
    background: "rgba(137,140,145,0.95)",
    borderRadius: "15px",
    color:"#fff",
    margin: "20vh auto",
  [theme.breakpoints.up('md')]: {           
          width: "60vw"
    },  
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginBottom: "10px"
  },
  input: {
    color:"#fff",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 5,
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
}));

export default function Contact() {
  const classes = useStyles();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [alert, setAlert] = useState(false)
  const [er, setEr] = useState(false)
  const [erMessage, setErMessage] = useState("")
  const onChange = (e)=>{
    if(e.target.id === "name" ) setName(e.target.value)
    else if (e.target.id === "email") setEmail(e.target.value)
    else setMessage(e.target.value)
  }

  const onSend =(e)=>{
    const apiKey = process.env.REACT_APP_API 
    fetch('https://api.airtable.com/v0/app8ZAX7h2saMhNWq/responce', {
      method: "POST",
      body: JSON.stringify({
      fields: {
          name,
          email,
          message,                  
        }
      }) ,            
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      })       
      .then((res)=> {            
        if (res.ok) {
          setEmail("")        
          setMessage("")
          setName("") 
          setAlert(true)
          return Promise.resolve(res);
        } else {
          
          return Promise.reject(new Error(res.statusText));
        }           
        })
        .catch((error) => {
            setErMessage(error.message)
            setEr(true)
            console.error('Error:', error);
        }); 
     }
     const handleCloseAlert = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setAlert(false);
      setEr(false)
    };  
    const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const validation = name ==="" || message ==="" || !pattern.test(email) 
  return (
    <div className={classes.root}>
      <Grid container direction="row" justify="center" alignItems="center" spacing={4}>
        <Grid item md={8} >
          <Typography color="inherit" variant="h4" component="h4">
              Tell me how can i help you?
            </Typography>
          </Grid>
        <Grid item md={8} xs={11}>
          <TextField 
            onChange={onChange}
            className={classes.input}
            color="secondary"  
            fullWidth={true}         
            id="name"
            label="Name"
            value={name}
            variant="filled"        
          />
        </Grid>
        <Grid item md={8} xs={11}>
          <TextField
            required
            className={classes.input}
            onChange={onChange}
            color="secondary"  
            fullWidth={true}         
            id="email"
            value={email}
             label="email"
             type="email"
             variant="filled"
            />
        </Grid>
        <Grid item md={8} xs={11}>
          <TextField
              required
              className={classes.input}
              onChange={onChange}
              color="secondary"  
              fullWidth={true}         
              multiline={true}
              rows={3}
              value={message}
               id="message"
              label="Message"
              variant="filled"
            />
        </Grid>
        <Grid item md={8} xs={11}>
          <Button disabled={validation} fullWidth={true} onClick={onSend} className={classes.button}>Send</Button>
        </Grid>  
      </Grid>
      <Snackbar open={alert} autoHideDuration={3000} onClose={handleCloseAlert} >
        <MuiAlert elevation={6} variant="filled"  severity="success" onClose={handleCloseAlert}>
          Thank you, I'll contact you soon
        </MuiAlert>
      </Snackbar>  
      <Snackbar open={er} autoHideDuration={3000} onClose={handleCloseAlert} >
        <MuiAlert elevation={6} variant="filled"  severity="error" onClose={handleCloseAlert}>
          {erMessage}
        </MuiAlert>
      </Snackbar>   
      <Box className={classes.buttonsBox}  >            
            <Tooltip title="Home" aria-label="add" placement="left">
                <IconButton className={classes.roundedButtons} href="/">
                    <HomeIcon fontSize="large"/>
                </IconButton>                      
            </Tooltip> 
            <Tooltip title="MY RESUME" aria-label="add" placement="left">
                <IconButton className={classes.roundedButtons} href="/static/Serhii_Smyk_Resume.pdf">
                    <AssignmentReturnedIcon fontSize="large"/>
                </IconButton>                      
            </Tooltip> 
        </Box>     
    </div>
  )
  
  
}