import React from 'react';
import Button from '../ui/Button';

import phoneDark from '../../assets/images/PhoneDark.png';
import phoneLight from '../../assets/images/PhoneLight.png';
import adobeLogo from '../../assets/images/adobe.svg';
import upworkLogo from '../../assets/images/upwork.svg';
import zoomLogo from '../../assets/images/zoom.svg';
import postmanLogo from '../../assets/images/postman.svg';
import databricksLogo from '../../assets/images/databricks.svg';
import airbnbLogo from '../../assets/images/airbnb.svg';
import dropboxLogo from '../../assets/images/dropbox.svg';
import paypalLogo from '../../assets/images/paypal.svg';
import netflixLogo from '../../assets/images/netflix.svg';

export const HeroSection: React.FC = () => {
  const logos = [
    { src: adobeLogo, alt: 'Adobe logo' },
    { src: upworkLogo, alt: 'Upwork logo' },
    { src: zoomLogo, alt: 'Zoom logo' },
    { src: postmanLogo, alt: 'Postman logo' },
    { src: databricksLogo, alt: 'Databricks logo' },
    { src: airbnbLogo, alt: 'Airbnb logo' },
    { src: dropboxLogo, alt: 'Dropbox logo' },
    { src: paypalLogo, alt: 'PayPal logo' },
    { src: netflixLogo, alt: 'Netflix logo' },
  ];

  return (
    <>
      <section className='page-padding grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-10 pt-[61px] lg:py-0 lg:h-[659px] relative overflow-hidden'>
        <div className='relative z-10 max-w-[653px] flex flex-col gap-[40px]'>
          <div className='flex flex-col gap-4 h-auto'>
            <h1 className='text-display-lg lg:text-display-3xl font-bold leading-11 lg:leading-17 text-neutral-25'>
              Your Tech Partner for{' '}
              <span className='text-primary-200'>Smarter Growth</span>
            </h1>
            <p className='text-md lg:text-xl font-semibold leading-[30px] lg:leading-[34px] text-neutral-400'>
              We deliver tailored IT solutions to help you scale with speed and
              confidence.
            </p>
          </div>

          <Button variant='primary' className='w-full lg:w-[200px]'>
            Let's Talk
          </Button>
        </div>

        <div className='relative z-0 flex justify-center lg:justify-end items-start pointer-events-none mt-10 lg:absolute lg:top-[-50px] lg:right-0'>
          <img
            src={phoneDark}
            alt='an Image of a phone'
            className='hidden w-[clamp(24.44rem,53.36vw,46.69rem)] max-w-full dark:block'
          />

          <img
            src={phoneLight}
            alt='an Image of a phone'
            className='w-[clamp(24.44rem,53.36vw,46.69rem)] max-w-full dark:hidden'
          />
        </div>
      </section>

      <section className='pt-11 lg:py-0'>
        <p className='text-md font-bold lg:text-display-xs text-center text-neutral-25 z-50'>
          Trusted by Global Innovators & Leading Brands
        </p>

        <div className='flex h-[200px] items-center overflow-x-hidden mask-x-from-90% mask-x-to-100%'>
          <div className='flex shrink-0 justify-between marquee gap-10 h-[48px] pr-10'>
            {logos.map((logo, index) => (
              <img
                key={`main-${index}`}
                src={logo.src}
                className='grayscale opacity-60 hover:opacity-100 transition-opacity'
                alt={logo.alt}
              />
            ))}
          </div>

          <div
            className='flex shrink-0 justify-between marquee gap-10 h-[48px]'
            aria-hidden='true'
          >
            {logos.map((logo, index) => (
              <img
                key={`dup-${index}`}
                src={logo.src}
                className='grayscale opacity-60 hover:opacity-100 transition-opacity'
                alt={logo.alt}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
