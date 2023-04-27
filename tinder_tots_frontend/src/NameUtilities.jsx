import axios from 'axios'


export const getNames = async(gender, sort, user) => {
    
    let response = await axios.post('/app/getnames/' , {
        'gender': gender,
        'sort': sort,
        'user': user
    })
    
    return response.data.names
}


export const getSession = async (user) => {
    
    if(user){
        let response = await axios.post('/app/getsession/', {
            'user': user
        })

        return response.data.session
    }
}


export const updateSession = async (sessionUpdate) => {

    let response = await axios.post('app/updatesession/', {
        'update': sessionUpdate
    })
    console.log(sessionUpdate)
    console.log(response.data)
    return 'updateSession called'
}