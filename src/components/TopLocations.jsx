import React from 'react'
import TopCard from './TopCard.jsx'
import { api_result } from '../constant'

const TopLocations = () => {
  return (
    <div className='min-w-fit md:w-1/2 border rounded-lg'>
      <TopCard result={api_result.top_locations}/>
    </div>
  )
}

export default TopLocations