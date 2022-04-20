import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#170841] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-purple-500'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>
              Hi. I'm Shafiq, nice to meet you. Feel free to take a look around!
            </p>
          </div>
          <div>
            <p>
              I am passionate about building responsive and beautiful software
              that leaves an impression on those that interact with it. Be it an
              individual, small business, or large corporation, I will deliver
              the same high-quality product every time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
