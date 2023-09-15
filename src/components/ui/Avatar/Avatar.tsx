import { useTranslations } from 'next-intl';

import { Image, ImageProps } from '@/components/ui/Image/Image';
import { cn } from '@/src/utils/tailwindUtils';

export interface AvatarProps {
  className?: string;
  name?: string;
  company?: string;
  alt?: ImageProps['alt'];
  src?: ImageProps['src'];
}

export function Avatar({ className, src, alt, name, company }: AvatarProps) {
  const t = useTranslations('components.ui.avatar');

  return (
    <figure className={cn('flex flex-col items-center gap-6 text-center', className)}>
      {src && (
        <div className="relative">
          <Image
            className="h-60 w-40 rounded-full p-px contrast-125 saturate-50 sepia-[.5]"
            src={src}
            alt={alt}
            width={160}
            height={240}
          />

          <span className="absolute inset-0 rounded-full shadow-[inset_0px_0px_10px_10px_rgba(255,255,255,1)]" />
        </div>
      )}

      {!!name && (
        <figcaption>
          <p className="text-xl font-medium uppercase text-theme-brand-300">{name}</p>

          {!!company && <p className="text-sm">{t('job_title', { company })}</p>}
        </figcaption>
      )}
    </figure>
  );
}
