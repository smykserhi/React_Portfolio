import React from 'react';
import Particles from "react-tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import Box from "@material-ui/core/Box"
import Sidebar from "./Components/Elements/Sidebar"
import Home from "./Components/Pages/Home"
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from 'react-router-dom';
import About from "./Components/Pages/About"
import Contact from "./Components/Pages/Contact"
import NotFound from "./Components/Pages/NotFound"
import Projects from "./Components/Pages/Projects"

function App() {
    return (
        <Router >
            <Box component="div" className="App">
                <Particles options={particlesOptions}/>
                <Sidebar/>            
                <RouterSwitch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />   
                    <Route path="/contact" component={Contact} />                   
                    <Route component={NotFound} />
                </RouterSwitch>         

            </Box>  
        </Router>
            
            
            
        
    );
}

export default App;
