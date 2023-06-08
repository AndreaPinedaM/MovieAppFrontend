import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovies } from '../features/movies/movieSlice'
import { toast } from 'react-toastify'
import Spinner from "./Spinner"
import Kard from "./Card"
import { paginate } from "../components/utils/paginate";

const Cards = ({ pageNumber, pageSize }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = JSON.parse(sessionStorage.getItem('user'))
    const { movies, isError, isLoading, isSuccess, message } = useSelector((state) => state.movie || {})

    const paginatedPosts = paginate(movies, pageNumber, pageSize);


    /* Este useEffect se ejecuta solo una vez al momento de que se monta */
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    /* Este useEffect se cicla si tienes el return y getMovies al mismo tiempo */
    useEffect(() => {

        if (isError) {
            toast.error(message)
        }

        if (!user) {
            navigate('/home')
        }
    }, [user, navigate, isError, isSuccess, message, dispatch])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='cardsContainer'>
            {movies.length > 0 ? ( //movies: [] en el initial state
                <div className='Movies'>
                    {paginatedPosts.map((movie) => (
                        < Kard
                            movie={movie}
                            key={movie._id}
                            original_title={movie.original_title}
                            overview={movie.overview}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                            vote_average={movie.vote_average}
                            vote_count={movie.vote_count} />
                    ))}
                </div>
            ) : (
                <h4>No hay ninguna película agregada</h4>
            )}
        </div>
    )
}

export default Cards