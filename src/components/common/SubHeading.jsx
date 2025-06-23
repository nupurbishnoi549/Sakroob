import React from 'react'

const SubHeading = ({ subHeadingClass, subHeadingText }) => {
    return (
        <h2 className={`md:text-5xl text-3xl font-bold leading-[120%] text-black ${subHeadingClass}`}>{subHeadingText}</h2>
    )
}

export default SubHeading
