import { Component } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

class Navbar extends Component {

	render() {
		return (
			<div className="nav-bar-container-light">
				<img
					src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
					className="website-logo"
					alt="website logo"
				/>
				<ul className="middle-items">
					<li className="list-item">
						<Link to="/" className="link-light">
							Home
						</Link>
					</li>
					<li className="list-item">
						<Link to="/about" className="link-light">
							About
						</Link>
					</li>
					<li className="list-item">
						<Link to="/stocks" className="link-light">
							Stocks
						</Link>
					</li>
				</ul>
			</div>
		)
	}
}

export default Navbar;