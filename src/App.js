import { useSelector } from 'react-redux'
import { useEffect } from 'react'

import Layout from './Layout'
import './App.css'

function App() {
	const state = useSelector((state) => state.authReducer)

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(state))
	}, [state])

	return (
		<div className='App'>
			<Layout />
		</div>
	)
}

export default App
