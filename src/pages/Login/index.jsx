import React from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import { useDispatch } from 'react-redux'
import { change_token, loginRequest } from '../../store/actions'

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

	const authorization  = async () => {
		const user = await auth.signInWithPopup(
			new firebase.auth.GoogleAuthProvider(),
		)
		firebase
			.auth()
			.currentUser.getIdTokenResult()
			.then((idTokenResult) => {
				dispatch(change_token(idTokenResult.token))
				dispatch(loginRequest(idTokenResult.token))
			})
	}

	return (
	
		
		// <button style={{ padding: 10, marginTop: 100 }} onClick={authorization}>
		// 		signup
		// 	</button> 
		<div>
			jasmina
		</div>


		
		
		
	)
}

export default SignUp
