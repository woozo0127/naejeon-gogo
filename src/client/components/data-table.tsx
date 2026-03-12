import type { ReactNode } from 'react';
import * as styles from './data-table.css';

type Column = {
  label: string;
  width: number | 'fill';
  align?: 'left' | 'center' | 'right';
  color?: string;
};

type DataTableProps = {
  columns: Column[];
  children: ReactNode;
};

export function DataTable({ columns, children }: DataTableProps) {
  return (
    <>
      <div className={styles.headerRow}>
        {columns.map((col) => (
          <span
            key={col.label}
            className={styles.headerCell}
            style={{
              width: col.width === 'fill' ? undefined : col.width,
              flex: col.width === 'fill' ? 1 : undefined,
              textAlign: col.align,
              color: col.color,
            }}
          >
            {col.label}
          </span>
        ))}
      </div>
      <div className={styles.tableBody}>{children}</div>
    </>
  );
}
