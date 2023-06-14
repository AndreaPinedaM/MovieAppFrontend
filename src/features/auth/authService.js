import axios from 'axios'

// const API_URL ='https://indigo-chameleon-wig.cyclic.app/api/users/'
const API_URL = 'http://localhost:5000/api/users/'

//REGISTRAR USUARIO
const signup = async (userData) => {
    const response = await axios.post(API_URL + 'signup', userData)
    return response.data
}

//LOGIN
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        sessionStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

//Actualizar usuario 
const update = async (token) => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const id = user._id
    console.log(id);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + id, config)
    return response.data
}

//Datos de usuario
const getMyData = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.get(API_URL + 'mydata', config)
    return response.data
}

//LOGOUT
const logout = () => {
    sessionStorage.removeItem('user')
}

const authService = {
    signup,
    logout,
    login,
    getMyData,
    update
}

export default authService