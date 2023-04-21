import axios from 'axios'


export const pullNames = async(gender, sort) => {
    let response = await axios.post('/app/getnames/' , {
        'gender': gender,
        'sort': sort
    })
    // console.log(response.data.logged_in)
    return response.data
}

