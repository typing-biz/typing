import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import NativeSelect from '@material-ui/core/NativeSelect'

import './Header.scss'
import { useSelector } from 'react-redux'

function Header() {

	const user = useSelector(state => state.authReducer.user)
	console.log(user)

	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}))
	const classes = useStyles()
	const [state, setState] = React.useState({
		age: '',
		name: 'hai',
	})

	const handleChange = (event) => {
		const name = event.target.name
		setState({
			...state,
			[name]: event.target.value,
		})
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
					<img src={user.thumbnail} alt="" />
					<select className="header__select">
						<option>
							{user.fullName}
							</option>
						<option>О нас</option>
						<option>Выйти</option>
					</select>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
