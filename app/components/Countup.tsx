'use client'

import CountUp from 'react-countup';

interface CountupProps {
  title: string;
  count: number;
}
const Countup: React.FC<CountupProps> = ({ title, count, }) => {
  return (
    <div className="flex md:items-center flex-row md:flex-col ">
      <div className="text-gray-300 text-3xl md:text-[4rem]">
        <CountUp
          end={count}
          duration={20}
        />+
      </div>
      <div className="primary-text-color mt-4">{title}</div>
    </div>
  )
}

export default Countup