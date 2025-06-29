import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import eyeIcon from '../assets/images/svg/eye.svg';
import hideEyeIcon from '../assets/images/svg/eye-hide.svg';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [loginDetails, setLoginDetails] = useState({ userEmail: '', userPwd: '' });
    const [showEye, setShowEye] = useState(false);
    const [formAlert, setFormAlert] = useState({ userEmail: '', userPwd: '' });
    const [toast, setToast] = useState(false);

    const updateInput = (e) => {
        const { name, value } = e.target;
        setLoginDetails({ ...loginDetails, [name]: value });
        setFormAlert({ ...formAlert, [name]: '' });
    };

    const validateLogin = (e) => {
        e.preventDefault();

        let valid = true;
        const alertData = { userEmail: '', userPwd: '' };

        if (!loginDetails.userEmail) {
            alertData.userEmail = 'Email is required.';
            valid = false;
        }

        if (!loginDetails.userPwd) {
            alertData.userPwd = 'Password is required.';
            valid = false;
        }

        if (!valid) {
            setFormAlert(alertData);
            return;
        }

        const isLoggedIn = login({
            email: loginDetails.userEmail,
            password: loginDetails.userPwd,
        });

        if (!isLoggedIn) {
            setFormAlert({ userEmail: '', userPwd: 'Invalid email or password.' });
            return;
        }

        setToast(true);
        setTimeout(() => {
            setToast(false);
            navigate('/');
        }, 2000);
    };

    const handleResetPassword = () => {
        if (!loginDetails.userEmail) {
            setFormAlert((prev) => ({
                ...prev,
                userEmail: 'Enter your email to reset password.',
            }));
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const found = users.find((u) => u.email === loginDetails.userEmail);

        if (!found) {
            setFormAlert((prev) => ({
                ...prev,
                userEmail: 'No user found with this email.',
            }));
        } else {
            alert(`Reset email sent to ${loginDetails.userEmail} (simulated).`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 login-bg-img bg-cover">
            <div className="max-w-[580px] w-full bg-white shadow-md rounded-xl p-6 sm:p-12">
                <h2 className="text-3xl font-bold text-center text-dark-blue">Welcome back!</h2>
                <p className="text-center text-gray-600 mt-2 max-w-[326px] mx-auto">
                    Log in below to access your account and keep things running smoothly.
                </p>

                <form onSubmit={validateLogin} className="space-y-8 mt-6 relative z-10">
                    <div className="relative">
                        <input
                            type="email"
                            name="userEmail"
                            value={loginDetails.userEmail}
                            onChange={updateInput}
                            placeholder="Email address"
                            className={`w-full py-3 pl-6 pr-4 border rounded-full focus:outline-none ${formAlert.userEmail ? 'border-black' : 'border-gray-300'}`}
                        />
                        {formAlert.userEmail && (
                            <p className="absolute left-4 -bottom-5 text-red-500 text-sm">{formAlert.userEmail}</p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type={showEye ? 'text' : 'password'}
                            name="userPwd"
                            value={loginDetails.userPwd}
                            onChange={updateInput}
                            placeholder="Password"
                            className={`w-full py-3 pl-6 pr-12 border rounded-full focus:outline-none ${formAlert.userPwd ? 'border-black' : 'border-gray-300'}`}
                        />
                        <img
                            src={showEye ? eyeIcon : hideEyeIcon}
                            alt="Toggle Password"
                            onClick={() => setShowEye(!showEye)}
                            className="absolute top-1/2 right-4 -translate-y-1/2 w-6 cursor-pointer"
                        />
                        {formAlert.userPwd && (
                            <p className="absolute left-4 -bottom-5 text-red-500 text-sm">{formAlert.userPwd}</p>
                        )}
                    </div>
                    <div className="text-right">
                        <button
                            type="button"
                            onClick={handleResetPassword}
                            className="text-sm text-dark-blue cursor-pointer font-medium underline hover:text-blue-600"
                        >
                            Forgot password?
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-dark-blue cursor-pointer text-white py-3 rounded-full hover:bg-dark-blue/90 transition"
                    >
                        Log in
                    </button>
                </form>
                <p className="text-sm text-center mt-5 text-dark-blue">
                    Don’t have an account?{' '}
                    <button
                        className="text-dark-blue font-semibold underline cursor-pointer hover:text-blue-600"
                        onClick={() => navigate('/signup')}
                    >
                        Create account
                    </button>
                </p>
            </div>
            {toast && (
                <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
                    Login successful!
                </div>
            )}
        </div>
    );
};

export default Login;
