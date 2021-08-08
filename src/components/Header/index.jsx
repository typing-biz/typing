import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
	return (
		<div>
			<header className='header'>
				<div className='container'>
					<Link to='/' className='link'>
						<div className='header__logo'>Tezter.kg</div>
					</Link>

					<nav>
						<Link to="/testing">Тестирование</Link>
						<Link to='/rating'>Рейтинг</Link>
					</nav>
					<button className='header__btn-login'>Войти</button>
				</div>
			</header>
		</div>
	)
}

export default Header
