import type { ReactNode } from 'react';
import * as styles from './page-header.css';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  right?: ReactNode;
};

export function PageHeader({ title, subtitle, right }: PageHeaderProps) {
  return (
    <header className={styles.headerRoot}>
      <div className={styles.left}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {right && <div className={styles.right}>{right}</div>}
    </header>
  );
}
