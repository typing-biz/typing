import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Routes from '../routes'
function Layout() {
	const isAuth = useSelector((state) => state.authReducer.isAuth)
	return (
		<>
			{isAuth ? (
				<div>
				<Header />
					<Routes />
					<Footer />
				</div>
			) : (
				<div>
					<Routes />
					<Redirect exact  to='/signUp' />
				</div>
			)}
			
		</>
	)
}

export default Layout
