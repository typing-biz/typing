import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'


function Header() {

	return (
		<header className='header'>
			<div className='container'>
				<Link className='link' to='/'>
					<div className='header__logo'>TezTer</div>
				</Link>

				<nav>
					<Link to='/testing'>Тестирование</Link>
					<Link to='/rating'>Рейтинг</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
