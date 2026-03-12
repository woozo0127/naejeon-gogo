import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Layout } from '#/client/_archive/components/layout';

export const Route = createFileRoute('/archive')({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});
