import axios from 'axios'


export const getNames = async(gender, sort) => {
    
    let response = await axios.post('/app/getnames/' , {
        'gender': gender,
        'sort': sort
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