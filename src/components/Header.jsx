import React from 'react'
import Logo from '../images/logo.svg'
import Search from '../images/search_icon.svg'
import Profile from '../images/profile-img-01.svg'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     	<header>
		<Container>
			<Row className="align-items-center">
				<Col sm={8}>
					<div className="menu__app__main">
						<div className="logo__app">
							<img src={Logo} className="img-reponsive" alt="Talent Vare" />
						</div>
						<div className="app_menu">
							<ul>
								<li className="active"><Link to='/'>Find Jobs</Link></li>
								<li><Link to="#">Top Companies</Link></li>
								<li><Link to="#">Job Tracker</Link></li>
								<li><Link to="#">My Calendar</Link></li>
								<li><Link to="#">Documents</Link></li>
								<li><Link to="#">Messages</Link></li>
								<li><Link to="#">Notifications</Link></li>
							</ul>
						</div>
					</div>
				</Col>
				<div className="col-sm-4">
					<div className="search__main">
						<form>
							<div className="search__app">
								<div className="search__input">
									<img src={Search} className="img-reponsive" alt="Search" />
									<input type="text" name="name" placeholder="Search" className="form-control" />
								</div>

								<div className="resume__btn">
									<button>Resume Builder</button>
								</div>
							</div>
						</form>

						<div className="profile__user__img">
							<img src={Profile} className="img-reponsive" alt="Profile" />
						</div>
					</div>
				</div>
			</Row>
		</Container>
	</header>   
    </>
  )
}

export default Header