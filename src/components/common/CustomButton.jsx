import React from 'react'

const CustomButton = ({ btnClass, btnText, onClick }) => {
    return (
        <button
            type='button'
            onClick={onClick}
            className={`font-medium rounded-full leading-[100%] py-4 text-black border-dark-blue cursor-pointer hover:opacity-90 transition ${btnClass}`}
        >
            {btnText}
        </button>
    );
};

export default CustomButton
