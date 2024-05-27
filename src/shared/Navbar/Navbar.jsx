import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {

  const {logOut, user} = useAuth();

  //Log Out
  const handleLogOut = ()=> {
    logOut();
    console.log("Logged Out")
  }

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link to={``} className="m-2">Home</Link>
      <Link to={`about`} className="mr-2">About</Link>
      <Link to={`login`} className="m-2">Login</Link>
      <Link to={`registration`} className="m-2">Registration</Link>
    <Link to={`/dashboard`}>Dashboard</Link>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Shoe Bazar</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to={``} className="mr-2">Home</Link>
    <Link to={`about`} className="mr-2">About</Link>
    <Link to={`login`} className="mr-2">Login</Link>
    <Link to={`registration`} className="mr-2">Registration</Link>
    {user && <Link to={`/dashboard`}>Dashboard</Link>}
    </ul>
  </div>
  <div className="navbar-end">
       <p className="mr-2">Signed In: {user?.email}</p>
    {user && <a onClick={handleLogOut} className="btn bg-rose-500 text-white">LogOut</a>}
  </div>
</div>
    );
};

export default Navbar;