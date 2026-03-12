import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import * as styles from './card.css';

type CardProps = {
  icon?: LucideIcon;
  title?: string;
  headerRight?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Card({ icon: Icon, title, headerRight, children, className }: CardProps) {
  return (
    <div className={`${styles.cardRoot}${className ? ` ${className}` : ''}`}>
      {(Icon || title) && (
        <div className={styles.cardHeader}>
          {Icon && <Icon size={16} className={styles.cardHeaderIcon} />}
          {title && <span className={styles.cardHeaderTitle}>{title}</span>}
          {headerRight && <span className={styles.cardHeaderRight}>{headerRight}</span>}
        </div>
      )}
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}
