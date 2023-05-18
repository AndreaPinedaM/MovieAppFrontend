// import Spinner from "../../components/Spinner"

const Login = () => {
  return (
    <>
      <div className="Container">
        <div className="glass-effect">
          <h2>Log in</h2>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="form-label mt-4">Password</label>
            <input type="password" className="form-control" id="password1" placeholder="Password" />
          </div>
          <div className="form-group">
            <button type="button" className="btn btn-primary">Aceptar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login