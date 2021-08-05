import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import {Routes} from '../../routes'

function Header() {
	return (
		<header className='header'>
			<div className='container'>

				<Link className="link" to={Routes.home}>
					<div className='header__logo'>ANJ Typing</div>
				</Link>

				<nav>
					<Link to={Routes.testing}>Тестирование</Link>
					<Link to={Routes.rating}>Рейтинг</Link>
				</nav>

				{/* <Select defaultValue='EN | RU' style={{ width: 120 }}>
					<Option value='EN'>EN</Option>
					<Option value='RU'>RU</Option>
				</Select>

				<div>
					<Link to={routes.login}>
						<Button type='text'>Log In</Button>
					</Link>
					<Link to={routes.sign_up}>
						<CustomButton primary>Sign Up</CustomButton>
					</Link>
				</div> */}
			</div>
		</header>
	)
}

export default Header
