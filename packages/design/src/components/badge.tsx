import type { ReactNode } from 'react';
import { badgeStyle, type BadgeVariants } from './badge.css';

type BadgeProps = BadgeVariants & {
  children: ReactNode;
  bgColor: string;
  textColor: string;
  icon?: ReactNode;
  className?: string;
};

export function Badge({
  size = 'sm',
  children,
  bgColor,
  textColor,
  icon,
  className,
}: BadgeProps) {
  return (
    <span
      className={`${badgeStyle({ size })}${className ? ` ${className}` : ''}`}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {icon}
      {children}
    </span>
  );
}
