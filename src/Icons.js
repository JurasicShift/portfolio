import './Icons.css';
import React from "react";
import { Link } from "react-router-dom";

function Icons() {
    return <section className="icons__section">
    <div className="icons__Linked">
    <a href='https://linkedin.com/in/michael-whyte-web-dev' target="_blank" rel="noopener noreferrer">
    <img src={require('./utilities/linked.svg').default} alt='LinkedIn Icon'></img>
    </a>
    </div>
    <div className="icons__Git">
    <a href='https://github.com/JurasicShift?tab=repositories' target="_blank" rel="noopener noreferrer">
    <img src={require('./utilities/git.svg').default} alt='Git Hub Icon'></img>
    </a>
    </div>
</section>
}

export default Icons;