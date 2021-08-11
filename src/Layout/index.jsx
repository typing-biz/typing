import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SignUp from '../pages/Login'
import Routes from '../routes'
function Layout() {
	const user = useSelector((state) => state.authReducer.token)
	console.log(user)
	return (
		<>
			{true ? (
				<div>
				<Header />
					<Routes />
					<Footer />
				</div>
			) : (
				<div>
					<Routes />
					<Redirect to='/signUp' />
				</div>
			)}
		</>
	)
}

export default Layout
