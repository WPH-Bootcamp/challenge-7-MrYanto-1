import React from 'react';
import { Facebook, Instagram, Linkedin, Tiktok } from '../../data/Social';

export const Footer: React.FC = () => {
  return (
    <div className='page-padding py-6 lg:py-10'>
      <div className='p-5 lg:p-10 bg-neutral-950 border border-neutral-800 rounded-4xl flex flex-col gap-6 lg:gap-15'>
        <div className='flex flex-col-reverse gap-6 lg:flex-row lg:justify-between'>
          <h2 className='text-display-sm lg:text-display-md max-w-[281px] font-bold'>
            LET'S DISCUSS YOUR IDEA
          </h2>

          {/* LOGO SVG */}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='141'
            height='32'
            fill='none'
            viewBox='0 0 141 32'
          >
            <path
              fill='#cc4e32'
              d='M17.42 7.95 6.276 11.753V22.03L0 24.17V7.52l17.42-5.947z'
            />
            <path
              fill='#cc4e32'
              fillRule='evenodd'
              d='M8.88 13.317 26.3 7.369v16.652L8.88 29.97z'
              clipRule='evenodd'
            />
            <path
              className='fill-black dark:fill-white'
              d='m41.02 18.219-5.802-9.216h3.35l4.5 7.381h-1.92l4.502-7.381h3.307l-5.867 9.216zM40.638 24v-7.339h2.922V24zm11.673.213q-1.557 0-2.816-.704a5.64 5.64 0 0 1-1.984-1.941q-.725-1.237-.725-2.752t.725-2.71a5.25 5.25 0 0 1 1.984-1.92q1.258-.725 2.794-.725 1.58 0 2.817.726 1.258.704 1.984 1.92.725 1.195.725 2.709t-.725 2.752a5.4 5.4 0 0 1-1.984 1.941q-1.238.704-2.795.704m-.022-2.602q.79 0 1.387-.342.62-.362.939-.981.34-.64.341-1.45 0-.812-.341-1.43a2.44 2.44 0 0 0-.939-.96q-.597-.363-1.386-.363-.77 0-1.366.363a2.44 2.44 0 0 0-.939.96q-.34.618-.34 1.43 0 .81.34 1.45.341.619.94.981.596.342 1.364.342m11.72 2.602q-1.365 0-2.432-.576a4.23 4.23 0 0 1-1.643-1.6q-.597-1.024-.597-2.368v-5.973h2.816v5.91q0 .64.213 1.109.213.447.64.682t1.003.235q.874 0 1.365-.533.49-.534.49-1.494v-5.909h2.795v5.973q0 1.365-.597 2.39a4.05 4.05 0 0 1-1.643 1.6q-1.045.555-2.41.554M70.884 24V13.696h2.794V24zm2.794-5.696-1.087-.725q.192-1.9 1.109-2.987.917-1.11 2.645-1.11.747 0 1.344.257.597.235 1.088.789l-1.75 2.005a1.5 1.5 0 0 0-.575-.384 2 2 0 0 0-.747-.128q-.896 0-1.472.576-.555.555-.555 1.707M84.6 24V9.003H87.5V24zm2.133 0v-2.581h7.638V24zm13.994.213q-1.557 0-2.815-.704a5.64 5.64 0 0 1-1.984-1.941q-.726-1.237-.726-2.752t.726-2.71a5.25 5.25 0 0 1 1.983-1.92q1.26-.725 2.795-.725 1.579 0 2.816.726a5.25 5.25 0 0 1 1.984 1.92q.725 1.195.725 2.709t-.725 2.752a5.4 5.4 0 0 1-1.984 1.941q-1.237.704-2.795.704m-.021-2.602q.79 0 1.387-.342.618-.362.938-.981a3 3 0 0 0 .342-1.45q0-.812-.342-1.43a2.44 2.44 0 0 0-.938-.96q-.597-.363-1.387-.363-.768 0-1.365.363a2.44 2.44 0 0 0-.939.96q-.34.618-.341 1.43 0 .81.341 1.45.341.619.939.981.597.342 1.365.342m11.634 6.954q-1.642 0-2.901-.597-1.259-.576-2.006-1.643l1.771-1.77q.597.704 1.323 1.066.746.384 1.792.384 1.3 0 2.048-.661.768-.66.768-1.835v-2.581l.469-2.261-.448-2.262v-2.709h2.773v9.77q0 1.537-.725 2.667a4.8 4.8 0 0 1-1.963 1.792q-1.258.64-2.901.64m-.128-4.842q-1.386 0-2.496-.662a4.87 4.87 0 0 1-1.749-1.856q-.62-1.173-.619-2.624 0-1.45.619-2.602a4.76 4.76 0 0 1 1.749-1.814q1.11-.682 2.496-.682 1.152 0 2.027.448a3.5 3.5 0 0 1 1.408 1.237q.512.768.554 1.813v3.243a3.53 3.53 0 0 1-.576 1.835q-.511.789-1.408 1.237-.874.426-2.005.427m.555-2.539q.768 0 1.322-.32a2.4 2.4 0 0 0 .896-.917q.32-.599.32-1.344 0-.768-.32-1.344a2.26 2.26 0 0 0-.896-.896q-.554-.342-1.322-.342t-1.344.342q-.576.32-.896.917-.32.576-.32 1.323 0 .725.32 1.322.32.576.896.918.576.34 1.344.341m12.46 3.03q-1.556 0-2.816-.705a5.65 5.65 0 0 1-1.984-1.941q-.725-1.237-.725-2.752t.725-2.71a5.25 5.25 0 0 1 1.984-1.92q1.26-.725 2.795-.725 1.579 0 2.816.726a5.25 5.25 0 0 1 1.984 1.92q.725 1.195.725 2.709t-.725 2.752a5.4 5.4 0 0 1-1.984 1.941q-1.237.704-2.795.704m-.021-2.603q.79 0 1.387-.342.618-.362.938-.981a3 3 0 0 0 .342-1.45q0-.812-.342-1.43a2.44 2.44 0 0 0-.938-.96q-.597-.363-1.387-.363-.768 0-1.365.363a2.44 2.44 0 0 0-.939.96q-.34.618-.341 1.43 0 .81.341 1.45.342.619.939.981a2.7 2.7 0 0 0 1.365.342'
            />
          </svg>
        </div>

        <div className='border border-neutral-800' />
        <footer className='flex flex-col lg:flex-row justify-between gap-6'>
          <div className='flex flex-col gap-2 lg:flex-row lg:gap-0'>
            <a
              href='#about'
              className='text-sm font-thin lg:text-md text-neutral-25 lg:px-4 py-2'
            >
              About
            </a>
            <a
              href='#service'
              className='text-sm font-thin lg:text-md text-neutral-25 lg:px-4 py-2'
            >
              Service
            </a>
            <a
              href='#projects'
              className='text-sm font-thin lg:text-md text-neutral-25 lg:px-4 py-2'
            >
              Projects
            </a>
            <a
              href='#testimonials'
              className='text-sm font-thin lg:text-md text-neutral-25 lg:px-4 py-2'
            >
              Testimonials
            </a>
            <a
              href='#faq'
              className='text-sm font-thin lg:text-md text-neutral-25 lg:px-4 py-2'
            >
              FAQ
            </a>
          </div>
          <div className='flex gap-4 items-center'>
            <div className='w-10 h-10 border border-neutral-800 hover:border-neutral-25 rounded-full flex items-center justify-center'>
              <Facebook />
            </div>
            <div className='w-10 h-10 border border-neutral-800 hover:border-neutral-25 rounded-full flex items-center justify-center'>
              <Instagram />
            </div>
            <div className='w-10 h-10 border border-neutral-800 hover:border-neutral-25 rounded-full flex items-center justify-center'>
              <Linkedin />
            </div>
            <div className='w-10 h-10 border border-neutral-800 hover:border-neutral-25 rounded-full flex items-center justify-center'>
              <Tiktok />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
