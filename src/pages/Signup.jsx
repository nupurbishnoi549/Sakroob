import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import eyeIcon from '../assets/images/svg/eye.svg';
import hideEyeIcon from '../assets/images/svg/eye-hide.svg';

const Signup = () => {
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required.';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required.';

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email.';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required.';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        } else if (!/\d/.test(formData.password)) {
            newErrors.password = 'Password must include at least one number.';
        }

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        signup({
            email: formData.email,
            password: formData.password,
            name: `${formData.firstName} ${formData.lastName}`
        });

        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 login-bg-img">
            <div className="bg-white md:p-[64px] p-5 rounded-lg shadow-md space-y-5 md:max-w-[590px] w-full">
                <h2 className="text-[32px] font-bold text-center text-dark-blue">Sign up</h2>
                <p className="text-center mx-auto text-dark-blue max-w-[374px]">
                    Create your account to unlock access and stay updated with everything we offer.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8 mt-2">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="First Name"
                            className={`w-full border py-[14px] bg-[#F4F8F7] pl-7 rounded-full ${errors.firstName ? 'border-black' : 'border-gray-300'} hover:border-black`}
                            value={formData.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                        />
                        {errors.firstName && (
                            <p className="absolute left-4 -bottom-5 text-red-500 text-sm">{errors.firstName}</p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Last Name"
                            className={`w-full border py-[14px] bg-[#F4F8F7] pl-7 rounded-full ${errors.lastName ? 'border-black' : 'border-gray-300'} hover:border-black`}
                            value={formData.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                        />
                        {errors.lastName && (
                            <p className="absolute left-4 -bottom-5 text-red-500 text-sm">{errors.lastName}</p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            className={`w-full border py-[14px] bg-[#F4F8F7] pl-7 rounded-full ${errors.email ? 'border-black' : 'border-gray-300'} hover:border-black`}
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                        />
                        {errors.email && (
                            <p className="absolute left-4 -bottom-5 text-red-500 text-sm">{errors.email}</p>
                        )}
                    </div>
                    <div className="relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            className={`w-full border py-[14px] bg-[#F4F8F7] pl-7 pr-[60px] rounded-full ${errors.password ? 'border-black' : 'border-gray-300'} hover:border-black`}
                            value={formData.password}
                            onChange={(e) => handleChange('password', e.target.value)}
                        />
                        <img
                            src={showPassword ? eyeIcon : hideEyeIcon}
                            alt="Toggle visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                        />
                        {errors.password && (
                            <p className="absolute left-4 -bottom-5 text-red-500 text-sm">{errors.password}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer bg-dark-blue text-white py-4 rounded-full hover:bg-gray-800 transition"
                    >
                        Sign up
                    </button>
                </form>
                <p className="text-sm text-center">
                    Already a member?{' '}
                    <button
                        onClick={() => navigate('/login')}
                        className="text-black font-semibold cursor-pointer underline hover:text-gray-700"
                    >
                        Log in
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Signup;