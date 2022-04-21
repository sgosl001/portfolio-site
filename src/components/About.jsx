import React from 'react';

const About = () => {
  return (
    <div
      name='about'
      className='w-full md:h-screen pt-10 md:pt-0 bg-[#170841] text-gray-300'
    >
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full w-full'>
        <div className=' grid grid-cols-2 gap-8'>
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
              that leaves an impression on those who interact with it. Be it an
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
