import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'
import { useHistory } from 'react-router'
import './Header.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { logOut } from '../../store/actions'

function Header() {
	const [switchSelect, setSwitchSelect] = useState('profile')
	const user = useSelector((state) => state.authReducer.user)
	const history = useHistory()
	const dispatch = useDispatch()

	switch(switchSelect) {
		case 'footer':
			 alert('test')
			break;
		case 'out':
			dispatch(logOut())
			break;
		default:
			setSwitchSelect('profile')
	}

	return (
		<header className='header'>
			<div className='container'>
				<Link className='link' to='/'>
					<div className='header__logo'>TezTer</div>
				</Link>

				<nav>
					<Link to='/testing'>Тестирование</Link>
					<Link to='/rating'>Рейтинг</Link>
					<div className='header__block__profile'>
						<img
							src={user.thumbnail}
							alt='imgLogo'
							onClick={() => history.push('/profile')}
						/>
						<div className='header__block__profile__uName'>
							{user.fullName}
							<select
								className='header__select'
								onChange={(event) =>
									setSwitchSelect(event.target.value)
								}
							>
								<option value='profile'>{user.fullName}</option>
								<option value='footer'>О нас</option>
								<option value='out'>Выйти</option>
							</select>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
