import React, { useContext, useState } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdOutlineKey } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { MdLink } from "react-icons/md";
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom/dist/umd/react-router-dom.development';


const Register = () => {
    // form validation error
    const [checkboxError, setCheckBoxError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const toHome = useNavigate();
    // console.log(createUser);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        // console.log(email);
        const pass = form.get('password');
        const checkbox = e.target.policy.checked;
        console.log(checkbox);
        if (!checkbox) {
            setCheckBoxError('You have to accept our terms and condition');
            return;
        }
        else{
            setCheckBoxError(null);
        }
        createUser(email, pass)
            .then(result => {
                console.log(result.user);
                toHome('/');
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div>
            <Navbar></Navbar>
            {/* <h2>Log In page</h2> */}
            <div className='text-center'>
                {checkboxError && <p className='text-red-700 mx-auto'>{checkboxError}</p>}
            </div>
            <div className='bg-gray-100 text-center w-2/3 md:w-1/2 lg:w-1/2 mx-auto p-4 mt-9 rounded'>
                <div className='space-y-4 mb-5'>
                    <h2 className='text-xl font-medium'>Register your account</h2>
                    <hr />
                </div>
                <form className='space-y-8' onSubmit={handleRegister}>
                    <div className='relative'>
                        <IoIosContact className='absolute left-5 top-3' />
                        <input className='bg-gray-200 p-2 outline-orange-400 rounded w-full  pl-14' placeholder='Your Name' type="text" name='name' />
                    </div>
                    <div className='relative'>
                        <MdLink className='absolute left-5 top-3' />
                        <input className='bg-gray-200 p-2 outline-orange-400 rounded w-full  pl-14' placeholder='Your photo url' type="text" name='photo' />
                    </div>
                    <div className='relative'>
                        <MdOutlineEmail className='absolute left-5 top-3' />
                        <input className='bg-gray-200 p-2 outline-orange-400 rounded w-full  pl-14' placeholder='Your email' type="email" name='email' required />
                    </div>
                    <div className='relative'>
                        <MdOutlineKey className='absolute left-5 top-3' />
                        <input className='bg-gray-200 p-2 outline-orange-400 rounded w-full  pl-14' placeholder='Your password' type="password" name='password' required />
                    </div>
                    <div className='text-left'>
                        <input type="checkbox" id="terms" name="policy" value="" />
                        <label htmlFor=''> Accept Terms & Condition</label>
                    </div>
                    <input className='w-full bg-[#403F3F] hover:bg-black text-white px-4 py-2 rounded' type="submit" value={'Register'} />
                    <p>Already have account? <span className='text-blue-600'><Link to="/login">Log In</Link></span></p>
                </form>

            </div>
        </div>
    );
};

export default Register;