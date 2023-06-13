import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import signupImg from '../../Assets/icons/signup.svg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                handleUpdateuser(name)
                form.reset();
            })
            .catch(err => setError(err.message))
    }
    const handleUpdateuser = (name) => {
        updateUserProfile({
            displayName: name
        })
            .then(() => { })
            .catch(err => setError(err.message))
    }
    return (
        <div className="hero my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20  flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={signupImg} alt="" />
                </div>
                <div className="card py-20 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-center text-3xl font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-success bg-primary border-primary text-white" type="submit" value="Signup" />
                        </div>
                        <p className='my-2 text-red-500 text-center'>{error}</p>
                    </form>
                    <p className='text-center'>Already Have An Account? <Link className='font-bold text-orange-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;