import React from 'react';
import { services } from '../../data/services';

export const ServiceSection: React.FC = () => {
  return (
    <section
      id='service'
      className='page-padding flex flex-col gap-10 py-10 lg:gap-16 lg:py-20'
    >
      <div className='flex flex-col justify-between gap-[11px]'>
        <h2 className='text-display-sm font-semibold lg:text-display-xl lg:font-bold text-center text-neutral-25'>
          Smart IT Solutions That Grow With You
        </h2>
        <p className='font-medium text-sm lg:text-lg text-center text-neutral-400'>
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className='px-5 pb-5 pt-12 lg:pt-16 gap-5 relative rounded-2xl bg-neutral-950 border border-neutral-900 hover:border-primary-200 transition-all duration-300 group'
            >
              {/* SVG */}
              <img
                src={
                  new URL(
                    `../../assets/icons/${service.iconName}`,
                    import.meta.url
                  ).href
                }
                alt={service.title}
                className='absolute top-[-20px] lg:top-[-30px] aspect-square w-16 lg:w-20 group-hover:scale-105 transition-transform duration-300'
              />

              <div className='flex flex-col gap-1 relative'>
                <h3 className='font-bold text-md lg:text-xl leading-[30px] text-neutral-25'>
                  {service.title}
                </h3>
                <p className='font-medium text-sm lg:text-md leading-[28px] text-neutral-400'>
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
