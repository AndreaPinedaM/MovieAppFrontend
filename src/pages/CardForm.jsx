import { useState, useEffect } from 'react'
import { useNavigate, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { createMovie } from '../features/movies/movieSlice'
import { toast } from 'react-toastify'
import { FaHome } from 'react-icons/fa'
import Spinner from "../components/Spinner"
import swal from 'sweetalert';

const CardForm = () => {

    const [data, setData] = useState({
        original_title: '',
        overview: '',
        poster_path: '',
        release_date: '',
        vote_average: '',
        vote_count: ''
    })


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const user = JSON.parse(sessionStorage.getItem('user'))
    const { original_title, overview, poster_path, release_date, vote_average, vote_count } = data
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.movie)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess) {
            toast.done('Película creada')
        }
    }, [user, isError, isSuccess, message, navigate, dispatch])


    useEffect(() => {
        if (!user) {
            navigate('/home')
        }
    }, [user, navigate])

    const onChange = (event) => {
        setData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (!original_title || !overview || !poster_path || !release_date || !vote_average || !vote_count) {
            toast.error('Llena los campos requeridos')
        } else {
            dispatch(createMovie(data))
            swal({
                title: "Good job!",
                text: "Película creada exitosamente!",
                icon: "success",
            });
            console.log(data)
            setData({
                original_title: '',
                overview: '',
                poster_path: '',
                release_date: '',
                vote_average: '',
                vote_count: ''
            })
        }
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className="Container cardform">
                {/* <div className='header backBtn'>
                    <NavLink to='/'>
                        <button className="btn btn-lg btn-primary">Main Page <FaHome></FaHome></button>
                    </NavLink>
                </div> */}
                <div className="glass-effect">
                    <h2>Card Form</h2>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Titulo</label>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                id="original_title"
                                name="original_title"
                                onChange={onChange}
                                value={original_title} />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Sinopsis</label>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                id="overview"
                                name="overview"
                                onChange={onChange}
                                value={overview} />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Poster Link</label>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                id="poster_path"
                                name="poster_path"
                                onChange={onChange}
                                value={poster_path} />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Fecha de estreno</label>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                id="release_date"
                                name="release_date"
                                onChange={onChange}
                                value={release_date} />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Calificación promedio</label>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                id="vote_average"
                                name="vote_average"
                                onChange={onChange}
                                value={vote_average} />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm mt-4" htmlFor="inputSmall">Likes</label>
                            <input
                                className="form-control form-control-sm"
                                type="text"
                                id="vote_count"
                                name="vote_count"
                                onChange={onChange}
                                value={vote_count} />
                        </div>
                        <button className="btn btn-lg btn-primary" type="submit">Aceptar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CardForm