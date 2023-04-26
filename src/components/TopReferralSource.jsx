import React from 'react';
import TopCard from './TopCard.jsx';
import { api_result } from '../constant/index.js';

const TopReferralSource = () => {
  return (
    <div className='min-w-fit md:w-1/2 border rounded-lg'>
      <TopCard title='Top Referral Source' result={api_result.top_sources} />
    </div>
  );
};

export default TopReferralSource;
