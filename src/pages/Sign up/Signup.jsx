import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from "../../components/Spinner"
import { signup, reset} from '../../features/auth/authSlice'


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} =formData;

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }
    if(isSuccess){
      navigate('/login')
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (event) => {
    setFormData((prevState)=>({
      ...prevState,
      [event.target.name]: event.target.value //nombre del input = valor del input
    }))
  }

  const onSubmit = () =>{
    //Validar que las constraseñas coincidan
    if(password !== password2){
      toast.error('Las contraseñas no coinciden')
    }else{
      const userData = {name, email, password}
      dispatch(signup(userData))
    }
  }

  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
    <>
      <div className="Container">
        <div className="glass-effect">
          <h2>Sign up</h2>
          <div className="form-group">
            <label 
              className="col-form-label mt-4" htmlFor="inputDefault">Nombre</label>
            <input type="text" 
              className="form-control" 
              placeholder="Name" 
              id="name"
              value={name} 
              onChange={onChange} />
          </div>
          <div className="form-group">
            <label 
              htmlFor="exampleInputEmail1" 
              className="form-label mt-4">Email address</label>
            <input type="email" 
              className="form-control" 
              id="email" 
              value={email} 
              aria-describedby="emailHelp" 
              placeholder="Enter email"
              onChange={onChange} />
            <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label 
              htmlFor="exampleInputPassword1" 
              className="form-label mt-4">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password"
              value={password}  
              placeholder="Password"
              onChange={onChange} />
          </div>
          <div className="form-group">
            <label 
              htmlFor="exampleInputPassword1" 
              className="form-label mt-4">Ingresa de nuevo tu contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              id="password2"
              value={password2}  
              placeholder="Confirm your password"
              onChange={onChange} />
          </div>
          <br />
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={onSubmit}>Comenzar</button>
        </div>
      </div>
    </>
  )
}

export default Signup