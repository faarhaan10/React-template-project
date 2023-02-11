import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const menus = ['route1', 'route2', 'route3', 'route4']
const Dashboard = () => {
    return (
        <div className=''>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!----- Navbar -----> */}
                    <div className="navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <div className="mr-4">
                                <h2 className='text-lg'>Dashboard</h2>
                            </div>
                            <div className="">
                                <Link to="/home">Home</Link>
                            </div>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* <!-- Navbar menu content here --> */}
                                {
                                    menus.map((item, index) => <li key={item + index}>
                                        <Link to={`${item.toLowerCase()}`}>{item.toUpperCase()}</Link>

                                    </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <!------ Page content here -------> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                        {/* <!------- Sidebar content here--------> */}
                        {
                            menus.map((item, index) => <li key={item + index}>
                                <Link to={`${item.toLowerCase()}`}>{item.toUpperCase()}</Link>
                            </li>
                            )
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};


export default Dashboard;