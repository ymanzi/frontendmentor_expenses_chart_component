import React from 'react';

const Footer = () => {
  return (
    <div>
      <p className='text-sm text-slate-400'>Total this month</p>
      <div className='flex justify-between items-center'>
        <p className='bold text-4xl'>$478.33</p>
        <div className='flex flex-col items-end'>
          <p className='bold text-sm'>+2.4%</p>
          <p className='text-sm text-slate-400'>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
