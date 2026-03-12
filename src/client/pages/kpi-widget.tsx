import type { LucideIcon } from 'lucide-react';
import * as styles from './kpi-widget.css';

type KpiWidgetProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
};

export function KpiWidget({ icon: Icon, value, label, className }: KpiWidgetProps) {
  return (
    <div className={`${styles.widgetRoot}${className ? ` ${className}` : ''}`}>
      <Icon size={20} className={styles.iconWrapper} />
      <span className={styles.value}>{value}</span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
