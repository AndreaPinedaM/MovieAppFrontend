import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from "../../components/Spinner"
import { FaUser } from 'react-icons/fa'
import { signup, reset } from '../../features/auth/authSlice'

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

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

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
            [event.target.name]: event.target.value
        }))
    }

    const onSubmit = (event) =>{
            event.preventDefault()

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
            <form onSubmit={onSubmit}>
                <div className="form-group">
                <FaUser className='icon'></FaUser> 
                <label 
                    className="col-form-label mt-4">Nombre</label>
                <input type="text" 
                    className="form-control" 
                    placeholder="Name" 
                    id="name"
                    name="name"
                    value={name} 
                    onChange={onChange} />
                </div>
                <div className="form-group">
                <label 
                    className="form-label mt-4">Email address</label>
                <input type="email" 
                    className="form-control" 
                    id="email" 
                    name="email"
                    value={email} 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"
                    onChange={onChange} />
                <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                <label  
                    className="form-label mt-4">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password"
                    name="password"
                    value={password}  
                    placeholder="Password"
                    onChange={onChange} />
                </div>
                <div className="form-group">
                <label 
                    className="form-label mt-4">Ingresa de nuevo tu contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password2"
                    name='password2'
                    value={password2}  
                    placeholder="Confirm your password"
                    onChange={onChange} />
                </div>
                <br />
                <button 
                type="submit" 
                className="btn btn-primary">Comenzar</button>
            </form>
            </div>
        </div>
        </>
    )
}

export default Signup