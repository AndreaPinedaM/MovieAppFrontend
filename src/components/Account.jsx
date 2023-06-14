import { useState } from 'react';
import { FaUserEdit, FaUserAltSlash, FaPenSquare } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { update } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Account() {
    const user = JSON.parse(sessionStorage.getItem('user'))
    const [show, setShow] = useState(false);
    // const [edit, setEdit] = useState(false)

    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const closeInput = () => setEdit(false)
    // const showInput = () => setEdit(true)

    return (
        <>
            <Button onClick={handleShow} id="account" >
                <FaUserEdit></FaUserEdit>
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <div id="userImg"></div>
                    <Offcanvas.Title>Account Settings</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="edit">
                        <p>{user.name}</p><FaPenSquare id="editIcon" onClick={() => { dispatch(update()) }}></FaPenSquare>
                    </div>
                    <div>
                        <form>
                            <div id="changeUser">
                                <label htmlFor="uname">Elige un nombre de usuario: </label>
                                <div className='edit'>
                                    <input type="text" id="uname" name="name" required />
                                    <span className="validity">
                                    </span>
                                </div>
                                <button>Aceptar</button>
                            </div>
                        </form>
                    </div>
                    <div className="edit">
                        <p>{user.email}</p>
                    </div>
                    <div className="edit">
                        <p>Cambiar contraseña</p><FaPenSquare></FaPenSquare>
                    </div>
                    <NavLink to='/newmovie' onClick={handleClose}>
                        <button className="btn btn-primary outline-offset">Agregar película</button>
                    </NavLink>
                    <Button id='delete' variant="danger">
                        Delete Account <FaUserAltSlash></FaUserAltSlash>
                    </Button>{' '}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Account
