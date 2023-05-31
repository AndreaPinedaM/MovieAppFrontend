import { useNavigate, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovies, reset } from '../../features/movies/movieSlice'
import { toast } from 'react-toastify'
import Card from "../../components/Card"
import Spinner from '../../components/Spinner'

const Home = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = JSON.parse(sessionStorage.getItem('user'))
  const { movies, isError, isLoading, message } = useSelector((state) => state.movie || {})
  console.log(movies)

  useEffect(() => {

    if (isError) {
      toast.error(message)
    }

    if (!user) {
      navigate('/home')
    } else {
      dispatch(getMovies())
    }

    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }


  return (
    <>
      {user ? (
        <div className="Container">
          <section className="heading">
            <h4>Bienvenido {user && user.name}</h4>
            <p>All Movies</p>
            <NavLink to='/newmovie'>
              <button className="btn btn-primary">Agregar película</button>
            </NavLink>
          </section>

          {/* <section className="content">
            {movies.length > 0 ? ( //movies: [] en el initial state
              <div className='movies'>
                {movies.map((movie) => (
                  <Card
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
          </section > */}
        </div >
      ) : (
        <div className="Container dinamic">
          <div className="glass-effect">
            <h2>¡Tus películas están aquí!</h2>
            <h3>Si ya tienes una cuenta inicia sesión o registrate</h3>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => navigate('/login')}>Iniciar sesión</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/signup')}>Registrarse</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Home