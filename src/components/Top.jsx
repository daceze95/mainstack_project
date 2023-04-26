import React from 'react'
import TopLocations from './TopLocations';
import TopReferralSource from './TopReferralSource';

const Top = () => {
  return (
    <div className='box-border flex flex-col md:flex-row my-4 gap-4'>
      <TopLocations />
      <TopReferralSource />
    </div>
  );
}

export default Top