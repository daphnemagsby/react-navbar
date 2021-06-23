import React from 'react';
import {MenuItems} from './MenuItems';
import '../styles/Navbar.css';

const Navbar = () => {
	return(
		<nav className='navbar-items'>
			<h1 className='navbar-logo'>React <i className="fab fa-react"></i></h1>
			<div className='menu-icon'>
			
			</div>
			<ul>
				{MenuItems.map((item, index)=>(
					<li key={index}>
						<a className={item.className} href={item.href}> {item.title}</a>
					</li>

				))}

			</ul>
		</nav>
	);
}


export default Navbar;