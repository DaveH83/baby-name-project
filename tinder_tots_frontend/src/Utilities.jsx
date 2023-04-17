import axios from 'axios'

export const currUser = async() =>{
    let response = await axios.get('/user/curruser/')
    // console.log(response.data)
    return response.data
}


export const registerUser = async(name, email, password) => {
    let response = await axios.post('/user/register/' , {
        'name': name,
        'email' : email,
        'password' : password
    })
    // console.log(response.data.success)
    return response.data.success
}


export const loginUser = async(email, password) => {
    let response = await axios.post('/user/login/' , {
        'email': email,
        'password': password
    })
    // console.log(response.data.logged_in)
    return response.data.logged_in
}


export const logoutUser = async(setUser) => {
    let response = await axios.post('/user/logout/')
    if(response.data.logout){
        setUser(null)
    }
}