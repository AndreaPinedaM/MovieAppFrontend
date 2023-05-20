import { FaSignOutAlt} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Oura Movies</a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse collapse" id="navbarColor01" style={{}}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                        {user ? (
                            <>
                                <div className="container-fluid collapse navbar-collapse search" id="navbarColor01">
                                    <form className="d-flex">
                                        <input className="form-control me-sm-2" type="search" placeholder="Search" />
                                        <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                                    </form>
                                    <button className='btn btn-secondary' onClick={onLogout}>
                                        <FaSignOutAlt /> Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <span className="badge bg-dark">Inicia sesión</span>
                            </>
                        )}
                </div>
            </div>
        </nav>

)
}

export default Navbar