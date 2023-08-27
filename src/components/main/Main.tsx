import React from 'react';
import { dataArray, DataStruct } from '../../assets/data';
import { Bar } from './Bar';
import Footer from './Footer';

export const Main = (): any => {
  const maxAmount: number = Math.max(
    ...dataArray.map((data: DataStruct) => data.amount)
  );

  return (
    <>
      <div className='bg-paleOrange rounded-lg p-6'>
        <h1 className='bold mb-10 text-2xl'>Spending - Last 7 days</h1>
        <div className='flex h-40 justify-between mt-2 mb-6'>
          {dataArray.map((data, index) => (
            <>
              <Bar key={index} data={data} max={maxAmount} />{' '}
            </>
          ))}
        </div>
        <div className='h-0.5 bg-cream mb-6'></div>
        <Footer />
      </div>
    </>
  );
};
