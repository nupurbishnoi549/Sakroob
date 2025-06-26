import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import eyeIcon from '../assets/images/svg/eye.svg';
import hideEyeIcon from '../assets/images/svg/eye-hide.svg';

const Signup = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const clearError = (field) => {
        setTimeout(() => {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }, 2000);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!firstName.trim()) {
            newErrors.firstName = "First name is required.";
            clearError('firstName');
        }

        if (!lastName.trim()) {
            newErrors.lastName = "Last name is required.";
            clearError('lastName');
        }

        if (!email.includes('@')) {
            newErrors.email = "Enter a valid email.";
            clearError('email');
        }

        if (!password) {
            newErrors.password = "Password is required.";
            clearError('password');
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            clearError('password');
        } else if (!/\d/.test(password)) {
            newErrors.password = "Password must include at least one number.";
            clearError('password');
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        signup({ email, password, name: `${firstName} ${lastName}` });
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 bg-img">
            <div className="bg-white md:p-[64px] p-5 rounded-lg shadow-md space-y-5 md:max-w-[590px] w-full">
                <h2 className="text-[32px] font-bold text-center text-gray-800">Sign up</h2>
                <p className='text-center mx-auto text-gray-600 max-w-[374px]'>Create your account to unlock access and stay updated with everything we offer.</p>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            className={`w-full border py-[14px] pl-7 rounded-full ${errors.firstName ? 'border-red-500' : ''}`}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className={`w-full border py-[14px] pl-7 rounded-full ${errors.lastName ? 'border-red-500' : ''}`}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className={`w-full border py-[14px] pl-7 rounded-full ${errors.email ? 'border-red-500' : ''}`}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className={`w-full border py-[14px] pl-7 pr-16 rounded-full ${errors.password ? 'border-red-500' : ''}`}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            <img src={showPassword ? eyeIcon : hideEyeIcon} alt="Toggle visibility" className='w-6 cursor-pointer' />
                        </button>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black cursor-pointer text-white py-4 rounded-full hover:bg-gray-800 transition"
                    >
                        Sign up
                    </button>
                </form>

                <p className="text-sm text-center">
                    Already a member?{' '}
                    <button onClick={() => navigate('/login')} className="text-black cursor-pointer font-semibold underline">
                        Log in
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;
