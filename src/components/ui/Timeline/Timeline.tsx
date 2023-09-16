import { Children, PropsWithChildren, ReactNode } from 'react';

import { cn } from '@/utils/tailwindUtils';

import { Item } from './internal/Item';

export interface TimelineProps extends PropsWithChildren {
  className?: string;
  year?: number;
  message?: ReactNode;
}

export function Timeline({ className, children, year, message }: TimelineProps) {
  return (
    <div className={cn('flex flex-col gap-10', className)}>
      {!!year && (
        <span className="truncate text-9xl font-black text-theme-brand-100 md:text-center">
          {year}
        </span>
      )}

      <div
        className={cn('relative grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24', {
          'pb-12 md:pb-24': !!message,
        })}>
        {Children.map(children, (child, idx) => {
          const isEven = idx % 2 === 0;

          return (
            child && (
              <div
                className={cn('relative row-span-3 ml-12 md:col-start-2 md:ml-0', {
                  'md:row-start-2': idx === 1,
                  'md:col-start-1': isEven,
                })}>
                {child}

                <div
                  className={cn(
                    'absolute left-0 top-1/4 h-px w-10 -translate-x-12 bg-theme-muted',
                    {
                      'md:left-full md:translate-x-2': isEven,
                    },
                  )}
                />
              </div>
            )
          );
        })}

        <div className="absolute left-0 h-full w-px bg-theme-muted md:left-1/2 md:-translate-x-1/2" />
      </div>

      {!!message && <p className="italic md:mx-auto md:max-w-md md:text-center">{message}</p>}
    </div>
  );
}

Timeline.Item = Item;
