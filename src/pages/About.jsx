import './About.css';
import React, {Component} from 'react';


class About extends Component {
	constructor(props) {
        super(props)
        this.state = {
            path: window.location.pathname
        }
    }

    componentDidMount() {
	}

    
    render() {
        return (
		<div className="about">
     

		</div>
	);
}
}

export default About;
