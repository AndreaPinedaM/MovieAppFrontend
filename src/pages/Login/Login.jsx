import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from "../../components/Spinner"

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  }) 

  const {email, password} =formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  useEffect(() =>{
    if (isError){
      toast.error(message)
    }
    if (isSuccess){
      navigate('/newmovie') 
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  
  const onChange = (event) => {
    setFormData((prevState)=>({
    ...prevState,
    [event.target.name]: event.target.value
}))
}

  const onSubmit = (event) =>{
    event.preventDefault()

    if(!password || !email){
      toast.error('LLena los campos requeridos')
    }else{
      const userData = { email, password }
      dispatch(login(userData))
    }
  }

  if (isLoading){
    return <Spinner></Spinner>
  }

  return (
    <>
      <div className="Container">
        <div className="glass-effect">
          <h2>Log in</h2>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="form-label mt-4">Email address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email"
                name='email'
                value={email} 
                onChange={onChange}  
                placeholder="Enter email" />
            </div>
            <div className="form-group">
            <label className="form-label mt-4">Password</label>
              <input 
                type="password" 
                className="form-control" 
                id="password"
                name='password'
                value={password} 
                onChange={onChange} 
                placeholder="Password" />
            </div>
            <div className="form-group">
              <button 
                type="submit" 
                className="btn btn-primary">Aceptar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login