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


export const loginUser = async(email, password, setUser) => {
    let response = await axios.post('/user/login/' , {
        'email': email,
        'password': password
    })
    // console.log(response.data)
    setUser(response.data)
    if(response.data.logged_in == true){
        return true
    }else{
        return false
    }
    
}


export const logoutUser = async(setUser) => {
    let response = await axios.post('/user/logout/')
    if(response.data.logout){
        setUser(null)
    }
}


export const createSession = async(gender, otherParent, user) =>{
    // console.log(gender, otherParent, user.name)
    let response = await axios.post('user/createsession/', {
        'username': user.email,
        'gender': gender,
        'otherParent': otherParent,
    })
    // console.log('response:', response.data)
    return response.data.test
}


export const acceptInvite = async(invitee, inviter) =>{
    // console.log(invitee, inviter)
    let response = await axios.post('user/inviteaccept/', {
        'invitee': invitee,
        'inviter': inviter,
        'action': 'accept',
    })
    
    // console.log(response.data)
}


export const rejectInvite = async(invitee, inviter, setUpdate, update) =>{
    // console.log(invitee, inviter)
    let response = await axios.post('user/inviteaccept/', {
        'invitee': invitee,
        'inviter': inviter,
        'action': 'reject',
    })
    // console.log(response.data)
    
}


export const getDadJoke = async() => {
    let response = await axios.get('/user/dadjoke/')
    console.log(response.data.joke)
    return response.data.joke
}