import { useRef } from 'react';
import { DataStruct } from '../../assets/data';

declare interface BarProps {
  data: DataStruct;
  max: number;
}

export const Bar = (props: BarProps) => {
  const { data, max } = props;
  const priceDiv: React.MutableRefObject<any> = useRef();

  const onHover = () => {
    const priceNode = priceDiv.current;
    priceNode.classList.remove('hidden');
    console.log('hover');
  };

  return (
    <>
      <div
        key={data.day}
        className='flex w-12 flex-col pr-2 items-center gap-1'
      >
        <div className='h-36 w-full flex items-end'>
          <div
            className={`bar cursor-pointer w-full rounded justify-center ${
              data.amount === max ? 'bg-cyan' : 'bg-softRed'
            }`}
            style={{
              position: 'relative',
              height: `${Math.ceil((100 * data.amount) / max)}%`,
            }}
          >
            <div
              ref={priceDiv}
              onMouseOver={onHover}
              id='price'
              className='price rounded p-0.5 bg-black color-paleOrange text-sm bold absolute'
            >
              ${data.amount}
            </div>
          </div>
        </div>
        <div className='text-sm text-slate-400'>{data?.day}</div>
      </div>
    </>
  );
};
