import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import eyeIcon from '../assets/images/svg/eye.svg'
import hideEyeIcon from '../assets/images/svg/eye-hide.svg'

const Login = () => {
    const { login, switchToSignup } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setErrorMsg("Please fill in both email and password.");
            return;
        }

        const success = login({ email, password });
        if (!success) {
            setErrorMsg("Incorrect email or password.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="bg-white md:p-[64px] p-5 rounded-lg shadow-md space-y-5 md:max-w-[590px] w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800">Welcome back!</h2>
                <p className='text-center text-gray-600'>Log in below to access your account and keep things running smoothly.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full border py-[14px] pl-7 rounded-full "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className="w-full border py-[14px] pl-7 pr-16 rounded-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            {showPassword ? (
                                <img src={eyeIcon} alt="eyeIcon" className='w-6 cursor-pointer'/>
                            ) : (
                                    <img src={hideEyeIcon} alt="eyeIcon" className='w-6 cursor-pointer'/>
                            )}
                        </button>

                    </div>

                    {errorMsg && <p className="text-red-500 text-sm mt-1">{errorMsg}</p>}

                    <div className="text-right -mt-2">
                        <span className="text-sm font-semibold  text-gray-500 cursor-default">
                            Forgot password?
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black cursor-pointer text-white py-4 rounded-full hover:bg-gray-800 transition"
                    >
                        Log in
                    </button>
                </form>

                <p className="text-sm text-center text-gray-600">
                    Don’t have an account?{' '}
                    <button onClick={switchToSignup} className="text-black cursor-pointer font-semibold underline">
                        Create an account
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
