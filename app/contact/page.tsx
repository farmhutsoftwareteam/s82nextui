"use client";

import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import { Link } from '@nextui-org/link';

export default function AboutPage() {
  

 

  return (
    <>
    <Head>
      
    </Head>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0">
      
      
      <div className="md:w-1/3 md:text-center text-center md:justify-center  px-4 md:px-0">
        <p className="text-[15px]  md:text-[16px]">
          We&apos;d love to hear from you. Whether you have a question about our services, a project inquiry, or just want to say hello, feel free to reach out.Drop us a message:
        </p>
        <a href="mailto:enquiries@s82.studio" className='text-blue-600 mt-10'>
          enquiries@s82.studio
        </a>
      </div>
    </div>
    </>
  );
}
