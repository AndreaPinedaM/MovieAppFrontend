import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import Account from './Account'

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = JSON.parse(sessionStorage.getItem('user'))

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <NavLink to='/'>
                    <img
                        alt="Logo"
                        src="../../src/assets/logo.png"
                        width="40"
                        height="40"
                        id="logo"
                        className="d-inline-block align-top"
                    />{' '}
                </NavLink>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar-collapse collapse" id="navbarColor01" style={{}}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item logo">Oura Movies</li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={() => navigate('/')}>Home</a>
                        </li>
                    </ul>
                    {user ? (
                        <>
                            <div className="container-fluid collapse navbar-collapse search" id="navbarColor01">
                                <form className="d-flex">
                                    <input className="form-control me-sm-2 searchInput" type="search" placeholder="Search" />
                                    <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                                </form>
                                <button className='btn btn-secondary' onClick={onLogout}>
                                    <FaSignOutAlt /> Logout
                                </button>
                                <Account />
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