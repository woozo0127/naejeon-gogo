import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Sidebar } from '#/client/layouts/sidebar';
import * as styles from '#/client/layouts/app-layout.css';

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
