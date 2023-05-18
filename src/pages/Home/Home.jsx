import { useNavigate } from 'react-router-dom'
// import Card from "../../components/Card"

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
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
    </>
  )
}

export default Home