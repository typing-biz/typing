import React from 'react'
import firebase from 'firebase'
import { useDispatch } from 'react-redux'
import { change_token, loginRequest } from '../../store/actions'
import 'firebase/firestore'
import 'firebase/auth'

import pic1 from '../../assets/img/Google - Original.png'
import pic2 from '../../assets/img/new.png'
import pic4 from '../../assets/img/Union.png'

import './style.scss'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'

firebase.initializeApp({
	apiKey: 'AIzaSyCah7OnZFSyTqo2TwcTPeIfYlTuj9PEC3Y',
	authDomain: 'typingapp-4708c.firebaseapp.com',
	projectId: 'typingapp-4708c',
	storageBucket: 'typingapp-4708c.appspot.com',
	messagingSenderId: '1075061874474',
	appId: '1:1075061874474:web:23eed836828b457eb3c853',
})

const auth = firebase.auth()

function SignUp() {
	const dispatch = useDispatch()

	const isAuth = useSelector((state) => state.authReducer.isAuth)

	if (isAuth) return <Redirect to='/' />
	const authorization = async () => {
		const user = await auth.signInWithPopup(
			new firebase.auth.GoogleAuthProvider(),
		)
		firebase
			.auth()
			.currentUser.getIdTokenResult()
			.then((idTokenResult) => {
				dispatch(change_token(idTokenResult.token))
				dispatch(loginRequest(idTokenResult.token))
				localStorage.setItem('token' , JSON.stringify(idTokenResult.token))
			})
	}

	return (
		<div className='block'>
			<div className='container'>
				<div className='block__first'>
					<div className='block__first__main'>
						<div
							className='block__first__one'
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								width: 160,
								paddingLeft:7 ,
								
								
							}}
						>
							<img src={pic4} style={{width:29,height:29,}}/>
							<h1 className='block__first__one__title'><span style={{fontWeight:700}}>TEZ</span>TER</h1>
						</div>
						<div className='block__first__two'>
							<h1 className='block__first__title'>
								Научиться печатать вслепую
							</h1>
							<button
								className='block__button'
								onClick={authorization}
							>
								<img
									src={pic1}
									className='block__button__google'
								/>
								<span style={{ marginLeft: 70 }}>
									Sign In Google
								</span>{' '}
							</button>
						</div>
					</div>
					<img src={pic2}  />
				</div>
			</div>
		</div>
	)
}

export default SignUp
