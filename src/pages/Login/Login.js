import React, { useContext, useState } from 'react';
import loginImg from '../../Assets/icons/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { loginUser, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const handleLoginUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                setError('');
                form.reset();
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => setError(err.message))
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div className="hero my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20  flex-col lg:flex-row">
                <div className="card py-20 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleLoginUser} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' id='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' id='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success bg-primary border-primary text-white" type="submit" value="Login" />
                        </div>
                        <p className='my-2 text-red-500 text-center'>{error}</p>
                    </form>
                    <p className='text-center'>New to car Mechanic? <Link className='font-bold text-orange-600' to='/signup'>Signup</Link></p>
                </div>
                <div className="text-center">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;