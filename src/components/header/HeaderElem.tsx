import React from 'react';
import Logo from '../../assets/logo.svg';

function HeaderElem(): any {
  return (
    <>
      <header className='flex justify-between items-center bg-softRed color-paleOrange p-4 rounded-lg mb-3'>
        <div className='flex flex-col justify-between gap-1'>
          <p className='text-sm'>My balance</p>
          <p className='bold text-2xl'>$921.48</p>
        </div>
        <img src={Logo} height='50px' width={'50px'} alt='logo' />
      </header>
    </>
  );
}

export default HeaderElem;
