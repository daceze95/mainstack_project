import React from 'react'

const ViewButton = ({children}) => {
  return (
    <div className='rounded-2xl py-2 px-4 text-center text-mainStackOrange text-sm bg-viewButtonGray'>
        {children}
    </div>
  )
}

export default ViewButton