
import React from 'react'
import {useSelector} from 'react-redux'

export const Profile = () => {

    const state = useSelector(state => state.authReducer.user)
    console.log(state)
    return (
        <div>
        <h1 style={{paddingTop:100}}>{state.fullName}</h1>
        <h2>{state.email}</h2>
        <img src={state.thumbnail} alt="" />
        </div>

        
    )
}
export default Profile
