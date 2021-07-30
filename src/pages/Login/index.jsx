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
		const provider = new firebase.auth.GoogleAuthProvider()
		const user = await auth.signInWithPopup(provider)
		console.log(user)
	}
	return <button style={{padding: 30}} onClick={login}>signup</button>
}

export default SignUp
