'use client';

import { Children, useState, type PropsWithChildren } from 'react';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/Button/Button';
import { Icon } from '@/components/ui/Icon/Icon';
import { cn } from '@/utils/tailwindUtils';

export interface CarouselProps extends PropsWithChildren {
  className?: string;
}

export function Carousel({ className, children }: CarouselProps) {
  const t = useTranslations('components.ui.carousel');
  const [position, setPosition] = useState(0);

  const handlePrevious = () => {
    setPosition((current) => current - 1);
  };

  const handleNext = () => {
    setPosition((current) => current + 1);
  };

  return (
    <div className={cn('relative', className)}>
      <div className="mx-auto flex w-4/5 gap-20 overflow-x-visible">
        {Children.map(children, (child, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: position === i ? 1 : 0.1,
            }}
            animate={{
              x: `calc(-${position} * (100% + 5rem))`,
              opacity: position === i ? 1 : 0.2,
            }}
            transition={{
              type: 'spring',
              stiffness: 160,
              damping: 20,
            }}
            className="w-full shrink-0">
            {child}
          </motion.div>
        ))}
      </div>

      <Button
        title={t('buttons.previous')}
        className="absolute left-0 top-1/2 -translate-y-1/2"
        onClick={handlePrevious}
        isDisabled={position === 0}>
        <Icon icon="TrendingFlat" className="w-10 rotate-180 text-theme-muted" />
      </Button>

      <Button
        title={t('buttons.next')}
        className="absolute right-0 top-1/2 -translate-y-1/2"
        onClick={handleNext}
        isDisabled={position === Children.count(children) - 1}>
        <Icon icon="TrendingFlat" className="w-10 text-theme-muted" />
      </Button>
    </div>
  );
}
