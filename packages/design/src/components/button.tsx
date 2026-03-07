import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import { buttonStyle, type ButtonVariants } from './button.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    icon?: LucideIcon;
    children?: ReactNode;
  };

export function Button({
  variant = 'primary',
  icon: Icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${buttonStyle({ variant })}${className ? ` ${className}` : ''}`}
      {...props}
    >
      {Icon && <Icon size={variant === 'icon' ? 18 : 16} />}
      {children}
    </button>
  );
}
