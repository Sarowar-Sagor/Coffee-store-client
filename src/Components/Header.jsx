import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = (e) => {
        e.preventDefault();

        logOut();

    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addcoffee">Add coffee</NavLink></li>
        <li><NavLink to="/signup">Sign Up</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={"/"}>
                        <a className="btn btn-ghost text-xl">Coffee Shop</a>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <> <button onClick={handleSignOut} className='btn'>Sign Out</button> </> : <Link to={"/login"}> <button className='btn'>Sign In</button></Link>
                    }
                    {/* <a className="btn">But</a> */}
                </div>
            </div>
        </div>
    );
};

export default Header;