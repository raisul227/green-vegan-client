import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import navIcon from '../../../Assets/icons/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(err => console.err(err))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allservices'>Services</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                    </ul>
                </div>
                <Link><img className='w-16' src={navIcon} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/allservices'>Services</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid && <p className='mr-5 text-black'>{user?.displayName}</p>
                }
                {
                    user?.uid ? <button onClick={handleLogout} className='btn btn-sm btn-success text-white'>LogOut</button> : <Link to='/login' className="btn btn-success bg-primary text-white border-primary btn-sm">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;