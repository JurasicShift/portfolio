import './Home.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);
		this.imgFadeIn = this.imgFadeIn.bind(this);
		this.titleEffect = this.titleEffect.bind(this);
		this.roleEffect = this.roleEffect.bind(this);
		this.starController = this.starController.bind(this);
        this.starTimings = this.starTimings.bind(this);
		this.addBtn = this.addBtn.bind(this);
	}

	componentDidMount() {
		this.imgFadeIn();
	}

	imgFadeIn() {
		setTimeout(() => {
			this.titleEffect();

			setTimeout(() => {
				this.roleEffect();
			}, 1000);
		}, 1000);
	}

	titleEffect() {
		const title = document.getElementById('title');
		const titleText = document.getElementById('titleText');
		const strTitle = title.textContent;
		const splitTitle = strTitle.split('');
		title.textContent = '';
		titleText.classList.add('titleText2');

		for (let i = 0; i < splitTitle.length; i++) {
			title.innerHTML += '<span>' + splitTitle[i] + '</span>';
		}

		let char = 0;
		let timer = setInterval(onTick, 100);

		function onTick() {
			const span = title.querySelectorAll('span')[char];
			span.classList.add('fade');
			char++;
			if (char === splitTitle.length) {
				complete();
				return;
			}
		}

		function complete() {
			clearInterval(timer);
			timer = null;
		}
	}

	roleEffect() {
		const role = document.getElementById('role');
		const roleText = document.getElementById('roleText');
		const strRole = role.textContent;
		const splitRole = strRole.split('');
		role.textContent = '';
		roleText.classList.add('roleText2');

		for (let i = 0; i < splitRole.length; i++) {
			role.innerHTML += '<span>' + splitRole[i] + '</span>';
		}

		let char = 0;
		let timer = setInterval(onTick, 100);

		function onTick() {
			const span = role.querySelectorAll('span')[char];
			span.classList.add('fade');
			char++;
			if (char === splitRole.length) {
				complete();
				return;
			}
		}

		const btnCall = this.addBtn;
		const starCaller = this.starController;

		function complete() {
			clearInterval(timer);
			timer = null;
			btnCall();
			starCaller();
		}
	}

	starController() {
		let [windowDelay, windowComplete] = this.starTimings();

		setTimeout(() => {
			let section = document.getElementById('starSection');
			section.style.opacity = '1';
			if (section !== null) {
				window.sessionStorage.setItem('Stars', 'displayed');
				setTimeout(() => {
					if (window.sessionStorage.getItem('Stars')) {
						let stars = section.children;
						for (let star of stars) {
							star.classList.remove('star');
						}
						section.style.display = 'none';
					}
				}, windowComplete);
			}
		}, windowDelay);
	}

    starTimings() {
        const windowWidth = window.innerWidth;
		let windowDelay;
        let windowComplete;

        switch(true) {
            case windowWidth < 780: 
            windowDelay = 0;
            windowComplete = 4200;
            break;
            case windowWidth > 780 && windowWidth < 1000:
            windowDelay = 500;
            windowComplete = 4000;
            break;
            case windowWidth > 1000:
            windowDelay = 600;
            windowComplete = 3900;
            break;
            default:
            windowDelay = 0;
            windowComplete = 4200;
            break;
        }

        return [windowDelay, windowComplete];
    }

	addBtn() {
		const btn = document.getElementById('sectionBtn');
		btn.classList.add('sectionBtnShow');
	}

	render() {
		return (
			<div className="home">
				<section className="star__Section" id="starSection">
					<span className="star"></span>
					<span className="star"></span>
				</section>
				<div className="home__sections">
					<section className="home__title">
						<div className="home__header" id="titleText">
							<h1 className="home__name" id="title">
								Michael&nbsp;Whyte
							</h1>
						</div>
						<div className="home__subheader" id="roleText">
							<p className="home__text" id="role">
								web developer
							</p>
						</div>
					</section>
					<section className="home__btn">
						<Link className="home__btnlink" to={''} id="sectionBtn">
							PORTFOLIO
						</Link>
					</section>
				</div>
			</div>
		);
	}
}

export default Home;
