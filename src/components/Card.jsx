import { FaThumbsUp, FaRegThumbsUp, FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'

const Card = () => {
  return (
    <>
        <div>
            <div className="card mb-3">
                <h3 className="card-header">Card header</h3>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height={200} aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style={{fontSize: '1.125rem', textAnchor: 'middle'}}>
                <rect width="100%" height="100%" fill="#868e96" />
                <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
                </svg>
                <div className="card-body">
                    <p className="card-text">
                        <FaStar className='fastar'></FaStar>7.6
                    </p>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <FaThumbsUp className='thumb'></FaThumbsUp> Likes
                    </p>
                </div>
                <div className="description">
                    <div>
                    {/* Button trigger modal */}
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Ver Sinopsis
                    </button>
                    {/* Modal */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                            Sinopsis de la pelicula
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <FaRegHeart className='heart'></FaRegHeart>
                </div>
                <div className="card-footer text-muted">
                2 days ago
                </div>
            </div>
        </div>

    </>
  )
}

export default Card