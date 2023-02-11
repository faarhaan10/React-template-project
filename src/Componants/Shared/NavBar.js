import React from 'react';
import { Link } from 'react-router-dom';
const menus = ['Home', 'About', 'Contact', 'Dashboard'];
const NavBar = () => {
    return (
        <div className="lg:container mx-auto bg-red-300">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {/* xs navs */}
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                menus.map((item, index) => <li key={item + index}>
                                    <Link to={`/${item.toLowerCase()}`}>{item}</Link>

                                </li>
                                )
                            }
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">FARHAN</Link>
                </div>
                <div className="navbar-center hidden lg:flex">

                    {/* lg navs */}
                    <ul className="menu menu-horizontal px-1">
                        {
                            menus.map((item, index) => <li key={item + index}>
                                <Link to={`/${item.toLowerCase()}`}>{item}</Link>

                            </li>
                            )
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn">Sign up!</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;