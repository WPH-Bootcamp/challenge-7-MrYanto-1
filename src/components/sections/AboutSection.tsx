import React from 'react';
import { statsData } from '../../data/company';
import { processSteps } from '../../data/process';

export const AboutSection: React.FC = () => {
  return (
    <div id='about'>
      {/* ================= 1. STATS SECTION ================= */}
      <section className='page-padding flex flex-col py-20 gap-6 lg:gap-16'>
        <div className='flex flex-col justify-center gap-[11px]'>
          <h2 className='text-display-sm font-bold lg:text-display-xl text-center text-neutral-25'>
            End-to-End IT Solutions That Drive Results
          </h2>
          <p className='text-sm font-medium text-neutral-400 lg:text-lg text-center'>
            From strategy to execution, we deliver solutions that grow your
            business.
          </p>
        </div>

        <div className='grid grid-cols-2 lg:flex lg:justify-between place-items-center gap-2xl'>
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className='flex flex-col items-center justify-center rounded-full bg-neutral-950 border border-neutral-900 p-4 aspect-square w-[172.5px] lg:w-[275px] gap-[6px] hover:border-primary-200 transition-colors duration-300'
            >
              <h3 className='text-primary-200 font-bold text-display-lg lg:text-display-2xl text-center'>
                {stat.value}
              </h3>
              <p className='text-sm font-semibold lg:text-xl text-center text-neutral-25'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 2. PROCESS SECTION ================== */}
      <section className='page-padding flex flex-col gap-6 lg:gap-16 py-10 lg:py-20 relative'>
        <div className='flex flex-col justify-center gap-[11px]'>
          <h2 className='text-display-sm font-bold lg:text-display-xl text-center text-neutral-25'>
            Our Process
          </h2>
          <p className='text-sm font-medium lg:text-lg text-neutral-400 text-center'>
            Clear steps. Smart execution. Results you can count on.
          </p>
        </div>

        {/* container */}
        <div className='flex flex-col justify-between gap-3 lg:gap-6 relative'>
          {/* vertical line */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-neutral-800 -translate-x-1/2 z-0' />

          {processSteps.map((step) => (
            <div
              key={step.id}
              className='grid grid-cols-[auto_1fr] gap-3 lg:grid-cols-11 lg:items-start z-10'
            >
              {/* text box */}
              <div
                className={`relative w-full bg-neutral-950 border border-neutral-900 p-6 rounded-2xl col-start-2 col-span-5 hover:border-primary-200 transition-all duration-300 group ${
                  step.alignLeft
                    ? 'lg:col-start-1 lg:col-span-5'
                    : 'lg:col-start-7 lg:col-span-5'
                }`}
              >
                <h3 className='text-md font-bold lg:text-xl text-neutral-25'>
                  {step.title}
                </h3>
                <p className='text-sm font-medium lg:text-md text-neutral-400'>
                  {step.description}
                </p>

                {/* chevron up */}
                <svg
                  className='w-6 h-6 absolute top-5 right-5 group-hover:stroke-primary-200 transition-colors'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    className='stroke-neutral-25'
                    d='M18 15L12 9L6 15'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>

              {/* circle */}
              <div className='flex rounded-full text-white w-10 h-10 lg:w-12 lg:h-12 bg-primary-200 items-center justify-center col-start-1 row-start-1 justify-self-center self-center lg:col-start-6 font-bold'>
                {step.stepNumber}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
