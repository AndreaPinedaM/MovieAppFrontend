import { useState, useEffect } from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { deleteMovie, getMovies } from '../features/movies/movieSlice'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import swal from 'sweetalert';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';


const Kard = ({ movie }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" key={movie._id} src={movie.poster_path} />
                <Card.Body>
                    <Card.Title>
                        {movie.original_title}
                    </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{movie.release_date}</ListGroup.Item>
                    <ListGroup.Item><FaStar className='fastar icon'></FaStar>{movie.vote_average}</ListGroup.Item>
                    <ListGroup.Item><FaRegThumbsUp className='thumb icon'></FaRegThumbsUp>{/* Likes */}{movie.vote_count}</ListGroup.Item>
                    <ListGroup.Item></ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary" onClick={handleShow}>
                        Sinopsis
                    </Button>
                    <FaRegHeart className='heart icon'></FaRegHeart>
                    <Tooltip title="Delete">
                        <IconButton onClick={() => {
                            dispatch(deleteMovie(movie._id));
                            window.location.reload(false);
                            swal({
                                title: "Good job!",
                                text: "Película eliminada exitosamente!",
                                icon: "success",
                            });
                        }}>
                            <DeleteIcon className='delete' />
                        </IconButton>
                    </Tooltip>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Sinopsis</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{movie.overview}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Card.Body>
            </Card>
        </>
    )
}

export default Kard