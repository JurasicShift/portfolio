import './Projects.css';
import React, {Component} from "react";
import PropTypes from 'prop-types';
import ProjectItem from '../components/ProjectItem';
import rookieSs from "../imgs/rookieScreenShot.png";
import coinSs from "../imgs/coinTrackerScreenShot.png";
import justeSs from "../imgs/justeScreenShot.png";
import fallenSs from "../imgs/fallenScreenShot.png";

class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='projects'>

                    
                    <ProjectItem projects={this.props.allProjects} />
                    
            
            </div>
        )
       
    }
}

Projects.defaultProps = {
    allProjects: [
        {
            img:  rookieSs,
            type: "Front End",
            title: "Marathon Rookie",
            url: "https://marathonrookie-1749c.firebaseapp.com",
            gitUrl: "https://github.com/JurasicShift/marathonrookie",
        }, 
        {
            img: coinSs, 
            type: "Front End",
            title: "CoinTracker",
            url: "https://cointracker-c6bc7.firebaseapp.com/",
            gitUrl: "https://github.com/JurasicShift/cointracker",
        }, 
        {
            img: justeSs, 
            type: "Full Stack",
            title: "Le Mot Juste",
            url: "https://www.lemotjuste.org.uk/",
            gitUrl: "https://github.com/JurasicShift/lemotjuste",
        },
        {
            img: fallenSs, 
            type: "Full Stack",
            title: "Fallen Heroes of Metal",
            url: "http://www.fallenheroesofmetal.org.uk/",
            gitUrl: "https://github.com/JurasicShift/fallenheroesofmetal",
        }
    ]
}

Projects.propTypes = {
    allProjects: PropTypes.array
}

export default Projects;