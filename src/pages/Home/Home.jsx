import { useNavigate } from 'react-router-dom'
import { useState } from "react";
// import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaSortAlphaDown } from 'react-icons/fa'
import Button from 'react-bootstrap/Button';
import Cards from '../../components/Cards'
// import Spinner from '../../components/Spinner'
// import Categories from '../../components/Categories'
import Pagination from '../../components/Pagination';

const Home = () => {
  const { movies } = useSelector((state) => state.movie);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const navigate = useNavigate()

  const user = JSON.parse(sessionStorage.getItem('user'))

  // Pagination
  const previousClickHandler = () => {
    setCurrentPage(currentPage - 1);
  };
  const nextClickHandler = () => {
    setCurrentPage(currentPage + 1);
  };
  const pageChangeHandler = (page) => {
    setCurrentPage(page);
  };
  // End of pagination

  return (
    <>
      {user ? (
        <div className="homeContainer">
          <section className="header">
            <h4>Bienvenido {user && user.name}</h4>
            <div id="filters">
              <Button variant="primary" ><FaSortAlphaDown></FaSortAlphaDown></Button>
              {/* <Categories></Categories> */}
            </div>
          </section>
          <section className="movies">
            <Cards
              pageNumber={currentPage}
              pageSize={postsPerPage}
            >
            </Cards>
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              noOfPosts={movies}
              onPreviousClick={previousClickHandler}
              onNextClick={nextClickHandler}
              onPageChange={pageChangeHandler}
            />
          </section>
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