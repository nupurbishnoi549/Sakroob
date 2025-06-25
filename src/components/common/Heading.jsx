import React from 'react'

const Heading = ({ headingClass, headingText }) => {
    return (
        <h2 className={`md:text-5xl text-3xl font-bold leading-[120%] text-dark-blue items-center ${headingClass}`}>{headingText}</h2>
    )
}

export default Heading
