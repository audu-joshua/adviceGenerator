"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios'; // Import axios to make HTTP requests
import patternDividermobile from '@/public/images/pattern-divider-mobile.svg'
import patternDividerdesktop from '@/public/images/pattern-divider-desktop.svg';
import dice from '@/public/images/icon-dice.svg';

function Quote() {
  const [Advice, setAdvice] = useState({ slip_id: '', advice: '' });
  const [Loading, setLoading] = useState(true);

  const fetchAdvice = async () => {
    try {
      const adviceResponse = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(adviceResponse.data.slip); // Update the state with the fetched advice data
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice(); // Fetch initial advice when the component mounts
  }, []);

  const handleDiceClick = () => {
    fetchAdvice(); // Fetch new advice when the dice image is clicked
  };

  return (
    <div className='h-screen w-screen flex bg-[black] justify-center items-center px-8'>
      <div className='bg-[#29465B] w-fit h-fit rounded-xl pt-6 pb-12 items-end lg:w-[40%] md:w-[70%] px-2 lg:px-4'>
        <div className='text-center'>
          <p className='text-center text-[#39FF14] py-4 text-lg uppercase font-[400]'>
            Advice {Advice.slip_id}
          </p>
          <q className='text-center py-4 text-2xl font-[800]'>{Advice.advice}</q>
          <div className='flex justify-center py-6'>
            <Image src={patternDividermobile} className='lg:hidden'></Image>
            <Image src={patternDividerdesktop} className='hidden lg:flex'></Image>
          </div>
        </div>

        <div className='flex justify-center'>
          <div
            className='text-center flex justify-center text-[#39FF14] pt-4 absolute items-center'>
            <div className='bg-[#39FF14] h-fit w-fit rounded-full p-4 hover:drop-shadow-2xl hover:animate-spin'>
              <Image src={dice} onClick={handleDiceClick}></Image>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Quote;
