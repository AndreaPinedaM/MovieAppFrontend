import axios from 'axios'

const API_URL = 'http://localhost:5000/api/movies/'

//crear una nueva pelicula
const createMovie = async (movieData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, movieData, config)
    return response.data
}

//obtener las pelicula 
const getMovies = async () => {
    const response = await axios.get(API_URL)
    console.log(response.data);
    return response.data
}

//borramos una pelicula 
const deleteMovie = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id, config)
    return response.data
}

//agregar pelicula favorita
const setFavMovies = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id + '/favorites', config)
    return response.data
}

//remover pelicula favoritas 
const removeFavMovie = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + id + '/removefavs', config)
    return response.data
}


const movieService = {
    createMovie,
    getMovies,
    deleteMovie,
    setFavMovies,
    removeFavMovie
}

export default movieService