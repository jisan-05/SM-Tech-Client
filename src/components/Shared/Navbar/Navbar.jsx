import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../../providers/AuthContext";
import logo from "/logo.png";
import profile from "../../../assets/user.jpg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // const [profile,setProfile] = useState('')
  // useEffect(()=>{
  //     setProfile(user?.photoURL)
  // },[])

  const signOut = () => {
    logOut();
  };
  console.log(user?.photoURL);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <img src={logo} alt="" className="w-12" />
        <Link to="/" className="btn btn-ghost text-xl">
          SM Tech
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg font-semibold">
            <NavLink to="/">Home</NavLink>
          </li>

          <li className="text-lg font-semibold">
            <NavLink to={"/programs"}>Programs</NavLink>
          </li>

          <li className="text-lg font-semibold">
            <NavLink to="/Departments">Departments</NavLink>
          </li>

          <li className="text-lg font-semibold">
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <label className="swap swap-rotate"></label>
        <div className="dropdown dropdown-end z-50">
          <div
            tabIndex={1}
            className="tooltip tooltip-bottom"
            data-tip={user?.displayName}
          >
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                className="w-12 h-12 rounded-full"
                alt="User"
              />
            ) : (
              <img
                src={profile}
                className="w-12 h-12 rounded-full"
                alt="User"
              />
            )}
          </div>
          <ul
            tabIndex={1}
            className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="text-lg font-semibold">
              <NavLink>Home</NavLink>
            </li>

            <li className="text-lg font-semibold">
              <NavLink to={"/programs"}>Programs</NavLink>
            </li>

            <li className="text-lg font-semibold">
              <NavLink to={"/departments"}>Departments</NavLink>
            </li>
            <li className="text-lg font-semibold">
              <NavLink to={"/addDepartments"}>Add Departments</NavLink>
            </li>

            <li className="text-lg font-semibold">
              <NavLink to='/contact'>Contact Us</NavLink>
            </li>
            {user ? (
              <li onClick={signOut} className="text-lg font-semibold">
                <Link>Logout</Link>
              </li>
            ) : (
              <li className="text-lg font-semibold">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

        {user ? <></> : <></>}
      </div>
    </div>
  );
};

export default Navbar;
