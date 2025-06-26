import React, { useState } from 'react';
import bgImage from '../assets/images/png/sakroob-bg-img.png';
import Heading from '../components/common/Heading';
import Description from '../components/common/Description';
import Button from './common/Button';

const SakroobCircle = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = () => {
        if (!email) {
            setError('Please enter your email.');
            clearErrorAfterDelay();
        } else if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            clearErrorAfterDelay();
        } else {
            setError('');
            alert('Successfully joined the Sakroob Circle!');
            setEmail('');
        }
    };

    const clearErrorAfterDelay = () => {
        setTimeout(() => {
            setError('');
        }, 3000); 
    };

    return (
        <div className="flex items-center justify-center">
            <div className="container xl:w-[1140px] lg:w-[883px] md:w-[725px] mx-auto">
                <div
                    className="relative bg-cover bg-center bg-no-repeat rounded-[24px] overflow-hidden"
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                    <div className="absolute inset-0 bg-[#73A4E0] opacity-75 rounded-[24px]" />
                    <div className="relative z-10 text-white text-center px-4 md:py-[88px] py-10">
                        <Heading headingText="Join the Sakroob Circle" headingClass="!text-white" />
                        <Description
                            descriptionText="Exclusive drops, early access, and maker tips in your inbox."
                            descriptionClass="!pt-4 !text-white pb-[46px]"
                        />

                        <div className="flex items-center justify-between max-w-[489px] w-full mx-auto bg-white border border-[#00000033] rounded-full px-4 sm:px-5 py-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email..."
                                className="flex-1 bg-transparent outline-none text-sm sm:text-base text-dark-blue placeholder:text-[#00171F] placeholder:opacity-50 placeholder:font-normal mr-3"
                            />
                            <Button
                                btnText="Join Now"
                                btnClass="!px-5 py-2 text-white bg-dark-blue rounded-full text-sm sm:text-base"
                                onClick={handleSubmit}
                            />
                        </div>

                        {error && (
                            <p className="text-red-600 text-sm font-medium mt-1">{error}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SakroobCircle;
