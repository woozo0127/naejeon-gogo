import { createFileRoute, Outlet } from '@tanstack/react-router';
import * as styles from '#/client/layouts/app-layout.css';

export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className={styles.layoutRoot}>
      {/* Sidebar는 Task 3에서 추가 */}
      <main className={styles.mainArea}>
        <Outlet />
      </main>
    </div>
  );
}
