import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import Grid from '@material-ui/core/Grid';
import FaceIcon from '@material-ui/icons/Face';
import CodeIcon from '@material-ui/icons/Code';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import Tooltip from '@material-ui/core/Tooltip';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import HomeIcon from '@material-ui/icons/Home';




const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  fab: {
    margin: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  barSing:{
      color: "#fff",
      margin: "0 0.5rem"
  }
}));

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>       
        <List> 
           
            <ListItem >
                <Tooltip title="HOME" aria-label="add" placement="right">
                    <IconButton href="/">
                        <HomeIcon fontSize="large"/>
                    </IconButton>                      
                </Tooltip> 
            </ListItem>
            <Divider/>       
            <ListItem >
                <Tooltip title="ABOUT ME" aria-label="add" placement="right">
                    <IconButton href="/about">
                        <FaceIcon fontSize="large"/>
                    </IconButton>                      
                </Tooltip> 
            </ListItem>
            <Divider/> 
             <ListItem >
                <Tooltip title="MY PROJECTS" aria-label="add" placement="right">
                    <IconButton href="/projects" >                    
                        <CodeIcon fontSize="large"/>
                    </IconButton>
                </Tooltip>
            </ListItem>
            <Divider/> 
             <ListItem >
                <Tooltip title="MY RESUME" aria-label="add" placement="right">
                    <IconButton href="/static/Serhii_Smyk_Resume.docx">
                        <AssignmentReturnedIcon fontSize="large"/>
                    </IconButton>  
                </Tooltip>     
            </ListItem>
            <Divider/> 
             <ListItem >
                <Tooltip title="CONTACT ME" aria-label="add" placement="right">
                    <IconButton href="/contact">
                        <MailOutlineRoundedIcon fontSize="large"/>
                    </IconButton> 
                </Tooltip>
            </ListItem>
            <Divider/>        
      </List>      
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="transparent"  position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            fontSize="inharit"          
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon fontSize="large" className={classes.barSing}/>
          </IconButton>
          <Grid  spacing={5} container  direction="row"  justify="center"  alignItems="center">
            <SettingsEthernetIcon className={classes.barSing} fontSize="large"/>
            <Typography className={classes.barSing} variant="h5" noWrap>
                Serhii Smyk
            </Typography>
            <SettingsEthernetIcon className={classes.barSing} fontSize="large"/>
          </Grid>          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Hidden smUp implementation="css"> */}
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}            
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
      </nav>
      
    </div>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
