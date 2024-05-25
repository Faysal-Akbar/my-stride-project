import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Registration = () => {
  const {googleLogin, createUser, user} = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e)=> {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    console.log(email, password, confirm_password)

    if(password === confirm_password){
    await createUser(email, password);
      
    }
  };

  useEffect(()=> {
    if(user){
      navigate(from, {replace: true});
    }
  }, [from, user, navigate])
  
  const handleGoogleLogin =()=>{
    googleLogin();
  }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="confirm password" name="confirm_password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
        <div>
            <p>Already have an account? <Link to={'/login'} className="text-green-500">Login</Link></p>
        </div>
      </form>
      <div className="mx-8 mb-5">
        <button onClick={handleGoogleLogin} className="btn btn-secondary w-full">Registration with Google</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Registration;