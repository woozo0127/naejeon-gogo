import { useState, useEffect, type ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  overlayStyle,
  dialogBoxStyle,
  headerStyle,
  bodyStyle,
  footerStyle,
  iconStyle,
} from './dialog.css';

type DialogIconProps = {
  icon: LucideIcon;
  variant: 'danger';
};

function DialogIcon({ icon: Icon, variant }: DialogIconProps) {
  return (
    <div className={iconStyle({ variant })}>
      <Icon size={20} />
    </div>
  );
}

type DialogProps = {
  open?: boolean;
  onOverlayClick?: () => void;
  onExited?: () => void;
  header: ReactNode;
  body: ReactNode;
  footer: ReactNode;
};

export function Dialog({
  open,
  onOverlayClick,
  onExited,
  header,
  body,
  footer,
}: DialogProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) setVisible(true);
  }, [open]);

  useEffect(() => {
    if (!open || !onOverlayClick) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOverlayClick();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onOverlayClick]);

  if (!visible) return null;

  return (
    <div
      className={overlayStyle({ open })}
      onClick={onOverlayClick}
      onAnimationEnd={(e) => {
        if (e.target !== e.currentTarget) return;
        if (!open) {
          setVisible(false);
          onExited?.();
        }
      }}
    >
      <div
        className={dialogBoxStyle({ open })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={headerStyle}>{header}</div>
        <div className={bodyStyle}>{body}</div>
        <div className={footerStyle}>{footer}</div>
      </div>
    </div>
  );
}

Dialog.Icon = DialogIcon;
