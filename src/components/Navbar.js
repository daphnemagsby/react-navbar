import React from 'react';
import {MenuItems} from './MenuItems';

const Navbar = () => {
	return(
		<nav className='NavbarItems'>
			<h1 className='navbar-logo'>React</h1>
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