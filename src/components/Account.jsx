import { useState } from 'react';
import {
    FaUserEdit, FaPenSquare, FaHome, FaWrench, FaSortDown, FaPlusCircle, FaFilm, FaQuestionCircle, FaUserAstronaut,
    FaHeart
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { update } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';
// import Spinner from "../components/Spinner"
import DropdownContent from './DropdownContent';


function Account() {
    //Modal
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    //Sidebar
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Change username
    const [userName, setUserName] = useState({
        name: ''
    })
    const { name } = userName

    const dispatch = useDispatch()

    const onChange = (event) => {
        setUserName((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if (!name) {
            alert('Llena todos los campos')
        } else {
            const userData = { name }
            dispatch(update(userData))
            swal({
                title: "Good job!",
                text: "User name actualizado exitosamente!",
                icon: "success",
            });

        }
    }

    return (
        <>
            <Button onClick={handleShow} id="account" >
                <FaUserEdit></FaUserEdit>
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <div id="userImg"></div>
                    <Offcanvas.Title>Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NavLink to='/' onClick={handleClose}>
                        <div className="edit">
                            <div className="tittleContainer">
                                <FaHome className='sidebarIcon'></FaHome>Home
                            </div>
                        </div>
                    </NavLink>

                    <DropdownContent
                        dropdownTittle={
                            <div className="edit">
                                <div className="tittleContainer">
                                    <FaPlusCircle className='sidebarIcon'></FaPlusCircle>Create
                                </div>
                                <FaSortDown></FaSortDown>
                            </div>
                        }
                        dropdownContent={
                            <NavLink to='/newmovie' onClick={handleClose}>
                                <Button className="editButton">
                                    <div>
                                        <FaFilm className='sidebarIcon'></FaFilm>New Movie
                                    </div>
                                </Button>
                            </NavLink>
                        }>
                    </DropdownContent>

                    <DropdownContent
                        dropdownTittle={
                            <div className="edit">
                                <div className="tittleContainer">
                                    <FaWrench className='sidebarIcon'></FaWrench>Settings
                                </div>
                                <FaSortDown></FaSortDown>
                            </div>
                        }
                        dropdownContent={
                            <div className="dropdown">
                                <Button className="editButton" onClick={handleShowModal}>
                                    Change user name<FaPenSquare id="editIcon"></FaPenSquare>
                                </Button>
                            </div>
                        }>
                    </DropdownContent>

                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Change Username</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form onSubmit={onSubmit}>
                                <div id="changeUser">
                                    <label htmlFor="name">Elige un nombre de usuario: </label>
                                    <div className='edit'>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={onChange}
                                            required />
                                        <span className="validity">
                                        </span>
                                    </div>
                                    <button className="smallPrimary" type='submit' onClick={handleCloseModal}>Aceptar</button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal>

                    <div>
                    </div>
                    <NavLink to='/mydata' onClick={handleClose}>
                        <div className="edit">
                            <div className="tittleContainer">
                                <FaUserAstronaut className='sidebarIcon'></FaUserAstronaut>My Data
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/favorites">
                        <div className="edit">
                            <div className="tittleContainer">
                                <FaHeart className='sidebarIcon'></FaHeart>Favorites
                            </div>
                        </div>
                    </NavLink>
                    <div className="edit">
                        <div className="tittleContainer">
                            <FaQuestionCircle className='sidebarIcon'></FaQuestionCircle>About
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Account
