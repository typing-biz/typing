import userEvent from '@testing-library/user-event'
import './App.css'
import Layout from './Layout'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


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
