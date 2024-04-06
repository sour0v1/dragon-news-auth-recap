import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdOutlineKey } from "react-icons/md";
import { AuthContext } from '../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';


const LogIn = () => {
    const { signInUser } = useContext(AuthContext);
    const [value, setValue] = useState(false);
    const location = useLocation();
    // console.log(location);
    const toHome = useNavigate();
    const [err, setErr] = useState(null);
    const handleLogIn = e => {
        setValue(true);
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form.get('email'));
        const email = form.get('email');
        const pass = form.get('password');

        signInUser(email, pass)
            .then(result => {
                console.log(result.user);
                setValue(false);
                toHome(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.log(error.message);
                setErr(error.message);
            })
    }
    return (
        value ? <div className='flex justify-center items-center h-screen'>
            <p>loging...</p>
        </div>:
        <div className=''>
            <Navbar></Navbar>
            {/* <h2>Log In page</h2> */}
            <div className='text-center'>
                {
                    err && <p className='text-red-700'>Incorrect email or password</p>
                }
            </div>
            <div className='bg-gray-100 text-center w-2/3 md:w-1/2 lg:w-1/2 mx-auto p-4 mt-9 rounded'>
                <div className='space-y-4 mb-5'>
                    <h2 className='text-xl font-medium'>Log your account</h2>
                    <hr />
                </div>
                <form className='space-y-8' onSubmit={handleLogIn}>
                    <div className='relative'>
                        <MdOutlineEmail className='absolute left-5 top-3' />
                        <input className='bg-gray-200 p-2 outline-orange-400 rounded w-full  pl-14' placeholder='Your email' type="email" name='email' required />
                    </div>
                    <div className='relative'>
                        <MdOutlineKey className='absolute left-5 top-3' />
                        <input className='bg-gray-200 p-2 outline-orange-400 rounded w-full  pl-14' placeholder='Your password' type="password" name='password' required />
                    </div>
                    <input className='w-full bg-[#403F3F] hover:bg-black text-white px-4 py-2 rounded' type="submit" value={'Log In'} />
                    <p>Don&apos;t have account? <span className='text-blue-600'><Link to="/register">Register</Link></span></p>
                </form>
            </div>
        </div>
    );
};

export default LogIn;