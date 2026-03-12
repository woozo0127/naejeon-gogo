import { createFileRoute, Outlet } from '@tanstack/react-router';
import * as styles from '#/client/components/app-layout.css';
import { Sidebar } from '#/client/components/sidebar';

export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className={styles.layoutRoot}>
      <Sidebar />
      <main className={styles.mainArea}>
        <Outlet />
      </main>
    </div>
  );
}
