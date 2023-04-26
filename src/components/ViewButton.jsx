import React from 'react'

const ViewButton = ({children}) => {
  return (
    <div className='rounded-2xl py-1 px-4 text-center text-mainStackOrange text-xs bg-viewButtonGray cursor-pointer'>
        {children}
    </div>
  )
}

export default ViewButton