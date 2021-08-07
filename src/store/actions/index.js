let DEFAULT_URL = 'http://165.22.31.74:4080/account/profile'
export const LOGIN = 'LOGIN'
export const CHANGE_TOKEN = 'CHANGE_TOKEN'

export const loginRequest = (token) => (dispatch) => {
    
    fetch(DEFAULT_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            id_token:token,
        },
    })
        .then((response) => response.json())
        .then((user) => dispatch(login(user))) 
}




export const login = (user) => ( {
    type :LOGIN,
    payload : user,
})
export const change_token = (token) => ( {
    type :CHANGE_TOKEN,
    payload : token,
})