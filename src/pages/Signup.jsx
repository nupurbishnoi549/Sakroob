import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import eyeIcon from '../assets/images/svg/eye.svg';
import hideEyeIcon from '../assets/images/svg/eye-hide.svg';

const Signup = () => {
    const { switchToLogin, signup } = useAuth();
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!firstName.trim()) validationErrors.firstName = "First name is required.";
        if (!lastName.trim()) validationErrors.lastName = "Last name is required.";
        if (!email.includes('@')) validationErrors.email = "Enter a valid email.";
        if (!password) {
            validationErrors.password = "Password is required.";
        } else if (password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters.";
        } else if (!/\d/.test(password)) {
            validationErrors.password = "Password must include at least one number.";
        }

        setErrors(validationErrors);
        if (Object.keys(validationErrors).length > 0) return;

        signup({ email, password, name: `${firstName} ${lastName}` });
        switchToLogin();
    };


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white md:p-[64px] p-5 rounded-lg shadow-md space-y-5 md:max-w-[590px] w-full">
                <h2 className="text-[32px] font-bold text-center text-gray-800">Sign up</h2>
                <p className='text-center mx-auto text-gray-600 max-w-[374px]'>Create your account to unlock access and stay updated with everything we offer.</p>
                <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full border py-[14px] pl-7 rounded-full"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full border py-[14px] pl-7 rounded-full"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border py-[14px] pl-7 rounded-full"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full border py-[14px] pl-7 pr-16 rounded-full"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            {showPassword ? (
                                <img src={eyeIcon} alt="eyeIcon" className='w-6 cursor-pointer' />
                            ) : (
                                <img src={hideEyeIcon} alt="eyeIcon" className='w-6 cursor-pointer' />
                            )}
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
                    <button onClick={switchToLogin} className="text-black cursor-pointer font-semibold underline">
                        Log in
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;
