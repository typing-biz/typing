import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import Layout from './Layout'
import './App.css'

function App() {
	const authState = useSelector((state) => state.authReducer)

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(authState))
	}, [authState])

	return (
		<div className='App'>
			<Layout />
		</div>
	)
}

export default App
