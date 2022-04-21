import React from 'react';

const Contact = () => {
  return (
    <div
      name='contact'
      className='w-full md:h-screen pt-11 bg-[#170841] flex justify-center items-center px-8'
    >
      <form
        method='POST'
        action='https://getform.io/f/e2344beb-8d6d-42eb-b95a-3d974a053e78'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-purple-500 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Submit the form below or send me an email - shafiqgosla1@gmail.com
          </p>
        </div>
        <input
          className='bg-[#ccd6f6] p-2'
          type='text'
          placeholder='Name'
          name='name'
        />
        <input
          className='my-4 p-2 bg-[#ccd6f6]'
          type='text'
          placeholder='Email'
          name='email'
        />
        <textarea
          className='bg-[#ccd6f6] p-2'
          name='message'
          rows='10'
          placeholder='Message'
        ></textarea>
        <button className='text-white border-2 hover:bg-purple-500 hover:border-purple-500 px-4 py-3 my-8 mx-auto flex items-center'>
          Let's Collaborate!
        </button>
      </form>
    </div>
  );
};

export default Contact;
