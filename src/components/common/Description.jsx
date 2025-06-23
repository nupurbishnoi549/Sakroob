import React from 'react'

const Description = ({ descriptionClass, descriptionText }) => {
  return (
      <p className={` leading-[150%] text-dark-blue ${descriptionClass}`}>{descriptionText}</p>
  )
}

export default Description
