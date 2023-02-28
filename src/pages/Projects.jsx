import './Projects.css';
import React from 'react';
import ProjectItem from '../components/ProjectItem';
import ProjectData from '../data/staticData';

function Projects() {
	return (
		<div className="projects">
			<ProjectItem projects={ProjectData} />
		</div>
	);
}

export default Projects;
