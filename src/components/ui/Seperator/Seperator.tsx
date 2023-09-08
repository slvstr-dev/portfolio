import { cn } from '@/src/utils/tailwindUtils';

export interface SeperatorProps {
  className?: string;
}

export function Seperator({ className }: SeperatorProps) {
  return <div className={cn('h-px bg-theme-muted', className)} role="separator" />;
}
