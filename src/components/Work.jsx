import React from 'react';
import AdventurePals from '../assets/adventurepals.png';
import QuoteGenerator from '../assets/quotegenerator.png';
import JobTracker from '../assets/jobtracker.png';
import LetsDo from '../assets/letsdo.png';

const Work = () => {
  return (
    <div
      name='work'
      className='w-full pt-11 md:pt-0 md:h-screen text-gray-300 bg-[#170841]'
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-purple-500'>
            Work
          </p>
          <p className='py-6'>Check out some of my work!</p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
          {/* card item */}
          <div
            style={{
              backgroundImage: `url(${AdventurePals})`,
            }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effect*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Adventure Pals (React JS)
              </span>
              <div className='flex justify-center'>
                <a
                  href='https://sgosl001.github.io/adventurepals'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/sgosl001/adventurepals'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*card item*/}
          <div
            style={{
              backgroundImage: `url(${QuoteGenerator})`,
            }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center place-content-center items-center mx-auto content-div'
          >
            {/* hover effect*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Quote Generator (Vanilla JS)
              </span>
              <div className='flex justify-center'>
                <a
                  href='https://sgosl001.github.io/quote-generator'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/sgosl001/quote-generator'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*card item*/}
          <div
            style={{
              backgroundImage: `url(${JobTracker})`,
            }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effect*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Job Tracker (React JS)
              </span>
              <div className='flex justify-center'>
                <a
                  href='https://damp-wave-83978.herokuapp.com/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/sgosl001/job-tracker'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*card item*/}
          <div
            style={{
              backgroundImage: `url(${LetsDo})`,
            }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* hover effect*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Adventure Pals
              </span>
              <div className='flex justify-center'>
                <a
                  href='https://sgosl001.github.io/React-todo/'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a
                  href='https://github.com/sgosl001/React-todo'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
