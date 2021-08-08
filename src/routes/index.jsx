import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NotFound from '../pages/404'
import Home from '../pages/Home'
import SignUp from '../pages/Login'
import Profile from '../pages/Profile'
import Testing from '../pages/Testing'
import Rating from '../Rating'

function Routes() {
	return (
		<>
			<Switch>
				<Route path='/profile' component={Profile} />
				<Route path='/testing' component={Testing} />
				<Route path='/rating' component={Rating} />
				<Route exact path='/' component={Home} />
				<Route path='*' component={NotFound}/>
			</Switch>
		</>
	)
}

export default Routes