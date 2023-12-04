import React from 'react'

const Heading = ({text, cls}) => {
  return (
    <div className="heading_wrapper">
      <h1 className={cls}>{text}</h1>
    </div>
  )
}

export default Heading