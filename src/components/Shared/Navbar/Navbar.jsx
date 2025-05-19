import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../../providers/AuthContext";
import logo from "/logo.png";
import LoadingSpinner from "../LoadingSpinner";
import PrimaryButton from "./../../Button/PrimaryButton";
import useRole from "../../../hooks/useRole";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [role, isLoading] = useRole();
    // const [profile,setProfile] = useState('')
    // useEffect(()=>{
    //     setProfile(user?.photoURL)
    // },[])

    const signOut = () => {
        logOut();
    };
    console.log(user?.photoURL);

    return (
        <div className="navbar bg-base-100  ">
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
                        <NavLink to="/contactUs">Contact Us</NavLink>
                    </li>
                    {role === "admin" && (
                        <li className="text-lg font-semibold">
                            <NavLink to="/dashboardLayout">
                                Admin Dashboard
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <label className="swap swap-rotate"></label>
                {user ? (
                    ""
                ) : (
                    <div className="hidden md:block">
                        <Link to="/login">
                            <PrimaryButton buttonText="Login"></PrimaryButton>
                        </Link>
                    </div>
                )}
                <div className="dropdown dropdown-end z-50">
                    <div
                        tabIndex={1}
                        className="tooltip tooltip-bottom"
                        data-tip={user?.displayName}
                    >
                        {user?.photoURL ? (
                            <img
                                src={user?.photoURL}
                                className="w-12 h-12 bg-cover rounded-full"
                                alt="User"
                            />
                        ) : (
                            <button className="btn btn-square btn-ghost md:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-5 w-5 stroke-current"
                                >
                                    {" "}
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>{" "}
                                </svg>
                            </button>
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
                            <NavLink to="/contactUs">Contact Us</NavLink>
                        </li>
                        {role === "admin" && (
                            <li className="text-lg font-semibold">
                                <NavLink to="/dashboardLayout">
                                    Admin Dashboard
                                </NavLink>
                            </li>
                        )}
                        {user ? (
                            <li
                                onClick={signOut}
                                className="text-lg font-semibold"
                            >
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
