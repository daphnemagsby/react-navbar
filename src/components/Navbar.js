import React, {useState} from 'react';
import {MenuItems} from './MenuItems';
import '../styles/Navbar.css';


const Navbar = () => {
	const [click, setClick] = useState(false);

	return(
		<nav className='navbar-items'>
			<h1 className='navbar-logo'>React <i className="fab fa-react"></i></h1>
			<div className='menu-icon' onClick={()=>{setClick(!click)}}>
				<i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
			</div>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
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