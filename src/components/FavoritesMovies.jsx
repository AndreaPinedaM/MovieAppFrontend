// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import { removeFavMovie } from '../features/movies/movieSlice'
import { getData } from '../features/auth/authSlice'
import Spinner from "./Spinner"

const FavoritesSection = () => {
    // const [heartHndl, setHeartHndl] = useState(false);

    const { favMovies, isLoading } = useSelector((state) => state.auth || {})

    const dispatch = useDispatch()

    // const handleHeart = () => {
    //     if (heartHndl) setHeartHndl(false)
    //     else setHeartHndl(true);
    // }

    // const handleRemoveFavorite = (favoriteId) => {
    //     dispatch(removeFavMovie(favoriteId));
    //     console.log("HAndleRemove", favoriteId)
    // };


    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='cardsContainer'>
            <h2>Favoritos</h2>
            <button onClick={() => dispatch(getData())}>getData</button>
            {favMovies.length === 0 ? (
                <p>No tienes favoritos</p>
            ) : (
                <ul>
                    {favMovies.map((favorite) => (
                        <li key={favorite}>
                            {favorite}{' '}
                            <button>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoritesSection;
