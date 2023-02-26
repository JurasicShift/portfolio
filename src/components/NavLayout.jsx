import React, { Component } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import './NavLayout.css';
import Icons from './Icons';


class NavLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navDisplay: false,
      styleNavLeft: "-60px",
      styleTogOpacity: "1",
      toggleElement: "fas fa-bars"
    }
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.showNav = this.showNav.bind(this);
    this.hideNav = this.hideNav.bind(this);
  }

  handleToggleClick() {
    if(this.state.navDisplay === true) {
      this.hideNav();
    } else {
      this.showNav();
    }
  }

  showNav() {
    let toggledValue = !this.state.navDisplay;
    this.setState(
      {
        styleNavLeft:"0px",
        styleTogOpacity: "0",
        navDisplay:toggledValue,
        
    })
    setTimeout(() => {
      this.setState(
        {
          styleTogOpacity: "1",
          toggleElement: "fas fa-times"
        }
      )
    }, 500);
  }

  
  hideNav() {
    let toggledValue = !this.state.navDisplay;
    this.setState(
      {
        styleNavLeft:"-60px", 
        styleTogOpacity: "0",
        navDisplay:toggledValue,
        
      })
      setTimeout(() => {
        this.setState({
          styleTogOpacity: "1",
          toggleElement: "fas fa-bars",

        })
      }, 500);
  }
  //"#ad9eab"
 render() {
  let activeStyle = {
    color:"#ad9eab",
  }
  return (
    <div className="navLayout">
      <div className="navigation" id="navigation" style={{left: this.state.styleNavLeft}}>
				<ul>
					<li>
						<NavLink 
              className="link" 
              to={'/'}
              style={({isActive}) => isActive ? activeStyle : undefined}>
							<span className="icon" ><i className="fas fa-home"></i></span>
							<span className="title" >Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink 
            className="link" 
            to={'/about'}
            style={({isActive}) => isActive ? activeStyle : undefined}>
							<span className="icon" ><i className="fas fa-user-circle"></i></span>
							<span className="title" >About</span>
						</NavLink>
					</li>
					<li>
						<NavLink 
            className="link"
            to={'/projects'}
            style={({isActive}) => isActive ? activeStyle : undefined}>
							<span className="icon" ><i className="fas fa-drafting-compass"></i></span>
							<span className="title" >Projects</span>
						</NavLink>
					</li>
					<li>
						<NavLink className="link"
            to={'/tech'}
            style={({isActive}) => isActive ? activeStyle : undefined}>
							<span className="icon" ><i className="fas fa-code-branch"></i></span>
							<span className="title" >Technology</span>
						</NavLink>
					</li>
					<li>
						<NavLink className="link"
            to={'/contact'}
            style={({isActive}) => isActive ? activeStyle : undefined}>
							<span className="icon" ><i className="far fa-comments"></i></span>
							<span className="title" >Contact</span>
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="toggle" id="toggle" onClick={this.handleToggleClick}>
				<div className="iconTog" id="iconTog" style={{opacity: this.state.styleTogOpacity}}><i className={this.state.toggleElement}></i></div>
			</div>
      <Outlet />
      <Icons />
    </div>
     
  )
 }
}

export default NavLayout;
