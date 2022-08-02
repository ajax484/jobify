import React from 'react';
import AngleLeft from '../Assets/svg/AngleLeft.jsx';
import AngleRight from '../Assets/svg/AngleRight.jsx';

export default function Pagination() {
  return (
    <div className="w-full mx-auto space-x-2 md:space-x-4 lg:space-x-6 flex justify-center">
        <button className="border-2 border-primary text-primary px-2 md:px-4 py-0.5 md:py-1 lg:py-2">
            <AngleLeft className="h-6" />
        </button>

        <div className="space-x-1 md:space-x-2 lg:space-x-4">
            {['1', '2', '3', '4'].map(item => (
                <button className="border-2 border-primary text-primary px-2 md:px-4 py-0.5 md:py-1 lg:py-2" key={item}>
                    {item}
                </button>
            ))}
        </div>

        <button className="border-2 border-primary text-primary px-2 md:px-4 py-0.5 md:py-1 lg:py-2">
            <AngleRight className="h-6" />
        </button>
    </div>
  )
}
