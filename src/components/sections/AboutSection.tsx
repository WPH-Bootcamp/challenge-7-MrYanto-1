import React from 'react';
import { statsData } from '../../data/company';

export const AboutSection = () => {
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
    </div>
  );
};
