import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import eyeIcon from '../assets/images/svg/eye.svg';
import hideEyeIcon from '../assets/images/svg/eye-hide.svg';

const Login = () => {
    const { login, switchToSignup } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const clearErrors = () => {
        setTimeout(() => {
            setEmailError('');
            setPasswordError('');
        }, 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!email) {
            setEmailError("Please enter your email.");
            valid = false;
        }

        if (!password) {
            setPasswordError("Please enter your password.");
            valid = false;
        }

        if (!valid) {
            clearErrors();
            return;
        }

        const success = login({ email, password });
        if (!success) {
            setPasswordError("Incorrect email or password.");
            clearErrors();
        }
    };

    const handleForgotPassword = () => {
        if (!email) {
            setEmailError("Please enter your email to reset password.");
            clearErrors();
            return;
        }
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const exists = users.find(u => u.email === email);

        if (!exists) {
            setEmailError("No account found with this email.");
        } else {
            alert('Reset link has been sent to your email (simulated).');
            console.log(`Reset link sent to: ${email}`);
        }

        clearErrors();
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 bg-img">
            <div className="bg-white md:p-[64px] p-5 rounded-lg shadow-md space-y-5 md:max-w-[590px] w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800">Welcome back!</h2>
                <p className="text-center text-gray-600">Log in below to access your account and keep things running smoothly.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            className={`w-full border py-[14px] pl-7 rounded-full ${emailError ? 'border-red-500' : ''}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className={`w-full border py-[14px] pl-7 pr-16 rounded-full ${passwordError ? 'border-red-500' : ''}`}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            <img src={showPassword ? eyeIcon : hideEyeIcon} alt="Toggle visibility" className="w-6 cursor-pointer" />
                        </button>
                        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                    </div>

                    <div className="text-right -mt-2">
                        <button
                            type="button"
                            onClick={handleForgotPassword}
                            className="text-sm font-semibold cursor-pointer text-gray-500 hover:underline"
                        >
                            Forgot password?
                        </button>
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
                    <button
                        onClick={() => navigate('/signup')}
                        className="text-black cursor-pointer font-semibold underline"
                    >
                        Create an account
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
