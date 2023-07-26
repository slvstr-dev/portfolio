import * as Icons from './internal/index';

export type IconProps = {
  icon: keyof typeof Icons;
  className?: string;
};

export default function Icon({ className, icon, ...props }: IconProps) {
  const Component = Icons[icon];

  return <Component className={`h-4 w-4 ${className}`} {...props} />;
}
