import React from 'react'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

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
	const login = async () => {
		const user = await auth.signInWithPopup(
			new firebase.auth.GoogleAuthProvider(),
		)
		firebase
			.auth()
			.currentUser.getIdTokenResult()
			.then((idTokenResult) => {
				console.log(idTokenResult.token)
			})
	}

	return (
		<>
			<button style={{ padding: 10 }} onClick={login}>
				signup
			</button>
		</>
	)
}

export default SignUp
