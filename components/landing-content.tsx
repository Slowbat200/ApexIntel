'use client';

import { CardStack } from '@/components/ui/card-stack';
import { cn } from '@/utils/cn';


export function LandingContent() {
  return (
    <div className='h-[20rem] flex items-center justify-center w-full'>
      <CardStack items={Testimonials} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5 rounded-md',
        className
      )}
    >
      {children}
    </span>
  );
};


const Testimonials = [
  {
    id: 0,
    name: 'Slowbat',
    designation: 'Web Developer and creator of ApexIntel',
    content: (
      <p>
        The <Highlight>ApexIntel</Highlight> is the best application I ever made.
      </p>
    ),
  },
  {
    id: 1,
    name: 'Antandra',
    designation: 'New member',
    content: (
      <p>
        Super unbeatable good! <Highlight>The generated zebrafish</Highlight>{' '}
        is even more real than my lab&apos;s, I rotate screams, exceptionally good
        tool, <Highlight>love from China.</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: 'Baqer',
    designation: 'New Member',
    content: (
      <p>
        This is a cool website , it could help anyone find a <Highlight>fast answer</Highlight> for a
        question or make a <Highlight>fast photo</Highlight> and so much more.
      </p>
    ),
  },
];
